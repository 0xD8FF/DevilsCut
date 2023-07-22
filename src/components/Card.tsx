"use client";
import { CardSelectionContext } from "@/context/CardSelectionContext";
import { Card, CardBody, CardFooter } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Spinner } from "@nextui-org/spinner";
import { Badge } from "@nextui-org/badge";
import React, { useContext, useEffect } from "react";
import { CheckIcon } from "./CheckIcon";
import { useAccount } from "wagmi";

interface CardItemProps {
  tokenId: string;
  key: string;
  owner?: string;
}

const CardItem: React.FC<CardItemProps> = ({ tokenId, key, owner }) => {
  const context = useContext(CardSelectionContext);

  if (!context) {
    throw new Error("CardItem must be used within a CardSelectionProvider");
  }

  const { state, dispatch } = context;

  const isSelected = state.selectedCards.some(
    (card) => card.isSelected === true && card.tokenId === tokenId
  );

  useEffect(() => {
    dispatch({ type: "addUnselected", tokenId, value: "pending" }); // replace with actual value
  }, []); // The empty array makes this run once after the initial render

  const item = state.selectedCards.find((card) => card.tokenId === tokenId);

  function handlePress() {
    if (isSelected) {
      dispatch({ type: "unselect", tokenId });
    } else {
      dispatch({ type: "select", tokenId }); // replace with actual value
    }
  }

  const conditionalStyle = isSelected
    ? "absolute bg-green-400/90 top-0 border-b-1 border-green-500/50 z-10 justify-center rounded-b-none rounded-t-lg"
    : "absolute bg-white/30 top-0 border-b-1 border-zinc-100/50 z-10 justify-center rounded-b-none rounded-t-lg";

  return (
    <Card
      radius="lg"
      shadow="sm"
      key={key}
      isPressable
      onPress={owner ? undefined : handlePress}
      isFooterBlurred
    >
      <Badge
        isOneChar
        size="lg"
        isInvisible={owner ? true : !isSelected}
        content={<CheckIcon size={50} height={50} width={50} />}
        color="success"
        placement="top-left"
      >
        <CardBody className="overflow-visible p-0">
          <Image
            radius="lg"
            width="100%"
            alt={tokenId}
            className="object-cover"
            src={`https://cdn.0xffff.rip/file/ghouls/${tokenId}.png`}
          />
        </CardBody>
        <CardFooter className={conditionalStyle}>
          {!owner ? (
            <p className="text-sm text-black/70  font-bold">
              <b>Reward: </b>
              {item?.value === "pending" ? (
                <Spinner />
              ) : (
                item?.value.slice(0, 8) + " Ether"
              )}
            </p>
          ) : (
            <b>{owner}</b>
          )}
          #{tokenId}
        </CardFooter>
      </Badge>
    </Card>
  );
};

export default CardItem;
