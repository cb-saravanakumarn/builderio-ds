import React, { forwardRef } from "react";
import { ButtonProps } from "./Button.types";
import "./Button.styles.css";

// Extended component type to include Builder.io settings
export interface ButtonComponent
  extends React.ForwardRefExoticComponent<
    ButtonProps & React.RefAttributes<HTMLButtonElement | HTMLAnchorElement>
  > {
  builderSettings?: any;
}

// Spinner component for loading state
const Spinner: React.FC = () => (
  <span className="button__spinner" aria-hidden="true" />
);

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

    // Build CSS classes
    const classes = [
      "button",
      `button--${variant}`,
      `button--${size}`,
      loading && "button--loading",
      fullWidth && "button--full-width",
      className,
    ]
      .filter(Boolean)
      .join(" ");

    // Common props for both button and anchor
    const commonProps = {
      className: classes,
      "aria-label": ariaLabel,
      "aria-disabled": disabled || loading,
      onClick: disabled || loading ? undefined : onClick,
      ...props,
    };

    // Render content with icons and loading state
    const renderContent = () => (
      <span className="button__content">
        {loading && <Spinner />}
        {!loading && startIcon && (
          <span className="button__icon">{startIcon}</span>
        )}
        {content}
        {!loading && endIcon && <span className="button__icon">{endIcon}</span>}
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
