import type { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, within } from '@storybook/test';
import { SLabel } from './index';
import { SInput } from '../SInput';

const meta = {
	title: 'Forms/SLabel',
	component: SLabel,
	parameters: {
		layout: 'centered',
		docs: {
			description: {
				component: `
\`\`\`jsx
import { SLabel } from '@chargebee/sting-react';

// Basic usage
<SLabel htmlFor="input-id">Label Text</SLabel>

// With tooltip info
<SLabel 
  htmlFor="input-id" 
  labelInfo="Additional information about this field"
  tooltipPlacement="top"
>
  Label with Info
</SLabel>
\`\`\`
        `,
			},
		},
	},
	tags: ['autodocs'],
	args: {
		children: 'Label Text',
		htmlFor: 'example-input',
	},
} satisfies Meta<typeof SLabel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		children: 'Default Label',
		htmlFor: 'default-input',
	},
	render: (args) => (
		<div className="space-y-2">
			<SLabel {...args} />
			<SInput id={args.htmlFor} placeholder="Example input" />
		</div>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const label = canvas.getByText('Default Label');
		const input = canvas.getByPlaceholderText('Example input');

		// Test label is rendered correctly
		await expect(label).toBeInTheDocument();
		await expect(label).toHaveClass('text-para-medium');

		// Test label is associated with input
		await expect(label.closest('label')).toHaveAttribute(
			'for',
			'default-input',
		);

		// Test clicking label focuses input
		await userEvent.click(label);
		await expect(input).toHaveFocus();
	},
};

export const WithTooltipInfo: Story = {
	args: {
		children: 'Label with Info',
		htmlFor: 'info-input',
		labelInfo:
			'This field requires additional information to help you understand what to enter.',
		tooltipPlacement: 'top',
	},
	render: (args) => (
		<div className="space-y-2">
			<SLabel {...args} />
			<SInput id={args.htmlFor} placeholder="Input with helpful tooltip" />
		</div>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const label = canvas.getByText('Label with Info');
		const infoIcon = canvas.getByRole('generic').querySelector('svg');

		// Test label and info icon are rendered
		await expect(label).toBeInTheDocument();
		await expect(infoIcon).toBeInTheDocument();

		// Test tooltip appears on hover
		if (infoIcon) {
			await userEvent.hover(infoIcon);
			// Note: Tooltip content testing would depend on how STooltip is implemented
		}
	},
};

export const TooltipPlacements: Story = {
	render: () => (
		<div className="grid grid-cols-2 gap-8 p-8">
			<div className="space-y-2">
				<SLabel
					htmlFor="top-input"
					labelInfo="Tooltip positioned at the top"
					tooltipPlacement="top"
				>
					Top Placement
				</SLabel>
				<SInput id="top-input" placeholder="Top tooltip" />
			</div>

			<div className="space-y-2">
				<SLabel
					htmlFor="right-input"
					labelInfo="Tooltip positioned to the right"
					tooltipPlacement="right"
				>
					Right Placement
				</SLabel>
				<SInput id="right-input" placeholder="Right tooltip" />
			</div>

			<div className="space-y-2">
				<SLabel
					htmlFor="bottom-input"
					labelInfo="Tooltip positioned at the bottom"
					tooltipPlacement="bottom"
				>
					Bottom Placement
				</SLabel>
				<SInput id="bottom-input" placeholder="Bottom tooltip" />
			</div>

			<div className="space-y-2">
				<SLabel
					htmlFor="left-input"
					labelInfo="Tooltip positioned to the left"
					tooltipPlacement="left"
				>
					Left Placement
				</SLabel>
				<SInput id="left-input" placeholder="Left tooltip" />
			</div>
		</div>
	),
};

export const LongTooltipText: Story = {
	args: {
		children: 'Complex Field',
		htmlFor: 'complex-input',
		labelInfo:
			'This is a very long tooltip message that explains in detail what this field is for, what kind of data should be entered, and any special formatting requirements or validation rules that apply. It demonstrates how the tooltip handles longer content.',
		tooltipPlacement: 'top',
	},
	render: (args) => (
		<div className="max-w-md space-y-2">
			<SLabel {...args} />
			<SInput id={args.htmlFor} placeholder="Field with long tooltip" />
		</div>
	),
};

export const RequiredField: Story = {
	render: () => (
		<div className="space-y-2">
			<SLabel
				htmlFor="required-input"
				labelInfo="This field is required and must be filled out"
				tooltipPlacement="top"
			>
				Required Field <span className="text-red-500">*</span>
			</SLabel>
			<SInput id="required-input" placeholder="Required input" required />
		</div>
	),
};

export const WithoutTooltip: Story = {
	args: {
		children: 'Simple Label',
		htmlFor: 'simple-input',
	},
	render: (args) => (
		<div className="space-y-2">
			<SLabel {...args} />
			<SInput id={args.htmlFor} placeholder="Simple input field" />
		</div>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const label = canvas.getByText('Simple Label');

		// Test that no info icon is rendered when labelInfo is not provided
		await expect(label).toBeInTheDocument();
		const infoIcon = canvas.queryByRole('generic')?.querySelector('svg');
		await expect(infoIcon).not.toBeInTheDocument();
	},
};
