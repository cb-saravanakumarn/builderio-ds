import * as React from "react";
import { cva, VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva("s-badge", {
  variants: {
    variant: {
      primary: "s-badge-primary",
      neutral: "s-badge-neutral",
      red: "s-badge-red",
      yellow: "s-badge-yellow",
      green: "s-badge-green",
      info: "s-badge-info",
      brand: "s-badge-brand",
    },
    size: { regular: "", large: "s-badge-large" },
    mode: { light: "s-badge-light", dark: "s-badge-dark" },
  },
  defaultVariants: {
    variant: "primary",
    mode: "light",
    size: "regular",
  },
});

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  children?: React.ReactNode;
}

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant, children, size, mode, ...props }) => {
    return (
      <div
        className={cn(badgeVariants({ variant, size, mode }), className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Badge.displayName = "Badge";

export { Badge, badgeVariants };
