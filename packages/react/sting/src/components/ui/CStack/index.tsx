import React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils"; // Make sure to adjust the import path as needed

const stackVariants = cva("s-flex", {
  variants: {
    direction: {
      row: "s-flex-row",
      col: "s-flex-col",
    },
    gap: {
      none: "s-gap-0",
      small: "s-gap-1",
      regular: "s-gap-2",
      large: "s-gap-4",
      xlarge: "s-gap-6",
      xxlarge: "s-gap-8",
    },
  },
  defaultVariants: {},
});

interface BreakpointProps {
  sm?: {
    direction?: "row" | "col";
    gap?: "none" | "small" | "regular" | "large";
  };
  md?: {
    direction?: "row" | "col";
    gap?: "none" | "small" | "regular" | "large";
  };
  lg?: {
    direction?: "row" | "col";
    gap?: "none" | "small" | "regular" | "large";
  };
  xl?: {
    direction?: "row" | "col";
    gap?: "none" | "small" | "regular" | "large";
  };
}

interface StackProps extends VariantProps<typeof stackVariants> {
  children: React.ReactNode;
  breakpoints?: BreakpointProps;
}

const getResponsiveClasses = (breakpoints?: BreakpointProps) => {
  if (!breakpoints) return "";

  return cn(
    // breakpoints.sm?.direction && `sm:s-flex-${breakpoints.sm.direction}`,
    // breakpoints.sm?.gap && `sm:s-gap-${breakpoints.sm.gap}`,
    breakpoints.md?.direction && `md:s-flex-${breakpoints.md.direction}`,
    breakpoints.md?.gap && `md:s-gap-${breakpoints.md.gap}`,
    breakpoints.lg?.direction && `lg:s-flex-${breakpoints.lg.direction}`,
    breakpoints.lg?.gap && `lg:s-gap-${breakpoints.lg.gap}`,
    breakpoints.xl?.direction && `xl:s-flex-${breakpoints.xl.direction}`,
    breakpoints.xl?.gap && `xl:s-gap-${breakpoints.xl.gap}`
  );
};

const CStack: React.FC<StackProps> = ({
  children,
  direction,
  gap,
  breakpoints,
}) => {
  // Base classes from CVA
  const baseClasses = stackVariants({ direction, gap });

  // Responsive classes
  const responsiveClasses = getResponsiveClasses(breakpoints);

  console.log(responsiveClasses, "breakpoints.md?.gap");

  return <div className={cn(baseClasses, responsiveClasses)}>{children}</div>;
};

export { CStack };
