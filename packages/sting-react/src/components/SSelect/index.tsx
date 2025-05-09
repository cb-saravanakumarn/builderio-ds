"use client";

import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { Check, ChevronDown, ChevronUp } from "lucide-react";

import { twMerge } from "tailwind-merge";
import clsx from "clsx";

const SSelect = SelectPrimitive.Root;

const SSelectGroup = SelectPrimitive.Group;

const SSelectValue = SelectPrimitive.Value;

const SSelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={twMerge(
      "s-flex s-h-9 s-w-full s-items-center s-justify-between s-whitespace-nowrap s-rounded-md s-border s-border-input s-bg-transparent s-px-3 s-py-2 s-text-sm s-shadow-sm s-ring-offset-background placeholder:s-text-muted-foreground focus:s-outline-none focus:s-ring-1 focus:s-ring-ring disabled:s-cursor-not-allowed disabled:s-opacity-50 [&>span]:s-line-clamp-1",
      className
    )}
    {...props}
  >
    {children}
    <SelectPrimitive.Icon asChild>
      <ChevronDown className="s-h-4 s-w-4 s-opacity-50" />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
));
SSelectTrigger.displayName = "SSelect.Trigger";

const SSelectScrollUpButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollUpButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollUpButton
    ref={ref}
    className={twMerge(
      "s-flex s-cursor-default s-items-center s-justify-center s-py-1",
      className
    )}
    {...props}
  >
    <ChevronUp className="s-h-4 s-w-4" />
  </SelectPrimitive.ScrollUpButton>
));
SSelectScrollUpButton.displayName = "SSelect.ScrollUpButton";

const SSelectScrollDownButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollDownButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollDownButton
    ref={ref}
    className={twMerge(
      "s-flex s-cursor-default s-items-center s-justify-center s-py-1",
      className
    )}
    {...props}
  >
    <ChevronDown className="s-h-4 s-w-4" />
  </SelectPrimitive.ScrollDownButton>
));
SSelectScrollDownButton.displayName = "SSelect.ScrollDownButton";

const SSelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, position = "popper", ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={clsx(
        "s-relative s-z-50 s-max-h-96 s-min-w-[8rem] s-overflow-hidden s-rounded-md s-border s-bg-white s-text-popover-foreground s-shadow-md data-[state=open]:s-animate-in data-[state=closed]:s-animate-out data-[state=closed]:s-fade-out-0 data-[state=open]:s-fade-in-0 data-[state=closed]:s-zoom-out-95 data-[state=open]:s-zoom-in-95 data-[side=bottom]:s-slide-in-from-top-2 data-[side=left]:s-slide-in-from-right-2 data-[side=right]:s-slide-in-from-left-2 data-[side=top]:s-slide-in-from-bottom-2",
        position === "popper" &&
          "data-[side=bottom]:s-translate-y-1 data-[side=left]:-s-translate-x-1 data-[side=right]:s-translate-x-1 data-[side=top]:-s-translate-y-1",
        className
      )}
      position={position}
      {...props}
    >
      <SSelectScrollUpButton />
      <SelectPrimitive.Viewport
        className={clsx(
          "s-p-1",
          position === "popper" &&
            "s-h-[var(--radix-select-trigger-height)] s-w-full s-min-w-[var(--radix-select-trigger-width)]"
        )}
      >
        {children}
      </SelectPrimitive.Viewport>
      <SSelectScrollDownButton />
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
));
SSelectContent.displayName = "SSelect.Content";

const SSelectLabel = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Label
    ref={ref}
    className={twMerge("s-px-2 s-py-1.5 s-text-sm s-font-semibold", className)}
    {...props}
  />
));
SSelectLabel.displayName = "SSelect.Label";

const SSelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={twMerge(
      "s-relative s-flex s-w-full s-cursor-default s-select-none s-items-center s-rounded-sm s-py-1.5 s-pl-2 s-pr-8 s-text-sm s-outline-none focus:s-bg-accent focus:s-text-accent-foreground data-[disabled]:s-pointer-events-none data-[disabled]:s-opacity-50",
      className
    )}
    {...props}
  >
    <span className="s-absolute s-right-2 s-flex s-h-3.5 s-w-3.5 s-items-center s-justify-center">
      <SelectPrimitive.ItemIndicator>
        <Check className="s-h-4 s-w-4" />
      </SelectPrimitive.ItemIndicator>
    </span>
    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
));
SSelectItem.displayName = "SSelect.Item";

const SSelectSeparator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator
    ref={ref}
    className={twMerge("-s-mx-1 s-my-1 s-h-px s-bg-muted", className)}
    {...props}
  />
));
SSelectSeparator.displayName = "SSelect.Separator";

export {
  SSelect,
  SSelectGroup,
  SSelectValue,
  SSelectTrigger,
  SSelectContent,
  SSelectLabel,
  SSelectItem,
  SSelectSeparator,
  SSelectScrollUpButton,
  SSelectScrollDownButton,
};
