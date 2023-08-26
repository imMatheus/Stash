import { useQuery } from "@apollo/client";
import { graphql } from "~/generated/graphql";

const MY_STORES_QUERY = graphql(/* GraphQL */ `
  query MyStores {
    myStores {
      id
      name
      productsCount
    }
  }
`);

export const useMyStores = () => {
  const query = useQuery(MY_STORES_QUERY);

  return query;
};
