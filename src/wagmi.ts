import '@rainbow-me/rainbowkit/styles.css';
import {
    getDefaultWallets,
    RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import {
    mainnet,
    polygon,
    optimism,
    arbitrum,
    zora,
} from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';
export const { chains, publicClient } = configureChains(
    [mainnet],
    [
        publicProvider()
    ]
);

const { connectors } = getDefaultWallets({
    appName: 'DC',
    projectId: '666',
    chains
});

export const wagmiConfig = createConfig({
    autoConnect: true,
    connectors,
    publicClient
})
