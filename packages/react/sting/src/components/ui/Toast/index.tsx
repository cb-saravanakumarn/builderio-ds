import * as React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import * as RadixToast from "@radix-ui/react-toast";

const ToastVariants = cva("Toast", {
  // Remove unwanted stuff and add missing stuff here
  variants: {
    variant: {
      Primary: "s-toast-primary",
      Red: "s-toast-red",
      Green: "s-toast-green",
    },
    width: {
      Regular: "s-toast-regular",
      Wide: "s-toast-wide",
    },
  },
  defaultVariants: {
    variant: "Primary",
    width: "Wide",
  },
});

export interface ToastProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof ToastVariants> {
  children?: React.ReactNode;
  icon?: React.ReactNode;
  description?: string;
  toastOpen?: boolean;
  setToastOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  openTime?: number;
  action?: { label: string; logic: string | any };
  closeAction?: boolean;
}

const Toast = React.forwardRef<HTMLDivElement, ToastProps>(
  ({
    variant,
    width,
    icon,
    description,
    action,
    closeAction,
    openTime = 3000,
    toastOpen,
    setToastOpen,
  }) => {
    // const [open, setOpen] = React.useState(true);
    // const timerRef = React.useRef(0);

    // React.useEffect(() => {
    //     if (open && openTime) {
    //         window.setTimeout(() => {
    //             // setOpen(false);
    //             window.clearTimeout(timerRef.current);
    //         }, openTime ? openTime : 3000);
    //     }
    // }, [open]);

    return (
      <RadixToast.Provider
        duration={openTime ? openTime : 100000000}
        swipeDirection="right"
      >
        {/* <button
                    className="inline-flex items-center justify-center rounded font-medium text-[15px] px-[15px] leading-[35px] h-[35px] bg-white text-violet11 shadow-[0_2px_10px] shadow-blackA4 outline-none hover:bg-mauve3 focus:shadow-[0_0_0_2px] focus:shadow-black"
                    onClick={() => {
                        setOpen(true);
                        window.clearTimeout(timerRef.current);

                    }}
                >
                    Launch Toast
                </button> */}

        <RadixToast.Root
          className={cn(
            `s-toast s-toast-enter-done `,
            ToastVariants({ variant, width })
          )}
          open={toastOpen}
          onOpenChange={setToastOpen}
        >
          <RadixToast.Description
            className="s-toast-copy s-toast-content"
            asChild
          >
            <div>
              {icon && <span className="s-toast-icon"> {icon}</span>}
              {description}
            </div>
          </RadixToast.Description>

          {action && (
            <RadixToast.Action
              className="[grid-area:_action]"
              asChild
              altText="Action"
            >
              <div>
                {typeof action.logic === "function" && (
                  <span className="s-toast-actions">
                    <button
                      onClick={
                        action.logic ? action.logic : () => alert("clicked")
                      }
                      className="s-toast-action"
                    >
                      {action.label}
                    </button>
                  </span>
                )}
                {typeof action.logic === "string" && (
                  <a href={action.logic} className="s-toast-actions">
                    <button className="s-toast-action">{action.label}</button>
                  </a>
                )}
              </div>
            </RadixToast.Action>
          )}

          {closeAction && (
            <RadixToast.Close>
              <span className="s-toast-close">
                <button className="s-close-button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </button>
              </span>
            </RadixToast.Close>
          )}
        </RadixToast.Root>
        <RadixToast.Viewport className="[--viewport-padding:_25px] s-fixed s-bottom-0 s-right-0 s-flex s-flex-col s-p-[var(--viewport-padding)] s-gap-[10px] s-w-[390px] s-max-w-[100vw] s-m-0 s-list-none s-z-[2147483647] s-outline-none" />
      </RadixToast.Provider>
    );
  }
);

Toast.displayName = "Toast";

export { Toast, ToastVariants };
