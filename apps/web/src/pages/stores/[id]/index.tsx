import React from "react";
import type { NextPage } from "next";
import { useStoreById } from "~/graphql/stores/useStoreById";
import { useRouter } from "next/router";
import { Camera } from "react-feather";

const StorePage: NextPage = () => {
  const router = useRouter();
  const id = router.query.id;
  const { data, loading } = useStoreById({
    variables: { id: id as string },
  });
  const store = data?.store;

  console.log({ id, data });

  if (loading) return <div>loading...</div>;

  if (!store) return <div>404 could not find store</div>;

  return (
    <div>
      <main className="flex h-[calc(100vh_-_64px)] overflow-hidden">
        <aside className="w-48 flex-shrink-0 bg-secondary p-3">
          <h3 className="mb-3 font-semibold">{store.name}</h3>
          <div className="space-y-2">
            <div className="flex items-center">
              <Camera className="h-4 w-4" />
            </div>
          </div>
        </aside>
        <pre className="text-xl">{JSON.stringify(data, null, 2)}</pre>
      </main>
    </div>
  );
};

export default StorePage;
