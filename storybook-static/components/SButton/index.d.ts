import { VariantProps } from 'class-variance-authority';
import * as React from "react";
declare const SButtonVariants: (props?: ({
    variant?: "primary" | "neutral" | "danger" | "warning" | "ghost" | "success" | null | undefined;
    styleType?: "text" | "default" | "outline" | "icon" | "icon-borderless" | null | undefined;
    size?: "small" | "regular" | "large" | null | undefined;
    fullWidth?: boolean | null | undefined;
    rounded?: "none" | "sm" | "md" | "lg" | "full" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export interface SButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof SButtonVariants> {
    /**
     * Whether to render the button as a child component (Radix UI Slot)
     */
    asChild?: boolean;
    /**
     * Whether the button is in a loading state
     */
    loading?: boolean;
    /**
     * Optional icon to display in the button
     */
    icon?: React.ReactNode;
    /**
     * Position of the icon relative to the button text
     */
    iconPosition?: "left" | "right";
    /**
     * Optional additional classname for the button
     */
    className?: string;
}
/**
 * SButton is a versatile button component that supports multiple variants, sizes, and states.
 * It's built on top of Radix UI's Slot component for composition flexibility.
 */
declare const SButton: React.ForwardRefExoticComponent<SButtonProps & React.RefAttributes<HTMLButtonElement>>;
export { SButton, SButtonVariants };
