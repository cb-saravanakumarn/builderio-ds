import * as React from "react";

import { VariantProps, cva } from "class-variance-authority";
import { cn } from "./../../../lib/utils";
import { Slot } from "@radix-ui/react-slot";

const ButtonVariants = cva(" ", {
  variants: {
    variant: {
      primary: "s-btn s-btn-primary",
      neutral: "s-btn s-btn-neutral",
      danger: "s-btn s-btn-danger",
      warning: "s-btn s-btn-warning",
    },
    styleType: {
      default: "",
      outline: "s-btn-outline",
      text: "s-btn-text",
      icon: "s-btn-icon",
      "icon-borderless": "s-btn-icon-borderless",
    },

    size: {
      small: "s-btn-small",
      regular: "",
      large: "s-btn-large",
    },

    fullWidth: {
      true: "s-btn-full-width",
    },
    disabled: {
      true: "s-btn-disabled",
    },
    loading: {
      true: "s-btn-disabled",
    },
  },
  compoundVariants: [
    {
      // variant: "primary",
      // size: "lg",
      // className: "uppercase",
      // **or** if you're a React.js user, `className` may feel more consistent:
      // className: "uppercase"
    },
    // {
    //     variant: "primary",
    //     disabled
    // }
  ],
  defaultVariants: {
    size: "regular",
    variant: "primary",
    styleType: "default",
    fullWidth: false,
    disabled: false,
  },
});

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof ButtonVariants> {
  children: React.ReactNode;
  // iconOnly: boolean;
  disabled?: boolean;
  loading?: boolean;
  // icon?: string;
  href?: string;
  asChild?: boolean;
}

const loadingIcon = (
  <svg
    className="animate-spin -ml-1 mr-3 h-5 w-5 "
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
  >
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      stroke-width="4"
    ></circle>
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    ></path>
  </svg>
);

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      children,
      href = false,
      loading = false,
      styleType,
      variant,
      asChild,
      disabled,
      size,
      fullWidth: fullWidth,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";

    const selectedVariant = disabled ? "neutral" : variant;

    return (
      <Comp
        className={cn(
          ButtonVariants({
            styleType,
            variant: selectedVariant,
            size,
            className,
            fullWidth: fullWidth,
            disabled,
            loading,
          })
        )}
        disabled={disabled || loading}
        ref={ref}
        {...props}
      >
        <span className={"flex gap-2 items-center"}>
          {/* todo add link css text color styles  */}
          {children} {loading && loadingIcon}
        </span>
      </Comp>
    );
  }
);

Button.displayName = "Button";

export { Button, ButtonVariants };
