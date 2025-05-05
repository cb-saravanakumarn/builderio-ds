import { VariantProps } from 'class-variance-authority';
import * as React from "react";
declare const badgeVariants: (props?: ({
    variant?: "primary" | "neutral" | "red" | "yellow" | "green" | "info" | "brand" | null | undefined;
    size?: "regular" | "large" | null | undefined;
    mode?: "light" | "dark" | null | undefined;
    rounded?: "small" | "full" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {
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
declare const SBadge: React.ForwardRefExoticComponent<BadgeProps & React.RefAttributes<HTMLDivElement>>;
export { SBadge, badgeVariants };
