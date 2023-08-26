import React from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "~/utils";

const spinnerVariants = cva("animate-spin rounded-full", {
  variants: {
    variant: {
      default: "border-border border-t-foreground",
    },
    size: {
      sm: "h-4 w-4 border-2",
      md: "h-7 w-7 border-4",
      lg: "h-10 w-10 border-4",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "md",
  },
});

interface SpinnerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof spinnerVariants> {}

export const Spinner: React.FC<SpinnerProps> = ({
  className,
  variant,
  size,
  ...props
}) => {
  return (
    <div
      className={cn(spinnerVariants({ variant, size, className }))}
      {...props}
    />
  );
};
