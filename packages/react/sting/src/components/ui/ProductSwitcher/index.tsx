import React, { useState, createContext, useContext } from "react";
import { Card } from "./../";
import { ContainedList, ContainedListItem } from "./../";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import {
  PopoverContent,
  PopoverTrigger,
  Popover,
  ContentProps,
  PopoverRootProps,
} from "./../";
import { Overlay } from "./../";

interface ProductSwitcherContextValue<T> {
  selectedItem: string | null;
  setSelectedItem: React.Dispatch<React.SetStateAction<string | null>>;
  onListItemClick?: (item: ProductSwitcherItem<T>) => void;
  modal?: boolean;
  closePopover: () => void;
}

const ProductSwitcherContext = createContext<
  ProductSwitcherContextValue<any> | undefined
>(undefined);

function useProductSwitcherContext() {
  const context = useContext(ProductSwitcherContext);
  if (!context) {
    throw new Error(
      "useProductSwitcherContext must be used within a ProductSwitcherProvider"
    );
  }
  return context;
}

interface ProductSwitcherProviderProps<T> extends ProductSwitcherProps<T> {
  children: React.ReactNode;
  modal?: boolean;
  closePopover: () => void;
}

function ProductSwitcherProvider<T>({
  children,
  onListItemClick,
  modal,
  closePopover,
}: ProductSwitcherProviderProps<T>) {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const value = {
    selectedItem,
    setSelectedItem,
    onListItemClick,
    modal,
    closePopover,
  };
  return (
    <ProductSwitcherContext.Provider value={value}>
      {children}
    </ProductSwitcherContext.Provider>
  );
}

export interface ProductSwitcherItem<T> {
  label: string;
  value: string;
  accessible: boolean;
  extraData?: T;
}

export interface ProductSwitcherProps<T> extends ContentProps {
  items?: ProductSwitcherItem<T>[];
  triggerComponent?: React.ReactNode;
  onListItemClick?: (item: ProductSwitcherItem<T>) => void;
}

interface ProductSwitcherPopoverProps
  extends PopoverRootProps,
    ProductSwitcherProps<any> {
  children: React.ReactNode;
  modal?: PopoverRootProps["modal"];
  onOpenChange?: PopoverRootProps["onOpenChange"];
}

export const ProductSwitcher: React.FC<ProductSwitcherPopoverProps> = ({
  children,
  modal,
  onListItemClick,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const closePopover = () => setIsOpen(false);

  return (
    <ProductSwitcherProvider
      modal={modal}
      onListItemClick={onListItemClick}
      closePopover={closePopover}
    >
      <Popover modal={modal} open={isOpen} onOpenChange={setIsOpen}>
        {children}
      </Popover>
    </ProductSwitcherProvider>
  );
};

type ProductSwitcherTriggerProps = {
  children: React.ReactNode;
};

export const ProductSwitcherTrigger = ({
  children,
}: ProductSwitcherTriggerProps) => {
  return (
    <PopoverTrigger asChild>
      <div className="inline-flex">{children}</div>
    </PopoverTrigger>
  );
};

interface ProductSwitcherContentProps extends ContentProps {
  items?: ProductSwitcherItem<any>[];
  children?: React.ReactNode;
  onListItemClick?: (item: ProductSwitcherItem<any>) => void;
}

export const ProductSwitcherContent = React.forwardRef<
  HTMLDivElement,
  ProductSwitcherContentProps
>(({ items, ...ContentProps }, ref) => {
  // const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const {
    selectedItem,
    setSelectedItem,
    onListItemClick,
    modal,
    closePopover,
  } = useProductSwitcherContext();

  const handleItemClick = (item: ProductSwitcherItem<any>) => {
    console.log("Item clicked:", item);
    setSelectedItem(item.label);
    if (onListItemClick) {
      onListItemClick(item);
    }
    closePopover();
  };
  return (
    <PopoverContent {...ContentProps} ref={ref}>
      {modal && <Overlay />}
      <Card>
        <ContainedList
          ref={ref}
          boldLabel
          description=""
          header=""
          labels="rows"
          padding="small"
          showIndicator
          showSeperator
          variant="basic"
        >
          {items &&
            items.map((item, index) => (
              <ContainedListItem
                key={index}
                label={item.label}
                onClick={() => handleItemClick(item)}
                value={item.value}
                indicatorIcon={
                  item.accessible ? (
                    selectedItem === item.label ? (
                      <CheckCircleIcon className="w-5 h-5 text-green-400" />
                    ) : (
                      <CheckCircleIcon className="w-5 h-5 text-gray-400" />
                    )
                  ) : null
                }
              />
            ))}
        </ContainedList>
      </Card>
    </PopoverContent>
  );
});
