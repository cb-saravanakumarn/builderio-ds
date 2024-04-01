import * as React from "react";
import { cva, VariantProps } from "class-variance-authority";

const InputCounterVariants = cva("InputCounter", {
  // Remove unwanted stuff and add missing stuff here
  variants: {
    // Make it vertical when on mobile or small screen for Responsive web
    // Style prop is a system prop
    Placement: {
      top: "top",
      bottom: "bottom",
    },
    width: {
      Small: "InputCounter-width-small",
      Regular: "InputCounter-width-regular",
      Large: "InputCounter-width-large",
    },
  },
  defaultVariants: {
    width: "Regular",
    Placement: "top",
  },
});

export interface InputCounterProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof InputCounterVariants> {
  children?: React.ReactNode;
}

const InputCounter = React.forwardRef<HTMLDivElement, InputCounterProps>(
  // ({ width, Placement, children }) => {
  () => {
    return (
      <div className="input-count input-count-regular max-w-md">
        <div>
          <span>
            <label>label</label>
          </span>
          <div className="w-full">
            <div className="inputfield inputfield-regular w-full">
              <input
                className="!w-full"
                type="number"
                placeholder=""
                value=""
              />
            </div>

            <button type="button" className="btn btn-neutral btn-default">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 12h-15"
                ></path>
              </svg>
            </button>
            <button type="button" className="btn btn-neutral btn-default">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <span className="flex gap-1"></span>
      </div>
    );
  }
);

InputCounter.displayName = "InputCounter";

export { InputCounter, InputCounterVariants };
