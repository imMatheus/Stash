import React from "react";
import { StoreSidebar } from "./StoreSidebar";

interface StoreWrapperProps {
  children: React.ReactNode;
}

export const StoreWrapper: React.FC<StoreWrapperProps> = ({ children }) => {
  return (
    <div className="flex h-[calc(100vh_-_64px)] overflow-hidden">
      <StoreSidebar />

      <main className="flex-1 overflow-y-auto p-6 md:p-8">{children}</main>
    </div>
  );
};
