import { tv, VariantProps } from "tailwind-variants";

export const badgeVariants = tv({
  base: "s-inline-flex s-gap-1 s-items-center s-text-sm s-leading-none s-border s-border-solid s-box-border",
  variants: {
    variant: {
      primary: "",
      neutral: "",
      danger: "",
      warning: "",
      success: "",
      info: "",
      brand: "",
    },
    size: { regular: "s-py-1 s-px-2", large: "s-py-2 s-px-2.5" },
    mode: { light: "", dark: "" },
    rounded: { small: "s-rounded", full: "s-rounded-full" },
  },
  compoundVariants: [
    {
      variant: "primary",
      mode: "light",
      className: "s-bg-primary-50 s-text-primary-600 s-border-primary-100",
    },
    {
      variant: "primary",
      mode: "dark",
      className: "s-bg-primary-500 s-text-white s-border-primary-500",
    },
    {
      variant: "neutral",
      mode: "light",
      className: "s-bg-neutral-50 s-text-light s-border-neutral-100",
    },
    {
      variant: "neutral",
      mode: "dark",
      className: "s-bg-neutral-500 s-text-white s-border-neutral-500",
    },
    {
      variant: "danger",
      mode: "light",
      className: "s-bg-red-50 s-text-red-500 s-border-red-100",
    },
    {
      variant: "danger",
      mode: "dark",
      className: "s-bg-red-500 s-text-white s-border-red-500",
    },
    {
      variant: "warning",
      mode: "light",
      className: "s-bg-yellow-50 s-text-yellow-900 s-border-yellow-100",
    },
    {
      variant: "warning",
      mode: "dark",
      className: "s-bg-yellow-700 s-text-white s-border-yellow-700",
    },
    {
      variant: "success",
      mode: "light",
      className: "s-bg-green-50 s-text-green-600 s-border-green-100",
    },
    {
      variant: "success",
      mode: "dark",
      className: "s-bg-green-500 s-text-white s-border-green-500",
    },
    {
      variant: "info",
      mode: "light",
      className: "s-bg-info-50 s-text-info-700 s-border-info-100",
    },
    {
      variant: "info",
      mode: "dark",
      className: "s-bg-info-600 s-text-white s-border-info-600",
    },
    {
      variant: "brand",
      mode: "light",
      className:
        "s-bg-brand-deep-light s-text-brand-deep-dark s-border-brand-deep-light",
    },
    {
      variant: "brand",
      mode: "dark",
      className:
        "s-bg-brand-deep-dark s-text-brand-deep-light s-border-brand-deep-dark",
    },
  ],
  defaultVariants: {
    variant: "primary",
    mode: "light",
    size: "regular",
    rounded: "full",
  },
});

export type Badge = VariantProps<typeof badgeVariants>;