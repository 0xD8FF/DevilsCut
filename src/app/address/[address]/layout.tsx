export const runtime = "edge";
import InfoCard from "@/components/InfoCard";
import React from "react";

export default function Layout({
  children,
  cards,
}: {
  children: React.ReactNode;
  cards: React.ReactNode;
}) {
  return (
    <>
      <div className="flex justify-center">
        <div className="grid max-w-[900px] grid-cols-2 md:grid-cols-4 gap-2">
          <InfoCard />
          {cards}
          {children}
        </div>
      </div>
    </>
  );
}
