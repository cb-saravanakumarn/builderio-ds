import { tv, VariantProps } from "tailwind-variants";
// import "./SButton.css";

export const buttonVariants = tv({
  base: "btn",
  variants: {
    variant: {
      primary: "btn-primary",
      neutral: "btn-neutral",
      danger: "btn-danger",
    },
    styleType: {
      default: "",
      outline: "btn-outline",
      text: "btn-text",
      icon: "btn-icon",
      "icon-borderless": "btn-icon-borderless",
    },
    size: {
      small: "btn-small",
      regular: "",
      large: "btn-large",
    },
    fullWidth: {
      true: "btn-full-width",
    },
    rounded: {
      none: "rounded-none",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      full: "rounded-full",
    },
    disabled: {
      true: "btn-disabled",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "regular",
    styleType: "default",
    fullWidth: false,
    rounded: "md",
    disabled: false,
  },
});

export type ButtonVariants = VariantProps<typeof buttonVariants>;
