import * as React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import * as RadixTooltip from "@radix-ui/react-tooltip";

const TooltipVariants = cva("Tooltip", {
  // Remove unwanted stuff and add missing stuff here
  variants: {
    // Make it vertical when on mobile or small screen for Responsive web
    // Style prop is a system prop
    Placement: {
      top: "top",
      bottom: "bottom",
    },
    Align: {
      start: "start",
      center: "center",
      end: "end",
    },
    width: {
      Small: "tooltip-width-small",
      Regular: "tooltip-width-regular",
      Large: "tooltip-width-large",
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
              className={cn(`tooltip relative`, TooltipVariants({ width }))}
              // className=""
              sideOffset={5}
              side={Placement ? Placement : "top"}
            >
              <RadixTooltip.Arrow className="fill-brand-deep-dark dark:text-gray-800 !h-1.5 !w-2.5" />
              <div className="tooltip-content m-0 visible relative">
                <span>{label}</span>
                {link && (
                  <span className="tooltip-link visible">
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
        className={cn(`tooltip relative`, TooltipVariants({ width }))}
        // className=""
        sideOffset={5}
        side={Placement ? Placement : "top"}
        align={Align ? Align : "start"}
        {...props}
      >
        <RadixTooltip.Arrow className="fill-neutral-50 dark:text-neutral-50 !h-1.5 !w-2.5" />
        <div className="tooltip-content !shadow-none !bg-neutral-50 !w-min text-black m-0 visible relative">
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
