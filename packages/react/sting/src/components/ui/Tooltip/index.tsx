import * as React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import * as RadixTooltip from "@radix-ui/react-tooltip";

const TooltipVariants = cva("tooltip", {
  // Remove unwanted stuff and add missing stuff here
  variants: {
    // Make it vertical when on mobile or small screen for Responsive web
    // Style prop is a system prop
    Placement: {
      top: "s-top",
      bottom: "s-bottom",
    },
    Align: {
      start: "s-start",
      center: "s-center",
      end: "s-end",
    },
    width: {
      Small: "s-tooltip-width-small",
      Regular: "s-tooltip-width-regular",
      Large: "s-tooltip-width-large",
    },
  },
  defaultVariants: {
    width: "Regular",
    Placement: "top",
  },
});

export interface TooltipProps
  extends RadixTooltip.TooltipProps,
    VariantProps<typeof TooltipVariants> {
  children?: React.ReactNode;
  trigger?: React.ReactNode;
  label?: string;
  link?: { label: string; href: string };
}

const Tooltip = React.forwardRef<HTMLDivElement, TooltipProps>(
  ({ width, Placement, children, open, label, link }) => {
    return (
      <RadixTooltip.Provider delayDuration={0}>
        <RadixTooltip.Root open={open}>
          <RadixTooltip.Trigger asChild>{children}</RadixTooltip.Trigger>
          <RadixTooltip.Portal>
            <RadixTooltip.Content
              className={cn(`s-tooltip s-relative`, TooltipVariants({ width }))}
              // className=""
              sideOffset={5}
              side={Placement ? Placement : "top"}
            >
              <RadixTooltip.Arrow className="s-fill-brand-deep-dark dark:s-text-neutral-900 !s-h-1.5 !s-w-2.5" />
              <div className="s-tooltip-content s-m-0 s-visible s-relative">
                <span>{label}</span>
                {link && (
                  <span className="s-tooltip-link s-visible">
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

const TooltipTrigger = ({ children }: TooltipProps) => {
  return <RadixTooltip.Trigger asChild>{children}</RadixTooltip.Trigger>;
};

const TooltipContent = ({
  width,
  Placement,
  Align,
  children,
  ...props
}: TooltipProps & RadixTooltip.TooltipContentProps) => {
  return (
    <RadixTooltip.Portal>
      <RadixTooltip.Content
        className={cn(`s-tooltip s-relative`, TooltipVariants({ width }))}
        // className=""
        sideOffset={5}
        side={Placement ? Placement : "top"}
        align={Align ? Align : "start"}
        {...props}
      >
        <RadixTooltip.Arrow className="s-fill-neutral-50 dark:s-text-neutral-50 !s-h-1.5 !s-w-2.5" />
        <div className="s-tooltip-content !s-shadow-none !s-bg-neutral-50 !s-w-min s-text-black s-m-0 s-visible s-relative">
          {children}
        </div>
      </RadixTooltip.Content>
    </RadixTooltip.Portal>
  );
};

const TooltipWithActions = ({
  children,
  open,
  onOpenChange,
  ...props
}: TooltipProps) => {
  return (
    <RadixTooltip.Provider delayDuration={0} {...props}>
      <RadixTooltip.Root open={open} disableHoverableContent>
        {children}
      </RadixTooltip.Root>
    </RadixTooltip.Provider>
  );
};

Tooltip.displayName = "Tooltip";

export {
  Tooltip,
  TooltipWithActions,
  TooltipVariants,
  TooltipTrigger,
  TooltipContent,
};
