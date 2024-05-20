import * as React from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { IconMap, AlarmIcon } from "../Icons";

// todo add a action button on input field variant

const InputGroupVariant = cva("", {
  variants: {
    variant: {
      input: "s-inputfield",
      search: "s-inputfield",
    },
    label: {
      default: "",
      hide: "",
      inline: "s-inputfield-inline-label",
    },
    inputSize: {
      regular: "s-inputfield-regular",
      large: "s-inputfield-large",
    },
    disabled: {
      true: "s-inputfield-disabled",
    },
    error: {
      true: "s-inputfield-error",
    },
    withIcon: {
      true: "s-inputfield-with-icon",
    },
    reset: {
      true: "",
    },
  },
  compoundVariants: [
    {
      variant: "search",
      error: false,
      label: "hide",
    },
  ],
  defaultVariants: {
    variant: "input",
    inputSize: "regular",
    label: "hide",
  },
});

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof InputGroupVariant> {
  // children: React.ReactNode;
  messageText?: string | null;
  labelText?: string;
  inputWidth?: string;
  disabled?: boolean;
  iconName?: any;
  onChangeLogic?: (value: string) => void;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      value = "",
      className,
      variant,
      onChangeLogic,
      label,
      labelText,
      inputSize,
      inputWidth,
      disabled,
      messageText,
      error,
      withIcon,
      iconName,
      reset,
      readOnly,
      ...props
    },
    ref
  ) => {
    const [localValue, setLocalValue] = useState(value || "");

    const resetInput = (
      event: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
      // Your code here
      event.stopPropagation();

      setLocalValue("");
    };
    const search = variant === "search";

    const selectedIcon = withIcon ? IconMap[iconName] : null;

    React.useEffect(() => {
      setLocalValue(value);
    }, [value]);

    // console.log('icon ', selectedIcon);

    return (
      <div
        className={cn(
          InputGroupVariant({
            variant,
            label,
            disabled,
            inputSize,
            error,
            withIcon,
          }),
          className
        )}
      >
        <div>
          {label !== "hide" && <InputLabel>{labelText}</InputLabel>}

          {withIcon && !search && (
            <span className="s-icon">{selectedIcon}</span>
          )}
          {withIcon && search && (
            <span className="s-icon">
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
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </span>
          )}
          <div className="s-relative">
            <input
              className={cn(
                "s-input-field",
                InputGroupVariant({ inputSize }),
                className
              )} // Add inputSize to class names
              style={{ width: inputWidth }} // Apply the width directly via inline style
              value={localValue}
              onChange={(e) => {
                setLocalValue(e.target.value);
                if (onChangeLogic) onChangeLogic(e.target.value);
              }}
              ref={ref}
              {...props}
              disabled={disabled}
              readOnly={readOnly}
            />
            {reset && localValue && (
              <button
                type="button"
                className="s-reset-icon"
                onClick={resetInput}
              >
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
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            )}
          </div>
        </div>

        {messageText && messageText.length > 0 && !error && (
          <InputMessage>{messageText}</InputMessage>
        )}
        {error && <InputError>{messageText}</InputError>}
      </div>
    );
  }
);

Input.displayName = "InputField";

//input message
export interface InputMessageProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const InputMessage = React.forwardRef<HTMLSpanElement, InputMessageProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <span className="s-input-message" {...props} ref={ref}>
        {children}
      </span>
    );
  }
);

InputMessage.displayName = "InputMessage";

//input label
export interface InputLabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode;
}

const InputLabel = React.forwardRef<HTMLLabelElement, InputLabelProps>(
  ({ children, ...props }, ref) => {
    return (
      <span>
        <label className="s-input-label" {...props} ref={ref}>
          {children}
        </label>
      </span>
    );
  }
);

InputLabel.displayName = "InputLabel";

export interface InputErrorProps
  extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode;
}

const InputError = React.forwardRef<HTMLDivElement, InputErrorProps>(
  ({ children }, ref) => {
    return (
      <div className="s-flex s-gap-1 s-items-center" ref={ref}>
        <span className="s-icon s-error-icon">
          <AlarmIcon />
        </span>
        <span className="s-input-message s-error-message">{children}</span>
      </div>
    );
  }
);

InputError.displayName = "InputError";

// export interface InputFieldProps
//   extends React.InputHTMLAttributes<HTMLInputElement>,
//     VariantProps<typeof InputGroupVariant> {
//   children: React.ReactNode;
//   disabled?: boolean;
// }

const SearchField = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      variant,

      inputSize,

      disabled,

      error,
      ...props
    },
    ref
  ) => {
    return (
      <div
        className={cn(
          InputGroupVariant({
            variant,

            disabled,
            inputSize,
          })
        )}
      >
        <div>
          <div className="s-relative">
            <input
              className={cn("", className)}
              ref={ref}
              {...props}
              disabled={disabled}
            />
          </div>
        </div>
      </div>
    );
  }
);

export { Input, InputLabel, InputMessage, InputError, SearchField };
