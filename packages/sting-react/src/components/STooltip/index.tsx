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
    width: {
      small: "s-tooltip-width-small",
      regular: "s-tooltip-width-regular",
      large: "s-tooltip-width-large",
    },
  },
  defaultVariants: {
    width: "regular",
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
  placement?: "top" | "right" | "bottom" | "left";
  align?: "start" | "center" | "end";
  delayDuration?: number;
}

const STooltip = React.forwardRef<HTMLDivElement, STooltipProps>(
  ({
    width,
    placement = "top",
    color,
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
              className={TooltipVariants({ width })}
              sideOffset={5}
              side={placement}
              align={align}
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
  align,
  children,
  ...props
}: STooltipProps & RadixTooltip.TooltipContentProps) => {
  return (
    <RadixTooltip.Portal>
      <RadixTooltip.Content
        className={twMerge(`s-tooltip s-relative`, TooltipVariants({ width }))}
        sideOffset={5}
        side={placement ? placement : "top"}
        align={align}
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

export {
  STooltip,
  STooltipWithActions,
  TooltipVariants,
  STooltipTrigger,
  STooltipContent,
};
