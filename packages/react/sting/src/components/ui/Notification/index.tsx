import React, { useState } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { XIcon, BellIcon } from "./../Icons";

const NotificationVariants = cva("", {
  variants: {
    variant: {
      primary: "notification-primary",
      neutral: "notification-neutral",
      red: "notification-red",
      yellow: "notification-yellow",
      green: "notification-green",
      info: "notification-info",
      brand: "notification-brand",
    },
    size: {
      small: "notification-small",
      regular: "",
      large: "notification-large",
    },
    width: {
      inline: "w-fit",
      full: "w-full",
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
        <div className="w-full">
          <div
            className={cn(
              "notification",
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
              <span className="notification-icon">
                {iconContent ? iconContent : <BellIcon />}
                {/* <BellIcon /> */}
              </span>
            )}
            <div className="notification-content">{children}</div>
            <span className="notification-actions">
              {action && (
                <button onClick={actionLogic} className="notification-action">
                  Action
                </button>
              )}
              {close && (
                <span className="notification-close">
                  <button
                    onClick={() => setcloseAction(!closeAction)}
                    className="close-button"
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
