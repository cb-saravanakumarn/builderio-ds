import React, { createContext, useContext, useState } from "react";
import { CheckIcon, TrashIcon } from "@heroicons/react/24/outline";
import { Button } from "../Button";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const CStackedListVariant = cva("s-stacklist", {
  variants: {
    divider: {
      true: "s-divider",
    },
    border: {
      none: "",
      solid: "s-border-solid",
      dashed: "s-border-dashed",
      dotted: "s-border-dotted",
    },
  },
});

type CStackedListProps = React.HTMLAttributes<HTMLUListElement> &
  VariantProps<typeof CStackedListVariant> & {
    children: React.ReactNode;
    selectable?: boolean;
    border?: "none" | "solid" | "dashed" | "dotted";
  };

type CStackedItemData = {
  id: string;
  title?: string;
  subTitle?: string;
  leftIcon?: React.ReactNode;
  actionElement?: React.ReactNode;
  checked?: boolean;
  trash?: boolean;
  leftAvatar?: string;
  onDelete?: () => void;
};

type CStackedListContextType = {
  selectedItems: CStackedItemData[];
  handleItemClick: (item: CStackedItemData) => void;
  selectable: boolean;
};

const CStackedListContext = createContext<CStackedListContextType | undefined>(
  undefined
);

const CStackedListProvider: React.FC<{
  children: React.ReactNode;
  selectable?: boolean;
}> = ({ children, selectable = false }) => {
  const [selectedItems, setSelectedItems] = useState<CStackedItemData[]>([]);

  const handleItemClick = (item: CStackedItemData) => {
    setSelectedItems((prevSelected) =>
      prevSelected.some((selectedItem) => selectedItem.id === item.id)
        ? prevSelected.filter((selectedItem) => selectedItem.id !== item.id)
        : [...prevSelected, item]
    );
  };

  return (
    <CStackedListContext.Provider
      value={{ selectedItems, handleItemClick, selectable }}
    >
      {children}
    </CStackedListContext.Provider>
  );
};

const useCStackedListContext = () => {
  const context = useContext(CStackedListContext);
  if (!context) {
    throw new Error(
      "useCStackedListContext must be used within a CStackedListProvider"
    );
  }
  return context;
};

const CStackedList = React.forwardRef<HTMLUListElement, CStackedListProps>(
  ({ children, divider, className, selectable, border, ...props }, ref) => {
    const classes = cn(
      "s-stacklist",
      CStackedListVariant({ divider, border }),
      className
    );
    return (
      <CStackedListProvider selectable={selectable}>
        <ul ref={ref} {...props} role="list" className={classes}>
          {children}
        </ul>
      </CStackedListProvider>
    );
  }
);

type CStackedItemProps = React.HTMLAttributes<HTMLLIElement> & CStackedItemData;

const CStackedItem = React.forwardRef<HTMLLIElement, CStackedItemProps>(
  (
    {
      id,
      title,
      subTitle,
      leftIcon,
      actionElement,
      checked,
      trash,
      leftAvatar,
      onDelete,
      ...props
    },
    ref
  ) => {
    const { selectedItems, handleItemClick, selectable } =
      useCStackedListContext();
    const isSelected = selectedItems.some((item) => item.id === id);

    const onDeleteHandler = (
      event: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
      event.stopPropagation();
      if (onDelete) {
        onDelete();
      }
    };

    const itemData: CStackedItemData = {
      id,
      title,
      subTitle,
      leftIcon,
      actionElement,
      checked,
      trash,
      leftAvatar,
      onDelete,
    };

    const handleClick = () => {
      if (selectable) {
        handleItemClick(itemData);
      }
    };

    return (
      <li
        ref={ref}
        {...props}
        className={`s-list-block ${isSelected ? "s-selected" : ""}`}
        onClick={handleClick}
      >
        <div className="s-wrapper">
          {leftIcon && <span className="s-icon">{leftIcon}</span>}
          {leftAvatar && (
            <img src={leftAvatar} className="s-avatar" alt={title} />
          )}
          <div className="s-content">
            <span className="s-title">{title}</span>
            <span className="s-sub-title">{subTitle}</span>
          </div>
        </div>
        <div className="s-action">
          {actionElement}
          {checked && isSelected && (
            <span className="s-check-icon">
              <CheckIcon className="" />
            </span>
          )}
          {trash && (
            <Button
              variant={"danger"}
              styleType={"icon-borderless"}
              onClick={onDeleteHandler}
            >
              <TrashIcon className="trash-icon" />
            </Button>
          )}
        </div>
      </li>
    );
  }
);

CStackedList.displayName = "CStackedList";
CStackedItem.displayName = "CStackedItem";

export { CStackedList, CStackedItem };
