import { ReactNode } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
import * as RadixSelect from "@radix-ui/react-select";
import * as ScrollArea from "@radix-ui/react-scroll-area";
import { ChevronDownIcon, CheckIcon } from "@heroicons/react/24/outline";

const SelectMenuVariants = cva("s-selectmenu", {
  variants: {
    size: {
      regular: "",
      large: "s-selectmenu-large",
    },
    widthMenu: {
      inline: "s-w-min",
      full: "s-w-full",
    },
    label: {
      default: "",
      inline: "",
      hide: "",
    },
    withIcon: {
      true: "s-selectmenu-icon",
    },
  },
});

export interface SelectMenuProps
  extends RadixSelect.SelectProps,
    VariantProps<typeof SelectMenuVariants> {
  placeholder?: string;
  labelText?: string;
  showIndication?: boolean;
  SelectIcon?: ReactNode;
}

const SelectMenu = ({
  size,
  label,
  labelText,
  placeholder,
  widthMenu,
  SelectIcon,
  children,
  ...props
}: SelectMenuProps) => {
  const hideLabel = label === "hide";
  const defaultLabel = label === "default";
  const inlineLabel = label === "inline";

  return (
    <RadixSelect.Root
      {...(props as any)}
      onOpenChange={() =>
        setTimeout(() => {
          document.body.style.pointerEvents = "auto";
        }, 1000)
      }
    >
      <div
        className={cn(
          "s-selectmenu-container",
          SelectMenuVariants({ widthMenu })
        )}
      >
        <div className="s-relative s-space-y-0.5 ">
          {!hideLabel && defaultLabel && (
            <span>
              <label className="s-selectmenu-label">{labelText}</label>
            </span>
          )}

          <RadixSelect.Trigger
            className={cn(
              " s-selectmenu-trigger s-z-50",
              SelectMenuVariants({ size })
            )}
          >
            <div className="s-flex s-items-center s-gap-2">
              {SelectIcon && SelectIcon}

              {inlineLabel && (
                <span className="s-inline-label">{labelText}</span>
              )}

              <RadixSelect.Value
                placeholder={placeholder}
                className=" !s-text-neutral-200 "
              />
            </div>

            <RadixSelect.Icon className="s-w-4 s-h-4 s-ml-4 s-text-neutral-500 ">
              <ChevronDownIcon />
            </RadixSelect.Icon>
          </RadixSelect.Trigger>

          <RadixSelect.Portal>
            <RadixSelect.Content
              onCloseAutoFocus={(e) => e.preventDefault()}
              avoidCollisions={false}
              side="bottom"
              position="popper"
              align="start"
              className="s-selectmenu-content s-z-50"
            >
              <ScrollArea.Root className="s-h-full s-w-full" type="auto">
                <RadixSelect.Viewport asChild>
                  <ScrollArea.Viewport
                    className="s-h-full s-w-full"
                    style={{ overflowY: undefined }}
                    asChild
                  >
                    <RadixSelect.Group>{children}</RadixSelect.Group>
                  </ScrollArea.Viewport>
                </RadixSelect.Viewport>

                <ScrollArea.Scrollbar
                  className=" s-w-1 s-p-1 "
                  orientation="vertical"
                >
                  <ScrollArea.Thumb className="s-bg-neutral-50 s-rounded" />
                </ScrollArea.Scrollbar>
              </ScrollArea.Root>
            </RadixSelect.Content>
          </RadixSelect.Portal>
        </div>
      </div>
    </RadixSelect.Root>
  );
};

SelectMenu.displayName = "SelectMenu";

export interface SelectItemProps
  extends RadixSelect.SelectItemProps,
    VariantProps<typeof SelectMenuVariants> {
  children: ReactNode;
  showIndication?: boolean;
}

const SelectItem = ({
  children,
  showIndication,
  ...props
}: SelectItemProps) => {
  return (
    <RadixSelect.Item className={"s-selectmenu-item s-pr-1"} {...props}>
      <RadixSelect.ItemText>{children}</RadixSelect.ItemText>

      {showIndication && (
        <RadixSelect.ItemIndicator className="s-selectmenu-indicator">
          <CheckIcon className="s-w-4 s-h-4" />
        </RadixSelect.ItemIndicator>
      )}
    </RadixSelect.Item>
  );
};

export { SelectMenu, SelectMenuVariants, SelectItem };
