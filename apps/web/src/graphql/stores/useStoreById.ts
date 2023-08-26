import { QueryHookOptions, useQuery } from "@apollo/client";
import { graphql } from "~/generated/graphql";
import {
  StoreByIdQuery,
  StoreByIdQueryVariables,
} from "~/generated/graphql/graphql";

const STORE_BY_ID_QUERY = graphql(/* GraphQL */ `
  query StoreById($id: String!) {
    store(id: $id) {
      id
      name
      productsCount
      createdAt
      members {
        id
        userId
        user {
          id
          profileImage
          username
        }
      }
    }
  }
`);

export const useStoreById = (
  options: QueryHookOptions<StoreByIdQuery, StoreByIdQueryVariables>
) => {
  const query = useQuery(STORE_BY_ID_QUERY, options);

  return query;
};
