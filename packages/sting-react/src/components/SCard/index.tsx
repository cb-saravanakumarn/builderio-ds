import { Primitive } from "@radix-ui/react-primitive";
import React from "react";
import {
  cardHeaderVariants,
  CardHeaderVariants,
  CardVariants,
  cardVariants,
} from "./constants";

export interface SCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    CardVariants {
  children?: React.ReactNode;
}

const SCardRoot = React.forwardRef<HTMLDivElement, SCardProps>(
  (
    {
      depth = "regular",
      padding = "regular",
      background = "white",
      spacey = "none",
      border = "none",
      rounded = false,
      children,
      className,
    },
    ref
  ) => {
    return (
      <Primitive.div className="s-card-component">
        <div
          ref={ref}
          className={cardVariants({
            depth,
            padding,
            rounded,
            background,
            spacey,
            border,
            className,
          })}
        >
          {children}
        </div>
      </Primitive.div>
    );
  }
);
SCardRoot.displayName = "SCard";

type SCardHeaderMainPropsBase = {
  children?: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement> &
  CardHeaderVariants;

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

const SCardHeader = ({
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
}: SCardHeaderMainProps) => {
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
      {...props}
      className={cardHeaderVariants({ alignItems, variant, className })}
    >
      <div className="left">
        {titleElement ? (
          titleElement
        ) : (
          <>
            <div className="title">{title}</div>
            <div className="description">{description}</div>
          </>
        )}
      </div>
      <div className="right">
        {actionElement ? (
          actionElement
        ) : (
          <>
            {primaryAction && <div className="action">{primaryAction}</div>}
            {secondaryAction && <div className="action">{secondaryAction}</div>}
            {tertiaryAction && <div className="action">{tertiaryAction}</div>}
          </>
        )}
      </div>
    </div>
  );
};

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
