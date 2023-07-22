"use client";
import { devilsCutAddress } from "@/generated";
import { Button } from "@nextui-org/button";
import { Tooltip } from "@nextui-org/tooltip";
import router from "next/router";
import { formatEther } from "viem";
import { useAccount, useBalance } from "wagmi";
import type { Address } from "wagmi";

export function BalanceButton() {
  const { data, isLoading } = useBalance({
    address: devilsCutAddress[1] as Address,
    watch: true,
  });

  return (
    !isLoading && (
      <Tooltip
        placement="bottom"
        content="Fees collected from the underground. Split up between the ghouls."
      >
        <Button color="danger" variant="bordered">
          <a
            href="https://etherscan.io/address/0xcec26ec16fb32ebe19c8cfab7189456c09fe15bb"
            target="_blank"
            rel="noopener noreferrer"
          >
            Devils Cut Ξ {data ? formatEther(data?.value).slice(0, 6) : "error"}
          </a>
        </Button>
      </Tooltip>
    )
  );
}
