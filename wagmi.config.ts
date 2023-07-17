import { defineConfig } from '@wagmi/cli'
import { etherscan, react } from '@wagmi/cli/plugins'
import { erc20ABI } from 'wagmi'
import { mainnet } from 'wagmi/chains'

export default defineConfig({
  out: 'src/generated.ts',
  contracts: [
    {
      name: 'erc20',
      abi: erc20ABI,
    },
  ],
  plugins: [
    etherscan({
      apiKey: 'process.env.ETHERSCAN_API_KEY!',
      chainId: mainnet.id,
      contracts: [
        {
          name: 'DevilsCut',
          address: {
            [mainnet.id]: '0xCEC26Ec16fB32eBe19C8cfab7189456C09FE15bB',
          },
        },
      ],
    }),
    react(),
  ],
})
