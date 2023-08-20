import { useMutation } from "@apollo/client";
import { graphql } from "~/generated/graphql";

const SIGN_UP_MUTATION = graphql(/* GraphQL */ `
  mutation SignUpMutation($params: LoginUserInput!) {
    signup(loginUserInput: $params) {
      id
      profileImage
      createdAt
      updatedAt
      username
    }
  }
`);

export const useSignUp = () => {
  const mutation = useMutation(SIGN_UP_MUTATION);

  return mutation;
};
