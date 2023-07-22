export const runtime = "edge";
import React from "react";

export default function Layout({
  children,
  cards,
}: {
  children: React.ReactNode;
  cards: React.ReactNode;
}) {
  return cards;
}
