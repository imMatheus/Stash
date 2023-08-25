import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useCallback } from "react";
import { graphql } from "~/generated/graphql";
import { useToast } from "~/ui/components/Toast";

const CREATE_STORE_MUTATION = graphql(/* GraphQL */ `
  mutation CreateStoreMutation($params: CreateStoreInput!) {
    createStore(createStoreInput: $params) {
      id
      name
    }
  }
`);

export const useCreateStore = () => {
  const [mutation, state] = useMutation(CREATE_STORE_MUTATION);
  const { toast } = useToast();
  const router = useRouter();

  const createStore: typeof mutation = useCallback(
    (options) => {
      return mutation({
        ...options,
        onCompleted: (data) => {
          const store = data?.createStore;

          if (store) {
            router.push(`/stores/${data.createStore.id}`);
            toast({
              title: "Success! Created store",
              description: "Friday, February 10, 2023 at 5:57 PM",
            });
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
    [mutation, toast]
  );

  return [createStore, state] as const;
};
