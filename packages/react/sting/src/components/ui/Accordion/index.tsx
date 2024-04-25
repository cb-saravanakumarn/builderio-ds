import React, { createContext, useContext, useState } from "react";
import { cva, VariantProps } from "class-variance-authority";
import * as RadixAccordion from "@radix-ui/react-accordion";
import { ChevronDownIcon, ChevronUpIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";

interface AccordionContextValue {
  openItem: string | null;
  setOpenItem: (itemId: string | null) => void;
}

const AccordionContext = createContext<AccordionContextValue | undefined>(
  undefined
);

export const useAccordionContext = () => {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error(
      "useAccordionContext must be used within an AccordionProvider"
    );
  }
  return context;
};

export const AccordionProvider: React.FC<{
  children?: React.ReactNode;
  defaultvalue?: string | null;
}> = ({ children }) => {
  const [openItem, setOpenItem] = useState<string | null>(null);

  return (
    <AccordionContext.Provider value={{ openItem, setOpenItem }}>
      {children}
    </AccordionContext.Provider>
  );
};

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
    VariantProps<typeof accordionItemVariants>,
    RadixAccordion.AccordionItemProps {
  children?: React.ReactNode;
}

interface AccordionProps
  extends React.HTMLAttributes<HTMLDivElement>,
    RadixAccordion.CollapsibleProps,
    VariantProps<typeof accordionVariants>,
    Omit<RadixAccordion.AccordionImplSingleProps, `defaultValue` | `dir`> {
  children?: React.ReactNode;
  size?: "small" | "regular" | "large";
  border?: "border" | "no-border";
  defaultValue?: string;
  type?:
    | RadixAccordion.AccordionSingleProps["type"]
    | RadixAccordion.AccordionMultipleProps["type"];
}

export const Accordion: React.FC<AccordionProps> = ({
  children,
  size,
  border,
  className,
  defaultValue,
  type,
  value = "",
  ...rest
}) => {
  const handleValueChange = (value: string) => {
    console.log(value, "proq");
  };

  return (
    <AccordionProvider>
      <RadixAccordion.Root
        onValueChange={handleValueChange}
        className={`accordion ${cn(accordionVariants({ border }), className)}`}
        {...rest}
        type="single"
        dir="ltr"
        collapsible
      >
        {children}
      </RadixAccordion.Root>
    </AccordionProvider>
  );
};

export const AccordionItem = React.forwardRef<
  HTMLDivElement,
  AccordionItemProps
>(({ title, children, size, className, ...props }, forwardRef) => {
  return (
    <RadixAccordion.Item
      className={cn(accordionItemVariants({ size }), className)}
      {...props}
      ref={forwardRef}
    >
      {children}
    </RadixAccordion.Item>
  );
});

interface AccordionTriggerProps {
  children?: React.ReactNode;
}

export const AccordionTrigger = React.forwardRef<
  HTMLDivElement,
  AccordionTriggerProps & { value: string }
>(({ children, value, ...props }) => {
  const { openItem, setOpenItem } = useAccordionContext();

  const isOpen = openItem === value;

  const handleToggle = () => {
    setOpenItem(isOpen ? null : value);
  };

  return (
    <RadixAccordion.Trigger
      className="accordion-header"
      onClick={handleToggle}
      {...props}
    >
      {children}
      <span>{isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}</span>
    </RadixAccordion.Trigger>
  );
});

interface AccordionContentProps {
  children?: React.ReactNode;
}

export const AccordionContent = React.forwardRef<
  HTMLDivElement,
  AccordionContentProps
>(({ children }) => {
  return (
    <RadixAccordion.Content className="accordion-content">
      {children}
    </RadixAccordion.Content>
  );
});

interface AccordionContentProps
  extends RadixAccordion.AccordionHeaderProps,
    React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export const AccordionHeader: React.FC<AccordionContentProps> = ({
  children,
}) => {
  return <RadixAccordion.Header>{children}</RadixAccordion.Header>;
};
