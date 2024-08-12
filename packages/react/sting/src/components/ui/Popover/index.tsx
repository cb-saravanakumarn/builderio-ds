import React from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import {
  PopoverContentProps,
  PopoverProps,
  PopoverPortalProps,
  PopoverTriggerProps,
} from "@radix-ui/react-popover";

export interface ContentProps
  extends PopoverProps,
    PopoverContentProps,
    PopoverPortalProps {
  triggerComponent?: React.ReactNode;
  contentClassName?: string;

  children?: React.ReactNode;
  modal?: PopoverProps["modal"];
  onOpenChange?: PopoverProps["onOpenChange"];
  forceMount?: PopoverPortalProps["forceMount"];
  arrow?: boolean;
  arrowColour?: string;
}

export interface PopoverRootProps extends PopoverProps {
  children: React.ReactNode;
}

export const Popover: React.FC<PopoverRootProps> = ({ children, ...props }) => {
  return <PopoverPrimitive.Root {...props}>{children}</PopoverPrimitive.Root>;
};

export interface TriggerProps extends PopoverTriggerProps {
  children: React.ReactNode;
}

export const PopoverTrigger: React.FC<TriggerProps> = ({
  children,
  ...props
}) => (
  <PopoverPrimitive.Trigger {...props}>{children}</PopoverPrimitive.Trigger>
);

export const PopoverContent = React.forwardRef<HTMLDivElement, ContentProps>(
  ({ children, forceMount, arrow, arrowColour, ...props }, forwardedRef) => (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content {...props} ref={forwardedRef}>
        <div >
        {children}
        </div>
        <PopoverPrimitive.Close />

        {arrow && <PopoverPrimitive.Arrow className={arrowColour} />}
      </PopoverPrimitive.Content>
    </PopoverPrimitive.Portal>
  )
);

Popover.displayName = "Popover";
PopoverContent.displayName = "PopoverContent";
