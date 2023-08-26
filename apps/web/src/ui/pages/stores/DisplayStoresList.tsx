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
    <div className="grid grid-cols-4 gap-4 py-4">
      {stores.map((store) => (
        <Link
          href={`/stores/${store.id}`}
          key={store.id}
          className="cursor-pointer rounded-md bg-secondary p-4 transition-opacity hover:opacity-95"
        >
          <h2 className="mb-3 text-xl font-semibold italic">{store.name}</h2>
          <p className="">{store.productsCount} products</p>
        </Link>
      ))}
      {/* <pre>{JSON.stringify(stores, null, 2)}</pre> */}
    </div>
  );
};
