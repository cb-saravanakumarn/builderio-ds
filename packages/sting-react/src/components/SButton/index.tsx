import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { ComponentPropsWithout, RemovedProps } from "@/helpers/component-props";
import { ButtonVariants, buttonVariants } from "./constants";

export interface SButtonProps
  extends ComponentPropsWithout<"button", RemovedProps>,
    ButtonVariants {
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
  /**
   * The visual style of the button. Determines the button's appearance.
   */
  variant?: ButtonVariants["variant"];
  size?: ButtonVariants["size"];
  /**
   * The style type of the button. Determines the button's visual style.
   */
  styleType?: ButtonVariants["styleType"];
  /**
   * Whether the button should take up the full width of its container
   */
  fullWidth?: boolean;
  /**
   * The shape of the button's corners. Determines the button's border radius.
   */
  rounded?: ButtonVariants["rounded"];
  /**
   * Whether the button is disabled
   */
  disabled?: boolean;
}

/**
 * Loading spinner component used within the button
 */
const LoadingSpinner = () => (
  <svg
    className="animate-spin h-5 w-5"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
    ></circle>
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    ></path>
  </svg>
);

/**
 * SButton is a versatile button component that supports multiple variants, sizes, and states.
 * It's built on top of Radix UI's Slot component for composition flexibility.
 */
const SButton = React.forwardRef<HTMLButtonElement, SButtonProps>(
  (
    {
      className,
      children,
      variant,
      styleType,
      size,
      fullWidth,
      rounded,
      asChild = false,
      disabled,
      loading = false,
      icon,
      iconPosition = "left",
      type = "button",
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";

    const isDisabled = disabled || loading;

    const variantClass = isDisabled ? "neutral" : variant;

    return (
      <Comp
        ref={ref}
        type={type}
        disabled={isDisabled}
        className={buttonVariants({
          variant: variantClass,
          styleType,
          size,
          fullWidth,
          rounded,
          disabled: isDisabled,
          className,
        })}
        aria-disabled={isDisabled}
        data-state={loading ? "loading" : undefined}
        {...props}
      >
        <span className="span">
          {loading ? (
            <>
              <LoadingSpinner />
              {children}
            </>
          ) : (
            <>
              {icon && iconPosition === "left" && (
                <span className="button-icon" aria-hidden="true">
                  {icon}
                </span>
              )}
              {children}
              {icon && iconPosition === "right" && (
                <span className="button-icon" aria-hidden="true">
                  {icon}
                </span>
              )}
            </>
          )}
        </span>
      </Comp>
    );
  }
);

SButton.displayName = "SButton";

export { SButton, buttonVariants };
