import React from "react";
import { cn } from "@/lib/utils"; // Utility for merging class names
import { Primitive } from "@radix-ui/react-primitive";

interface ResponsiveProps {
  default: string | number;
  sm?: string | number;
  md?: string | number;
  lg?: string | number;
  xl?: string | number;
}

interface GridProps {
  children: React.ReactNode;
  cols?: ResponsiveProps | string | number;
  gap?: ResponsiveProps | string; // Accept token names (e.g., 'regular', 'medium') directly or object
  className?: string;
}

export const Grid: React.FC<GridProps> = ({
  children,
  cols,
  gap,
  className,
  ...props
}) => {
  const isColsResponsive = typeof cols === "object";
  const isGapResponsive = typeof gap === "object";

  return (
    <Primitive.div
      className={cn(
        "s-grid", // Base grid class
        isColsResponsive
          ? cn(
              cols.default && `s-grid-cols-${cols.default}`, // Default grid columns
              cols.sm && `sm:s-grid-cols-${cols.sm}`, // Small screen grid columns
              cols.md && `md:s-grid-cols-${cols.md}`, // Medium screen grid columns
              cols.lg && `lg:s-grid-cols-${cols.lg}`, // Large screen grid columns
              cols.xl && `xl:s-grid-cols-${cols.xl}` // Extra-large screen grid columns
            )
          : `s-grid-cols-${cols}`, // Single value for default columns
        isGapResponsive
          ? cn(
              gap.default && `s-gap-${gap.default}`, // Default gap using token
              gap.sm && `sm:s-gap-${gap.sm}`, // Small screen gaps using token
              gap.md && `md:s-gap-${gap.md}`, // Medium screen gaps using token
              gap.lg && `lg:s-gap-${gap.lg}`, // Large screen gaps using token
              gap.xl && `xl:s-gap-${gap.xl}` // Extra-large screen gaps using token
            )
          : `s-gap-${gap}`, // Single value for default gap
        className // Additional custom class names
      )}
      {...props}
    >
      {children}
    </Primitive.div>
  );
};
