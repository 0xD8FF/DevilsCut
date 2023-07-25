import { fetchGql } from "@/lib/data";
import { PageProps } from "../../.next/types/app/layout";
import CardSingleSSR from "@/components/CardNew";
import { Address } from "wagmi";
import { createPublicClient, http } from "viem";
import { mainnet } from "viem/chains";

export default async function Home({ params }: PageProps) {
  type TokenNode = {
    token: {
      tokenId: string;
      tokenUrl: string;
      owner: string;
    };
  };

  type TokensData = {
    tokens: {
      nodes: TokenNode[];
    };
  };

  const query = `
  query TopHoldersQuery {
    aggregateStat {
      ownersByCount(
        where: {collectionAddresses: "0x97f66251C3DCaD07c373cd46d6287959fe6698CF"}
        sort: {sortKey: COUNT, sortDirection: DESC}
        pagination: {limit: 12}
      ) {
        nodes {
          owner
          count
        }
      }
    }
  }`;

  const singleHolderQuery = `
  query SingleToken($ownerAddresses: [String!] = "") {
    tokens(
      where: {collectionAddresses: "0x97f66251C3DCaD07c373cd46d6287959fe6698CF", ownerAddresses: $ownerAddresses}
      sort: {sortKey: NONE, sortDirection: DESC}
      pagination: {limit: 1}
    ) {
      nodes {
        token {
          tokenId
          tokenUrl
          owner
        }
      }
      pageInfo {
        hasNextPage
        endCursor
        limit
      }
    }
  }`;
  const {
    aggregateStat: {
      ownersByCount: { nodes },
    },
  } = await fetchGql(query);

  const publicClient = createPublicClient({
    chain: mainnet,
    transport: http(),
  });

  const displayData: TokensData[] = await Promise.all(
    nodes.map(async (data: { owner: string }) => {
      const tokensData = await fetchGql(singleHolderQuery, {
        ownerAddresses: [data.owner],
      });

      for (let tokenNode of tokensData.tokens.nodes) {
        const ensName = await publicClient.getEnsName({
          address: tokenNode.token.owner as Address,
        });
        if (ensName) {
          tokenNode.token.owner = ensName;
        }
      }

      return tokensData;
    })
  );
  console.log(displayData);

  return (
    <div className="flex flex-col justify-center items-center px-4 gap-2 md:px-22 sm:px-16 lg:px-28 pt-10">
      <h4 className="text-white/90 font-medium text-4xl">Top Collectors </h4>
      <div className=" grid sm:grid-cols-4 grid-cols-3 gap-2 pt-12 max-w-screen-lg">
        {displayData.flatMap((item) =>
          item.tokens.nodes.map((token, index) => (
            <CardSingleSSR
              owner={token.token.owner}
              tokenId={token.token.tokenId}
              key={index}
            />
          ))
        )}
      </div>
    </div>
  );
}
