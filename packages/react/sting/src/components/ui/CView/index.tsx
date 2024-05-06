import React from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const CViewVariant = cva(
  "flex", // Default class to set display to flex
  {
    variants: {
      gap: {
        none: "c-gap-0",
        small: "c-gap-small",
        regular: "c-gap-regular",
        large: "c-gap-large",
        xlarge: "c-gap-xlarge",
        xxlarge: "c-gap-xxlarge",
      },
      direction: {
        column: "flex-col",
        row: "flex-row",
      },
      justifyContent: {
        start: "justify-start",
        center: "justify-center",
        end: "justify-end",
        between: "justify-between",
        around: "justify-around",
      },
      alignItems: {
        start: "items-start",
        center: "items-center",
        end: "items-end",
        stretch: "items-stretch",
        baseline: "items-baseline",
      },
      wrap: {
        noWrap: "flex-nowrap",
        wrap: "flex-wrap",
        wrapReverse: "flex-wrap-reverse",
      },
    },
    defaultVariants: {
      gap: "regular",
    },
  }
);

// Type props with VariantProps utility
type CFlexProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof CViewVariant>;

// Define CCol component
export const CView = React.forwardRef<HTMLDivElement, CFlexProps>(
  ({ children, className, ...props }, ref) => {
    const classes = cn(CViewVariant({ ...props }), className);
    return (
      <div ref={ref} className={classes}>
        {children}
      </div>
    );
  }
);
