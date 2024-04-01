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
  showIndicator?: Boolean;
  showSeperator?: Boolean;
  boldLabel?: Boolean;
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

export interface ContainedListProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof CheckVariants> {
  children?: React.ReactNode;
  header?: string;
  description?: string;
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
      className,
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
          {children}
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
    <Primitive.div className={cn("list-title-description", { className })}>
      {children}
    </Primitive.div>
  );
};

const ContainedTitle = ({
  className,
  children,
}: React.HtmlHTMLAttributes<HTMLDivElement>) => {
  return (
    <h4 className={cn("list-title !-ml-0", { className })}> {children}</h4>
  );
};

const ContainedDescription = ({
  className,
  children,
}: React.HtmlHTMLAttributes<HTMLDivElement>) => {
  return <p className={cn("", { className })}>{children}</p>;
};

export interface ContainedListItemProps
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

const ContainedListItems = ({
  className,
  children,
}: React.HtmlHTMLAttributes<HTMLDivElement>) => {
  const { showSeperator } = useContainedListContext();
  return (
    <div
      className={cn(`list-items ${showSeperator && "!divide-y "}`, {
        className,
      })}
    >
      {children}
    </div>
  );
};

const ContainedListItem: React.FC<ContainedListItemProps> = ({
  onClick,

  indicatorIcon,
  asChild,
  children,
}: ContainedListItemProps) => {
  const { labels, align, showIndicator } = useContainedListContext();

  return (
    <Primitive.div
      asChild={asChild}
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
          <div className={cn(``, CheckVariants({ align }))}>{children}</div>

          <span className="list-item-indicator ">
            {showIndicator && indicatorIcon && indicatorIcon}
          </span>
        </div>
      </div>
    </Primitive.div>
  );
};

interface ContainedListLabelProps {
  children: React.ReactNode;
  boldLabel?: boolean;
}

const ContainedListLabel: React.FC<ContainedListLabelProps> = ({
  children,
  boldLabel,
}) => {
  const { labels } = useContainedListContext();

  return (
    <>
      {labels !== "none" && (
        <span className={`label  ${boldLabel && "list-label-bold"}`}>
          {children}
        </span>
      )}
    </>
  );
};

interface ContainedListValueProps {
  children: React.ReactNode;
  labels?: string;
}
const ContainedListValue: React.FC<ContainedListValueProps> = ({
  children,
  labels,
}) => {
  return (
    <span
      className={`value text-wrap px-2 ${
        labels === "none"
          ? "hover:!text-primary-500 cursor-pointer hover:underline"
          : ""
      }`}
    >
      {children}
    </span>
  );
};

export {
  ContainedHeader,
  ContainedTitle,
  ContainedDescription,
  ContainedListItem,
  ContainedListItems,
  ContainedListLabel,
  ContainedListValue,
};
