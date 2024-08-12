import React, { useState } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
import * as Popover from "@radix-ui/react-popover";
// import { Item } from "@radix-ui/react-radio-group";

// Define an OverflowVariant using cva
export const OverflowVariant = cva("", {
  variants: {
    variant: {
      "om-multiple": "s-om-multiple",
      "om-basic": "s-om-basic",
      "om-topNav": "s-om-topNav",
    },
    position: {
      left: "s-left",
      right: "s-right",
      bottom: "s-bottom",
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
    <Popover.Close className="s-w-full" aria-label="Close">
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
            `s-overflow-menu s-z-[90]`,
            OverflowVariant({
              variant,
            })
          )}
        >
          <Popover.Anchor>
            <Popover.Trigger
              className="data-[state=open]:s-bg-neutral-50 s-rounded"
              asChild
            >
              {launchTrigger ? (
                launchTrigger
              ) : (
                <button
                  className={`s-overflow-menu-icon ${
                    isOpen && "s-active-icon"
                  }`}
                >
                  {launchIcon}
                </button>
              )}
            </Popover.Trigger>
          </Popover.Anchor>
          <Popover.Portal>
            <Popover.Content
              className={cn(
                `s-overflow-menu s-flex s-items-start`,
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
                className={`s-overflow-menu-items !s-relative ${
                  variant != "om-topNav" && "!s-top-3"
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
                      <div className="s-flex s-flex-col s-text-regular s-mb-1.5">
                        <div className="s-flex s-flex-col s-items-center s-w-full s-px-3 s-pt-4">
                          <p className="s-text-base s-text-regular s-p-0">
                            {menuItem.title}
                          </p>
                        </div>
                      </div>
                    )}

<ul className={`s-overflow-menu-ul s-p-0 s-m-0`}>
                      {/* todo document this children custom content */}

                      {/* {children} */}

                    
                        {menuItem &&
                          menuItem.items.map(
                            (item, itemIndex) =>
                              typeof item.action === "string" ? (
                                item.action == "seperator" ? (
                                  <div className="s-w-full s-border s-border-neutral-50"></div>
                                ) : (
                                
                                    <li
                                      className={`!s-whitespace-pre-wrap !s-h-auto !s-p-0 ${
                                        variant === "om-multiple" && "s-max-h-8"
                                      } ${
                                        item.customclass ? item.customclass : ""
                                      }`}
                                      key={itemIndex}
                                    >
                                        <a
                                    className="s-block s-w-full s-h-full s-p-regular"
                                    key={itemIndex}
                                    href={item.action}
                                  >
                                      {item.label}
                                      </a>
                                    </li>
                                  
                                )
                              ) : (
                                // todo document Item.Class
                                // <OverflowClose>
                                <li
                                  className={`!s-whitespace-pre-wrap !s-h-auto ${
                                    variant === "om-multiple" && "s-max-h-8"
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
