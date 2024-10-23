import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";
import { InputError, InputLabel, InputMessage } from "../Input";

const TextareaVariants = cva("s-inputfield", {
  variants: {
    height: {
      small: "s-textarea-small",
      regular: "s-textarea-regular",
      large: "s-textarea-large",
    },
    width: {
      full: "",
      inline: "s-inputfield-inline",
    },
    label: {
      default: "",
      hide: "",
    },
    disabled: {
      true: "s-inputfield-disabled",
    },
    error: {
      true: "s-inputfield-error",
    },
  },
  defaultVariants: {
    height: "regular",
  },
});

type TextareaProps = ComponentProps<"textarea"> &
  VariantProps<typeof TextareaVariants> & {
    messageText?: string;
    labelText?: string;
  };

export default function Textarea({
  messageText,
  height,
  disabled,
  error,
  label,
  labelText,
  width,
  ...props
}: TextareaProps) {
  return (
    <div
      className={TextareaVariants({ height, disabled, error, label, width })}
    >
      <div>
        {label !== "hide" && <InputLabel>{labelText}</InputLabel>}
        <textarea {...props} disabled={disabled} />
      </div>
      {messageText && messageText.length > 0 && !error && (
        <InputMessage>{messageText}</InputMessage>
      )}
      {error && messageText && messageText?.length > 0 && (
        <InputError>{messageText}</InputError>
      )}
    </div>
  );
}
