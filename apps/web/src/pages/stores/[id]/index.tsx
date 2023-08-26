import React from "react";
import { useStoreById } from "~/graphql/stores/useStoreById";
import { useRouter } from "next/router";
import { StoreWrapper } from "~/ui/pages/stores/StoreWrapper";
import { NextPageWithLayout } from "~/pages/_app";

const StorePage: NextPageWithLayout = () => {
  const router = useRouter();
  const id = router.query.id;
  const { data, loading } = useStoreById({
    variables: { id: id as string },
  });
  const store = data?.store;

  console.log({ id, data });

  if (loading) return <div>loading...</div>;

  if (!store) return <div>404 could not find store</div>;

  return <pre className="text-xl">{JSON.stringify(data, null, 2)}</pre>;
};

StorePage.getLayout = function getLayout(page) {
  return <StoreWrapper>{page}</StoreWrapper>;
};

export default StorePage;
