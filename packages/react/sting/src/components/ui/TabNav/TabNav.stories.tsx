import type { Meta, StoryObj } from "@storybook/react";
import { TabNav } from "."; 

// import Center from '../src/components/lib/center/Center';

const meta: Meta<typeof TabNav> = {
  component: TabNav,
  decorators: [],
  
  title: "Elements/TabNavigation",
  tags: ["autodocs"],
  args: {
 
  },
  argTypes: {
   
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const TabNavStory: Story = {
  
  render: (args: any) => {

    return (
     <TabNav {...args}>
        <TabNav.Item  active>
            Menu 1 
        </TabNav.Item>
        <TabNav.Item >
            Menu 2 
        </TabNav.Item>
        <TabNav.Item >
            Menu 3 
        </TabNav.Item>
     </TabNav>
    );
  },
};
