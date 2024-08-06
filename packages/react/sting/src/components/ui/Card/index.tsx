import React from "react";
import { cva, VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

export const cardVariants = cva("s-card", {
  variants: {
    depth: {
      flat: "s-flat",
      raised: "s-raised",
      regular: "s-regular",
    },
    padding: {
      large: "s-p-xxlarge",
      small: "s-p-regular",
      regular: "s-p-large",
      none: "",
    },
    background: {
      transparent: "s-background-transparent",
      white: "s-background-white",
      neutral: "s-background-neutral",
      danger: "s-background-danger",
      warning: "s-background-warning",
      primary: "s-background-primary",
      success: "s-background-success",
    },
    spacey: {
      none: "",
      small: "s-spacey-small",
      regular: "s-spacey-regular",
      large: "s-spacey-large",
      xlarge: "s-spacey-xlarge",
      xxlarge: "s-spacey-xxlarge",
    },
  },
  defaultVariants: {
    depth: "regular",
    padding: "regular",
    background: "white",
    spacey: "regular",
  },
});

type CardContextProps = {
  depth: string | null;
  padding: string | null;
  background: string | null;
  spacey: string | null;

  // headerAlign: string | null;
};

const CardContext = React.createContext<CardContextProps | undefined>(
  undefined
);
export const useCard = () => React.useContext(CardContext);

export const useCardContext = () => {
  const context = React.useContext(CardContext);
  if (context === undefined) {
    throw new Error("useCardContext must be used within a CardContextProvider");
  }
  return context;
};

export const CardContextProvider: React.FC<{
  children: React.ReactNode;
  value: CardContextProps;
}> = ({ children, value }) => {
  return <CardContext.Provider value={value}>{children}</CardContext.Provider>;
};

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  children?: React.ReactNode;
}

const CardRoot = React.forwardRef<HTMLDivElement, CardProps>(
  ({ depth, padding, background, spacey, children, className }, ref) => {
    const value: CardContextProps = {
      depth: depth ?? "regular",
      padding: padding ?? "regular",
      background: background ?? "white",
      spacey: spacey ?? "none",
      // headerAlign: headerAlign ?? "start",
    };
    return (
      <CardContextProvider value={value}>
        <div className="s-card-component">
          <div
            ref={ref}
            className={cn(
              cardVariants({ depth, padding, background, spacey }),
              className
            )}
          >
            {children}
          </div>
        </div>
      </CardContextProvider>
    );
  }
);
CardRoot.displayName = "Card";

const CardHeaderVariants = cva("s-main-card-header s-main-card-header-align", {
  variants: {
    alignItems: {
      start: "s-start",
      center: "s-center",
      end: "s-end",
    },
  },
  defaultVariants: {
    alignItems: "start",
  },
});

// type CardHeaderProps = {
//   children: React.ReactNode;
// } & React.HTMLAttributes<HTMLDivElement> &
//   VariantProps<typeof CardHeaderVariants>;

// const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(
//   ({ children, alignItems, className, ...props }, ref) => {
//     // const { headerAlign } = useCardContext();
//     // console.log(headerAlign, "headerAlign");
//     // const preFix = headerAlign ? `s-${headerAlign}` : "";
//     return (
//       <div
//         ref={ref}
//         {...props}
//         className={cn(CardHeaderVariants({ alignItems }), className)}
//         // className={`s-main-card-header s-main-card-header-align ${headerAlign}`}
//       >
//         {children}
//       </div>
//     );
//   }
// );
// CardHeader.displayName = "CardHeader";

type CardHeaderMainPropsBase = {
  children?: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof CardHeaderVariants>;

type ActionProps =
  | {
      primaryAction?: React.ReactNode;
      secondaryAction?: React.ReactNode;
      tertiaryAction?: React.ReactNode;
      actionElement?: never;
    }
  | {
      primaryAction?: never;
      secondaryAction?: never;
      tertiaryAction?: never;
      actionElement?: React.ReactNode;
    };

type TitleProps =
  | {
      title?: string;
      description?: string;
      titleElement?: never;
    }
  | {
      title?: never;
      description?: never;
      titleElement?: React.ReactNode;
    };

type CardHeaderMainProps = CardHeaderMainPropsBase & ActionProps & TitleProps;

const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderMainProps>(
  (
    {
      alignItems,
      className,
      description,
      titleElement,
      actionElement,
      primaryAction,
      secondaryAction,
      tertiaryAction,
      title,
      ...props
    },
    ref
  ) => {
    if ((primaryAction || secondaryAction || tertiaryAction) && actionElement) {
      throw new Error(
        "You cannot use both Actions Props(Primary, Secondary, Tertiary) and actionElement at the same time."
      );
    }
    if ((title || description) && titleElement) {
      throw new Error(
        "You cannot use (title, description) Props and titleElement at the same time."
      );
    }
    return (
      <div
        ref={ref}
        {...props}
        className={cn(CardHeaderVariants({ alignItems }), className)}
      >
        <div className="s-left">
          {titleElement ? (
            titleElement
          ) : (
            <>
              <div className="s-title">{title}</div>
              <div className="s-description">{description}</div>
            </>
          )}
        </div>
        <div className="s-right">
          {actionElement ? (
            actionElement
          ) : (
            <>
              {primaryAction && <div className="s-action">{primaryAction}</div>}
              {secondaryAction && (
                <div className="s-action">{secondaryAction}</div>
              )}
              {tertiaryAction && (
                <div className="s-action">{tertiaryAction}</div>
              )}
            </>
          )}
        </div>
      </div>
    );
  }
);

CardHeader.displayName = "CardHeader";

// type CardHeaderLeftProps = {
//   children: React.ReactNode;
// } & React.HTMLAttributes<HTMLDivElement>;

// const CardHeaderLeft = React.forwardRef<HTMLDivElement, CardHeaderLeftProps>(
//   ({ children }, ref) => {
//     return (
//       <div ref={ref} className="s-left">
//         {children}
//       </div>
//     );
//   }
// );
// CardHeaderLeft.displayName = "CardHeaderLeft";

// type CardHeaderTitleProps = {
//   children: string;
// } & React.HTMLAttributes<HTMLDivElement>;

// const CardHeaderTitle = React.forwardRef<HTMLDivElement, CardHeaderTitleProps>(
//   ({ children }, ref) => {
//     return (
//       <div ref={ref} className="s-title">
//         {children}
//       </div>
//     );
//   }
// );
// CardHeaderTitle.displayName = "CardHeaderTitle";

// type CardHeaderDescriptionProps = {
//   children: string;
// } & React.HTMLAttributes<HTMLDivElement>;

// const CardHeaderDescription = React.forwardRef<
//   HTMLDivElement,
//   CardHeaderDescriptionProps
// >(({ children }, ref) => {
//   return (
//     <div ref={ref} className="s-description">
//       {children}
//     </div>
//   );
// });
// CardHeaderDescription.displayName = "CardHeaderDescription";

// type CardHeaderElementProps = {
//   children: React.ReactNode;
// } & React.HTMLAttributes<HTMLDivElement>;

// const CardHeaderElement = React.forwardRef<
//   HTMLDivElement,
//   CardHeaderElementProps
// >(({ children }, ref) => {
//   return (
//     <div ref={ref} className="s-element ">
//       {children}
//     </div>
//   );
// });
// CardHeaderElement.displayName = "CardHeaderElement";

// type CardHeaderRightProps = {
//   children: React.ReactNode;
// } & React.HTMLAttributes<HTMLDivElement>;

// const CardHeaderRight = React.forwardRef<HTMLDivElement, CardHeaderRightProps>(
//   ({ children }, ref) => {
//     return (
//       <div>
//         <div ref={ref} className="s-right">
//           {children}
//         </div>
//       </div>
//     );
//   }
// );
// CardHeaderRight.displayName = "CardHeaderRight";

type CardContentProps = {
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

const CardContent = React.forwardRef<HTMLDivElement, CardContentProps>(
  ({ children }, ref) => {
    return (
      <div ref={ref} className="s-content">
        {children}
      </div>
    );
  }
);

CardContent.displayName = "CardContent";

// Define an interface that extends ForwardRefExoticComponent and includes subcomponents
interface CardComponent
  extends React.ForwardRefExoticComponent<
    CardProps & React.RefAttributes<HTMLDivElement>
  > {
  Header: typeof CardHeader;
  // Left: typeof CardHeaderLeft;
  // Title: typeof CardHeaderTitle;
  // Description: typeof CardHeaderDescription;
  // Element: typeof CardHeaderElement;
  // Right: typeof CardHeaderRight;
  Content: typeof CardContent;
  // MainHeader: typeof CardHeaderMain;
}

const Card = CardRoot as CardComponent;
Card.Header = CardHeader;
// CardWithSubComponents.Left = CardHeaderLeft;
// CardWithSubComponents.Title = CardHeaderTitle;
// CardWithSubComponents.Description = CardHeaderDescription;
// CardWithSubComponents.Element = CardHeaderElement;
// CardWithSubComponents.Right = CardHeaderRight;
Card.Content = CardContent;
Card.Header = CardHeader;

// export {
//   Card,
//   CardHeader,
//   CardHeaderLeft,
//   CardHeaderRight,
//   CardHeaderTitle,
//   CardHeaderDescription,
//   CardHeaderElement,
//   Root,
//   Header,
//   Left,
//   Right,
//   Title,
//   Description,
//   Element,
// };

export { Card };
