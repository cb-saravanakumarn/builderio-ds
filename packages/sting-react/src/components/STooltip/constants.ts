import { tv, VariantProps } from "tailwind-variants";
import "./STooltip.css";

export const tooltipVariants = tv({
  base: "tooltip",
  variants: {
    color: {
      dark: "tooltip-dark",
      light: "tooltip-light",
    },
    width: {
      small: "tooltip-width-small",
      regular: "tooltip-width-regular",
      large: "tooltip-width-large",
    },
  },
  defaultVariants: {
    color: "dark",
    width: "regular",
  },
});

export const tooltipArrowVariants = tv({
  base: "tooltip-arrow",
  variants: {
    color: {
      dark: "tooltip-arrow-dark",
      light: "tooltip-arrow-light",
    },
  },
  defaultVariants: {
    color: "dark",
  },
});

export const tooltipContentVariants = tv({
  base: "tooltip-content",
});

export type TooltipVariants = VariantProps<typeof tooltipVariants>;
