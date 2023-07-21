
import 'server-only'

export async function getData(address?: string, collection?: string) {

  const graphqlQuery = `
        query MyQuery {
          tokens(
            where: {collectionAddresses: "${collection}", ownerAddresses: "${address}"}
            pagination: {limit: 20}
          ) {
            nodes {
              token {
                tokenId
                collectionName
              }
            }
            pageInfo {
              hasNextPage
              endCursor
            }
          }
        }`;
  const res = await fetch("https://api.zora.co/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: graphqlQuery,
    }),
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const body = await res.json();
  return body?.data?.tokens?.nodes;
}
