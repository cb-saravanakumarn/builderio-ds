import React from "react";
import { cva, VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

export const cardVariants = cva("card", {
  variants: {
    depth: {
      flat: "flat",
      raised: "raised",
      regular: "regular",
    },
    padding: {
      large: "padding-large",
      regular: "padding-regular",
    },
    background: {
      transparent: "background-transparent",
      white: "background-white",
    },
  },
  defaultVariants: {
    depth: "regular",
    padding: "regular",
    background: "white",
  },
});

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  children?: React.ReactNode;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ depth, padding, background, children, className }) => {
    return (
      <div className="card-component">
        <div
          className={cn(
            cardVariants({ depth, padding, background }),
            className
          )}
        >
          {children}
        </div>
      </div>
    );
  }
);
