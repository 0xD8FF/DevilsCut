// export const runtime = "edge";
// export const unstable_allowDynamic: [
//   "/node_modules/@wagmi/**",
//   "/node_modules/wagmi/**",
//   "/node_modules/@rainbow-me/rainbowkit/**",
//   "/node_modules/@walletconnect/**"
// ];

import { Connected } from "@/components/Connected";
import { useRouter, useSelectedLayoutSegment } from "next/navigation";
import { useAccount } from "wagmi";

export default function Layout(props: { children: React.ReactNode }) {
  // const router = useRouter();
  // const { address } = useAccount();

  // if (address) router.push(`/dc/${address}`);

  // const addressSegment = useSelectedLayoutSegment("children");

  // console.log("Layout", address, addressSegment);

  return props.children;
}
