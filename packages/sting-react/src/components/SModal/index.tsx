import * as Dialog from "@radix-ui/react-dialog";
import React from "react";
import { X } from "lucide-react";
import { tv, VariantProps } from "tailwind-variants";
import clsx from "clsx";
import './SModal.css'
import { modalVariants } from "./constants";

interface SModalRootProps extends Dialog.DialogProps {
  children: React.ReactNode;
}

const SModalRoot = ({ children, ...props }: SModalRootProps) => {
  const { open, defaultOpen, onOpenChange } = props;

  return (
    <Dialog.Root
      open={open}
      defaultOpen={defaultOpen}
      onOpenChange={onOpenChange}
    >
      {children}
    </Dialog.Root>
  );
};

interface SModalContentProps
  extends React.ComponentPropsWithoutRef<typeof Dialog.Content>,
    VariantProps<typeof modalVariants> {
  showCloseButton?: boolean;
  onClose?: () => void;
}

// ... rest of the imports and interfaces stay the same ...
const SModalContent = React.forwardRef<
  React.ElementRef<typeof Dialog.Content>,
  SModalContentProps
>(
  (
    {
      className,
      children,
      variant,
      size,
      bodyHeight,
      padding,
      space,
      showCloseButton = true,
      onClose,
      ...props
    },
    ref
  ) => (
    <Dialog.Portal>
      <Dialog.Overlay className="modal-dialog-overlay" />
      <Dialog.Content
        ref={ref}
        className={clsx(
          modalVariants({
            variant,
            size,
            space,
            bodyHeight,
            padding,
            className,
          }),
          "flex flex-col",
          "data-[state=open]:animate-in bg-white data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]"
        )}
        {...props}
      >
        {children}
        {/* {showCloseButton && (
          <Dialog.Close
            className=" absolute s-top-regular s-right-regular "
            onClick={onClose}
          >
            <X className="s-h-4 s-w-4" />
            <span className="s-sr-only">Close</span>
          </Dialog.Close>
        )} */}
      </Dialog.Content>
    </Dialog.Portal>
  )
);
SModalContent.displayName = "SModalContent";

interface SModalBodyProps extends React.HTMLAttributes<HTMLDivElement> {}

const SModalBody = ({ className, children, ...props }: SModalBodyProps) => (
  <div className={clsx("flex-1 overflow-y-auto", className)} {...props}>
    {children}
  </div>
);
SModalBody.displayName = "SModalBody";

interface SModalHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  showCloseButton?: boolean;
  children: React.ReactNode;
  showShadow?: boolean;
}

const SModalHeader = ({
  className,
  children,
  showCloseButton,
  showShadow,
  ...props
}: SModalHeaderProps) => (
  <div className={clsx(showShadow && "shadow-sm", className)} {...props}>
    <div className="flex gap-xxlarge justify-between ">
      <div className="w-[90%]"> {children}</div>
      {showCloseButton && (
        <div className="absolute top-regular right-regular">
          <Dialog.Close className=" hover:bg-neutral-50 rounded-sm p-small">
            <X className="size-4" />
          </Dialog.Close>
        </div>
      )}
    </div>
  </div>
);
SModalHeader.displayName = "SModalHeader";

const SModalTitleVariant = tv({
  variants: {
    textSize: {
      xsmall: "text-xs",
      small: "text-sm",
      regular: "text-base",
      large: "text-lg",
      xlarge: "text-xl",
      xxlarge: "text-2xl",
    },
  },
  defaultVariants: {
    textSize: "large",
  },
});

interface SModalTitleProps
  extends React.ComponentPropsWithoutRef<typeof Dialog.Title>,
    VariantProps<typeof SModalTitleVariant> {}

const SModalTitle = React.forwardRef<
  React.ElementRef<typeof Dialog.Title>,
  SModalTitleProps
>(({ className, textSize, ...props }, ref) => (
  <Dialog.Title
    ref={ref}
    className={SModalTitleVariant({ textSize: textSize, className })}
    {...props}
  />
));
SModalTitle.displayName = "SModalTitle";

const SModalDescription = React.forwardRef<
  React.ElementRef<typeof Dialog.Description>,
  React.ComponentPropsWithoutRef<typeof Dialog.Description>
>(({ className, ...props }, ref) => (
  <Dialog.Description
    ref={ref}
    className={clsx("text-base text-neutral-400 mb-0 pb-0", className)}
    {...props}
  />
));
SModalDescription.displayName = "SModalDescription";

const SModalFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={clsx(
      "flex flex-col gap-2 sm:flex-row sm:justify-end",
      className
    )}
    {...props}
  />
);
SModalFooter.displayName = "SModalFooter";

export const SModal = {
  Root: SModalRoot,
  Trigger: Dialog.Trigger,
  Content: SModalContent,
  Header: SModalHeader,
  Title: SModalTitle,
  Description: SModalDescription,
  Body: SModalBody,
  Footer: SModalFooter,
  Close: Dialog.Close,
};
