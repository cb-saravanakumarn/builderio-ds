import React, {
  useEffect,
  useState,
  createContext,
  useContext,
  ReactNode,
} from "react";
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
    variant: "basic",
    size: "regular",
    width: "inline",
    align: "horizontal",
  },
});

interface SCheckListContextValue {
  /**
   * Function called when an option is selected/deselected
   */
  onChange: (value: string) => void;
  /**
   * Array of currently selected option values
   */
  checkedOptions: string[];
  /**
   * The variant of the checklist
   */
  variant: "basic" | "contained" | null;
  /**
   * Whether the entire checklist is disabled
   */
  isDisabled: boolean;
}

const SCheckListContext = createContext<SCheckListContextValue>({
  onChange: (value: string) => {
    console.log(value);
  },
  checkedOptions: [],
  variant: "basic",
  isDisabled: false,
});

export interface SCheckListProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof SCheckListVariants> {
  /**
   * Title displayed above the checklist
   */
  title?: string;
  /**
   * Description text for the checklist
   */
  listDescription?: string;
  /**
   * Function called when selection changes with array of selected values
   */
  onChangeLogic?: (value: string[]) => void;
  /**
   * Child components (typically SCheckList.Item)
   */
  children: ReactNode;
  /**
   * Array of selected values (controlled component)
   */
  selectedValues?: string[];
}

/**
 * SCheckList is a component for displaying a group of selectable checkbox options.
 * It supports both controlled and uncontrolled usage patterns.
 */
const SCheckList = React.forwardRef<HTMLDivElement, SCheckListProps>(
  (
    {
      variant = "basic",
      align,
      className,
      width,
      size,
      title = "",
      disabled = false,
      listDescription = "",
      onChangeLogic,
      children,
      selectedValues = [],
      ...props
    },
    ref
  ) => {
    // Internal state for when the component is used in an uncontrolled fashion
    const [internalSelectedValues, setInternalSelectedValues] =
      useState<string[]>(selectedValues);

    // Keep internal state in sync with prop when it changes
    useEffect(() => {
      setInternalSelectedValues(selectedValues);
    }, [selectedValues]);

    const handleOnClick = (value: string) => {
      // Don't process clicks if the checklist is disabled
      if (disabled) return;

      // Create a copy of the selected values
      const currentValues = [...internalSelectedValues];
      const isChecked = currentValues.includes(value);

      // Update the array based on the clicked item
      const updatedValues = isChecked
        ? currentValues.filter((item) => item !== value)
        : [...currentValues, value];

      // Update internal state
      setInternalSelectedValues(updatedValues);

      // If there's a change handler, call it
      if (onChangeLogic) {
        onChangeLogic(updatedValues);
      }
    };

    // Determine which values to use for checked state - use internal state
    // This ensures the component will work even if the parent doesn't update properly
    const effectiveSelectedValues = internalSelectedValues;

    return (
      <SCheckListContext.Provider
        value={{
          onChange: handleOnClick,
          checkedOptions: effectiveSelectedValues,
          variant,
          isDisabled: disabled,
        }}
      >
        <div className="s-w-full" ref={ref} {...props} aria-disabled={disabled}>
          {(title || listDescription) && (
            <div className="s-list-title-description">
              {title && <h4 className="s-list-title">{title}</h4>}
              {listDescription && (
                <p className="s-list-description">{listDescription}</p>
              )}
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
            role="group"
            aria-labelledby={title ? `${title}-label` : undefined}
          >
            {children}
          </div>
        </div>
      </SCheckListContext.Provider>
    );
  }
);

SCheckList.displayName = "SCheckList";

export interface SCheckListItemProps
  extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The value of the checkbox
   */
  value: string;
  /**
   * The content to display next to the checkbox
   */
  children: ReactNode;
  /**
   * Whether the checkbox is disabled
   */
  disabled?: boolean;
}

/**
 * Individual item in a checklist
 */
const SCheckListItem = React.forwardRef<HTMLDivElement, SCheckListItemProps>(
  ({ value, children, disabled = false, ...props }, ref) => {
    const { onChange, checkedOptions, variant, isDisabled } =
      useContext(SCheckListContext);
    const isChecked = checkedOptions.includes(value);
    const id = `checklist-item-${value}`;

    // Item is disabled if either the item itself or the parent checklist is disabled
    const itemDisabled = disabled || isDisabled;

    const handleItemClick = (e: React.MouseEvent) => {
      // Prevent event bubbling
      e.preventDefault();

      if (!itemDisabled) {
        onChange(value);
      }
    };

    return (
      <div
        className={cn(
          "s-check-option",
          isChecked ? "s-check-option-selected" : "",
          variant === "contained" ? "s-checklist-contained" : "",
          itemDisabled ? "s-checklist-item-disabled" : "",
          !itemDisabled && "s-cursor-pointer"
        )}
        onClick={handleItemClick}
        ref={ref}
        role="checkbox"
        aria-checked={isChecked}
        aria-disabled={itemDisabled}
        tabIndex={itemDisabled ? -1 : 0}
        onKeyDown={(e) => {
          if ((e.key === " " || e.key === "Enter") && !itemDisabled) {
            e.preventDefault();
            onChange(value);
          }
        }}
        data-disabled={itemDisabled ? "true" : undefined}
        {...props}
      >
        {variant === "contained" ? (
          <CheckboxPrimitive.Root
            checked={isChecked}
            className="s-checkbox-root s-flex"
            disabled={itemDisabled}
            id={id}
            // Remove any onClick handlers from the checkbox itself to avoid event conflicts
            onClick={(e) => e.stopPropagation()}
          >
            <div className="s-h-large s-w-large">
              {isChecked ? <CheckedSquareIcon /> : <SquareIcon />}
            </div>
          </CheckboxPrimitive.Root>
        ) : (
          <input
            id={id}
            type="checkbox"
            value={value}
            checked={isChecked}
            readOnly
            disabled={itemDisabled}
            className={cn("s-checklist-input")}
            aria-hidden="true"
            // Prevent clicking on the input from triggering two events
            onClick={(e) => e.stopPropagation()}
          />
        )}
        <label
          htmlFor={id}
          className="s-checklist-label"
          // Prevent clicking on the label from triggering the native checkbox behavior
          onClick={(e) => e.preventDefault()}
        >
          {children}
        </label>
      </div>
    );
  }
);

SCheckListItem.displayName = "SCheckListItem";

SCheckList.Item = SCheckListItem;

export { SCheckList, SCheckListVariants };

const SquareIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className="s-w-4 s-h-4"
    aria-hidden="true"
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
    aria-hidden="true"
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
