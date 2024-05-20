import * as React from "react";

import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import { IconMap } from "../Icons";

const LayoutsVariants = cva(" ", {
  variants: {
    variant: {
      layout01: "btn btn-primary",
      // 'primary-outline': 'btn-primary btn-outline',
      // 'primary-light': 'btn-secondary',
      // secondary: 'btn-secondary',
      layout02: "btn btn-neutral",
      // 'neutral-outline': 'btn-neutral btn-outline',
      // 'neutral-borderless': 'btn-neutral-borderless',
      //  link: 'btn-link',
      // text: 'btn-borderless',
      layout03: "btn btn-danger",
      // 'danger-outline': 'btn-danger btn-outline',
      // 'danger-borderless': 'btn-danger-borderless',
    },
    styleType: {
      default: "",
      outline: "btn-outline",
      text: "btn-text",
      icon: "btn-icon",
      "icon-borderless": "btn-icon-borderless",
    },

    size: {
      small: "btn-small",
      regular: "btn",
      large: "btn-large",
    },

    iconPosition: {
      start: "",
      end: "",
      only: "btn-icon",
    },

    fullWidth: {
      true: "btn-full-width",
    },
    disabled: {
      true: "btn-disabled",
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
    // variant: 'primary',
    styleType: "default",
    fullWidth: false,
    iconPosition: "start",
    disabled: false,
  },
});

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof LayoutsVariants> {
  children: React.ReactNode;
  // iconOnly: boolean;
  disabled?: boolean;
  icon?: string;
  href?: string;
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      children,
      href,
      styleType,
      variant,
      disabled,
      size,
      asChild = false,
      iconPosition,
      fullWidth: fullWidth,
      icon,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";

    // interface IconMap {
    //   [key: string]: React.ReactNode;
    // }

    // const iconMap: IconMap = {
    //   none: '',
    //   close: <XIcon />,
    //   bell: <BellIcon />,
    //   arrowLeftIcon: <ArrowLeftIcon />,
    //   arrowRightIcon: <ArrowRightIcon />,
    // };

    const selectedIcon = icon ? IconMap[icon] : null;

    return (
      <Comp
        className={cn(
          LayoutsVariants({
            styleType,
            variant,
            size,
            className,
            iconPosition,
            fullWidth: fullWidth,
            disabled,
          })
        )}
        ref={ref}
        {...props}
      >
        {/* {asChild && children} */}

        {styleType === "icon" && selectedIcon}
        {styleType === "icon-borderless" && selectedIcon}

        {styleType !== "icon-borderless" && (
          <span
            className={
              styleType === "icon" ? "hidden" : "flex gap-2 items-center"
            }
          >
            {iconPosition === "start" && styleType !== "icon" && selectedIcon}

            {styleType !== "icon" && children}

            {iconPosition === "end" && styleType !== "icon" && selectedIcon}
          </span>
        )}
      </Comp>
    );
  }
);

Button.displayName = "Button";

export { Button, LayoutsVariants };
