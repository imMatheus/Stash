import { useQuery } from "@apollo/client";
import { graphql } from "~/generated/graphql";

const ME_QUERY = graphql(/* GraphQL */ `
  query MeQuery {
    me {
      id
      createdAt
      profileImage
      username
    }
  }
`);

export const useMe = () => {
  const query = useQuery(ME_QUERY);

  return query;
};
