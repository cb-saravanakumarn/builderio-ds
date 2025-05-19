import { tv, VariantProps } from "tailwind-variants";
import "./STooltip.css";

export const tooltipVariants = tv({
  slots: {
    base: "tooltip",
    arrow: "tooltip-arrow",
    content: "tooltip-content",
  },
  variants: {
    color: {
      dark: {
        base: "tooltip-dark",
        arrow: "tooltip-arrow-dark",
      },
      light: {
        base: "tooltip-light",
        arrow: "tooltip-arrow-light",
      },
    },
    width: {
      small: { base: "tooltip-width-small" },
      regular: { base: "tooltip-width-regular" },
      large: { base: "tooltip-width-large" },
    },
  },
  defaultVariants: {
    color: "dark",
    width: "regular",
  },
});

export type TooltipVariants = VariantProps<typeof tooltipVariants>;
