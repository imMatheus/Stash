import { useMutation } from "@apollo/client";
import { useToast } from "~/ui/components/Toast";
import { graphql } from "~/generated/graphql";
import { useMe } from "./useMe";
import { useRouter } from "next/router";
import { useCallback } from "react";
import { setAuthToken } from "./utils";

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
  const [mutation, state] = useMutation(LOGIN_MUTATION);
  const { toast } = useToast();
  const { refetch } = useMe();
  const router = useRouter();

  const signup: typeof mutation = useCallback(
    (options) => {
      return mutation({
        ...options,
        onCompleted: (data) => {
          const token = data.login?.access_token;

          if (token) {
            setAuthToken(token);
            toast({
              title: "Success! You are now logged in",
              description: "Friday, February 10, 2023 at 5:57 PM",
            });
            refetch();
            router.replace("/");
          }
        },
        onError: (err) => {
          toast({
            title: "Could not log in",
            description: err.message,
          });
        },
      });
    },
    [mutation, toast, refetch, router]
  );

  return [signup, state] as const;
};
