"use client";
import { NextResponse } from "next/server";
import { useAccount } from "wagmi";
import { useRouter } from "next/navigation";

export function Connected({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const { address, isConnected, isDisconnected } = useAccount();

  if (!isConnected) return null;
  return <>{children}</>;
}
