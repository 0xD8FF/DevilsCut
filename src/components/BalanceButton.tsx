"use client";
import { devilsCutAddress } from "@/generated";
import { Button } from "@nextui-org/react";
import { formatEther } from "viem";
import { useBalance } from "wagmi";
import type { Address } from "wagmi";

export function BalanceButton() {
  const { data, isLoading } = useBalance({
    address: devilsCutAddress[1] as Address,
    watch: true,
  });

  return (
    !isLoading && (
      <Button color="danger" variant="bordered">
        <a
          href="https://etherscan.io/address/0xcec26ec16fb32ebe19c8cfab7189456c09fe15bb"
          target="_blank"
          rel="noopener noreferrer"
        >
          Pool: {data ? formatEther(data?.value) : "error"}
        </a>
      </Button>
    )
  );
}
