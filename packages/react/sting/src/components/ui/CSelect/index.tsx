import { ReactNode, useState } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
import * as RadixSelect from "@radix-ui/react-select";
import * as ScrollArea from "@radix-ui/react-scroll-area";
import { ChevronDownIcon, CheckIcon } from "@heroicons/react/24/outline";
import React from "react";

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
  selectItemIcon?: ReactNode;
  selectIcon?: ReactNode;
  multiSelect?: boolean;
  onValueChange?: (value: string | string[]) => void;
}

const SelectMenu = ({
  size,
  label,
  labelText,
  placeholder,
  widthMenu,
  selectIcon,
  multiSelect,
  children,
  ...props
}: SelectMenuProps) => {
  const hideLabel = label === "hide";
  const defaultLabel = label === "default";
  const inlineLabel = label === "inline";
  const [selectedIcon, setSelectedIcon] = useState<ReactNode | null>(null);
  const [selectedValues, setSelectedValues] = useState<Set<string>>(new Set());

  const handleValueChange = (value: string) => {
    if (multiSelect) {
      setSelectedValues((prevSelectedValues) => {
        const newSelectedValues = new Set(prevSelectedValues);
        if (newSelectedValues.has(value)) {
          newSelectedValues.delete(value);
        } else {
          newSelectedValues.add(value);
        }
        props.onValueChange?.([...newSelectedValues]);
        return newSelectedValues;
      });
    } else {
      props.onValueChange?.(value);
      const selectedChild = React.Children.toArray(children).find(
        (child) =>
          React.isValidElement(child) &&
          (child.props.value === value ||
            child.props.value === value.toString())
      );
      if (React.isValidElement(selectedChild)) {
        setSelectedIcon(selectedChild.props.selectItemIcon);
      }
    }
  };

  return (
    <RadixSelect.Root
      {...(props as any)}
      onValueChange={handleValueChange}
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
        <div className="s-wrapper ">
          {!hideLabel && defaultLabel && (
            <span>
              <label className="s-selectmenu-label">{labelText}</label>
            </span>
          )}

          <RadixSelect.Trigger
            className={cn(
              " s-selectmenu-trigger ",
              SelectMenuVariants({ size })
            )}
          >
            <div>
              {selectedIcon ? selectedIcon : selectIcon}

              {inlineLabel && (
                <span className="s-inline-label">{labelText}</span>
              )}

              <RadixSelect.Value placeholder={placeholder}>
                {multiSelect ? [...selectedValues].join(", ") : undefined}
              </RadixSelect.Value>
            </div>

            <RadixSelect.Icon className="s-icon ">
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
              className="s-selectmenu-content "
            >
              <ScrollArea.Root className="scroll-area" type="auto">
                <RadixSelect.Viewport asChild>
                  <ScrollArea.Viewport
                    className="viewport"
                    style={{ overflowY: undefined }}
                    asChild
                  >
                    <RadixSelect.Group>{children}</RadixSelect.Group>
                  </ScrollArea.Viewport>
                </RadixSelect.Viewport>

                <ScrollArea.Scrollbar
                  className=" scrollbar"
                  orientation="vertical"
                >
                  <ScrollArea.Thumb className="thumb" />
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

const CSelectRoot: React.FC<SelectMenuProps> = (props) => {
  return <SelectMenu {...props} />;
};
CSelectRoot.displayName = "CSelect";

export interface SelectItemProps
  extends RadixSelect.SelectItemProps,
    VariantProps<typeof SelectMenuVariants> {
  children: ReactNode;
  selectItemIcon?: ReactNode;
  showIndication?: boolean;
}

const CSelectItem: React.FC<SelectItemProps> = (props) => {
  return <SelectItem {...props} />;
};
CSelectItem.displayName = "CSelectItem";

const SelectItem = ({
  children,
  showIndication,
  selectItemIcon,
  ...props
}: SelectItemProps) => {
  return (
    <RadixSelect.Group>
      <RadixSelect.Item className={"s-selectmenu-item "} {...props}>
        <div className=" s-content">
          {selectItemIcon && <span>{selectItemIcon}</span>}
          <RadixSelect.ItemText>{children}</RadixSelect.ItemText>
        </div>

        {showIndication && (
          <RadixSelect.ItemIndicator className="s-selectmenu-indicator">
            <CheckIcon className="s-icon" />
          </RadixSelect.ItemIndicator>
        )}
      </RadixSelect.Item>
    </RadixSelect.Group>
  );
};

type CSelectComponent = typeof CSelectRoot & {
  Item: typeof CSelectItem;
};

const CSelect = CSelectRoot as CSelectComponent;
CSelect.Item = CSelectItem;

export { SelectMenu, SelectMenuVariants, SelectItem, CSelect };
