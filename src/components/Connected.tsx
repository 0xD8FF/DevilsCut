"use client";
import { useAccount } from "wagmi";
import { useRouter } from "next/navigation";

export function Connected({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  const account = useAccount({
    onConnect({ address, connector, isReconnected }) {
      isReconnected === false && router.replace(`/address/${address}`);
    },
  });
  return <>{children}</>;
}
