import type { Meta, StoryObj } from "@storybook/react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsProps,
  TabsListProps,
  // TabsContentProps
} from ".";

// import Center from '../src/components/lib/center/Center';

const meta: Meta<typeof Tabs> = {
  component: Tabs,
  decorators: [],
  title: "Elements/Tab",
  tags: ["autodocs"],
  args: {
    variant: "horizontal",
    tabStyle: "lined",
    width: "full",
    size: "regular",
    tabs: [
      { id: "tab1", title: "Tab 1" },
      { id: "tab2", title: "Tab 2" },
      { id: "tab3", title: "Tab 3" },
      { id: "tab4", title: "Tab 4" },
    ],
    defaultTabID: "tab1",
    tabId: "tab1",
    onValueChange: (e: string) => console.log(e),
  },
  argTypes: {
    // variant: {
    //   options: ['om-basic', 'om-multiple', 'om-topNav'],
    //   control: { type: 'select' },
    // },
    // position: {
    //   options: ['left', 'right', 'bottom'],
    //   control: { type: 'select' },
    // },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const NavigationTabs: Story = {
  args: {
    variant: "horizontal",
    tabStyle: "lined",
    width: "full",
    size: "regular",
    tabs: [
      { id: "tab1", title: "Tab 1" },
      { id: "tab2", title: "Tab 2" },
      { id: "tab3", title: "Tab 3" },
      { id: "tab4", title: "Tab 4" },
    ],
    defaultTabID: "tab1",
    tabId: "tab1",
    onValueChange: (e: string) => console.log(e),
  },
  render: (args: TabsProps & TabsListProps) => {
    return (
      <Tabs
        tabId={args.tabId}
        defaultTabID={args.defaultTabID} // Define the specific prop for Tabs
        onValueChange={args.onValueChange}
        tabValue={args.tabValue}
      >
        <TabsList
          tabStyle={args.tabStyle}
          tabs={args.tabs}
          variant={args.variant}
          width={args.width}
          size={args.size}
        />
        <TabsContent
          onValueChange={args.onValueChange}
          tabId={args.tabId || "1"} // Define the specific prop for TabsContent
        >
          <p>Hello world</p>
        </TabsContent>
      </Tabs>
    );
  },
};
