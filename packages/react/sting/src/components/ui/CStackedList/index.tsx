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
    selectionType?: "single" | "multiple"; // New prop for selection type
    border?: "none" | "solid" | "dashed" | "dotted";
    onItemClick?: (item: CStackedItemData) => void;
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
  selected?: boolean; // New selected prop
};

type CStackedListContextType = {
  selectedItems: CStackedItemData[];
  handleItemClick: (item: CStackedItemData) => void;
  selectable: boolean;
  selectionType: "single" | "multiple"; // Added to context
  onItemClick?: (item: CStackedItemData) => void;
};

const CStackedListContext = createContext<CStackedListContextType | undefined>(
  undefined
);

const CStackedListProvider: React.FC<{
  children: React.ReactNode;
  selectable?: boolean;
  selectionType: "single" | "multiple"; // Added to provider
  initialSelectedItems?: CStackedItemData[]; // New initial selected items prop
  onItemClick?: (item: CStackedItemData) => void;
}> = ({
  children,
  selectable = false,
  selectionType = "multiple",
  initialSelectedItems = [],
  onItemClick,
}) => {
  const [selectedItems, setSelectedItems] =
    useState<CStackedItemData[]>(initialSelectedItems);

  const handleItemClick = (item: CStackedItemData) => {
    setSelectedItems((prevSelected) => {
      if (selectionType === "single") {
        return [item]; // Only allow one item to be selected
      }
      return prevSelected.some((selectedItem) => selectedItem.id === item.id)
        ? prevSelected.filter((selectedItem) => selectedItem.id !== item.id)
        : [...prevSelected, item];
    });
    if (onItemClick) {
      onItemClick(item); // Pass clicked item data to the parent component
    }
  };

  return (
    <CStackedListContext.Provider
      value={{
        selectedItems,
        handleItemClick,
        selectable,
        selectionType,
        onItemClick,
      }}
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
  (
    {
      children,
      divider,
      className,
      selectable,
      selectionType = "multiple",
      border,
      onItemClick,
      ...props
    },
    ref
  ) => {
    // Collect initial selected items from children
    const initialSelectedItems = React.Children.toArray(children).reduce(
      (acc, child) => {
        if (React.isValidElement(child) && child.props.selected) {
          acc.push(child.props);
        }
        return acc;
      },
      [] as CStackedItemData[]
    );

    const classes = cn(
      "s-stacklist",
      CStackedListVariant({ divider, border }),
      className
    );

    return (
      <CStackedListProvider
        selectable={selectable}
        selectionType={selectionType}
        initialSelectedItems={initialSelectedItems}
        onItemClick={onItemClick}
      >
        <ul ref={ref} {...props} role="list" className={classes}>
          {children}
        </ul>
      </CStackedListProvider>
    );
  }
);

type CStackedItemProps = React.HTMLAttributes<HTMLLIElement> &
  CStackedItemData & {
    onItemClick?: (item: CStackedItemData) => void;
  };

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
      selected,
      onItemClick,
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
      selected,
    };

    const handleClick = () => {
      if (selectable) {
        handleItemClick(itemData);
      }
      if (onItemClick) {
        onItemClick(itemData);
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
