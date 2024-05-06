import * as React from "react";
import { cva, VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva("badge", {
  variants: {
    variant: {
      primary: "badge-primary",
      neutral: "badge-neutral",
      red: "badge-red",
      yellow: "badge-yellow",
      green: "badge-green",
      info: "badge-info",
      brand: "badge-brand",
    },
    size: { regular: "", large: "badge-large" },
    mode: { light: "badge-light", dark: "badge-dark" },
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
