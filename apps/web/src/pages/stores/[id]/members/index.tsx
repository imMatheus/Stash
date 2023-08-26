import React from "react";
import { StoreWrapper } from "~/ui/pages/stores/StoreWrapper";
import { NextPageWithLayout } from "~/pages/_app";

const MembersPage: NextPageWithLayout = () => {
  return <div className="bg-red-500">hej members</div>;
};

MembersPage.getLayout = function getLayout(page) {
  return <StoreWrapper>{page}</StoreWrapper>;
};

export default MembersPage;
