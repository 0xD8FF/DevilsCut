"use client";
import { Card, CardBody, CardHeader, CardFooter } from "@nextui-org/card";
import { CardSelectionContext } from "@/context/CardSelectionContext";
import React, { useContext, useEffect } from "react";
import { Image } from "@nextui-org/image";
import NextImage from "next/image";
import {
  devilsCutABI,
  devilsCutConfig,
  useDevilsCutReleasable,
  useDevilsCutRelease,
  usePrepareDevilsCutRelease,
} from "@/generated";
import { Button } from "@nextui-org/button";
import { Switch } from "@nextui-org/switch";
import { Address, formatEther, parseEther, stringify, toHex } from "viem";
import {
  paginatedIndexesConfig,
  useAccount,
  useContractInfiniteReads,
  useContractReads,
} from "wagmi";
import { Tooltip } from "@nextui-org/tooltip";

const InfoCard: React.FC = () => {
  const context = useContext(CardSelectionContext);

  if (!context) {
    throw new Error("InfoCard must be used within a CardSelectionProvider");
  }

  const { state, dispatch } = context;

  const [isSelected, setIsSelected] = React.useState(false);

  const totalValue = state.selectedCards.reduce(
    (sum, card) => (card.isSelected ? sum + parseFloat(card.value) : sum),
    0
  );

  const contracts = state.selectedCards
    .filter((card) => card.value === "pending") // Only include selected cards
    .map((card) => ({
      abi: devilsCutABI,
      address: devilsCutConfig.address[1], // Use the correct index for the address
      functionName: "releasable",
      args: [BigInt(card.tokenId)],
    }));

  const { data, error, isLoading, isSuccess } = useContractReads({
    contracts,
  });

  const uniqueArray = (arr: any[]) => Array.from(new Set(arr));

  function updateCardValues() {
    data?.forEach((result, index) => {
      if (result.status === "success") {
        const tokenId = contracts[index].args[0].toString();
        dispatch({
          type: "updateValue",
          tokenId: tokenId,
          value: formatEther(result.result as bigint),
        });
      }
    });
  }

  function selectAll() {
    dispatch({ type: "selectAll" });
  }

  function deselectAll() {
    dispatch({ type: "unselectAll" });
  }

  function handleSelectAll() {
    if (isSelected) {
      deselectAll();
      setIsSelected(false);
    } else {
      selectAll();
      setIsSelected(true);
    }
  }

  useEffect(() => {
    if (data) {
      updateCardValues();
    }
  }, [data]);

  const { address, isConnected } = useAccount();

  const { config, error: prepareWriteError } = usePrepareDevilsCutRelease({
    args: [
      uniqueArray(
        state.selectedCards
          .filter((card) => card.isSelected === true)
          .map((card) => BigInt(card.tokenId))
      ),
      address as Address,
    ],
  });

  const {
    isLoading: isWriteLoading,
    isSuccess: isWriteSuccess,
    error: releaseError,
    write,
  } = useDevilsCutRelease(config);

  const isDisabled = !write || totalValue === 0;

  return (
    <Card
      shadow="md"
      radius="sm"
      isFooterBlurred
      className="h-[200px] w-full col-span-8 sm:col-span-4"
    >
      <CardHeader className="absolute z-10 top-1 flex-col items-start ">
        <div className="bg-slate-950 opacity-90">
          <p className="text-small text-white/60 uppercase font-bold">
            Devils Cut Rewards
          </p>
          <h4 className="text-white/90 font-medium text-2xl">
            {totalValue.toFixed(8)} Ether
          </h4>
        </div>
      </CardHeader>
      <Image
        as={NextImage}
        removeWrapper
        isBlurred
        alt="Relaxing app background"
        className="z-0 w-full h-full object-cover"
        src="/skelelogo_bw_medium_distress.png"
        width={900}
        height={900}
      />
      <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
        <div className="flex flex-grow gap-2 items-center justify-evenly">
          <div className="flex flex-col">
            <p className="text-tiny text-white/60">Select your Ghouls to</p>
            <p className="text-tiny text-white/60">
              Withdraw from the Devils Cut Pool
            </p>
            <Switch
              isSelected={isSelected}
              onValueChange={handleSelectAll}
              color="success"
            >
              Select All
            </Switch>
          </div>
          <Tooltip
            content="To withdraw you must make a selection and be connected as the owner of these tokens"
            placement="bottom"
            shouldFlip
            color="primary"
            shadow="lg"
            isDisabled={!isDisabled}
          >
            <div>
              <Button
                isDisabled={isDisabled}
                onPress={() => (write ? write() : null)}
                isLoading={isWriteLoading}
                color="secondary"
                radius="full"
                disableRipple
                className="overflow-visible rounded-full hover:-translate-y-1 px-12 shadow-xl bg-background/30 after:content-[''] after:absolute after:rounded-full after:inset-0 after:bg-background/40 after:z-[-1] after:transition after:!duration-500 hover:after:scale-150 hover:after:opacity-0 hover:bg-success"
              >
                Withdraw
              </Button>
            </div>
          </Tooltip>
        </div>
      </CardFooter>
    </Card>
  );
};
export default InfoCard;
