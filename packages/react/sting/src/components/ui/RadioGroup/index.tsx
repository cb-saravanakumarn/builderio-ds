import { ReactElement, ReactNode } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
import * as RadixRadioGroup from "@radix-ui/react-radio-group";
import { CheckIcon } from "@heroicons/react/16/solid";
import { Primitive } from '@radix-ui/react-primitive';

const RadioGroupVariants = cva("s-radio-list", {
  variants: {
    variant: {
      basic: "s-radio-list-basic",
      contained: "s-radio-list-contained",
    },
    size: {
      small: "s-radio-list-small",
      regular: "s-radio-list-regular",
      large: "s-radio-list-large",
    },
    width: {
      full: "s-radio-list-full-width",
    },
    align: {
      vertical: "s-radio-list-vertical",
      horizontal: "s-radio-list-horizontal",
    },
    disabled: { true: "s-radio-list-disabled" },
    format: { rich: "s-rich-content" },
    position: {
      start: 's-items-start',
      center: 's-items-center',
      end: 's-items-end',
    }
  },
});

export interface RadioButtonProps
  extends RadixRadioGroup.RadioGroupProps,
    VariantProps<typeof RadioGroupVariants> {
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
    <div className="s-w-full">
      {(title.length > 0 || description.length > 0) && (
        <div className="s-list-title-description">
          {title && <h4 className="s-list-title">{title}</h4>}
          {description && <p>{description}</p>}
        </div>
      )}

<RadixRadioGroup.Root
        className={cn(
          "s-group",
          RadioGroupVariants({
            variant,
            size,
            align,
            width,
            disabled,
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
    VariantProps<typeof RadioGroupVariants> {
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
  position,
  children,
  richContent,
  disabled = false,
  noCheckmark = false,
  ...props
}: RadioButtonItemProps) => {
  let mainContent: ReactNode;
  let actionElement: ReactNode;

  if(Array.isArray(children)) {
    mainContent = children.find(child => (child as ReactElement).type !== RadioButton.Action);
    actionElement = children.find(child => (child as ReactElement).type === RadioButton.Action);
  } else {
    mainContent = children;
  }
  return (
    <Primitive.label
      htmlFor={id}
      className={cn(
        "s-radio-option s-items-center",
        richContent && "s-rich-content",
        contained && "[&:has([data-state=checked])]:s-radio-option-selected",
        disabled && "s-cursor-not-allowed s-opacity-40" // Apply disabled styles to the whole label
      )}
    >
      <Primitive.div>
      <RadixRadioGroup.Item
          className={cn(
            "s-bg-white",
            noCheckmark && "sr-only",
            "s-peer s-w-[13px] s-h-[13px] group-[.s-radio-list-contained]:s-w-4 group-[.s-radio-list-contained]:s-h-4 s-border s-border-neutral-500 focus:s-border-neutral-900 data-[state=checked]:s-border-primary-500 s-rounded-full s-outline-none s-cursor-default",
            disabled && "s-opacity-40 s-cursor-not-allowed" // Apply disabled styles to the item
          )}
          value={value}
          id={id}
          disabled={disabled} // Pass the disabled prop here
          {...props}
        >
        <RadixRadioGroup.Indicator
            className={`s-flex s-items-center s-justify-center s-text-primary-400 ${
              !contained &&
              "s-relative after:s-content-[''] after:s-block after:s-w-[8px] after:s-h-[8px] after:s-rounded-[50%] after:s-bg-primary-400"
            } `}
        >
          {contained && (
            <CheckIcon className="!s-h-3 !s-w-3 !s-text-neutral-900 s-hidden group-[.s-radio-list-contained]:s-block" />
          )}
         </RadixRadioGroup.Indicator>
        </RadixRadioGroup.Item>
      </Primitive.div>
      <Primitive.div className={cn("s-radio-list-wrapper", RadioGroupVariants({ position }))}>
        <Primitive.label
          className={cn(
            "peer-disabled:s-opacity-40 peer-disabled:s-cursor-not-allowed",
            disabled && "s-cursor-not-allowed" // Ensure disabled styles are applied to the text as well
          )}
          htmlFor={id}
        >
          {mainContent}
        </Primitive.label>
        <Primitive.div className="s-radio-list-action">
          {actionElement}
        </Primitive.div>
      </Primitive.div>
    </Primitive.label>
  );
};
const RadioButtonAction = ({ children }: { children: ReactNode }) => {
  return <>{children}</>;
};

RadioButtonAction.displayName = "RadioButton.Action";
RadioButton.Action = RadioButtonAction;

export { RadioGroup, RadioButton };
