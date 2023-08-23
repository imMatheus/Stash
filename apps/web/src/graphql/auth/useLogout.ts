import { useMutation } from "@apollo/client";
import { graphql } from "~/generated/graphql";
import { useMe } from "./useMe";
import { removeAuthToken } from "./utils";
import { useRouter } from "next/router";
import { useToast } from "~/ui/components/Toast";

export const useLogout = () => {
  const router = useRouter();
  const { toast } = useToast();

  async function logout() {
    removeAuthToken();
    router.replace("/sign-up");
    toast({
      title: "You are now logged out",
      description: "Please login account to use the platform",
    });
  }

  return logout;
};
