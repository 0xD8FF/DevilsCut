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
