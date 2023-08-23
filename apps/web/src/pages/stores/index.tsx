import React from "react";
import type { NextPage } from "next";
import { Button } from "~/components/Button";
import { useMyStores } from "~/graphql/stores/useMyStores";
import { Spinner } from "~/components/Spinner";

const StoresPage: NextPage = () => {
  const { data: stores, loading } = useMyStores();

  return (
    <div className="p-10">
      <header className="border-b p-4">
        <Button>Create new store</Button>
      </header>
      <div className="grid">
        <Spinner />
      </div>
    </div>
  );
};

export default StoresPage;
