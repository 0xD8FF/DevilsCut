export const runtime = "edge";
import { Connected } from "@/components/Connected";
import { useRouter } from "next/navigation";
import React from "react";
import { useAccount } from "wagmi";

export default function Layout({
  children,
  cards,
}: {
  children: React.ReactNode;
  cards: React.ReactNode;
}) {
  console.log("Layout is rendering"); // This will log on each render

  return cards;
}
