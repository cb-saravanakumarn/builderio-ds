import React from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const LoaderVariant = cva("", {
  variants: {
    size: {
      small: "small",
      regular: "regular",
      large: "large",
    },
  },
});

export interface LoaderProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof LoaderVariant> {
  children: string;
  text?: string;
}

export const Loader = React.forwardRef<HTMLDivElement, LoaderProps>(
  ({ size, text, ...props }, ref) => {
    return (
      <div
        {...props}
        ref={ref}
        className={cn(
          "loader",
          LoaderVariant({
            size,
          })
        )}
      >
        <div className="loader-ring"></div>
        {/* {addons.includes('text') && <span className="loader-text">Loading ...</span>} */}
        {text && text.length > 0 && <span className="loader-text">{text}</span>}
      </div>
    );
  }
);
