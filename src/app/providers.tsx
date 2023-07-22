"use client";
import { NextUIProvider } from "@nextui-org/react";
import { WagmiConfig } from "wagmi";
import * as React from "react";

import { chains, wagmiConfig } from "../wagmi";
import { CardSelectionProvider } from "@/context/CardSelectionContext";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { Connected } from "@/components/Connected";

export function Providers({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);
  return (
    <NextUIProvider>
      <WagmiConfig config={wagmiConfig}>
        <RainbowKitProvider chains={chains}>
          <CardSelectionProvider>
            <Connected>{mounted && children}</Connected>
          </CardSelectionProvider>
        </RainbowKitProvider>
      </WagmiConfig>
    </NextUIProvider>
  );
}
