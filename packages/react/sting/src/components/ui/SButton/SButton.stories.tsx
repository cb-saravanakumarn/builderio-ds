import type { Meta, StoryObj } from "@storybook/react";
import { SButton } from ".";
import { BeakerIcon, CheckIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

const meta: Meta<typeof SButton> = {
  component: SButton,
  decorators: [(Story: any) => <div className="p-4"><Story /></div>],
  title: "Design System/Actions/SButton",
  tags: ["autodocs"],
  args: {
    variant: "primary",
    styleType: "default",
    size: "regular",
    fullWidth: false,
    children: "Button",
    disabled: false,
    asChild: false,
    rounded: "md",
  },
  argTypes: {
    variant: {
      options: ["primary", "neutral", "danger", "warning", "ghost", "success"],
      control: { type: "select" },
      description: 'The visual style variant of the button',
      table: {
        defaultValue: { summary: 'primary' },
        type: { summary: 'string' }
      }
    },
    children: {
      control: { type: "text" },
      description: 'The content to be rendered inside the button'
    },
    styleType: {
      options: [
        "default",
        "outline",
        "text",
        "icon",
        "icon-borderless",
      ],
      control: { type: "select" },
      description: 'The style type of the button',
      table: {
        defaultValue: { summary: 'default' }
      }
    },
    fullWidth: {
      control: { type: "boolean" },
      description: 'Whether the button should take up the full width of its container'
    },
    size: {
      options: ["small", "regular", "large"],
      control: { type: "select" },
      description: 'The size of the button',
      table: {
        defaultValue: { summary: 'regular' }
      }
    },
    rounded: {
      options: ["none", "sm", "md", "lg", "full"],
      control: { type: "select" },
      description: 'The border radius of the button',
      table: {
        defaultValue: { summary: 'md' }
      }
    },
    disabled: { 
      control: { type: "boolean" },
      description: 'Whether the button is disabled'
    },
    onClick: { 
      action: "clicked",
      description: 'Function called when the button is clicked'
    },
    asChild: {
      control: { type: "boolean" },
      description: 'Whether to render the button as a child component using Radix UI Slot'
    },
    loading: {
      control: { type: "boolean" },
      description: 'Whether the button is in a loading state'
    },
    icon: {
      control: { type: "boolean" },
      description: 'Whether to show an icon in the button'
    },
    iconPosition: {
      options: ["left", "right"],
      control: { type: "radio" },
      description: 'The position of the icon relative to the button text',
      if: { arg: 'icon', truthy: true }
    }
  },
  parameters: {
    docs: {
      description: {
        component: `
# SButton

A versatile button component that supports multiple variants, sizes, styles, and states.

## Features

- Multiple visual variants: primary, neutral, danger, warning, ghost, success
- Different style types: default, outline, text, icon, icon-borderless
- Size variations: small, regular, large
- Support for loading state with spinner
- Icon support with position control (left/right)
- Full width option for responsive layouts
- Border radius customization
- Composition flexibility with Radix UI Slot

## Accessibility

- Proper ARIA attributes for disabled and loading states
- Keyboard navigation support
- Focus visible styling

## Usage

\`\`\`jsx
import { SButton } from '@/components/ui/SButton';

// Basic usage
<SButton variant="primary">Click me</SButton>

// With icon
<SButton variant="primary" icon={<Icon />} iconPosition="left">
  With Icon
</SButton>

// Loading state
<SButton loading>Loading</SButton>

// As link with asChild
<SButton asChild>
  <a href="/somewhere">Link styled as button</a>
</SButton>
\`\`\`
        `
      }
    }
  }
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Button",
    variant: "primary"
  }
};

export const WithLeftIcon: Story = {
  render: (args) => (
    <SButton {...args} icon={<BeakerIcon className="w-5 h-5" />} iconPosition="left">
      {args.children}
    </SButton>
  ),
  args: {
    children: "With Left Icon"
  }
};

export const WithRightIcon: Story = {
  render: (args) => (
    <SButton {...args} icon={<ArrowRightIcon className="w-5 h-5" />} iconPosition="right">
      {args.children}
    </SButton>
  ),
  args: {
    children: "With Right Icon"
  }
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
    children: "Ghost Button"
  }
};

export const Success: Story = {
  render: (args) => (
    <SButton {...args} icon={<CheckIcon className="w-5 h-5" />}>
      {args.children}
    </SButton>
  ),
  args: {
    variant: "success",
    children: "Success"
  }
};

export const Loading: Story = {
  args: {
    loading: true,
    children: "Loading"
  }
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: "Disabled"
  }
};

export const AsLink: Story = {
  render: (args) => (
    <SButton {...args} asChild>
      <a href="#" onClick={(e) => e.preventDefault()}>Link as Button</a>
    </SButton>
  )
};

export const Rounded: Story = {
  render: () => (
    <div className="s-flex s-flex-wrap s-gap-4">
      <SButton rounded="none">Squared</SButton>
      <SButton rounded="sm">Small Radius</SButton>
      <SButton rounded="md">Medium Radius</SButton>
      <SButton rounded="lg">Large Radius</SButton>
      <SButton rounded="full">Fully Rounded</SButton>
    </div>
  )
};

export const AllVariants: Story = {
  render: () => (
    <div className="s-flex s-flex-wrap s-gap-4">
      <div className="s-flex s-flex-wrap s-gap-4">
        <SButton variant="primary">Primary</SButton>
        <SButton variant="neutral">Neutral</SButton>
        <SButton variant="danger">Danger</SButton>
        <SButton variant="warning">Warning</SButton>
        <SButton variant="ghost">Ghost</SButton>
        <SButton variant="success">Success</SButton>
      </div>
      <div className="s-flex s-flex-wrap s-gap-4">
        <SButton variant="primary" styleType="outline">Primary Outline</SButton>
        <SButton variant="neutral" styleType="outline">Neutral Outline</SButton>
        <SButton variant="danger" styleType="outline">Danger Outline</SButton>
        <SButton variant="warning" styleType="outline">Warning Outline</SButton>
        <SButton variant="ghost" styleType="outline">Ghost Outline</SButton>
        <SButton variant="success" styleType="outline">Success Outline</SButton>
      </div>
      <div className="s-flex s-flex-wrap s-gap-4">
        <SButton variant="primary" styleType="text">Primary Text</SButton>
        <SButton variant="neutral" styleType="text">Neutral Text</SButton>
        <SButton variant="danger" styleType="text">Danger Text</SButton>
        <SButton variant="warning" styleType="text">Warning Text</SButton>
        <SButton variant="ghost" styleType="text">Ghost Text</SButton>
        <SButton variant="success" styleType="text">Success Text</SButton>
      </div>
    </div>
  )
};

export const Sizes: Story = {
  render: () => (
    <div className="s-flex s-items-center s-gap-4">
      <SButton size="small">Small</SButton>
      <SButton size="regular">Regular</SButton>
      <SButton size="large">Large</SButton>
    </div>
  )
};

export const FullWidth: Story = {
  render: () => (
    <div className="s-flex s-flex-col s-gap-4 s-w-full">
      <SButton fullWidth>Full Width Button</SButton>
      <SButton fullWidth variant="neutral">Full Width Neutral</SButton>
    </div>
  )
};

export const IconButtons: Story = {
  render: () => (
    <div className="s-flex s-flex-wrap s-gap-4">
      {["primary", "neutral", "danger", "warning", "ghost", "success"].map((variant) => (
        <SButton
          key={variant}
          variant={variant as any}
          styleType="icon"
          aria-label={`${variant} icon button`}
        >
          <BeakerIcon className="w-5 h-5" />
        </SButton>
      ))}
    </div>
  )
};

export const IconButtonSizes: Story = {
  render: () => (
    <div className="s-flex s-items-center s-gap-4">
      <SButton styleType="icon" size="small" aria-label="Small icon">
        <BeakerIcon className="s-w-4 s-h-4" />
      </SButton>
      <SButton styleType="icon" size="regular" aria-label="Regular icon">
        <BeakerIcon className="s-w-5 s-h-5" />
      </SButton>
      <SButton styleType="icon" size="large" aria-label="Large icon">
        <BeakerIcon className="w-6 h-6" />
      </SButton>
    </div>
  )
};

export const LoadingStates: Story = {
  render: () => (
    <div className="s-flex s-flex-wrap s-gap-4">
      <SButton loading>Loading</SButton>
      <SButton variant="ghost" loading>Loading Ghost</SButton>
      <SButton variant="danger" loading>Loading Danger</SButton>
    </div>
  )
};