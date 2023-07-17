"use client";
import { NextUIProvider } from "@nextui-org/react";
import { ConnectKitProvider } from "connectkit";
import { WagmiConfig } from "wagmi";
import * as React from "react";

import { config } from "../wagmi";

export function Providers({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);
  return (
    <NextUIProvider>
      <WagmiConfig config={config}>
        <ConnectKitProvider>{mounted && children}</ConnectKitProvider>
      </WagmiConfig>
    </NextUIProvider>
  );
}
