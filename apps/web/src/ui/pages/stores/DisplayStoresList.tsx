import Link from "next/link";
import React from "react";
import { useMyStores } from "~/graphql/stores/useMyStores";
import { Spinner } from "~/ui/components/Spinner";

interface DisplayStoresListProps {}

export const DisplayStoresList: React.FC<DisplayStoresListProps> = ({}) => {
  const { data, loading } = useMyStores();
  const stores = data?.myStores;

  if (loading) return <Spinner />;

  if (!stores || stores.length === 0)
    return <div>Seems like you do not have any stores, create one</div>;

  return (
    <div className="grid gap-4 grid-cols-4 py-4">
      {stores.map((store) => (
        <Link
          href={`/stores/${store.id}`}
          key={store.id}
          className="p-4 rounded-md cursor-pointer hover:opacity-95 transition-opacity bg-secondary"
        >
          <h2 className="italic text-xl font-semibold mb-3">{store.name}</h2>
          <p className="">{store.productsCount} products</p>
        </Link>
      ))}
      {/* <pre>{JSON.stringify(stores, null, 2)}</pre> */}
    </div>
  );
};
