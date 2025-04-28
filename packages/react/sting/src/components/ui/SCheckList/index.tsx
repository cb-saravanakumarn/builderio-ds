import React, { createContext, useContext, ReactNode, useEffect } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";

const SCheckListVariants = cva("", {
  variants: {
    variant: {
      basic: "s-checklist-basic",
      contained: "s-checklist-contained",
    },
    size: {
      small: "s-checklist-small",
      regular: "s-checklist-regular",
      large: "s-checklist-large",
    },
    width: {
      inline: "",
      full: "s-checklist-full-width",
    },
    align: {
      vertical: "s-checklist-vertical",
      horizontal: "s-checklist-horizontal",
    },
    disabled: { true: "s-checklist-disabled" },
  },
  defaultVariants: {
    size: "regular",
    width: "inline",
  },
});

const SCheckListContext = createContext({
  onChange: (value: string) => {
    console.log(value);
  },
  checkedOptions: [] as string[],
  variant: "basic" as "basic" | "contained" | null,
});

interface SCheckListProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof SCheckListVariants> {
  title: string;
  listDescription: string;
  options?: CheckboxOption[];
  onChangeLogic?: (value: string[]) => void;
  children: ReactNode;
  selectedValues?: string[];
}

interface CheckboxOption {
  label: string | any;
  value: string;
  name: string;
}

// const initialCheckedOptions: CheckboxOption[] = [];

const SCheckList = ({
  variant = "basic",
  align,
  className,
  width,
  size,
  title,
  disabled,
  listDescription,
  onChangeLogic,
  children,
  selectedValues,
}: SCheckListProps) => {
  const [checkedOptions, setCheckedOptions] = React.useState<string[]>([]);
  useEffect(() => {
    if (selectedValues) setCheckedOptions(selectedValues);
  }, [selectedValues]);
  const handleOnClick = (value: string) => {
    setCheckedOptions((prevCheckedOptions) => {
      const isChecked = prevCheckedOptions.includes(value);
      const updatedCheckedOptions = isChecked
        ? prevCheckedOptions.filter((item) => item !== value)
        : [...prevCheckedOptions, value];

      if (onChangeLogic) {
        onChangeLogic(updatedCheckedOptions);
      }
      return updatedCheckedOptions;
    });
  };

  return (
    <SCheckListContext.Provider
      value={{ onChange: handleOnClick, checkedOptions, variant }}
    >
      <div className="s-w-full">
        {(title.length > 0 || listDescription) && (
          <div className="s-list-title-description">
            {title && <h4 className="s-list-title">{title}</h4>}
            {listDescription && <p>{listDescription}</p>}
          </div>
        )}
        <div
          className={cn(
            "s-checklist",
            SCheckListVariants({
              align,
              className,
              disabled,
              variant,
              width,
              size,
            })
          )}
        >
          {children}
        </div>
      </div>
    </SCheckListContext.Provider>
  );
};

interface SCheckListItemProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
  children: ReactNode;
  disabled?: boolean;
}

const SCheckListItem = ({
  value,
  children,
  disabled = false,
  ...props
}: SCheckListItemProps) => {
  const { onChange, checkedOptions, variant } = useContext(SCheckListContext);

  const isChecked = checkedOptions.includes(value);

  return (
    <div
      className={cn(
        "s-check-option",
        isChecked ? "s-check-option-selected" : "",
        variant === "contained" ? "s-checklist-contained" : "",
        disabled ? "s-checklist-item-disabled" : ""
      )}
      onClick={() => !disabled && onChange(value)}
      {...props}
    >
      {variant === "contained" && (
        <CheckboxPrimitive.Root
          checked={isChecked}
          // onCheckedChange={() => !disabled && onChange(value)}
          className="s-checkbox-root s-flex"
          disabled={disabled} // Disable the checkbox
        >
          <div className="s-h-large  s-w-large ">
            {isChecked ? <CheckedSquareIcon /> : <SquareIcon />}
          </div>
        </CheckboxPrimitive.Root>
      )}
      {/* {!isChecked && <Squares2X2Icon className="s-text-black s-h-4 s-w-4" />} */}

      <input
        type="checkbox"
        value={value}
        checked={isChecked}
        readOnly
        disabled={disabled}
        className={cn(variant === "contained" ? "sr-only" : "")}
      />
      <label htmlFor={value}> {children}</label>
    </div>
  );
};

SCheckList.Item = SCheckListItem;

export { SCheckList };

const SquareIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className="s-w-4 s-h-4"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.75 3.75h16.5v16.5H3.75z"
    />
  </svg>
);

const CheckedSquareIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className="s-w-4 s-h-4"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.75 3.75h16.5v16.5H3.75z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 12.75L11.25 15L15 9.75"
    />
  </svg>
);
