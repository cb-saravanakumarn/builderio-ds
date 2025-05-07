import * as Dialog from "@radix-ui/react-dialog";
import React from "react";
import { X } from "lucide-react";
import { tv, VariantProps } from "tailwind-variants";
import clsx from "clsx";

const modalVariants = tv({
  base: "s-modal !s-p-0  s-min-h-[auto]",
  variants: {
    variant: {
      default: "s-modal-default  s-regularscreen s-z-50",
      fullscreen: "s-z-50",
    },
    padding: {
      xsmall: "!s-p-xsmall",
      small: "!s-p-small",
      regular: "!s-p-regular",
      large: "!s-p-large",
      xlarge: "!s-p-xlarge",
      xxlarge: "!s-p-xxlarge",
    },
    size: {
      xsmall: "s-w-11/12 md:s-modal-xsmall",
      small: "s-w-11/12 md:s-modal-small",
      regular: "s-w-11/12 md:s-modal-regular",
      large: "s-w-11/12 md:s-modal-large",
      xlarge: "s-w-11/12 md:s-w-[90%]",
    },
    space: {
      xsmall: "s-modal-space-xsmall",
      small: "s-modal-space-small",
      regular: "s-modal-space-regular",
      large: "s-modal-space-large",
      xlarge: "s-modal-space-xlarge",
      xxlarge: "s-modal-space-xxlarge",
    },
    bodyHeight: {
      small: "s-max-h-[50vh]",
      regular: "s-max-h-[70vh]",
      large: "s-max-h-[90vh]",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "regular",
    space: "regular",
    bodyHeight: "regular",
    padding: "large",
  },
});

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
      <Dialog.Overlay className="s-modal-dialog-overlay" />
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
          "s-flex s-flex-col",
          "s-data-[state=open]:animate-in s-bg-white s-data-[state=closed]:animate-out s-data-[state=closed]:fade-out-0 s-data-[state=open]:fade-in-0 s-data-[state=closed]:zoom-out-95 s-data-[state=open]:zoom-in-95 s-data-[state=closed]:slide-out-to-left-1/2 s-data-[state=closed]:slide-out-to-top-[48%] s-data-[state=open]:slide-in-from-left-1/2 s-data-[state=open]:slide-in-from-top-[48%]"
        )}
        {...props}
      >
        {children}
        {/* {showCloseButton && (
          <Dialog.Close
            className=" s-absolute s-top-regular s-right-regular "
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
  <div className={clsx("s-flex-1 s-overflow-y-auto", className)} {...props}>
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
  <div className={clsx(showShadow && "s-shadow-sm", className)} {...props}>
    <div className="s-flex s-gap-xxlarge s-justify-between ">
      <div className="s-w-[90%]"> {children}</div>
      {showCloseButton && (
        <div className="s-absolute s-top-regular s-right-regular">
          <Dialog.Close className=" hover:s-bg-neutral-50 s-rounded-sm s-p-small">
            <X className="s-size-4" />
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
      xsmall: "s-text-xs",
      small: "s-text-sm",
      regular: "s-text-base",
      large: "s-text-lg",
      xlarge: "s-text-xl",
      xxlarge: "s-text-2xl",
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
    className={clsx("s-text-base s-text-neutral-400 s-mb-0 s-pb-0", className)}
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
      " s-flex s-flex-col s-gap-2 sm:s-flex-row sm:s-justify-end",
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
