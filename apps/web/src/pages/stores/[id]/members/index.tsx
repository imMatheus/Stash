import React from "react";
import { StoreWrapper } from "~/ui/pages/stores/StoreWrapper";
import { NextPageWithLayout } from "~/pages/_app";
import { useStoreById } from "~/graphql/stores/useStoreById";
import { useRouter } from "next/router";
import { Button } from "~/ui/components/Button";
import { MembersTable } from "~/ui/pages/stores/members/MembersTable";

const MembersPage: NextPageWithLayout = () => {
  const router = useRouter();
  const id = router.query.id;
  const { data, loading } = useStoreById({
    variables: { id: id as string },
  });
  const store = data?.store;

  if (loading) return "loading...";
  if (!store) return "Could not find store";

  return (
    <div className="">
      <div className="mb-4 flex justify-between">
        <h3 className="text-2xl font-medium">Members</h3>
        <Button>Add members</Button>
      </div>
      <MembersTable members={store.members} />
    </div>
  );
};

MembersPage.getLayout = function getLayout(page) {
  return <StoreWrapper>{page}</StoreWrapper>;
};

export default MembersPage;
