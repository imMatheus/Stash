import { useQuery } from "@apollo/client";
import { graphql } from "~/generated/graphql";

const MY_STORES_QUERY = graphql(/* GraphQL */ `
  query MyStores {
    stores {
      id
      name
    }
  }
`);

export const useMyStores = () => {
  const query = useQuery(MY_STORES_QUERY);

  return query;
};
