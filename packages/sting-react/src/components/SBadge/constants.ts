import { tv, VariantProps } from "tailwind-variants";
import "./SBadge.css";

export const badgeVariants = tv({
  base: "badge",
  variants: {
    variant: {
      primary: "badge-primary",
      neutral: "badge-neutral",
      danger: "badge-danger",
      warning: "badge-warning",
      success: "badge-success",
      info: "badge-info",
      brand: "badge-brand",
    },
    size: { regular: "badge-regular", large: "badge-large" },
    mode: { light: "", dark: "badge-dark" },
    rounded: { small: "radius-small", full: "radius-full" },
  },
  defaultVariants: {
    variant: "primary",
    mode: "light",
    size: "regular",
    rounded: "full",
  },
});

export type Badge = VariantProps<typeof badgeVariants>;
