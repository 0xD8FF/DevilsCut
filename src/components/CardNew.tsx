import { CardSelectionContext } from "@/context/CardSelectionContext";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Spinner } from "@nextui-org/spinner";
import { Badge } from "@nextui-org/badge";
import React, { useContext, useEffect } from "react";
import { CheckIcon } from "./CheckIcon";
import Link from "next/link";
import { Button } from "@nextui-org/button";

interface CardItemProps {
  tokenId: string;
  key?: number;
  owner?: string;
}

const CardSingleSSR: React.FC<CardItemProps> = ({ tokenId, key, owner }) => {
  return (
    <Card radius="lg" shadow="sm" key={key} isPressable isFooterBlurred>
      <Link href={`/address/${owner}`}>
        <Badge
          isOneChar
          size="lg"
          isInvisible={true}
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
          <CardFooter className="text-small justify-center before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large top-2 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
            <p className=" text-default-900 ">
              {owner?.trim().slice(0, 6) + "..." + owner?.trim().slice(-4)}
            </p>
          </CardFooter>
        </Badge>
      </Link>
    </Card>
  );
};

export default CardSingleSSR;
