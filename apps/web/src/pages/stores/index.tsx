import React from "react";
import type { NextPage } from "next";
import { Button } from "~/ui/components/Button";
import { DisplayStoresList, CreateStoreModal } from "~/ui/pages/stores";

const StoresPage: NextPage = () => {
  return (
    <div className="p-10">
      <header className="border-b p-4">
        <CreateStoreModal>
          <Button>Create new store</Button>
        </CreateStoreModal>
      </header>
      <DisplayStoresList />
    </div>
  );
};

export default StoresPage;
