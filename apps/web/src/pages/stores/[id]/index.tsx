import React from "react";
import type { NextPage } from "next";
import { useStoreById } from "~/graphql/stores/useStoreById";
import { useRouter } from "next/router";

const StorePage: NextPage = () => {
  const router = useRouter();
  const id = router.query.id;
  const { data } = useStoreById({ variables: { id: id as string } });

  console.log({ id, data });

  return (
    <div>
      <pre className="text-xl">{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default StorePage;
