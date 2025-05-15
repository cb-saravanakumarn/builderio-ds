import { tv, VariantProps } from "tailwind-variants";
import "./SCard.css";

export const cardVariants = tv({
  base: "card",
  variants: {
    depth: {
      flat: "flat",
      raised: "raised",
      regular: "regular",
    },
    padding: {
      large: "p-8",
      small: "p-2",
      regular: "p-4",
      none: "",
    },
    background: {
      transparent: "background-transparent",
      white: "background-white",
      neutral: "background-neutral",
    },
    spacey: {
      none: "",
      small: "space-y-small",
      regular: "space-y-regular",
      large: "space-y-large",
      xlarge: "space-y-xlarge",
      xxlarge: "space-y-xxlarge",
    },
    border: {
      none: "",
      dotted: "dotted-border",
    },
    rounded: {
      true: "rounded",
    },
  },
  defaultVariants: {
    depth: "regular",
    padding: "regular",
    background: "white",
    spacey: "regular",
    border: "none",
    rounded: true,
  },
});

export type CardVariants = VariantProps<typeof cardVariants>;

export const cardHeaderVariants = tv({
  base: "main-card-header main-card-header-align",
  variants: {
    variant: {
      default: "",
      hero: "hero",
    },
    alignItems: {
      start: "start",
      center: "center",
      end: "end",
    },
  },
  defaultVariants: {
    alignItems: "start",
    variant: "default",
  },
});

export type CardHeaderVariants = VariantProps<typeof cardHeaderVariants>;
