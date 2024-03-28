import React, { createContext, useContext, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { Primitive } from "@radix-ui/react-primitive";

// Define the shape of the context
interface ContainedListContextType {
  variant: "basic" | "menu" | null | undefined;
  labels?: string | null;
  padding?: string | null;
  align?: "left" | "justified" | null | undefined;
  showIndicator?: boolean;
  showSeperator?: boolean;
  boldLabel?: boolean;
}

const ContainedListContext = createContext<
  ContainedListContextType | undefined
>(undefined);

export const useContainedList = () => useContext(ContainedListContext);

// Hook to use the modal context
export function useContainedListContext() {
  const context = useContext(ContainedListContext);
  if (context === undefined) {
    throw new Error(
      "useContainedListContext must be used within a ContainedListProvider"
    );
  }
  return context;
}

// Provider component
export const ContainedListProvider: React.FC<{
  children: ReactNode;
  value: ContainedListContextType;
}> = ({ children, ...props }) => {
  return (
    <ContainedListContext.Provider {...props}>
      {children}
    </ContainedListContext.Provider>
  );
};

const CheckVariants = cva("", {
  variants: {
    variant: {
      basic: "list-basic",
      menu: "list-menu",
    },
    padding: {
      small: "list-small",
      regular: "list-regular",
      large: "list-large",
    },
    labels: {
      none: "",
      inline: "labels-inline",
      block: " labels-block",
      rows: " labels-rows",
    },
    align: {
      left: "",
      justified: "justified",
    },
  },
  defaultVariants: {
    variant: "basic",
    padding: "regular",

    align: "left",
  },
});

export interface DatasourceProps {
  label: string;
  value: string | React.ReactNode;
  action?: any;
  indicatorIcon?: React.ReactNode;
}

interface ContainedListProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof CheckVariants> {
  children?: React.ReactNode;
  header: string;
  description: string;
  showIndicator?: boolean;
  showSeperator?: boolean;
  boldLabel?: boolean;
}

export const ContainedList = React.forwardRef<
  HTMLDivElement,
  ContainedListProps
>(
  (
    {
      variant,
      padding,
      header,
      className,
      description,
      labels,
      align,
      showIndicator = true,
      showSeperator = true,
      children,
      boldLabel,
    },
    ref
  ) => {
    return (
      <ContainedListProvider
        value={{
          variant,
          labels,
          padding,
          showIndicator,
          align,
          showSeperator,
          boldLabel,
        }}
      >
        <div
          ref={ref}
          className={cn(
            "contained-list ",
            CheckVariants({
              variant,
              padding,
              labels,
              className,
            })
          )}
        >
          {header.length > 0 && (
            <Primitive.div className="list-title-description">
              <h4 className="list-title !-ml-0"> {header}</h4>
              {description.length > 0 && <p>{description}</p>}
            </Primitive.div>
          )}
          <div className={`list-items ${showSeperator && "!divide-y "} `}>
            {children}
          </div>
        </div>
      </ContainedListProvider>
    );
  }
);

const ContainedHeader = ({
  className,
  children,
}: React.HtmlHTMLAttributes<HTMLDivElement>) => {
  return (
    <Primitive.div className={cn("contained-list-header", { className })}>
      {children}
    </Primitive.div>
  );
};

interface ContainedListItemProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof CheckVariants> {
  children?: React.ReactNode;
  header?: string;
  description?: string;
  showIndicator?: boolean;
  asChild?: boolean;
  // action?: () => void;
  onClick?: () => void;
  value?: string | React.ReactNode;
  indicatorIcon?: React.ReactNode;
  label?: string;
}

const ContainedListItem = ({
  // action,
  onClick,
  value,
  label,
  indicatorIcon,

  children,
}: ContainedListItemProps) => {
  const { labels, align, showIndicator, boldLabel } = useContainedListContext();

  return (
    <Primitive.div
      asChild
      className={`contained-list-layout ${
        labels === "none" ? "hover:bg-transparent" : " hover:bg-neutral-25"
      } `}
      onClick={onClick}
    >
      <div
        className={`contained-list-item     ${labels === "rows" ? " " : ""}  ${
          labels === "block" ? "px-0" : "px-0"
        }`}
      >
        <div className=" !items-start">
          <div className={cn(``, CheckVariants({ align }))}>
            {labels != "none" && (
              <span className={`label  ${boldLabel && "list-label-bold"}`}>
                {label}
              </span>
            )}
            <span
              className={`value text-wrap px-2 ${
                labels === "none"
                  ? "hover:!text-primary-500 cursor-pointer hover:underline"
                  : ""
              }`}
            >
              {value}
            </span>
          </div>

          <span className="list-item-indicator ">
            {showIndicator && indicatorIcon && indicatorIcon}
          </span>
        </div>

        {children}
      </div>
    </Primitive.div>
  );
};

export { ContainedHeader, ContainedListItem };
