"use client";
import React, { createContext, useContext } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { CheckedCircleIcon } from "../Icons";

type ThemeType = "neutral" | "primary" | "brand";

interface ProgressTrackerContextType {
  align?: string | null;
  size?: string | null;
  width?: string | null;
  labels?: boolean | null;
  number?: string | null;
  themes?: ThemeType | null;
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
    <ProgressTrackerContext.Provider value={props.value}>
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
    themes: {
      neutral: "s-neutral",
      primary: "s-primary",
      brand: "s-brand",
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
    themes: "neutral",
  },
});

export interface ProgressTrackerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof ProgressTrackerVariant> {
  children?: React.ReactNode;
}

const CProgressTrackerRoot = React.forwardRef<
  HTMLDivElement,
  ProgressTrackerProps
>(({ align, size, width, themes = "neutral", labels, children }, ref) => {
  return (
    <ProgressTrackerProvider value={{ align, size, width, themes, labels }}>
      <div
        className={cn(
          "s-progress-tracker",
          ProgressTrackerVariant({ align, size, width, labels, themes })
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
  const { themes } = useProgressTrackerContext();

  const status = isDone ? 's-done' : isActive ? 's-active' : 's-todo';
  const themeClass = themes ? `s-${themes}` : '';

  return (
    <div className={cn("s-progress-step", status, themeClass)}>
      <div>
        <div className="s-progress-circle">
          <span className="s-step-label">{label}</span>
          <CheckedCircleIcon />
        </div>
        {showBar && <div className="s-progress-bar"></div>}
      </div>
      {
        <span className="s-step-description">
          <div className="s-flex s-flex-col s-space-y-1 s--mt-1 s-pb-2">
            {children}
          </div>
        </span>
      }
    </div>
  );
};

CStep.displayName = "CStep";

type ProgressTrackerTitleProps = {
  children?: React.ReactNode;
};

const CProgressTrackerTitle = ({ children }: ProgressTrackerTitleProps) => {
  return <span>{children}</span>;
};
CProgressTrackerTitle.display = "CProgressTrackerTitle";

type ProgressTrackerComponent = typeof CProgressTrackerRoot & {
  Step: typeof CStep;
  Title: typeof CProgressTrackerTitle;
};

const CProgressTracker = CProgressTrackerRoot as ProgressTrackerComponent;
CProgressTracker.Step = CStep;
CProgressTracker.Title = CProgressTrackerTitle;

export { CProgressTracker };
