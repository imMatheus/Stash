import { useMutation } from "@apollo/client";
import { useCallback } from "react";
import { graphql } from "~/generated/graphql";
import { setAuthToken } from "./utils";
import { useToast } from "~/components/Toast";
import { useMe } from "./useMe";
import { useRouter } from "next/router";

const SIGN_UP_MUTATION = graphql(/* GraphQL */ `
  mutation SignUpMutation($params: LoginUserInput!) {
    signup(signUpInput: $params) {
      access_token
      user {
        id
        profileImage
        username
        createdAt
      }
    }
  }
`);

export const useSignUp = () => {
  const [mutation, state] = useMutation(SIGN_UP_MUTATION);
  const { toast } = useToast();
  const { refetch } = useMe();
  const router = useRouter();

  const signup: typeof mutation = useCallback(
    (options) => {
      return mutation({
        ...options,
        onCompleted: (data) => {
          const token = data.signup?.access_token;

          if (token) {
            setAuthToken(token);
            toast({
              title: "Success! You are now signed up",
              description: "Friday, February 10, 2023 at 5:57 PM",
            });
            refetch();
            router.replace("/");
          }
        },
        onError: (err) => {
          toast({
            title: "Could not sign up",
            description: err.message,
          });
        },
      });
    },
    [mutation, toast, refetch, router]
  );

  return [signup, state] as const;
};
