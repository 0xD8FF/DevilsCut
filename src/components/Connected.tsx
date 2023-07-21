"use client";
import { NextResponse } from "next/server";
import { useAccount } from "wagmi";
import { useRouter } from "next/navigation";

export function Connected({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const { address, isConnected, isDisconnected } = useAccount();

  console.log("Connected", address, isConnected, isDisconnected);

  if (!isConnected) return null;
  console.log("i shouldnt see this");
  return <>{children}</>;
}
