import React, { useState } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { XIcon, BellIcon } from "../Icons";

const NotificationVariants = cva("", {
  variants: {
    variant: {
      primary: "s-notification-primary",
      neutral: "s-notification-neutral",
      red: "s-notification-red",
      yellow: "s-notification-yellow",
      green: "s-notification-green",
      info: "s-notification-info",
      brand: "s-notification-brand",
    },
    size: {
      small: "s-notification-small",
      regular: "",
      large: "s-notification-large",
    },
    width: {
      inline: "s-w-fit",
      full: "s-w-full",
    },
    // icon: {
    //   true: '',
    // },
    text: {
      true: "",
    },
    // action: {
    //   true: '',
    // },
    // close: {
    //   true: '',
    // },
  },
});

export interface NotificationProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof NotificationVariants> {
  children: React.ReactNode;
  iconContent?: React.ReactNode;
  icon?: boolean;
  close?: boolean;
  action?: boolean;
  actionLogic?: (value?: any) => void;

  // close?: (value?: boolean) => void;
}

export const Notification = ({
  variant,
  size,
  width,
  children,
  icon,
  action,
  close,
  iconContent,
  actionLogic,
}: NotificationProps) => {
  const [closeAction, setcloseAction] = useState(true);

  return (
    <>
      {closeAction && (
        <div className="s-w-full">
          <div
            className={cn(
              "s-notification",
              NotificationVariants({
                variant,
                size,
                // className,
                width,
                // icon,
                // action,
                // close,
              })
            )}
          >
            {icon && (
              <span className="s-notification-icon">
                {iconContent ? iconContent : <BellIcon />}
                {/* <BellIcon /> */}
              </span>
            )}
            <div className="s-notification-content">{children}</div>
            <span className="s-notification-actions">
              {action && (
                <button onClick={actionLogic} className="s-notification-action">
                  Action
                </button>
              )}
              {close && (
                <span className="s-notification-close">
                  <button
                    onClick={() => setcloseAction(!closeAction)}
                    className="s-close-button"
                  >
                    <XIcon />
                  </button>
                </span>
              )}
            </span>
          </div>
        </div>
      )}
    </>
  );
};
