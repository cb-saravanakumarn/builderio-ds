import React, { useState } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
import * as Popover from "@radix-ui/react-popover";
// import { Item } from "@radix-ui/react-radio-group";

// Define an OverflowVariant using cva
export const OverflowVariant = cva("", {
  variants: {
    variant: {
      "om-multiple": "om-multiple",
      "om-basic": "om-basic",
      "om-topNav": "om-topNav",
    },
    position: {
      left: "left",
      right: "right",
      bottom: "bottom",
      auto: undefined,
    },
  },
});

// Define the OverflowProps interface
export interface OverflowProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof OverflowVariant> {
  menuGroups: MenuItems[];
  SecondMenu?: MenuItems;
  launchIcon?: React.ReactNode;
  launchTrigger?: React.ReactNode;
  children?: React.ReactNode;
  onChangeLogic?: (value: string) => void;
  align?: "center" | "start" | "end";
  focus?: boolean;
}

type MenuItems = {
  title: string;
  items: {
    label: string;
    value: string;
    action?: string | any;
    customclass?: string;
  }[];
};

const OverflowClose = ({ children }: any) => {
  return (
    <Popover.Close className="w-full" aria-label="Close">
      {children}
    </Popover.Close>
  );
};

// Define the OverFlowMenu component
const OverFlowMenu = React.forwardRef<HTMLDivElement, OverflowProps>(
  (
    {
      variant,
      menuGroups,
      position,
      launchIcon,
      children,
      launchTrigger,
      align,
      focus,
    },
    ref
  ) => {
    const menuItems = menuGroups;
    // const multiItems = SecondMenu;
    const [isOpen, setisOpen] = useState(focus);

    const handleOpen = (open: boolean) => {
      setisOpen(open);
    };

    return (
      <Popover.Root open={isOpen} onOpenChange={(open) => handleOpen(open)}>
        <div
          ref={ref}
          className={cn(
            `overflow-menu z-[90]`,
            OverflowVariant({
              variant,
            })
          )}
        >
          <Popover.Anchor>
            <Popover.Trigger
              className="data-[state=open]:bg-neutral-50 rounded"
              asChild
            >
              {launchTrigger ? (
                launchTrigger
              ) : (
                <button
                  className={`overflow-menu-icon ${isOpen && "active-icon"}`}
                >
                  {launchIcon}
                </button>
              )}
            </Popover.Trigger>
          </Popover.Anchor>
          <Popover.Portal>
            <Popover.Content
              className={cn(
                `overflow-menu flex items-start`,
                OverflowVariant({
                  variant,
                })
              )}
              // sideOffset={6}
              side={
                position === "left" ||
                position === "right" ||
                position === "bottom"
                  ? position
                  : undefined
              }
              align={align}
              updatePositionStrategy="always"
            >
              <div
                className={`overflow-menu-items !relative ${
                  variant != "om-topNav" && "!top-3"
                }`}
              >
                {menuItems.map((menuItem, index) => (
                  <div className="overflow-menu-group" key={index}>
                    {variant === "om-multiple" && (
                      <h4 className="overflow-menu-group-title ">
                        {menuItem.title}
                      </h4>
                    )}

                    {variant === "om-topNav" && menuItem.title && (
                      <div className="flex flex-col text-regular mb-1.5">
                        <div className="flex flex-col items-center w-full px-3 pt-4">
                          <p className="text-base text-regular p-0">
                            {menuItem.title}
                          </p>
                        </div>
                      </div>
                    )}

                    <ul className={`overflow-menu-ul p-0 m-0`}>
                      {/* todo document this children custom content */}

                      {children}

                      <Popover.Close className="w-full" aria-label="Close">
                        {menuItem &&
                          menuItem.items.map(
                            (item, itemIndex) =>
                              typeof item.action === "string" ? (
                                item.action == "seperator" ? (
                                  <div className="w-full border border-neutral-50"></div>
                                ) : (
                                  <a
                                    className="contained-list-item"
                                    key={itemIndex}
                                    href={item.action}
                                  >
                                    <li
                                      className={`!whitespace-pre-wrap !h-auto ${
                                        variant === "om-multiple" && "max-h-8"
                                      } ${
                                        item.customclass ? item.customclass : ""
                                      }`}
                                      key={itemIndex}
                                    >
                                      {item.label}
                                    </li>
                                  </a>
                                )
                              ) : (
                                // todo document Item.Class
                                // <OverflowClose>
                                <li
                                  className={`!whitespace-pre-wrap !h-auto ${
                                    variant === "om-multiple" && "max-h-8"
                                  } ${
                                    item.customclass ? item.customclass : ""
                                  }`}
                                  key={itemIndex}
                                  onClick={
                                    item.action
                                      ? item.action
                                      : () => handleOpen(!isOpen)
                                  }
                                >
                                  {item.label}
                                </li>
                              )
                            // </OverflowClose>
                          )}
                      </Popover.Close>
                    </ul>
                  </div>
                ))}
              </div>
            </Popover.Content>
          </Popover.Portal>
        </div>
      </Popover.Root>
    );
  }
);

// Export the OverFlowMenu component
export { OverFlowMenu, OverflowClose };
