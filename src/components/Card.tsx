"use client";
import { CardSelectionContext } from "@/context/CardSelectionContext";
import { Card, CardBody, CardFooter } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Spinner } from "@nextui-org/spinner";
import { Badge } from "@nextui-org/badge";
import React, { useContext, useEffect } from "react";
import { CheckIcon } from "./CheckIcon";

interface CardItemProps {
  tokenId: string;
  key: string;
}

const CardItem: React.FC<CardItemProps> = ({ tokenId, key }) => {
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

  return (
    <Card
      radius="lg"
      shadow="sm"
      key={key}
      isPressable
      onPress={handlePress}
      isFooterBlurred
    >
      <Badge
        isOneChar
        size="lg"
        isInvisible={!isSelected}
        content={<CheckIcon />}
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
        <CardFooter className="text-small justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large top-2 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
          {tokenId && (
            <p className="text-default-900">
              <b>Reward: </b>
              {item?.value === "pending" ? (
                <Spinner />
              ) : (
                item?.value.slice(0, 8) + " Ether"
              )}
            </p>
          )}
          #{tokenId}
        </CardFooter>
      </Badge>
    </Card>
  );
};

export default CardItem;
