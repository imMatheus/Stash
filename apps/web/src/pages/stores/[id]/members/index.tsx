import React from "react";
import { StoreWrapper } from "~/ui/pages/stores/StoreWrapper";
import { NextPageWithLayout } from "~/pages/_app";
import { useStoreById } from "~/graphql/stores/useStoreById";
import { useRouter } from "next/router";
import { Button } from "~/ui/components/Button";

const MembersPage: NextPageWithLayout = () => {
  const router = useRouter();
  const id = router.query.id;
  const { data, loading } = useStoreById({
    variables: { id: id as string },
  });
  const store = data?.store;

  if (loading) return "loading...";
  if (!store) return "Could not find store";

  const f = [
    ...store.members,
    ...store.members,
    ...store.members,
    ...store.members,
    ...store.members,
    ...store.members,
    ...store.members,
    ...store.members,
    ...store.members,
    ...store.members,
  ];
  return (
    <div className="">
      <div className="mb-4 flex justify-between">
        <h3 className="text-2xl font-medium">Members</h3>
        <Button>Add members</Button>
      </div>
      <div className="w-full rounded-lg border shadow-sm">
        <table className="w-full">
          <thead className="border-b">
            <th className="p-4 text-start">Name</th>
            <th className="p-4 text-start">Producter</th>
            <th className="p-4 text-start">Role</th>
          </thead>
          <tbody>
            {f.map((member) => (
              <tr key={member.id} className="odd:bg-gray-100">
                <td className="p-4">abc</td>
                <td className="p-4">abc 2</td>
                <td className="p-4">abc</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

MembersPage.getLayout = function getLayout(page) {
  return <StoreWrapper>{page}</StoreWrapper>;
};

export default MembersPage;
