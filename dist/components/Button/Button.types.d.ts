import { ReactNode, MouseEvent } from "react";
export type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
export type ButtonSize = "small" | "medium" | "large";
export type ButtonType = "button" | "submit" | "reset";
export interface ButtonProps {
    /**
     * Button content - children take precedence over text prop
     */
    children?: ReactNode;
    /**
     * Text content for the button - useful for Builder.io text input
     * If both children and text are provided, children will be used
     */
    text?: string;
    /**
     * Visual style variant of the button
     * @default 'primary'
     */
    variant?: ButtonVariant;
    /**
     * Size of the button
     * @default 'medium'
     */
    size?: ButtonSize;
    /**
     * Whether the button is disabled
     * @default false
     */
    disabled?: boolean;
    /**
     * Whether the button is in loading state
     * @default false
     */
    loading?: boolean;
    /**
     * Click handler function
     */
    onClick?: (event: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
    /**
     * Button type attribute
     * @default 'button'
     */
    type?: ButtonType;
    /**
     * Additional CSS classes
     */
    className?: string;
    /**
     * If provided, renders the button as an anchor tag
     */
    href?: string;
    /**
     * Target for anchor links
     */
    target?: "_blank" | "_self" | "_parent" | "_top";
    /**
     * Rel attribute for anchor links
     */
    rel?: string;
    /**
     * Custom aria-label for accessibility
     */
    ariaLabel?: string;
    /**
     * Whether the button should take full width
     * @default false
     */
    fullWidth?: boolean;
    /**
     * Custom icon to display before text (ReactNode for flexibility)
     */
    startIcon?: ReactNode;
    /**
     * Custom icon to display after text (ReactNode for flexibility)
     */
    endIcon?: ReactNode;
}
export interface BuilderInputConfig {
    name: string;
    type: string;
    defaultValue?: any;
    enum?: string[];
    helperText?: string;
}
