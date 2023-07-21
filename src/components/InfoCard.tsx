"use client";
import { Card, CardBody } from "@nextui-org/card";
import { ItemsContext, ItemsDispatchContext } from "@/context/items-context";
import { useContext, useEffect, useState } from "react";
import {
  useDevilsCutReleasable,
  useDevilsCutRelease,
  usePrepareDevilsCutRelease,
} from "@/generated";
import { Button } from "@nextui-org/react";
import { toHex } from "viem";

const initialState = [{ tokenId: 0, redeemable: 0, selected: false }];

export default function InfoCard() {
  const tokenId = "341";
  // const [items, setItems] = useState(initialState);
  const items = useContext(ItemsContext);
  // const dispatch = useContext(ItemsDispatchContext);
  const sumValue = items.reduce(
    (acc, item) => acc + Number(item.redeemable),
    0
  );
  const { data, error } = useDevilsCutReleasable({
    args: [BigInt(tokenId), BigInt(tokenId)],
  });

  const [value, setValue] = useState<bigint>();
  useEffect(() => {
    data && setValue(data);
  }, [data]);

  // useEffect(() => {
  //   if (!data) return;
  //   dispatch({
  //     type: "add",
  //     payload: { tokenId, redeemable: formatEther(data), selected: false },
  //   });
  // }, [data, dispatch, tokenId]);

  const { config } = usePrepareDevilsCutRelease({
    args: items.map((item) => item.tokenId),
  });

  const {
    isLoading,
    isSuccess,
    error: releaseError,
    write,
  } = useDevilsCutRelease(config);
  return (
    <Card className="fixed justify-content-center bottom-1 z-20">
      <CardBody>
        <p>{`You'll receive:`}</p>

        <p key="sum">{sumValue ? sumValue : "0"}</p>
      </CardBody>
      <Button onPress={() => write()} isLoading={isLoading} color="secondary">
        Release
      </Button>
    </Card>
  );
}
