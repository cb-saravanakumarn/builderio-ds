import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import React from "react";

const GapVariants = cva("s-flex s-flex-col", {
  variants: {
    gap: {
      none: "s-gap-0",
      small: "s-gap-small",
      regular: "s-gap-regular",
      large: "s-gap-large",
      xlarge: "s-gap-xlarge",
      xxlarge: "s-gap-xxlarge",
    },
  },
  defaultVariants: {
    gap: "regular",
  },
});

type GapProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof GapVariants> & {
    gap?: "none" | "small" | "regular" | "large" | "xlarge" | "xxlarge";
    children: React.ReactNode;
  };

const CGap = React.forwardRef<HTMLDivElement, GapProps>(
  ({ children, className, gap, ...props }, ref) => {
    return (
      <div
        className={cn(GapVariants({ gap }), gap, className)}
        {...props}
        ref={ref}
      >
        {children}
      </div>
    );
  }
);

CGap.displayName = "CGap";

export { CGap };
