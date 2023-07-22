import '@rainbow-me/rainbowkit/styles.css';
import {
    connectorsForWallets,
} from '@rainbow-me/rainbowkit';
import {
    injectedWallet,
    rainbowWallet,
    metaMaskWallet,
    coinbaseWallet,
    ledgerWallet,
    safeWallet,
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
            metaMaskWallet({ projectId, chains }),
            coinbaseWallet({ chains, appName: 'My RainbowKit App' }),
            ledgerWallet({
                projectId,
                chains,
            }),
            safeWallet({
                chains,
            }),
            injectedWallet({ chains }),

        ],
    },
]);


export const wagmiConfig = createConfig({
    autoConnect: true,
    connectors,
    publicClient
})
