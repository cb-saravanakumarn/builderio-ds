"use client";
import React from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { CheckedCircleIcon } from "./../Icons";

const ProgressTrackerVariant = cva("", {
  variants: {
    align: {
      horizontal: "horizontal",
      vertical: "vertical",
    },
    size: {
      small: "small",
      regular: "regular",
      large: "large",
    },
    width: {
      inline: "inline",
      full: "full",
    },
    labels: {
      true: "",
    },
    number: {
      true: "",
    },
  },
});

export interface ProgressTrackerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof ProgressTrackerVariant> {
  children?: React.ReactNode;
  steps: any[];
}

let isActiveFound = false;

const ProgressTracker = React.forwardRef<HTMLDivElement, ProgressTrackerProps>(
  ({ align, size, width, labels, children, steps, ...props }, ref) => {
    return (
      <div
        className={cn(
          "progress-tracker",
          ProgressTrackerVariant({ align, size, width, labels })
        )}
        ref={ref}
        {...props}
      >
        {steps.map((value, stepIndex) => {
          const isDone = !isActiveFound && value.isActive !== true;
          if (value.isActive) isActiveFound = true;
          const isLastStep = stepIndex === steps.length - 1;

          return (
            <Step
              key={value.id}
              label={stepIndex + 1}
              description={value.description}
              showBar={isLastStep}
              isActive={value.isActive}
              isDone={isDone}
            ></Step>
          );
        })}
      </div>
    );
  }
);

ProgressTracker.displayName = "ProgressTracker";

type StepProps = {
  label: string | number;
  description: string;
  showBar: boolean;
  isActive: boolean;
  isDone: boolean;
};

const Step = ({ label, description, showBar, isActive, isDone }: StepProps) => {
  return (
    <div
      className={`progress-step ${isDone ? "done" : ""}${
        isActive ? "active" : ""
      }`}
    >
      <div>
        <div className={`progress-circle`}>
          <span className="step-label">{label}</span>
          <CheckedCircleIcon />
        </div>
        {!showBar && <div className="progress-bar"></div>}
      </div>
      <span className="step-description">{description}</span>
    </div>
  );
};

Step.displayName = "Step";

export { ProgressTracker };
