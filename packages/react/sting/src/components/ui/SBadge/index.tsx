import * as React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";

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
    rounded: { small: "s-radius-small", full: "s-radius-full" },
  },
  defaultVariants: {
    variant: "primary",
    mode: "light",
    size: "regular",
    rounded: "full",
  },
});

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  /**
   * Badge content
   */
  children?: React.ReactNode;
  /**
   * Whether to render the badge as a child component (Radix UI Slot)
   */
  asChild?: boolean;
  /**
   * Optional icon to display in the badge
   */
  icon?: React.ReactNode;
  /**
   * Position of the icon relative to the badge text
   */
  iconPosition?: "left" | "right";
}

/**
 * SBadge is a versatile badge component that supports multiple variants, sizes, and modes.
 * It's built on top of Radix UI's Slot component for composition flexibility.
 */
const SBadge = React.forwardRef<HTMLDivElement, BadgeProps>(
  (
    {
      className,
      variant,
      children,
      size,
      rounded,
      mode,
      asChild = false,
      icon,
      iconPosition = "left",
      ...props
    },
    ref
  ) => {
    // Use Radix UI Slot if asChild is true, otherwise use a div element
    const Comp = asChild ? Slot : "div";

    return (
      <Comp
        ref={ref}
        className={cn(
          badgeVariants({ variant, size, rounded, mode }),
          className
        )}
        {...props}
      >
        <span className="s-span">
          {icon && iconPosition === "left" && (
            <span className="s-badge-icon" aria-hidden="true">
              {icon}
            </span>
          )}
          {children}
          {icon && iconPosition === "right" && (
            <span className="s-badge-icon" aria-hidden="true">
              {icon}
            </span>
          )}
        </span>
      </Comp>
    );
  }
);

SBadge.displayName = "SBadge";

export { SBadge, badgeVariants };
