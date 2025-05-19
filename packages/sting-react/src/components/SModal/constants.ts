import { tv } from "tailwind-variants";

export const modalVariants = tv({
  base: "modal !p-0  min-h-[auto]",
  variants: {
    variant: {
      default: "modal-default  regularscreen z-50",
      fullscreen: "z-50",
    },
    padding: {
      xsmall: "!p-xsmall",
      small: "!p-small",
      regular: "!p-regular",
      large: "!p-large",
      xlarge: "!p-xlarge",
      xxlarge: "!p-xxlarge",
    },
    size: {
      xsmall: "w-11/12 md:modal-xsmall",
      small: "w-11/12 md:modal-small",
      regular: "w-11/12 md:modal-regular",
      large: "w-11/12 md:modal-large",
      xlarge: "w-11/12 md:w-[90%]",
    },
    space: {
      xsmall: "modal-space-xsmall",
      small: "modal-space-small",
      regular: "modal-space-regular",
      large: "modal-space-large",
      xlarge: "modal-space-xlarge",
      xxlarge: "modal-space-xxlarge",
    },
    bodyHeight: {
      small: "max-h-[50vh]",
      regular: "max-h-[70vh]",
      large: "max-h-[90vh]",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "regular",
    space: "regular",
    bodyHeight: "regular",
    padding: "large",
  },
});
