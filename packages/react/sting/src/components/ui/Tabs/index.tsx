import * as React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import * as RadixTabs from "@radix-ui/react-tabs";

const TabsVariants = cva("s-tabs", {
  // Remove unwanted stuff and add missing stuff here
  variants: {
    variant: {
      horizontal: "s-tabs-horizontal",
      vertical: "s-tabs-vertical",
    },
    tabStyle: {
      lined: "s-tabs-lined",
      contained: "s-tabs-contained",
    },
    width: {
      inline: "s-tabs-inline",
      full: "s-tabs-full-width",
    },
    size: {
      regular: "s-tabs-regular",
      large: "s-tabs-large",
    },
  },
  defaultVariants: {
    variant: "horizontal",
    tabStyle: "lined",
    width: "inline",
    size: "regular",
  },
});

export interface TabsProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof TabsVariants> {
  children?: React.ReactNode;
  tabs?: { id: string; title: string | React.ReactNode }[];
  defaultTabID?: string;
  tabId?: string;
  tabValue?: string;
  onValueChange: (value: string) => void;
}

const Tabs = React.forwardRef<HTMLDivElement, TabsProps>(
  ({ defaultTabID, children, onValueChange, tabValue }) => {
    const [tabVal, settabValue] = React.useState(tabValue);

    const handleValueChange = (value: string) => {
      // alert(value)
      tabValue && settabValue(value);
      onValueChange && onValueChange(value); // Forward the value change event
    };

    React.useEffect(() => {
      tabValue && settabValue(tabValue);
    }, [tabValue]);

    return (
      <RadixTabs.Root
        defaultValue={defaultTabID}
        value={tabVal}
        onValueChange={handleValueChange}
      >
        {children}
      </RadixTabs.Root>
    );
  }
);

// export interface TabsContentProps
//     extends React.HTMLAttributes<HTMLDivElement>,
//     VariantProps<typeof TabsVariants> {
//     children?: React.ReactNode;
//     tabId: string;
// }

const TabsContent = React.forwardRef<HTMLDivElement, TabsProps>(
  ({ tabId, children }) => {
    return (
      <RadixTabs.Content value={tabId ? tabId : "1"}>
        {children}
      </RadixTabs.Content>
    );
  }
);

export interface TabsListProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof TabsVariants> {
  tabs?: { id: string; title: React.ReactNode }[];
}

const TabsList: React.FC<TabsListProps> = ({
  className,
  tabs,
  variant,
  tabStyle,
  width,
  size,
}) => {
  return (
    <RadixTabs.List
      className={`tabs ${cn(
        TabsVariants({ variant, tabStyle, width, size }),
        className
      )}`}
    >
      {tabs
        ? tabs.map((tab) => (
            <RadixTabs.Trigger
              key={tab.id}
              className="s-tab-item data-[state=active]:s-selected s-whitespace-nowrap s-min-w-[80px]"
              value={tab.id}
            >
              <a>{tab.title}</a>
            </RadixTabs.Trigger>
          ))
        : null}
    </RadixTabs.List>
  );
};

Tabs.displayName = "Tabs";
TabsContent.displayName = "TabsContent";
TabsList.displayName = "TabsList";

export { Tabs, TabsList, TabsContent, TabsVariants };
