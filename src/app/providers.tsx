"use client";
import { NextUIProvider } from "@nextui-org/react";
import { ConnectKitProvider } from "connectkit";
import { WagmiConfig, useAccount } from "wagmi";
import * as React from "react";

import { config } from "../wagmi";
import { ItemsProvider } from "@/context/items-context";
import { useRouter } from "next/navigation";

export function Providers({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = React.useState(false);
  const router = useRouter();
  React.useEffect(() => setMounted(true), []);
  return (
    <NextUIProvider>
      <WagmiConfig config={config}>
        <ConnectKitProvider
          theme="soft"
          mode="dark"
          options={{
            embedGoogleFonts: true,
          }}
        >
          <ItemsProvider>{mounted && children}</ItemsProvider>
        </ConnectKitProvider>
      </WagmiConfig>
    </NextUIProvider>
  );
}
