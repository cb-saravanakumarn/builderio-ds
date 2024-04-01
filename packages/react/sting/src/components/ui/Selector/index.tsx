"use client";
import React, { useEffect } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import { XIcon } from "./../Icons";
import * as RadixToggle from "@radix-ui/react-toggle";

import { cn } from "@/lib/utils";

const SelectorVariants = cva(" ", {
  variants: {
    variant: {
      default: "selector",
    },
    size: {
      default: "",
      small: "selector-small",
      large: "selector-large",
    },
    action: {
      true: "selector-action",
    },
    quantity: {
      true: "",
    },
    quantityWithAction: {
      true: "selector-action",
    },
    disabled: {
      true: "selector-disabled",
    },
    selected: { true: "selector-selected" },
    // quantity: {
    //   true: '',
    // },
    // quantityWithAction: {
    //   true: '',
    // },
  },
});
// interface QuantityProps {
//   quantity: number;
//   quantityWithAction?: boolean;
// }

export interface SelectorProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof SelectorVariants> {
  asChild?: boolean;
  children: React.ReactNode;
  selectorValue?: boolean;
  disabled?: boolean;
  quantityValue?: number;
  onActionClick: (value?: any) => void;
  onActionIconClick: (value?: any) => void;
}

const Selector = React.forwardRef<HTMLButtonElement, SelectorProps>(
  (
    {
      className,
      children,
      size,
      variant,
      action,
      disabled = false,
      quantity,
      quantityWithAction,
      quantityValue,
      selectorValue,
      onActionClick,
      onActionIconClick,
      asChild = false,

      ...props
    },
    ref
  ) => {
    const [showIcon, setShowIcon] = React.useState(false);
    const [selectedAction, setSelectedAction] = React.useState(false);

    useEffect(() => {
      selectorValue != undefined && setSelectedAction(selectorValue);
    }, [selectorValue]);

    const Comp = asChild ? Slot : "button";

    const handleActionClick = (e: any) => {
      if (!disabled) {
        e.stopPropagation();

        setSelectedAction(!selectedAction);

        if (onActionClick) onActionClick(selectedAction);
      }
    };

    const handleOnActionIconClick = () => {
      if (!disabled) {
        onActionIconClick();
      }
    };

    return (
      <Comp
        className={cn(
          selectedAction && "selector-selected",
          SelectorVariants({
            size,
            variant,
            action,
            disabled,
            quantity,
            quantityWithAction,
            className,
          })
        )}
        ref={ref}

        // onClick={!disabled ? onToggleSelect : undefined}
      >
        <span onClick={handleActionClick}>
          <RadixToggle.Root
            pressed={selectedAction}
            disabled={disabled}
            onPressedChange={setSelectedAction}
            {...props}
          >
            <div>{children}</div>
            {quantity && !quantityWithAction && (
              <span className="quantity">
                {quantityValue && quantityValue > 99 ? "99+" : quantityValue}
              </span>
            )}
          </RadixToggle.Root>
        </span>
        {action && (selectedAction || !quantityWithAction) && (
          <span onClick={onActionIconClick} className="action">
            <XIcon />
          </span>
        )}
        {quantityWithAction && !selectedAction && (
          <span
            className="action"
            onMouseEnter={() => setShowIcon(true)}
            onMouseLeave={() => setShowIcon(false)}
            onClick={handleOnActionIconClick}
          >
            {showIcon ? (
              <XIcon />
            ) : quantityWithAction && quantityValue && quantityValue > 99 ? (
              "99+"
            ) : (
              quantityValue
            )}
          </span>
        )}
        {selectedAction && quantityWithAction && (
          <span onClick={handleOnActionIconClick} className="action">
            <XIcon />
          </span>
        )}
      </Comp>
    );
  }
);

Selector.displayName = "Selector";

export { Selector, SelectorVariants };
