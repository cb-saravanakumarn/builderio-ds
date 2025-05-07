import React from "react";
import { Primitive } from '@radix-ui/react-primitive';
import { tv, VariantProps } from "tailwind-variants";

export const cardVariants = tv({
  base: 's-card',
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
    },
    spacey: {
      none: "",
      small: "s-space-y-small",
      regular: "s-space-y-regular",
      large: "s-space-y-large",
      xlarge: "s-space-y-xlarge",
      xxlarge: "s-space-y-xxlarge",
    },
    border: {
      none:"",
      dotted: "s-dotted-border"
    },
    rounded: {
      true: "s-rounded"
    }
  },
  defaultVariants: {
    depth: "regular",
    padding: "regular",
    background: "white",
    spacey: "regular",
    border: "none",
    rounded: true
  },
});

type CardContextProps = {
  depth: string | null;
  padding: string | null;
  background: string | null;
  spacey: string | null;
  border: string | null;
  rounded: boolean

  // headerAlign: string | null;
};

const SCardContext = React.createContext<CardContextProps | undefined>(
  undefined
);
export const useSCard = () => React.useContext(SCardContext);

export const useSCardContext = () => {
  const context = React.useContext(SCardContext);
  if (context === undefined) {
    throw new Error("useSCardContext must be used within a SCardContextProvider");
  }
  return context;
};

export const SCardContextProvider: React.FC<{
  children: React.ReactNode;
  value: CardContextProps;
}> = ({ children, value }) => {
  return <SCardContext.Provider value={value}>{children}</SCardContext.Provider>;
};

export interface SCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  children?: React.ReactNode;
}

const SCardRoot = React.forwardRef<HTMLDivElement, SCardProps>(
  ({ depth, padding, background, spacey, border, children, rounded, className }, ref) => {
    const value: CardContextProps = {
      depth: depth ?? "regular",
      padding: padding ?? "regular",
      background: background ?? "white",
      spacey: spacey ?? "none",
      border: border ?? "none",
      rounded: rounded ?? false
    };
    return (
      <SCardContextProvider value={value}>
        <Primitive.div className="s-card-component">
          <div
            ref={ref}
            className={
              cardVariants({ depth, padding, rounded, background, spacey, border, className })
            }
          >
            {children}
          </div>
        </Primitive.div>
      </SCardContextProvider>
    );
  }
);
SCardRoot.displayName = "SCard";

const CardHeaderVariants = tv({
  base: "s-main-card-header s-main-card-header-align",
  variants: {
    variant:{
      default: "",
      hero: "s-hero"
    },
    alignItems: {
      start: "s-start",
      center: "s-center",
      end: "s-end",
    },
  },
  defaultVariants: {
    alignItems: "start",
    variant: "default"  
  },
});



type SCardHeaderMainPropsBase = {
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

type SCardHeaderMainProps = SCardHeaderMainPropsBase & ActionProps & TitleProps;

const SCardHeader = React.forwardRef<HTMLDivElement, SCardHeaderMainProps>(
  (
    {
      alignItems,
      variant,
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
        className={CardHeaderVariants({ alignItems, variant, className })}
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

SCardHeader.displayName = "SCardHeader";

type SCardContentProps = {
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

const SCardContent = React.forwardRef<HTMLDivElement, SCardContentProps>(
  ({ children }, ref) => {
    return (
      <div ref={ref} className="s-content">
        {children}
      </div>
    );
  }
);

SCardContent.displayName = "SCardContent";

interface SCardComponent
  extends React.ForwardRefExoticComponent<
    SCardProps & React.RefAttributes<HTMLDivElement>
  > {
  Header: typeof SCardHeader;
  Content: typeof SCardContent;
}

const SCard = SCardRoot as SCardComponent;
SCard.Header = SCardHeader;
SCard.Content = SCardContent;
SCard.Header = SCardHeader;

export { SCard };
