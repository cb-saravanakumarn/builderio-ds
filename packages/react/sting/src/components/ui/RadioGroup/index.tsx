"use client";

import { ReactNode } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
import * as RadixRadioGroup from "@radix-ui/react-radio-group";
import { CheckIcon } from "@heroicons/react/16/solid";

const RadioButtonVariants = cva("radio-list", {
  variants: {
    variant: {
      basic: "radio-list-basic",
      contained: "radio-list-contained",
    },
    size: {
      small: "radio-list-small",
      regular: "radio-list-regular",
      large: "radio-list-large",
    },
    width: {
      full: "radio-list-full-width",
    },
    align: {
      vertical: "radio-list-vertical",
      horizontal: "radio-list-horizontal",
    },
    disabled: { true: "radio-list-disabled" },
    format: { rich: "rich-content" },
  },
});

export interface RadioButtonProps
  extends RadixRadioGroup.RadioGroupProps,
    VariantProps<typeof RadioButtonVariants> {
  disabled?: boolean;
  title?: string;
  defaultValue?: string;
  description: string;
  noCheckmark?: boolean;
  onChangeLogic?: (value: string) => void;
}

const RadioGroup = ({
  className,
  variant,
  size,
  align = "vertical",
  width,
  format,
  title = "",
  description,
  noCheckmark,
  children,
  onChangeLogic,
  defaultValue,
  disabled = false,
  ...props
}: RadioButtonProps) => {
  return (
    <div className="w-full">
      {(title.length > 0 || description.length > 0) && (
        <div className="list-title-description">
          {title && <h4 className="list-title">{title}</h4>}
          {description && <p>{description}</p>}
        </div>
      )}

      <RadixRadioGroup.Root
        className={cn(
          "group",
          RadioButtonVariants({
            variant,
            size,
            align,
            width,
          }),
          className
        )}
        onValueChange={(e: string) => onChangeLogic && onChangeLogic(e)}
        defaultValue={defaultValue}
        aria-label="View density"
        disabled={disabled}
        {...props}
      >
        {children}
      </RadixRadioGroup.Root>
    </div>
  );
};

export interface RadioButtonItemProps
  extends RadixRadioGroup.RadioGroupItemProps,
    VariantProps<typeof RadioButtonVariants> {
  contained?: boolean;
  richContent?: boolean;
  disabled?: boolean;
  noCheckmark?: boolean;
  id: string;
  value: string;
  children: ReactNode;
}

const RadioButton = ({
  id,
  value,
  contained,
  children,
  richContent,
  disabled = false,
  noCheckmark = false,
  ...props
}: RadioButtonItemProps) => {
  return (
    <label
      htmlFor={id}
      className={`radio-option items-center  ${
        richContent &&
        "rich-content !items-start !h-auto [&:has([data-state=checked])]:!py-3"
      } ${
        contained &&
        "[&:has([data-state=checked])]:radio-option-selected !h-auto"
      }`}
    >
      <RadixRadioGroup.Item
        className={`bg-white ${
          noCheckmark && "sr-only"
        } peer mr-2 w-[13px] h-[13px] group-[.radio-list-contained]:w-4 group-[.radio-list-contained]:h-4 disabled:opacity-40 border disabled:cursor-not-allowed border-neutral-500 focus:border-neutral-800 data-[state=checked]:border-primary-500 rounded-full outline-none cursor-default`}
        value={value}
        id={id}
        {...props}
      >
        <RadixRadioGroup.Indicator
          className={`flex items-center justify-center text-primary-400 ${
            !contained &&
            "relative after:content-[''] after:block after:w-[8px] after:h-[8px] after:rounded-[50%] after:bg-primary-400"
          } `}
        >
          {contained && (
            <CheckIcon className="!h-3 !w-3 !text-primary-400 hidden group-[.radio-list-contained]:block" />
          )}
        </RadixRadioGroup.Indicator>
      </RadixRadioGroup.Item>

      <label
        className={`peer-disabled:opacity-40 peer-disabled:cursor-not-allowed`}
        htmlFor={id}
      >
        {children}
      </label>
    </label>
  );
};

export { RadioGroup, RadioButton };
