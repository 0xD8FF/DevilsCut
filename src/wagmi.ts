import '@rainbow-me/rainbowkit/styles.css';
import {
    connectorsForWallets,
} from '@rainbow-me/rainbowkit';
import {
    injectedWallet,
    rainbowWallet,
    metaMaskWallet,
    coinbaseWallet,
} from '@rainbow-me/rainbowkit/wallets';
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

const projectId = "DC-DEVILS-CUT"

const connectors = connectorsForWallets([
    {
        groupName: 'Suggested',
        wallets: [
            injectedWallet({ chains }),
            rainbowWallet({ projectId, chains }),
            metaMaskWallet({ projectId, chains }),
            coinbaseWallet({ chains, appName: 'My RainbowKit App' }),

        ],
    },
]);


export const wagmiConfig = createConfig({
    autoConnect: true,
    connectors,
    publicClient
})
