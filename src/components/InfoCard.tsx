"use client";
import { Card, CardBody } from "@nextui-org/card";
import { CardSelectionContext } from "@/context/CardSelectionContext";
import React, { useContext, useEffect } from "react";
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

  console.log("InfoCard", contracts);

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

  console.log("contract data: ", data);

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

  return (
    <div className="fixed inset-x-0 bottom-0 flex justify-center px-4 z-20">
      {" "}
      <Card shadow="md" radius="sm" className="w-4/12">
        <CardBody>
          <p>{`You'll receive:`}</p>
          <p key="sum">{totalValue.toFixed(8)} Ether</p>{" "}
        </CardBody>
        <div className="flex">
          <div className="flex flex-col gap-2">
            <Switch
              isSelected={isSelected}
              onValueChange={handleSelectAll}
              color="success"
            >
              Select All
            </Switch>
          </div>
          <Button
            isDisabled={!write}
            onPress={() => (write ? write() : null)}
            isLoading={isWriteLoading}
            color="secondary"
            radius="full"
            className="justify-center mx-auto"
          >
            Release
          </Button>
        </div>
      </Card>
    </div>
  );
};
export default InfoCard;
