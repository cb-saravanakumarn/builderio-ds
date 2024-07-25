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
      basic: "s-list-basic",
      menu: "s-list-menu",
    },
    padding: {
      small: "s-list-small",
      regular: "s-list-regular",
      large: "s-list-large",
    },
    labels: {
      none: "",
      inline: "s-labels-inline",
      block: " s-labels-block",
      rows: " s-labels-rows",
    },
    align: {
      left: "",
      justified: "s-justified",
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
            "s-contained-list ",
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

const CContainedListContainer: React.FC<ContainedListProps> = (props) => {
  return <ContainedList {...props} />;
};

CContainedListContainer.displayName = "CContainedList";

const ContainedHeader = ({
  className,
  children,
}: React.HtmlHTMLAttributes<HTMLDivElement>) => {
  return (
    <Primitive.div className={cn("s-list-title-description", { className })}>
      {children}
    </Primitive.div>
  );
};

const CContainedHeader: React.FC<React.HtmlHTMLAttributes<HTMLDivElement>> = (
  props
) => {
  return <ContainedHeader {...props} />;
};

CContainedHeader.displayName = "CContainedHeader";

const ContainedTitle = ({
  className,
  children,
}: React.HtmlHTMLAttributes<HTMLDivElement>) => {
  return <h4 className={cn("s-list-title", { className })}> {children}</h4>;
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
      className={cn(`s-list-items ${showSeperator && "!s-divide-y "}`, {
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
      className={`s-contained-list-layout ${
        labels === "none" ? "hover:s-bg-transparent" : " hover:s-bg-neutral-25"
      } `}
      onClick={onClick}
    >
      <div
        className={`s-contained-list-item     ${
          labels === "rows" ? " " : ""
        }  ${labels === "block" ? "s-px-0" : "s-px-0"}`}
      >
        <div className="!s-items-start">
          <div className={cn(``, CheckVariants({ align }))}>{children}</div>

          <span className="s-list-item-indicator ">
            {showIndicator && indicatorIcon && indicatorIcon}
          </span>
        </div>
      </div>
    </Primitive.div>
  );
};

export interface ContainedListLabelProps {
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
        <span className={`s-label  ${boldLabel && "s-list-label-bold"}`}>
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
      className={`s-value s-text-wrap ${
        labels === "none"
          ? "hover:!s-text-primary-500 s-cursor-pointer hover:s-underline"
          : ""
      }`}
    >
      {children}
    </span>
  );
};

type ContainedListComponaent = typeof ContainedList & {
  Header: typeof CContainedHeader;
  Title: typeof ContainedTitle;
  Description: typeof ContainedDescription;
  Item: typeof ContainedListItem;
  Items: typeof ContainedListItems;
  Label: typeof ContainedListLabel;
  Value: typeof ContainedListValue;
};

const CContainedList = CContainedListContainer as ContainedListComponaent;
CContainedList.Header = CContainedHeader;
CContainedList.Title = ContainedTitle;
CContainedList.Description = ContainedDescription;
CContainedList.Item = ContainedListItem;
CContainedList.Items = ContainedListItems;
CContainedList.Label = ContainedListLabel;
CContainedList.Value = ContainedListValue;

export {
  ContainedHeader,
  ContainedTitle,
  ContainedDescription,
  ContainedListItem,
  ContainedListItems,
  ContainedListLabel,
  ContainedListValue,
  CContainedList,
};
