import React, { createContext, useContext, ReactNode, useEffect } from "react";
import { tv, type VariantProps } from "tailwind-variants";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";

const checkListVariants = tv({
  base: "s-checklist",
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

// Create variants for the check list item
const checkListItemVariants = tv({
  base: "s-check-option",
  variants: {
    isSelected: {
      true: "s-check-option-selected",
    },
    isContained: {
      true: "s-checklist-contained",
    },
    isDisabled: {
      true: "s-checklist-item-disabled",
    },
  },
});

// Create variant for the input
const inputVariants = tv({
  base: "",
  variants: {
    isContained: {
      true: "sr-only",
    },
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
    VariantProps<typeof checkListVariants> {
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
          className={checkListVariants(
            {
              align,
              variant,
              width,
              size,
              disabled,
              className,
            },
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
  const isContained = variant === "contained";

  return (
    <div
      className={checkListItemVariants({
        isSelected: isChecked,
        isContained,
        isDisabled: disabled,
      })}
      onClick={() => !disabled && onChange(value)}
      {...props}
    >
      {isContained && (
        <CheckboxPrimitive.Root
          checked={isChecked}
          className="s-checkbox-root s-flex"
          disabled={disabled}
        >
          <div className="s-h-large s-w-large">
            {isChecked ? <CheckedSquareIcon /> : <SquareIcon />}
          </div>
        </CheckboxPrimitive.Root>
      )}

      <input
        type="checkbox"
        value={value}
        checked={isChecked}
        readOnly
        disabled={disabled}
        className={inputVariants({
          isContained,
        })}
      />
      <label htmlFor={value}> {children}</label>
    </div>
  );
};

SCheckList.Item = SCheckListItem;

export { SCheckList, checkListVariants };

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
