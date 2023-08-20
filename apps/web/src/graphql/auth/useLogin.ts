import { useMutation } from "@apollo/client";
import { graphql } from "~/generated/graphql";

const LOGIN_MUTATION = graphql(/* GraphQL */ `
  mutation LoginMutation($params: LoginUserInput!) {
    login(loginUserInput: $params) {
      access_token
      user {
        id
        createdAt
        profileImage
        username
      }
    }
  }
`);

export const useLogin = () => {
  const query = useMutation(LOGIN_MUTATION);

  return query;
};
