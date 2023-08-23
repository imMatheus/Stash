import React from "react";
import { useMyStores } from "~/graphql/stores/useMyStores";
import { Spinner } from "~/ui/components/Spinner";

interface DisplayStoresListProps {}

export const DisplayStoresList: React.FC<DisplayStoresListProps> = ({}) => {
  const { data, loading } = useMyStores();
  const stores = data?.stores;

  if (loading) return <Spinner />;

  if (!stores || stores.length === 0)
    return <div>Seems like you do not have any stores, create one</div>;

  return (
    <div className="grid">
      <pre>{JSON.stringify(stores, null, 2)}</pre>
    </div>
  );
};
