import { tv } from "tailwind-variants";

export const inputVariants = tv({
  base: "inputfield",
  variants: {
    variant: {
      input: "",
      search: "",
      phone: "phone-input",
    },
    labelPosition: {
      none: "",
      default: "",
      inline: "inputfield-inline-label",
    },
    size: {
      regular: "inputfield-regular",
      large: "inputfield-large",
    },
    state: {
      default: "",
      disabled: "inputfield-disabled",
      error: "inputfield-error",
    },
    withIcon: {
      true: "inputfield-with-icon",
    },
  },
  defaultVariants: {
    variant: "input",
    size: "regular",
    labelPosition: "none",
    state: "default",
  },
});
