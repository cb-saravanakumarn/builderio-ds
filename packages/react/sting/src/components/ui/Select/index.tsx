import { ReactNode } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
import * as RadixSelect from "@radix-ui/react-select";
import * as ScrollArea from "@radix-ui/react-scroll-area";
import { ChevronDownIcon, CheckIcon } from "@heroicons/react/24/outline";

const SelectMenuVariants = cva("SelectMenu", {
  variants: {
    size: {
      regular: "",
      large: "selectmenu-large",
    },
    widthMenu: {
      inline: "w-min",
      full: "w-full",
    },
    label: {
      default: "",
      inline: "",
      hide: "",
    },
    withIcon: {
      true: "selectmenu-icon",
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
          "selectmenu-container",
          SelectMenuVariants({ widthMenu })
        )}
      >
        <div className="relative space-y-0.5 ">
          {!hideLabel && defaultLabel && (
            <span>
              <label className="selectmenu-label">{labelText}</label>
            </span>
          )}

          <RadixSelect.Trigger
            className={cn(
              " selectmenu-trigger z-50",
              SelectMenuVariants({ size })
            )}
          >
            <div className="flex items-center gap-2">
              {SelectIcon && SelectIcon}

              {inlineLabel && <span className="inline-label">{labelText}</span>}

              <RadixSelect.Value
                placeholder={placeholder}
                className=" !text-neutral-200 "
              />
            </div>

            <RadixSelect.Icon className="w-4 h-4 ml-4 text-neutral-500 ">
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
              className="selectmenu-content z-50"
            >
              <ScrollArea.Root className="h-full w-full" type="auto">
                <RadixSelect.Viewport asChild>
                  <ScrollArea.Viewport
                    className="h-full w-full"
                    style={{ overflowY: undefined }}
                    asChild
                  >
                    <RadixSelect.Group>{children}</RadixSelect.Group>
                  </ScrollArea.Viewport>
                </RadixSelect.Viewport>

                <ScrollArea.Scrollbar
                  className=" w-1 p-1 "
                  orientation="vertical"
                >
                  <ScrollArea.Thumb className="bg-neutral-50 rounded" />
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
    <RadixSelect.Item className={"selectmenu-item pr-1"} {...props}>
      <RadixSelect.ItemText>{children}</RadixSelect.ItemText>

      {showIndication && (
        <RadixSelect.ItemIndicator className="selectmenu-indicator">
          <CheckIcon className="w-4 h-4" />
        </RadixSelect.ItemIndicator>
      )}
    </RadixSelect.Item>
  );
};

export { SelectMenu, SelectMenuVariants, SelectItem };
