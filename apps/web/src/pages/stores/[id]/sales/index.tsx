import React from "react";
import { StoreWrapper } from "~/ui/pages/stores/StoreWrapper";
import { NextPageWithLayout } from "~/pages/_app";

const SalesPage: NextPageWithLayout = () => {
  return <div className="bg-red-500">hej sales</div>;
};

SalesPage.getLayout = function getLayout(page) {
  return <StoreWrapper>{page}</StoreWrapper>;
};

export default SalesPage;
