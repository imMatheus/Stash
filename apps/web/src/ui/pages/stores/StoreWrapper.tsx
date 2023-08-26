import React from "react";
import { StoreSidebar } from "./StoreSidebar";

interface StoreWrapperProps {
  children: React.ReactNode;
}

export const StoreWrapper: React.FC<StoreWrapperProps> = ({ children }) => {
  return (
    <div className="flex h-[calc(100vh_-_64px)] overflow-hidden">
      <StoreSidebar />

      <main>{children}</main>
    </div>
  );
};
