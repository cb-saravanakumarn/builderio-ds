"use client";

import React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

// Define your label variants using cva
const labelVariants = cva(
  " text-base capitalize flex gap-2 items-center w-full",
  {
    variants: {
      weight: {
        light: "font-light",
        normal: "font-normal",
        regular: "font-regular",
        semibold: "font-semibold",
        bold: "font-bold",
      },
    },
    defaultVariants: {
      weight: "semibold",
    },
  }
  // Define any additional variants here if needed
);

type LabelProps = {
  children: React.ReactNode;
  className?: string;
} & VariantProps<typeof labelVariants>;

export const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ children, weight, className, ...props }, ref) => {
    return (
      <label
        ref={ref}
        className={cn(labelVariants({ weight }), className)}
        {...props}
      >
        {children}
      </label>
    );
  }
);

Label.displayName = "Label";
