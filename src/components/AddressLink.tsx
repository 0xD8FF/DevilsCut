"use client";

import { useAccount } from "wagmi";
import NextLink from "next/link";
import { Link } from "@nextui-org/link";

export default function AddressLink() {
  const { address } = useAccount();

  return (
    address && (
      <Link
        href={`/address/${address}`}
        size="lg"
        color="foreground"
        as={NextLink}
      >
        My Ghouls
      </Link>
    )
  );
}
