import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { tv, VariantProps } from "tailwind-variants";
import { twMerge } from "tailwind-merge";

const drawerVariants = tv({
  base: "s-drawer-container",
  variants: {
    placement: {
      top: "s-top",
      right: "s-right",
      bottom: "s-bottom",
      left: "s-left",
    },
    size: {
      narrow: "s-narrow",
      regular: "s-regular",
      wide: "s-wide",
    },
    width: {
      narrow: "s-narrow",
      regular: "s-regular",
      wide: "s-wide",
    },
    height: {
      short: "s-drawer-h-short",
      regular: "s-drawer-h-regular",
      full: "s-drawer-h-max",
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
interface DrawerProps extends DialogPrimitive.DialogProps {
  children: React.ReactNode;
}

const SDrawerRoot = (props: DrawerProps) => {
  return <DialogPrimitive.Root {...props} />;
};
SDrawerRoot.displayName = "SDrawer.Root";

interface DrawerContentProps
  extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>,
    VariantProps<typeof drawerVariants> {
  showCloseIcon?: boolean;
  onClose?: () => void;
}

const SDrawerContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  DrawerContentProps
>(
  (
    {
      className,
      children,
      placement,
      size,
      height,
      showCloseIcon = true,
      onClose,
      ...props
    },
    ref
  ) => (
    <DialogPrimitive.Portal>
      <DialogPrimitive.Overlay className="s-fixed s-inset-0 s-z-50  s-bg-gray-500/50  s-transition-opacity s-duration-300 data-[state=open]:s-animate-in data-[state=closed]:s-animate-out" />
      <DialogPrimitive.Content
        ref={ref}
        className={twMerge(
          drawerVariants({ placement, size, height, className }),
          "s-outline-none",
          "data-[state=open]:s-animate-contentShow",
          "data-[state=open]:!s-z-50",
          "data-[state=closed]:s-z-50",
          "data-[state=closed]:s-animate-out",
          placement === "left" && "data-[state=closed]:-s-translate-x-full",
          placement === "right" && "data-[state=closed]:s-translate-x-full",
          placement === "top" && "data-[state=closed]:-s-translate-y-full",
          placement === "bottom" && "data-[state=closed]:s-translate-y-full"
        )}
        {...props}
      >
        {children}
        {/* {showCloseIcon && (
        <DialogPrimitive.Close
          className="s-absolute s-right-4 s-top-4 s-rounded-sm s-opacity-70 s-ring-offset-white s-transition-opacity hover:s-opacity-100 focus:s-outline-none focus:s-ring-2 focus:s-ring-slate-950 focus:s-ring-offset-2 disabled:s-pointer-events-none"
          onClick={onClose}
        >
          <X className="s-h-4 s-w-4" />
          <span className="s-sr-only">Close</span>
        </DialogPrimitive.Close>
      )} */}
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  )
);
SDrawerContent.displayName = "SDrawer.Content";

interface DrawerHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  border?: boolean;
  shadow?: boolean;
  showCloseIcon?: boolean;
}

const SDrawerHeader = ({
  className,
  border = false,
  shadow = false,
  showCloseIcon,

  ...props
}: DrawerHeaderProps) => (
  <div
    className={twMerge(
      "s-flex s-justify-between  s-p-large s-sticky s-top-0 s-bg-white",
      `${border ? "s-border-b" : ""}`,
      `${shadow ? "s-shadow" : ""}`,
      className
    )}
    {...props}
  >
    <div className="s-space-y-regular ">{props.children}</div>

    {showCloseIcon && (
      <div>
        <DialogPrimitive.Close
          className="s-rounded-sm s-opacity-70 s-ring-offset-white s-transition-opacity hover:s-opacity-100 focus:s-outline-none focus:s-ring-2 focus:s-ring-slate-950 focus:s-ring-offset-2 disabled:s-pointer-events-none"
          //   onClick={props.onClose}
        >
          <X className="s-h-4 s-w-4" />
          <span className="s-sr-only">Close</span>
        </DialogPrimitive.Close>
      </div>
    )}
  </div>
);
SDrawerHeader.displayName = "SDrawer.Header";

const SDrawerFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={twMerge(
      "s-flex s-flex-col-reverse sm:s-flex-row sm:s-justify-end sm:s-space-x-2 s-p-large s-sticky s-bottom-0 s-bg-white",
      className
    )}
    {...props}
  />
);
SDrawerFooter.displayName = "SDrawer.Footer";

const SDrawerTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={twMerge(
      "s-text-lg s-font-semibold s-leading-none s-tracking-tight",
      className
    )}
    {...props}
  />
));
SDrawerTitle.displayName = "SDrawer.Title";

const SDrawerDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={twMerge("s-text-sm s-text-slate-500", className)}
    {...props}
  />
));
SDrawerDescription.displayName = "SDrawer.Description";

const SDrawerTrigger = DialogPrimitive.Trigger;

export const SDrawer = Object.assign(SDrawerRoot, {
  Content: SDrawerContent,
  Description: SDrawerDescription,
  Title: SDrawerTitle,
  Header: SDrawerHeader,
  Footer: SDrawerFooter,
  Trigger: SDrawerTrigger,
});
