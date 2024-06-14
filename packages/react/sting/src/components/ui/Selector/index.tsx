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
      default: "s-selector",
    },
    size: {
      default: "",
      small: "s-selector-small",
      large: "s-selector-large",
    },
    action: {
      true: "s-selector-action",
    },
    quantity: {
      true: "",
    },
    quantityWithAction: {
      true: "s-selector-action",
    },
    disabled: {
      true: "s-selector-disabled",
    },
    selected: { true: "s-selector-selected" },
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
          selectedAction && "s-selector-selected",
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
              <span className="s-quantity">
                {quantityValue && quantityValue > 99 ? "99+" : quantityValue}
              </span>
            )}
          </RadixToggle.Root>
        </span>
        {action && (selectedAction || !quantityWithAction) && (
          <span onClick={onActionIconClick} className="s-action">
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
          <span onClick={handleOnActionIconClick} className="s-action">
            <XIcon />
          </span>
        )}
      </Comp>
    );
  }
);

Selector.displayName = "Selector";

export { Selector, SelectorVariants };
