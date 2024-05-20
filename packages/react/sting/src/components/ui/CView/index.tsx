import React from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const CViewVariant = cva(
  "s-flex", // Default class to set display to flex
  {
    variants: {
      gap: {
        none: "",
        small: "s-gap-small",
        regular: "s-gap-regular",
        large: "s-gap-large",
        xlarge: "s-gap-xlarge",
        xxlarge: "s-gap-xxlarge",
      },
      direction: {
        default: "s-flex-row lg:s-flex-col",
        column: "s-flex-col",
        row: "s-flex-row",
        rowLgColumn: "s-flex-row lg:s-flex-col",
        rowSmColumn: "s-flex-row sm:s-flex-col",
        rowMdColumn: "s-flex-row md:s-flex-col",
        columnLgRow: "s-flex-col lg:s-flex-row",
        columnSmRow: "s-flex-col sm:s-flex-row",
        columnMdRow: "s-flex-col md:s-flex-row",
      },
      justifyContent: {
        start: "s-justify-start",
        center: "s-justify-center",
        end: "s-justify-end",
        between: "s-justify-between",
        around: "s-justify-around",
      },
      alignItems: {
        start: "s-items-start",
        center: "s-items-center",
        end: "s-items-end",
        stretch: "s-items-stretch",
        baseline: "s-items-baseline",
      },
      wrap: {
        noWrap: "s-flex-nowrap",
        wrap: "s-flex-wrap",
        wrapReverse: "s-flex-wrap-reverse",
      },
    },
    defaultVariants: {
      gap: "regular",
      direction: "default",
    },
  }
);

// Type props with VariantProps utility
type CFlexProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof CViewVariant>;

// Define CCol component
export const CView = React.forwardRef<HTMLDivElement, CFlexProps>(
  ({ children, className, ...props }, ref) => {
    const classes = cn("s-flex", CViewVariant({ ...props }), className);
    return (
      <div ref={ref} className={classes}>
        {children}
      </div>
    );
  }
);

CView.displayName = "CView";
