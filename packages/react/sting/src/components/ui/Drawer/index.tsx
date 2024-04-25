import React, { useEffect } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const drawerVariants = cva("drawer-container", {
  variants: {
    placement: {
      top: "top",
      right: "right",
      bottom: "bottom",
      left: "left",
    },
    width: {
      narrow: "narrow",
      regular: "regular",
      wide: "wide",
    },
    height: {
      short: "short",
      regular: "regular",
    },
    show: {
      show: "drawer-show",
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

      <div className="flex flex-col">
        <div
          onClick={onClose}
          className={` ${
            show === "hide" && "!hidden"
          } fixed w-full h-screen inset-0 bg-neutral-500 opacity-50 z-50`}
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
              className="drawer-close-button"
              onClick={onClose}
              aria-label="Close Drawer"
            >
              <CloseIcon />
            </button>
          )}
          <div className="drawer-content ">
            {title && <h4 className="h4">{title}</h4>}
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
