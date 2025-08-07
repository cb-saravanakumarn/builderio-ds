import React, { forwardRef } from "react";
import { ButtonProps } from "./Button.types";
import {
  buttonBaseClasses,
  buttonColorMappings,
  buttonSizeMappings,
} from "../../tokens/colors";

// Extended component type to include Builder.io settings
export interface ButtonComponent
  extends React.ForwardRefExoticComponent<
    ButtonProps & React.RefAttributes<HTMLButtonElement | HTMLAnchorElement>
  > {
  builderSettings?: any;
}

// Spinner component for loading state
const Spinner: React.FC<{ size?: "small" | "medium" | "large" }> = ({
  size = "medium",
}) => {
  const sizeClasses = {
    small: "w-4 h-4",
    medium: "w-5 h-5",
    large: "w-6 h-6",
  };

  return (
    <svg
      className={`animate-spin ${sizeClasses[size]}`}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  );
};

// Utility function to build button classes
const buildButtonClasses = (
  variant: ButtonProps["variant"] = "primary",
  size: ButtonProps["size"] = "medium",
  fullWidth: boolean = false,
  loading: boolean = false,
  disabled: boolean = false,
  className: string = ""
) => {
  const baseClasses = buttonBaseClasses;
  const colorClasses = buttonColorMappings[variant];
  const sizeClasses = buttonSizeMappings[size];

  const classes = [
    baseClasses,
    colorClasses.base,
    colorClasses.hover,
    colorClasses.active,
    colorClasses.focus,
    sizeClasses.base,
    sizeClasses.gap,
    fullWidth && "w-full",
    loading && "cursor-wait",
    (disabled || loading) && colorClasses.disabled,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return classes;
};

// Main Button Component
const ButtonComponent = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>(
  (
    {
      children,
      text,
      variant = "primary",
      size = "medium",
      disabled = false,
      loading = false,
      onClick,
      type = "button",
      className = "",
      href,
      target,
      rel,
      ariaLabel,
      fullWidth = false,
      startIcon,
      endIcon,
      ...props
    },
    ref
  ) => {
    // Determine the display text/content
    const content = children || text || "Button";

    // Build CSS classes using Tailwind utilities
    const buttonClasses = buildButtonClasses(
      variant,
      size,
      fullWidth,
      loading,
      disabled,
      className
    );

    // Common props for both button and anchor
    const commonProps = {
      className: buttonClasses,
      "aria-label": ariaLabel,
      "aria-disabled": disabled || loading,
      onClick: disabled || loading ? undefined : onClick,
      ...props,
    };

    // Render content with icons and loading state
    const renderContent = () => (
      <span className="flex items-center justify-center">
        {loading && (
          <span className="mr-2">
            <Spinner size={size} />
          </span>
        )}
        {!loading && startIcon && (
          <span
            className={`${buttonSizeMappings[size].icon} mr-2 flex items-center justify-center`}
          >
            {startIcon}
          </span>
        )}
        <span className={loading ? "opacity-70" : ""}>{content}</span>
        {!loading && endIcon && (
          <span
            className={`${buttonSizeMappings[size].icon} ml-2 flex items-center justify-center`}
          >
            {endIcon}
          </span>
        )}
      </span>
    );

    // Render as anchor if href is provided
    if (href && !disabled && !loading) {
      return (
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          target={target}
          rel={rel || (target === "_blank" ? "noopener noreferrer" : undefined)}
          {...commonProps}
        >
          {renderContent()}
        </a>
      );
    }

    // Render as button
    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        type={type}
        disabled={disabled || loading}
        {...commonProps}
      >
        {renderContent()}
      </button>
    );
  }
);

ButtonComponent.displayName = "Button";

// Cast to extended type and export
export const Button = ButtonComponent as ButtonComponent;

// Builder.io Integration Settings
Button.builderSettings = {
  name: "Button",
  inputs: [
    {
      name: "text",
      type: "text",
      defaultValue: "Click me",
      helperText: "The text to display on the button",
    },
    {
      name: "variant",
      type: "string",
      enum: ["primary", "secondary", "outline", "ghost"],
      defaultValue: "primary",
      helperText: "Visual style variant of the button",
    },
    {
      name: "size",
      type: "string",
      enum: ["small", "medium", "large"],
      defaultValue: "medium",
      helperText: "Size of the button",
    },
    {
      name: "disabled",
      type: "boolean",
      defaultValue: false,
      helperText: "Whether the button is disabled",
    },
    {
      name: "loading",
      type: "boolean",
      defaultValue: false,
      helperText: "Whether the button is in loading state",
    },
    {
      name: "fullWidth",
      type: "boolean",
      defaultValue: false,
      helperText: "Whether the button should take full width",
    },
    {
      name: "href",
      type: "url",
      helperText: "If provided, renders the button as a link",
    },
    {
      name: "target",
      type: "string",
      enum: ["_blank", "_self", "_parent", "_top"],
      defaultValue: "_self",
      helperText: "Target for the link (only used with href)",
    },
    {
      name: "ariaLabel",
      type: "text",
      helperText: "Accessibility label for screen readers",
    },
  ],
  // Builder.io specific settings
  canHaveChildren: true,
  defaultChildren: [
    {
      "@type": "@builder.io/sdk:Element",
      component: {
        name: "Text",
        options: {
          text: "Click me",
        },
      },
    },
  ],
  image:
    "https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F4c21f90f4e8c4f4b95f6c13d4b4c8c3d",
  // Override default styles to work better with Builder.io
  override: true,
  // Make it droppable for other components
  childRequirements: {
    message: "You can put any content inside this button",
    query: {},
  },
};

export default Button;
