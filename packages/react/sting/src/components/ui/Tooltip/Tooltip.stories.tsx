import type { Meta, StoryObj } from '@storybook/react';
// import * as React from 'react';
import {
  Tooltip,
  // TooltipWithActions,
  TooltipProps,
  // TooltipTrigger,
  // TooltipContent,
} from '.';
import {
  Button
} from '../Button';

// import Center from '../src/components/lib/center/Center';


const meta: Meta<typeof Tooltip> = {
  component: Tooltip,
  decorators: [],
  title: 'Elements/Tooltip',
  tags: ['autodocs'],
  args: {
    placement: 'top',
    color: 'dark',
    width: 'Regular',
    label: "Tooltip Content",
    link: {
      label: "Learn More",
      href: "#"
    },
  },
  argTypes: {
    // variant: {
    //   options: ['om-basic', 'om-multiple', 'om-topNav'],
    //   control: { type: 'select' },
    // },

  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const InfoTooltip: Story = {
  render: (args: TooltipProps) => {
    return (
      <Tooltip
        {...args} // Define the specific prop for Tooltip
      >

        <Button
          onClick={() => { }}
          size="regular"
          styleType="default"
          variant="primary"
        >
          Button
        </Button>

      </Tooltip>
    );
  },
};

// export const TooltipWithAction: Story = {
//   render: (args: TooltipProps) => {

//     const [open, setOpen] = React.useState(true)

//     return (
//       <div className="p-16">
//         <TooltipWithActions
//           open={open}
//           onOpenChange={setOpen}
//           disableHoverableContent
//           {...args} // Define the specific prop for Tooltip
//         >

//           <TooltipTrigger>
//             <Button
//               onClick={() => setOpen(!open)}
//               size="regular"
//               styleType="text"
//               variant="neutral"

//             >
//               Button
//             </Button>
//           </TooltipTrigger>

//           <TooltipContent onPointerDownOutside={() => setOpen(!open)} {...args}>

//             <div className="flex gap-2">

//               <Button
//                 onClick={() => { }}
//                 size="small"
//                 styleType="default"
//                 variant="neutral"
//               >
//                 Button
//               </Button>

//               <Button
//                 onClick={() => { }}
//                 size="small"
//                 styleType="default"
//                 variant="danger"
//               >
//                 Button
//               </Button>
//             </div>

//           </TooltipContent>

//         </TooltipWithActions>
//       </div>
//     );
//   },
// }