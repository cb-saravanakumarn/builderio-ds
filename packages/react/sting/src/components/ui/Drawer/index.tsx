import React, { useEffect } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const drawerVariants = cva("s-drawer-container", {
  variants: {
    placement: {
      top: "s-top",
      right: "s-right",
      bottom: "s-bottom",
      left: "s-left",
    },
    width: {
      narrow: "s-narrow",
      regular: "s-regular",
      wide: "s-wide",
    },
    height: {
      short: "s-short",
      regular: "s-regular",
    },
    show: {
      show: "s-drawer-show",
      hide: "",
    },
  },
  defaultVariants: {
    placement: "top",
    width: "narrow",
    height: "short",
    show: "show",
  },
});

export interface DrawerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof drawerVariants> {
  children?: React.ReactNode;
  onClose?(): void;
  title?: string;
  hasCloseIcon: boolean;
}

export const Drawer = React.forwardRef<HTMLDivElement, DrawerProps>(
  ({
    onClose,
    placement,
    width,
    height,
    show,
    className,
    title,
    children,
    hasCloseIcon,
    ...props
  }) => {
    // if show === 'show' then body tag css overflow should be hidden
    useEffect(() => {
      // Update the body's overflow property based on the show prop
      if (show === "show") {
        document.body.style.overflowY = "hidden";
      } else {
        document.body.style.overflowY = "";
      }

      // Cleanup function to reset overflow on unmount or show prop change
      return () => {
        document.body.style.overflowY = "";
      };
    }, [show]);

    return (
      // <Root modal={false}></Root>

      <div className="s-flex s-flex-col">
        <div
          onClick={onClose}
          className={` ${
            show === "hide" && "!hidden"
          } s-fixed s-w-full s-h-screen s-inset-0 s-bg-neutral-500 s-opacity-50 s-z-50`}
        ></div>

        <div
          className={cn(
            drawerVariants({ placement, width, height, show }),
            className
          )}
          {...props}
        >
          {hasCloseIcon && (
            <button
              className="s-drawer-close-button"
              onClick={onClose}
              aria-label="Close Drawer"
            >
              <CloseIcon />
            </button>
          )}
          <div className="s-drawer-content ">
            {title && <h4 className="s-h4">{title}</h4>}
            <div>{children}</div>
          </div>
        </div>
      </div>
    );
  }
);

const CloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

export default Drawer;
