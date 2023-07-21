import CardItem from "@/components/Card";
import InfoCard from "@/components/InfoCard";
import { getData } from "@/lib/data";
import { Divider } from "@nextui-org/divider";

interface ContentPageProps {
  params: {
    address: string;
  };
}

export default async function ContentPage({ params }: ContentPageProps) {
  console.log("@connected/page.tsx");
  const tokens = await getData(
    params.address,
    "0x97f66251C3DCaD07c373cd46d6287959fe6698CF"
  );

  return tokens ? (
    <>
      <div className="px-2 gap-2 grid grid-cols-2 sm:px-8 sm:grid-cols-4">
        {tokens.map((item: { token: { tokenId: string } }, index: string) => (
          <CardItem tokenId={item.token.tokenId} key={index} />
        ))}
      </div>
      <InfoCard />
    </>
  ) : (
    <div>baz</div>
  );
}
