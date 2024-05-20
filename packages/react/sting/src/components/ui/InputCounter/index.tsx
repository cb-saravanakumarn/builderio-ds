import * as React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { Button } from "../Button";

const InputCounterVariants = cva("s-InputCounter", {
  // Remove unwanted stuff and add missing stuff here
  variants: {
    // Make it vertical when on mobile or small screen for Responsive web
    // Style prop is a system prop
    Placement: {
      top: "s-top",
      bottom: "s-bottom",
    },
    width: {
      Small: "s-InputCounter-width-small",
      Regular: "s-InputCounter-width-regular",
      Large: "s-InputCounter-width-large",
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
      <div className="s-input-count s-input-count-regular s-max-w-md">
        <div>
          <span>
            <label>label</label>
          </span>
          <div className="s-w-full">
            <div className="s-inputfield s-inputfield-regular s-w-full">
              <input
                className="!s-w-full"
                type="number"
                placeholder=""
                value=""
              />
            </div>

            <Button variant={"neutral"}>
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
            </Button>

            <Button variant={"neutral"}>
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
            </Button>
          </div>
        </div>
        <span className="s-flex s-gap-1"></span>
      </div>
    );
  }
);

InputCounter.displayName = "InputCounter";

export { InputCounter, InputCounterVariants };
