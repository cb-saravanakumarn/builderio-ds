import React, { useState, useEffect } from "react";
import { cva, VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

export const toggleVariants = cva("toggle-container", {
  variants: {
    size: {
      small: "small",
      regular: "regular",
    },
    state: {
      disabled: "disabled",
      enabled: "enabled",
    },
  },
  defaultVariants: {
    size: "small",
    state: "enabled",
  },
});

export interface ToggleProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof toggleVariants> {
  children?: React.ReactNode;
  checked?: boolean;
  addons?: [string];
  title?: string;
  accompaniedCopy?: string;
}

export const Toggle = React.forwardRef<HTMLDivElement, ToggleProps>(
  ({
    size,
    title,
    accompaniedCopy,
    onChange,
    state,
    checked,
    className,
    addons = ["something"],
  }) => {
    const [isChecked, setIsChecked] = useState(checked);
    useEffect(() => {
      setIsChecked(checked);
    }, [checked]);

    const handleonChange = (e: any) => {
      onChange && onChange(e.target.checked);
      setIsChecked(e.target.checked);
    };
    return (
      <>
        {(title || accompaniedCopy) && (
          <div className="list-title-description">
            {title && <h4 className="list-title">{title}</h4>}
            {accompaniedCopy && <p>{accompaniedCopy}</p>}
          </div>
        )}
        <div className={cn(toggleVariants({ size, state }), className)}>
          <label className={`toggle-wrapper ${isChecked ? "on" : "off"}`}>
            <input
              type="checkbox"
              className="toggle-input"
              disabled={state === "disabled"}
              onChange={(e) => handleonChange(e)}
              checked={isChecked}
            />
            <span className="toggle-slider"></span>
          </label>
          {addons.includes("action-text") && (
            <span className="toggle-action-text">
              {isChecked ? "On" : "Off"}
            </span>
          )}
        </div>
      </>
    );
  }
);
