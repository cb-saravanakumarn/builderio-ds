import React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import * as Dialog from "@radix-ui/react-dialog";

export const modalVariants = cva("modal", {
  variants: {
    variant: {
      default: "s-modal-default",
      fullscreen: "s-modal-fullscreen",
    },
    size: {
      xsmall: "s-modal-xsmall",
      small: "s-modal-small",
      regular: "s-modal-regular",
      large: "s-modal-large",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "regular",
  },
});

export interface ModalProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof modalVariants> {
  children?: React.ReactNode;
  ModalTrigger?: React.ReactNode;
  title?: string;
  description?: string;
  hasCloseIcon?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export const Modal = React.forwardRef<HTMLDivElement, ModalProps>(
  ({ open, ModalTrigger, onOpenChange, children, ...props }) => {
    return (
      <Dialog.Root open={open} onOpenChange={onOpenChange} {...props}>
        <Dialog.Trigger asChild>{ModalTrigger}</Dialog.Trigger>

        {children}
      </Dialog.Root>
    );
  }
);

// todo replace this with heroicons

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

export const ModalContent = ({
  size,
  variant,
  className,
  title,
  description,
  children,
  hasCloseIcon,
  open,
  ModalTrigger,
  onOpenChange,
  ...props
}: ModalProps) => {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="s-modal-dialog-overlay" />
      <Dialog.Content className={`s-modal-dialog-content`} {...props}>
        <div
          className={`s-modal  s-front ${
            variant === "fullscreen" ? "s-fullscreen" : "s-regularscreen"
          }  ${cn(modalVariants({ size, variant }), className)}`}
        >
          <div className={"s-wrapper s-modal-header !s-items-start"}>
            <div className="s-flex s-flex-col s-space-y-regular">
              <Dialog.Title>
                {title && <span>{title}</span>}
              </Dialog.Title>
              {description &&  <Dialog.Description asChild>
              <span> {description}</span>
              </Dialog.Description>}
            </div>
            {hasCloseIcon && (
              <Dialog.Close className="s-modal-close-button">
                <CloseIcon />
              </Dialog.Close>
            )}
          </div>
          <div className="s-modal-content">{children}</div>
        </div>
      </Dialog.Content>
    </Dialog.Portal>
  );
};

export const ModalClose = ({ children }: any) => {
  return (
    <Dialog.Close className="s-modal-dialog-close" aria-label="Close" asChild>
      {children}
    </Dialog.Close>
  );
};

export const ModalTrigger = ({ children }: any) => {
  return (
    <Dialog.Trigger aria-label="Open" asChild>
      {children}
    </Dialog.Trigger>
  );
};
