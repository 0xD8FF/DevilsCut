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
        <div className="grid max-w-[900px] grid-cols-12 gap-2">
          <div className="col-span-12 justify-center flex">
            <InfoCard />
          </div>
          {cards}
          {children}
        </div>
      </div>
    </>
  );
}
