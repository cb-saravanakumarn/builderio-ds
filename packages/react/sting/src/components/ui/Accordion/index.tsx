import React, { useState } from "react";
import { cva, VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

export const accordionItemVariants = cva("accordion-item", {
  variants: {
    size: {
      small: "accordion-small",
      regular: "accordion-regular",
      large: "accordion-large",
    },
  },
  defaultVariants: {
    size: "small",
  },
});

export const accordionVariants = cva("accordion", {
  variants: {
    border: { border: "container-border", "no-border": "" },
    size: {
      small: "accordion-small",
      regular: "accordion-regular",
      large: "accordion-large",
    },
  },
  defaultVariants: {
    border: "border",
    size: "small",
  },
});

export interface AccordionItemProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof accordionItemVariants> {
  children?: React.ReactNode;
}

export const ChevronUpIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path
      fill-rule="evenodd"
      d="M11.47 7.72a.75.75 0 011.06 0l7.5 7.5a.75.75 0 11-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 01-1.06-1.06l7.5-7.5z"
      clip-rule="evenodd"
    />
  </svg>
);

export const ChevronDownIcon = () => (
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
      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
    />
  </svg>
);

export const AccordionItem = React.forwardRef<
  HTMLSpanElement,
  AccordionItemProps
>(({ title, children, size, className, ...props }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={cn(accordionItemVariants({ size }), className)} {...props}>
      <div className="accordion-header" onClick={() => setIsOpen(!isOpen)}>
        {title}
        <span>{isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}</span>
      </div>
      {isOpen && <div className={`accordion-content`}>{children}</div>}
    </div>
  );
});

interface AccordionProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof accordionVariants> {
  children?: React.ReactNode;
}

export const Accordion = React.forwardRef<HTMLDivElement, AccordionProps>(
  ({ children, size, border, className, ...rest }, ref) => {
    return (
      <div
        className={`accordion ${cn(accordionVariants({ border }), className)}`}
        {...rest}
        ref={ref}
      >
        {children}
      </div>
    );
  }
);
