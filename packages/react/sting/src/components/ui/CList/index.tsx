import { cn } from "@/lib/utils";
import { Primitive } from "@radix-ui/react-primitive";
import { cva, VariantProps } from "class-variance-authority";
import React, { createContext } from "react";

type CListContextType = {
  variant: "menu" | null;
  padding: "small" | "regular" | "large" | null;
  link: boolean;
  align: "left" | "justified" | null;
  seperator: boolean | null;
};

const CListContext = createContext<CListContextType | undefined>(undefined);
export const useCList = () => React.useContext(CListContext);

export const useCListContext = () => {
  const context = React.useContext(CListContext);
  if (context === undefined) {
    throw new Error(
      "useContainedListContext must be used within a ContainedListProvider"
    );
  }
  return context;
};

const CListVariants = cva("c-list", {
  variants: {
    variant: {
      menu: "list-menu",
    },
    link: {
      true: "c-link",
    },
    padding: {
      small: "list-small",
      regular: "list-regular",
      large: "list-large",
    },
    align: {
      left: "",
      justified: "justified",
    },
  },
  defaultVariants: {
    variant: "menu",
    padding: "regular",
    align: "left",
    link: false,
  },
});

type CListProps = {
  childern: React.ReactNode;
  seperator?: boolean;
} & VariantProps<typeof CListVariants> &
  React.HTMLAttributes<HTMLDivElement>;

export const CList = React.forwardRef<HTMLDivElement, CListProps>(
  ({ childern, variant, padding, align, seperator, link, ...props }, ref) => {
    return (
      <Primitive.div
        className={cn(CListVariants({ variant, padding, link, align }))}
        ref={ref}
        {...props}
      >
        {/* title */}
        <Primitive.h3 className="list-title">Title</Primitive.h3>
        {/* description */}
        <div className=" list-title-description">description</div>
        {/* items */}
        <div className=" list-items">
          {/* item */}
          <div className={`c-list-layout ${seperator && "divide-y"}`}>
            <div className="c-list-item">
              <div className="value">Valie</div>
            </div>
            <div className="c-list-item">
              <div className="value">Valie</div>
            </div>
            <div className="c-list-item">
              <div className="value">Valie</div>
            </div>
          </div>
        </div>
      </Primitive.div>
    );
  }
);
