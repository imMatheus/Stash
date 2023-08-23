import React from "react";

interface SpinnerProps {}

export const Spinner: React.FC<SpinnerProps> = ({}) => {
  return (
    <div className="w-7 h-7 border-4 border-border rounded-full border-t-foreground animate-spin"></div>
  );
};
