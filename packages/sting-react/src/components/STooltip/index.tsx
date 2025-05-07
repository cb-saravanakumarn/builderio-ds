import * as React from "react";
import { tv, VariantProps } from "tailwind-variants";
import { twMerge } from "tailwind-merge";
import * as RadixTooltip from "@radix-ui/react-tooltip";

const TooltipVariants = tv({
  variants: {
    color: {
      dark: "s-dark",
      light: "s-light",
    },
    placement: {
      top: "s-top",
      bottom: "s-bottom",
    },
    align: {
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
    placement: "top",
  },
});

export interface STooltipProps
  extends RadixTooltip.TooltipProps,
    VariantProps<typeof TooltipVariants> {
  children?: React.ReactNode;
  trigger?: React.ReactNode;
  label?: string;
  link?: { label: string; href: string };
  contentElement?: React.ReactNode;
}

const STooltip = React.forwardRef<HTMLDivElement, STooltipProps>(
  ({
    width,
    placement,
    color,
    children,
    contentElement,
    open,
    label,
    link,
  }) => {
    return (
      <RadixTooltip.Provider delayDuration={0}>
        <RadixTooltip.Root open={open}>
          <RadixTooltip.Trigger asChild>{children}</RadixTooltip.Trigger>
          <RadixTooltip.Portal>
            <RadixTooltip.Content
              className={TooltipVariants({ width })}
              // className=""
              sideOffset={5}
              side={placement ? placement : "top"}
            >
              <RadixTooltip.Arrow
                className={`${
                  color === "dark"
                    ? "s-fill-brand-deep-dark s-tooltip-arrow"
                    : "!s-fill-white   s-tooltip-arrow"
                } `}
              />

              <div
                className={twMerge(
                  `s-tooltip-content s-visible`,
                  TooltipVariants({ color })
                )}
              >
                {label && <span>{label}</span>}
                {contentElement && <div>{contentElement}</div>}
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

const STooltipTrigger = ({ children }: STooltipProps) => {
  return <RadixTooltip.Trigger asChild>{children}</RadixTooltip.Trigger>;
};

const STooltipContent = ({
  width,
  placement,
  align: Align,
  children,
  ...props
}: STooltipProps & RadixTooltip.TooltipContentProps) => {
  return (
    <RadixTooltip.Portal>
      <RadixTooltip.Content
        className={twMerge(`s-tooltip s-relative`, TooltipVariants({ width }))}
        // className=""
        sideOffset={5}
        side={placement ? placement : "top"}
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

const STooltipWithActions = ({
  children,
  open,
  onOpenChange,
  ...props
}: STooltipProps) => {
  return (
    <RadixTooltip.Provider delayDuration={0} {...props}>
      <RadixTooltip.Root open={open} disableHoverableContent>
        {children}
      </RadixTooltip.Root>
    </RadixTooltip.Provider>
  );
};

STooltip.displayName = "STooltip";

export {
  STooltip,
  STooltipWithActions,
  TooltipVariants,
  STooltipTrigger,
  STooltipContent,
};
