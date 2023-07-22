import CardItem from "@/components/Card";
import InfoCard from "@/components/InfoCard";
import { getData } from "@/lib/data";
import { ConnectButton } from "@rainbow-me/rainbowkit";

interface ContentPageProps {
  params: {
    address: string;
  };
}

export default async function ContentPage({ params }: ContentPageProps) {
  const tokens = await getData(
    params.address,
    "0x97f66251C3DCaD07c373cd46d6287959fe6698CF"
  );

  return tokens ? (
    <>
      {tokens.map((item: { token: { tokenId: string } }, index: string) => (
        <CardItem tokenId={item.token.tokenId} key={index} />
      ))}
      {/* <InfoCard /> */}
    </>
  ) : (
    <ConnectButton />
  );
}
