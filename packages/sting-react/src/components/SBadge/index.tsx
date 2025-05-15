import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { ComponentPropsWithout, RemovedProps } from "@/helpers/component-props";
import clsx from "clsx";
import { Badge, badgeVariants } from "./constants";

export interface BadgeProps
  extends ComponentPropsWithout<"div", RemovedProps>,
    Badge {
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
  /**
   * The mode of the badge, can be light or dark
   */
  mode?: "light" | "dark";
  /**
   * The shape of the badge's corners. Determines the badge's border radius.
   * Can be small or full.
   */
  rounded?: "small" | "full";
  /**
   * Add data-test id's for using it in testcases
   */
  dataTestId?: string;
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
      dataTestId: dataTestId,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "div";

    return (
      <Comp ref={ref} data-testid={dataTestId} {...props}>
        <span
          className={badgeVariants({ variant, size, rounded, mode, className })}
        >
          {icon && (
            <span
              className={clsx(
                "size-3.5",
                iconPosition === "right" && "s-order-1"
              )}
              role="presentation"
              data-testid={dataTestId ? `${dataTestId}-icon` : undefined}
            >
              {icon}
            </span>
          )}
          {children}
        </span>
      </Comp>
    );
  }
);

SBadge.displayName = "SBadge";

export { SBadge, badgeVariants };
