import React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import * as Dialog from "@radix-ui/react-dialog";

export const modalVariants = cva("modal", {
  variants: {
    variant: {
      default: "modal-default",
      fullscreen: "modal-fullscreen",
    },
    size: {
      small: "modal-small",
      regular: "modal-regular",
      large: "modal-large",
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
  children,
  hasCloseIcon,
  open,
  ModalTrigger,
  onOpenChange,
  ...props
}: ModalProps) => {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 bg-black/50 z-10" />
      <Dialog.Content className={`max-h-screen flex justify-center`} {...props}>
        <div
          className={`modal ] z-50 shadow ${
            variant === "fullscreen"
              ? "!m-0 w-[98%] absolute top-5 h-screen"
              : "fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
          }  ${cn(modalVariants({ size, variant }), className)}`}
        >
          <div
            className={"flex w-full justify-between items-center modal-header"}
          >
            <Dialog.Title>
              {title && <span className="h4">{title}</span>}
            </Dialog.Title>
            {hasCloseIcon && (
              <Dialog.Close className="modal-close-button relative top-0 right-0">
                <CloseIcon />
              </Dialog.Close>
            )}
          </div>
          <div className="modal-content">{children}</div>
        </div>
      </Dialog.Content>
    </Dialog.Portal>
  );
};

export const ModalClose = ({ children }: any) => {
  return (
    <Dialog.Close className="w-full flex" aria-label="Close" asChild>
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
