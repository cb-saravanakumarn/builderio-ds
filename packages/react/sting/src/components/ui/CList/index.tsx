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

const CListVariants = cva("s-list", {
  variants: {
    variant: {
      menu: "s-list-menu",
    },
    link: {
      true: "s-link",
    },
    padding: {
      small: "s-list-small",
      regular: "s-list-regular",
      large: "s-list-large",
    },
    align: {
      left: "",
      justified: "s-justified",
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

export const CListProvider: React.FC<{
  cildren: React.ReactNode;
  vlaue: CListContextType;
}> = ({ children, ...props }: any) => {
  return <CListContext.Provider {...props}>{children}</CListContext.Provider>;
};

// type CListItemProps = {
//   // chidren: React.ReactNode;
//   // variant: string;
//   // padding: string;
//   // aliign: string;
//   // seperator: string;
//   // link: string;
// }& ;

export const CList = React.forwardRef<HTMLDivElement, CListProps>(
  ({ childern, variant, padding, align, seperator, link, ...props }, ref) => {
    return (
      <Primitive.div
        className={cn(CListVariants({ variant, padding, link, align }))}
        ref={ref}
        {...props}
      >
        <CListHeader>
          <CListTitle>Title</CListTitle>
          <CListDescription>Description</CListDescription>
        </CListHeader>

        {/* items */}
        <CListItems>
          {/* item */}
          <div className={`s-list-layout ${seperator && "s-divide-y"}`}>
            <div className="s-list-item">
              <div className="value">Valie</div>
            </div>
            <div className="s-list-item">
              <div className="s-value">Valie</div>
            </div>
            <div className="s-list-item">
              <div className="s-value">Valie</div>
            </div>
          </div>
        </CListItems>
      </Primitive.div>
    );
  }
);

const CListHeader = ({ children }: React.HTMLAttributes<HTMLDivElement>) => {
  return <Primitive.div>{children}</Primitive.div>;
};

const CListTitle = ({ children }: React.HTMLAttributes<HTMLDivElement>) => {
  return <Primitive.h3 className="s-list-title">{children}</Primitive.h3>;
};

const CListDescription = ({
  children,
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <Primitive.div className=" s-list-title-description">
      {children}
    </Primitive.div>
  );
};

const CListItems = ({ children }: React.HtmlHTMLAttributes<HTMLDivElement>) => {
  const seperator = false;
  return (
    <Primitive.div className="s-list-items">
      <div className={`s-list-layout ${seperator && "s-divide-y"}`}>
        {children}
      </div>
    </Primitive.div>
  );
};
