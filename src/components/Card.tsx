"use client";

import { ItemsContext, ItemsDispatchContext } from "@/context/items-context";
import { useDevilsCutReleasable } from "@/generated";
import { Card, CardBody, CardFooter } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Spinner } from "@nextui-org/spinner";
import { use, useContext, useEffect, useState } from "react";
import { formatEther } from "viem";

export default function CardItem({
  tokenId,
  key,
}: {
  tokenId: string;
  key: string;
}) {
  console.log("Component is rendering"); // This will log on each render
  const context = useContext(ItemsContext);
  const dispatch = useContext(ItemsDispatchContext);

  const cardHandler = () => {
    console.log("card handler");
    dispatch({
      type: "add",
      payload: { tokenId, redeemable: formatEther(value), selected: true },
    });
  };

  const value: bigint = BigInt(100);

  return (
    <Card
      shadow="sm"
      key={key}
      isPressable
      onPress={cardHandler}
      isFooterBlurred
      radius="lg"
      className="border-none"
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
            {formatEther(value).slice(0, 8)} Ether
          </p>
        )}
        #{tokenId}
      </CardFooter>
    </Card>
  );
}
