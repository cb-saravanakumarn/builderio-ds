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
      <Dialog.Overlay className="s-fixed s-inset-0 s-bg-black/50 s-z-10" />
      <Dialog.Content className={`max-h-screen flex justify-center`} {...props}>
        <div
          className={`s-modal  s-z-50 s-shadow ${
            variant === "fullscreen"
              ? "!s-m-0 s-w-[98%] s-absolute s-top-5 s-h-screen"
              : "s-fixed s-top-[50%] s-left-[50%] s-translate-x-[-50%] s-translate-y-[-50%]"
          }  ${cn(modalVariants({ size, variant }), className)}`}
        >
          <div
            className={
              "s-flex s-w-full s-justify-between s-items-center s-modal-header"
            }
          >
            <Dialog.Title>
              {title && <span className="s-h4">{title}</span>}
            </Dialog.Title>
            {hasCloseIcon && (
              <Dialog.Close className="s-modal-close-button s-relative s-top-0 s-right-0">
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
    <Dialog.Close className="s-w-full s-flex" aria-label="Close" asChild>
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
