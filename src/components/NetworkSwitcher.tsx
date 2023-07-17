"use client";

import { Button, ButtonGroup } from "@nextui-org/react";
import { useNetwork, useSwitchNetwork } from "wagmi";

export function NetworkSwitcher() {
  const { chain } = useNetwork();
  const { chains, error, isLoading, pendingChainId, switchNetwork } =
    useSwitchNetwork();

  return (
    <div>
      <div>
        Connected to {chain?.name ?? chain?.id}
        {chain?.unsupported && " (unsupported)"}
      </div>
      <br />
      {switchNetwork && (
        <ButtonGroup>
          Switch to:{" "}
          {chains.map((x) =>
            x.id === chain?.id ? null : (
              <Button
                key={x.id}
                color="primary"
                onPress={() => switchNetwork(x.id)}
              >
                {x.name}
                {isLoading && x.id === pendingChainId && " (switching)"}
              </Button>
            )
          )}
        </ButtonGroup>
      )}

      <div>{error?.message}</div>
    </div>
  );
}
