import type { Meta, StoryObj } from "@storybook/react";
import {  Grid } from ".";

const meta: Meta<typeof Grid> = { 
    component: Grid,
    decorators: [(Story: any) => <Story />],
    title: "Layouts/Grid",
    tags: ["autodocs"],
    args: {
       
    },
    argTypes: {
       
    }
}

export default meta;

type Story = StoryObj<typeof meta>;

export const gridComponent: Story = {
    args: {
        cols: {
            default: 3,
            sm: 3,
            md: 3,
            lg: 12,
            xl: 3,
        },
        gap: {
            default: "0px",
            sm: "0px",
            md: "0px",
            lg: "regular",
            xl: "0px",
        },
    },

    render: (args) => {
        return (
           <div className="s-space-y-2">
            <Grid

{...args}
// cols={{ default: "1", sm: "2", md: "4", lg: "6", xl: "8" }}
// gap={{ default: "regular", sm: "small", md: "large", lg: "medium", xl: "xxlarge" }}
>
<div className="s-p-4 s-bg-gray-200 s-col-span-2">Item 1</div>
<div className="s-p-4 s-bg-gray-200 s-col-span-10">Item 2</div>

</Grid>

<Grid


cols={2}
gap={"small"}
>
<div className="s-p-4 s-bg-gray-200 ">Item 1</div>
<div className="s-p-4 s-bg-gray-200 ">Item 2</div>

</Grid>
</div>


          
        )
    }
}

