import type { Meta, StoryObj } from '@storybook/react';
import { SDrawer } from '.';
import { SButton as Button } from '../SButton';
import { useState } from 'react';

type SDrawerProps = React.ComponentProps<typeof SDrawer> & {
  placement?: 'left' | 'right' | 'top' | 'bottom';
  size?: 'narrow' | 'regular' | 'wide' ;
  height?: 'short' | 'regular' |  'full';
  showCloseIcon?: boolean;
  title?: string;
  description?: string;
  triggerText?: string;
  hasFooter?: boolean;
  border?: boolean;
  customClass?: string;
  show?: boolean;
  shadow?: boolean;
  
}

const meta: Meta<SDrawerProps> = {
  title: 'Design System/Actions/SDrawer',
  component: SDrawer,
  tags: ['autodocs'],
  argTypes: {
    placement: {
      control: 'select',
      options: ['left', 'right', 'top', 'bottom'],
      description: 'The placement of the drawer',
      defaultValue: 'right',
    },
    size: {
      control: 'select',
      options: ['narrow', 'regular', 'wide', 'full'],
      description: 'The width of the drawer',
      defaultValue: 'regular',
    },
    height: {
      control: 'select',
      options: ['short', 'regular', 'tall', 'full'],
      description: 'The height of the drawer',
      defaultValue: 'full',
    },
    showCloseIcon: {
      control: 'boolean',
      description: 'Whether to show the close icon',
      defaultValue: true,
      table: {
        category: 'header',
      },
    },
    title: {
      control: 'text',
      description: 'The title of the drawer',
      defaultValue: 'Drawer Title',
    },
    description: {
      control: 'text',
      description: 'The description of the drawer',
      defaultValue: 'Drawer description goes here.',
    },
    triggerText: {
      control: 'text',
      description: 'The text on the trigger button',
      defaultValue: 'Open Drawer',
    },
    hasFooter: {
      control: 'boolean',
      description: 'Whether to show the footer',
      defaultValue: true,
    },
    customClass: {
      control: 'text',
      description: 'Custom CSS classes to add to the drawer',
    },
    border: {
        control: 'boolean',
        description: 'Whether to show a border around the drawer',
        table: {
            category: 'header',
          },
   
  },
  shadow: { 
    control: 'boolean',
    description: 'Whether to show a shadow around the drawer',
    table: {
        category: 'header',
  }
},
  },
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A drawer component that slides in from the edge of the screen. Uses compound component pattern for better organization and flexibility.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<SDrawerProps>;

// Playground Story with Controls
export const Playground: Story = {
  render: ({ 
    placement = 'right',
    size = 'regular',
    height = 'full',
    showCloseIcon = false,
    title = 'Drawer Title',
    description = 'Drawer description goes here.',
    triggerText = 'Open Drawer',
    hasFooter = true,
    customClass = '',
    border = false,
    shadow = false,
  }) => {
    const [open, setOpen] = useState(false);
    
    const codeSnippet = `
const [open, setOpen] = useState(false);

<SDrawer open={open} onOpenChange={setOpen}>
  <SDrawer.Trigger asChild>
    <Button>${triggerText}</Button>
  </SDrawer.Trigger>
  <SDrawer.Content 
    placement="${placement}"
    size="${size}"
    height="${height}"
    showCloseIcon={${showCloseIcon}}
    ${customClass ? `className="${customClass}"` : ''}
  >
    <SDrawer.Header>
      <SDrawer.Title>${title}</SDrawer.Title>
      <SDrawer.Description>${description}</SDrawer.Description>
    </SDrawer.Header>
    <div className="p-6">
      {/* Your content here */}
    </div>
    ${hasFooter ? `<SDrawer.Footer>
      <Button variant="outline">Cancel</Button>
      <Button>Confirm</Button>
    </SDrawer.Footer>` : ''}
  </SDrawer.Content>
</SDrawer>`;

    return (
      <div className="space-y-4">
        <div className="space-y-2">
          <Button onClick={() => setOpen(true)}>
            Open Programmatically
          </Button>
          <p className="text-sm text-gray-500">
            Current state: {open ? 'Open' : 'Closed'}
          </p>
        </div>

        <SDrawer open={open} onOpenChange={setOpen}>
          <SDrawer.Trigger asChild>
            <Button>{triggerText}</Button>
          </SDrawer.Trigger>
          <SDrawer.Content
            placement={placement}
            size={size}
             height={height}
            showCloseIcon={showCloseIcon}
            className={customClass}
          >
            <SDrawer.Header border={border} shadow={shadow} showCloseIcon={showCloseIcon}>
              <SDrawer.Title>{title}</SDrawer.Title>
              <SDrawer.Description>{description}</SDrawer.Description>
            </SDrawer.Header>
            <div className="p-6">
              <div className="space-y-4">
                <div className="p-4 bg-slate-100 rounded-lg">
                  <h3 className="font-medium mb-2">Current Configuration:</h3>
                  <ul className="text-sm space-y-1">
                    <li>Open State: {open ? 'Open' : 'Closed'}</li>
                    <li>Placement: {placement}</li>
                    <li>Size: {size}</li>
                    <li>Height: {height}</li>
                  </ul>
                </div>
                <div className="p-4 bg-slate-100 rounded-lg">
                  <h3 className="font-medium mb-2">Implementation Code:</h3>
                  <pre className="text-sm bg-slate-800 text-slate-50 p-4 rounded-md overflow-x-auto">
                    {codeSnippet}
                  </pre>
                </div>
              </div>
            </div>
            {hasFooter && (
              <SDrawer.Footer>
                <Button  onClick={() => setOpen(false)}>Cancel</Button>
                <Button onClick={() => setOpen(false)}>Confirm</Button>
              </SDrawer.Footer>
            )}
          </SDrawer.Content>
        </SDrawer>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive playground for the SDrawer component with state management.',
      },
    },
  },
};

// Left Navigation Example
export const LeftNavigation: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    
    const codeSnippet = `
<SDrawer>
  <SDrawer.Trigger asChild>
    <Button>Open Navigation</Button>
  </SDrawer.Trigger>
  <SDrawer.Content placement="left" size="narrow">
    <SDrawer.Header>
      <SDrawer.Title>Navigation</SDrawer.Title>
    </SDrawer.Header>
    <nav className="p-6 s-space-y-2">
      <a href="#" className="block p-2 hover:bg-slate-100 rounded">Home</a>
      <a href="#" className="block p-2 hover:bg-slate-100 rounded">Products</a>
      <a href="#" className="block p-2 hover:bg-slate-100 rounded">Settings</a>
    </nav>
  </SDrawer.Content>
</SDrawer>`;

    return (
      <div className="space-y-4">
        <SDrawer open={open} onOpenChange={setOpen}>
          <SDrawer.Trigger asChild>
            <Button>Open Navigation</Button>
          </SDrawer.Trigger>
          <SDrawer.Content placement="left" size="narrow">
            <SDrawer.Header>
              <SDrawer.Title>Navigation</SDrawer.Title>
            </SDrawer.Header>
            <nav className="p-6 space-y-2">
              <a href="#" className="block p-2 hover:bg-slate-100 rounded">Home</a>
              <a href="#" className="block p-2 hover:bg-slate-100 rounded">Products</a>
              <a href="#" className="block p-2 hover:bg-slate-100 rounded">Settings</a>
            </nav>
            <div className="p-4 mt-4 bg-slate-100">
              <h3 className="font-medium mb-2">Code:</h3>
              <pre className="text-sm bg-slate-800 text-slate-50 p-4 rounded-md overflow-x-auto">
                {codeSnippet}
              </pre>
            </div>
          </SDrawer.Content>
        </SDrawer>
      </div>
    );
  },
};

// Form Example
export const WithForm: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    
    return (
      <SDrawer open={open} onOpenChange={setOpen}>
        <SDrawer.Trigger asChild>
          <Button>Edit Profile</Button>
        </SDrawer.Trigger>
        <SDrawer.Content size="wide">
          <SDrawer.Header>
            <SDrawer.Title>Edit Profile</SDrawer.Title>
            <SDrawer.Description>
              Make changes to your profile here.
            </SDrawer.Description>
          </SDrawer.Header>
          <div className="p-6">
            <form className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">Name</label>
                <input
                  id="name"
                  className="w-full p-2 border rounded-md"
                  placeholder="Enter your name"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">Email</label>
                <input
                  id="email"
                  type="email"
                  className="w-full p-2 border rounded-md"
                  placeholder="Enter your email"
                />
              </div>
            </form>
          </div>
          <SDrawer.Footer>
            <Button  onClick={() => setOpen(false)}>Cancel</Button>
            <Button onClick={() => setOpen(false)}>Save changes</Button>
          </SDrawer.Footer>
        </SDrawer.Content>
      </SDrawer>
    );
  },
};