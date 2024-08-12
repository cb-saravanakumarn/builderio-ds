import React,{ReactNode} from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const CheckListVariants = cva("", {
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

interface CheckboxOption {
  label: string | any;
  value: string;
  name: string;
}

export interface CheckListProps
  extends React.HTMLAttributes<HTMLInputElement>,
    VariantProps<typeof CheckListVariants> {
  options: CheckboxOption[];
  onChangeLogic?: (value: object[]) => void;
  title: string;
  listDescription: string;
  children: ReactNode;
  selectedValues?: string[];
  //   onChange: (option: any) => void;
}

const selectedValues: CheckboxOption[] = [];

export const CheckList = React.forwardRef<HTMLInputElement, CheckListProps>(
  (
    {
      variant,
      align,
      className,
      options,
      width,
      size,
      title,
      listDescription,
      onChangeLogic,
    },
    ref
  ) => {
    const [checkedOptions, setCheckedOptions] = React.useState<
      CheckboxOption[]
    >(selectedValues);

    const isOptionChecked = (optionValue: CheckboxOption) => {
      return (
        checkedOptions.filter((item) => item.value === optionValue.value)
          .length > 0
      );
    };

    const handleOnClick = ({ label, value, name }: CheckboxOption) => {
      var updatedList = [...checkedOptions];

      const checkAvailable = isOptionChecked({ label, value, name });

      if (!checkAvailable) {
        updatedList = [
          ...checkedOptions,
          { label: value, value: value, name: name },
        ];
        setCheckedOptions(updatedList);
        if (onChangeLogic) {
          onChangeLogic(updatedList);
        }
      } else {
        updatedList = checkedOptions.filter((item) => item.value !== value);
        // console.log(updatedList);

        setCheckedOptions(updatedList);
      }
    };

    return (
      <div className="s-w-full">
        {(title.length > 0 || listDescription) && (
          <div className="s-list-title-description">
            {title && <h4 className="s-list-title">{title}</h4>}
            {listDescription && <p>{listDescription}</p>}
          </div>
        )}

        {/* {title.length > 0 && <h4 className="list-title">{title}</h4>} */}
        <div
          className={cn(
            "s-checklist",
            CheckListVariants({
              align,
              className,
              variant,
              width,
              size,
            })
          )}
        >
          {options.map((option, index) => (
            <div
              className={cn(
                "s-check-option",
                isOptionChecked(option) ? "s-check-option-selected" : ""
              )}
              key={index}
              onClick={() => handleOnClick(option)}
            >
              {variant == "contained" && (
                <>
                  <span>
                    {isOptionChecked(option) ? (
                      <CheckedSquareIcon />
                    ) : (
                      <SquareIcon />
                    )}
                  </span>
                </>
              )}
              <input
                type="checkbox"
                value={option.value}
                checked={isOptionChecked(option)}
                ref={ref}
                onChange={() => {}}
                //onChange={handleCheckboxChange}
              />
              <label htmlFor={option.name}>{option.label}</label>
            </div>
          ))}
        </div>
      </div>
    );
  }
);

const SquareIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
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
