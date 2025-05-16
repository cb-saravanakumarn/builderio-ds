import * as React from "react";
import * as RadixTooltip from "@radix-ui/react-tooltip";
import {
  tooltipVariants,
  tooltipArrowVariants,
  tooltipContentVariants,
  TooltipVariants,
} from "./constants";
import { twMerge } from "tailwind-merge";
import "./STooltip.css";

export interface STooltipProps
  extends RadixTooltip.TooltipProps,
    TooltipVariants {
  children?: React.ReactNode;
  trigger?: React.ReactNode;
  label?: string;
  link?: { label: string; href: string };
  contentElement?: React.ReactNode;
  placement?: "top" | "right" | "bottom" | "left";
  align?: "start" | "center" | "end";
  delayDuration?: number;
}

const STooltip = React.forwardRef<HTMLDivElement, STooltipProps>(
  ({
    width,
    color,
    placement = "top",
    align,
    children,
    contentElement,
    open,
    label,
    link,
    delayDuration = 0,
  }) => {
    return (
      <RadixTooltip.Provider delayDuration={delayDuration}>
        <RadixTooltip.Root open={open}>
          <RadixTooltip.Trigger asChild>{children}</RadixTooltip.Trigger>
          <RadixTooltip.Portal>
            <RadixTooltip.Content
              className={tooltipVariants({ width, color })}
              sideOffset={5}
              side={placement}
              align={align}
            >
              <RadixTooltip.Arrow className={tooltipArrowVariants({ color })} />
              <div className={tooltipContentVariants()}>
                {label && <span>{label}</span>}
                {contentElement && <div>{contentElement}</div>}
                {link && (
                  <span className="tooltip-link">
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.label}
                    </a>
                  </span>
                )}
              </div>
            </RadixTooltip.Content>
          </RadixTooltip.Portal>
        </RadixTooltip.Root>
      </RadixTooltip.Provider>
    );
  }
);

const STooltipTrigger = ({ children }: STooltipProps) => {
  return <RadixTooltip.Trigger asChild>{children}</RadixTooltip.Trigger>;
};

const STooltipContent = ({
  children,
  width,
  color,
  placement = "top",
  align,
  className,
  ...props
}: STooltipProps & RadixTooltip.TooltipContentProps) => {
  return (
    <RadixTooltip.Portal>
      <RadixTooltip.Content
        className={twMerge(tooltipVariants({ width, color }), className)}
        sideOffset={5}
        side={placement}
        align={align}
        {...props}
      >
        <RadixTooltip.Arrow className={tooltipArrowVariants({ color })} />
        <div className={tooltipContentVariants()}>{children}</div>
      </RadixTooltip.Content>
    </RadixTooltip.Portal>
  );
};

const STooltipWithActions = ({
  children,
  open,
  onOpenChange,
  delayDuration = 0,
  ...props
}: STooltipProps) => {
  return (
    <RadixTooltip.Provider delayDuration={delayDuration} {...props}>
      <RadixTooltip.Root open={open} disableHoverableContent>
        {children}
      </RadixTooltip.Root>
    </RadixTooltip.Provider>
  );
};

STooltip.displayName = "STooltip";

export { STooltip, STooltipWithActions, STooltipTrigger, STooltipContent };
