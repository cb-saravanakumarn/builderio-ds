"use client";
import React, { createContext, useContext } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { CheckedCircleIcon } from "../Icons";

interface ProgressTrackerContextType {
  align?: string | null;
  size?: string | null;
  width?: string | null;
  labels?: boolean | null;
  number?: string | null;
  active?: string | null;
}

const ProgressTrackerContext = createContext<
  ProgressTrackerContextType | undefined
>(undefined);

export const useProgressTracker = () => useContext(ProgressTrackerContext);

export const useProgressTrackerContext = () => {
  const context = useContext(ProgressTrackerContext);
  if (context === undefined) {
    throw new Error(
      "useProgressTrackerContext must be used within a ProgressTrackerProvider"
    );
  }
  return context;
};

export const ProgressTrackerProvider: React.FC<{
  children: React.ReactNode;
  value: ProgressTrackerContextType;
}> = ({ children, ...props }) => {
  return (
    <ProgressTrackerContext.Provider {...props}>
      {children}
    </ProgressTrackerContext.Provider>
  );
};

const ProgressTrackerVariant = cva("", {
  variants: {
    align: {
      horizontal: "s-horizontal",
      vertical: "s-vertical",
    },
    size: {
      small: "s-small",
      regular: "s-regular",
      large: "s-large",
    },
    width: {
      inline: "s-minimum",
      full: "s-full",
    },
    labels: {
      true: "",
    },
    active: {
      primary: "s-active",
      brand: "s-brand-active",
    },
    number: {
      true: "",
    },
  },
  defaultVariants: {
    align: "horizontal",
    size: "small",
    width: "full",
    labels: false,
    number: false,
    active: "primary",
  },
});

export interface ProgressTrackerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof ProgressTrackerVariant> {
  children?: React.ReactNode;
}

//let isActiveFound = false;

const CProgressTrackerRoot = React.forwardRef<
  HTMLDivElement,
  ProgressTrackerProps
>(({ align, size, width, active = "primary", labels, children }, ref) => {
  console.log("ProgressTracker", align, size, width, active, labels);
  //isActiveFound = false; // Resetting for each render
  return (
    <ProgressTrackerProvider value={{ align, size, width, active, labels }}>
      <div
        className={cn(
          "s-progress-tracker",
          ProgressTrackerVariant({ align, size, width, labels })
        )}
        ref={ref}
      >
        {children}
      </div>
    </ProgressTrackerProvider>
  );
});

CProgressTrackerRoot.displayName = "CProgressTracker";

type StepProps = {
  label?: string | number;
  description?: React.ReactNode;
  children?: React.ReactNode;
  showBar: boolean;
  isActive?: boolean;
  isDone?: boolean;
};

const CStep = ({ label, children, showBar, isActive, isDone }: StepProps) => {
  const { active } = useProgressTrackerContext();

  console.log("active", active);
  const activeClass = active === "primary" ? "s-active" : "s-brand-active";
  return (
    <div
      className={`s-progress-step ${isDone ? "s-done" : ""} ${
        isActive ? `${activeClass}` : ""
      }`}
    >
      <div>
        <div className="s-progress-circle">
          <span className="s-step-label">{label}</span>
          <CheckedCircleIcon />
        </div>
        {showBar && <div className="s-progress-bar"></div>}
      </div>
      {<span className="s-step-description">{children}</span>}
    </div>
  );
};

CStep.displayName = "CStep";

type ProgressTrackerComponent = typeof CProgressTrackerRoot & {
  Step: typeof CStep;
};

const CProgressTracker = CProgressTrackerRoot as ProgressTrackerComponent;
CProgressTracker.Step = CStep;

export { CProgressTracker };
