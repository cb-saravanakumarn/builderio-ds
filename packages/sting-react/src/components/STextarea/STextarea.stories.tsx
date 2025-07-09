import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { STextarea } from '.';

const meta: Meta<typeof STextarea> = {
	title: 'Forms/STextarea',
	component: STextarea,
	tags: ['autodocs'],
	parameters: {
		docs: {
			description: {
				component: `
\`\`\`jsx
import { STextarea } from '@chargebee/sting-react';

// Basic usage
<STextarea 
  label="Description" 
  placeholder="Enter a description..." 
/>

// With tooltip info
<STextarea 
  label="Description"
  labelInfo="Please provide detailed information to help us process your request"
  tooltipPlacement="top"
  placeholder="Enter a description..." 
/>

// With validation
<STextarea 
  label="Feedback" 
  validationStatus="error"
  validationMessage="Feedback is required" 
/>
\`\`\`

The \`STextarea\` component provides a multi-line text input with integrated SLabel support for consistent labeling across the design system. Features include auto-resizing, validation states, clear button, and tooltip information.

## Label Integration

The component now uses the centralized \`SLabel\` component internally, providing:
- Consistent labeling across all form components
- Built-in tooltip support via \`labelInfo\` prop
- Unified styling and behavior
`,
			},
		},
	},
	args: {
		placeholder: 'Enter text here...',
	},
	argTypes: {
		size: {
			control: 'select',
			options: ['regular', 'large'],
			description: 'Size of the textarea',
			table: {
				defaultValue: { summary: 'regular' },
			},
		},
		validationStatus: {
			control: 'select',
			options: [undefined, 'error', 'success'],
			description: 'Validation status of the textarea',
		},
		rows: {
			control: 'number',
			description: 'Number of visible text lines',
			table: {
				defaultValue: { summary: '3' },
			},
		},
		resize: {
			control: 'select',
			options: ['none', 'both', 'horizontal', 'vertical'],
			description: 'Resize behavior of the textarea',
			table: {
				defaultValue: { summary: 'vertical' },
			},
		},
		disabled: {
			control: 'boolean',
			description: 'Whether the textarea is disabled',
		},
		allowClear: {
			control: 'boolean',
			description: 'Whether to show a clear button',
		},
	},
};

export default meta;
type Story = StoryObj<typeof STextarea>;

export const Default: Story = {
	args: {
		label: 'Description',
		placeholder: 'Enter a description...',
		rows: 4,
	},
};

export const WithDescription: Story = {
	args: {
		label: 'Description',
		description: 'Please provide a detailed explanation of your request.',
		placeholder: 'Enter a description...',
		rows: 4,
	},
};

export const WithValidation: Story = {
	args: {
		label: 'Feedback',
		placeholder: 'Enter your feedback...',
		validationStatus: 'error',
		validationMessage: 'Feedback is required',
		rows: 4,
	},
};

export const WithSuccessValidation: Story = {
	args: {
		label: 'Feedback',
		placeholder: 'Enter your feedback...',
		defaultValue: 'This is some feedback text that meets the requirements.',
		validationStatus: 'success',
		validationMessage: 'Feedback meets the requirements',
		rows: 4,
	},
};

export const WithLabelInfo: Story = {
	args: {
		label: 'Description',
		labelInfo:
			'Please provide a detailed description to help us better understand your request.',
		tooltipPlacement: 'top',
		placeholder: 'Enter a description...',
		rows: 4,
	},
};

export const Disabled: Story = {
	args: {
		label: 'Description',
		placeholder: 'This textarea is disabled',
		disabled: true,
		rows: 4,
	},
};

export const WithClearButton: Story = {
	args: {
		label: 'Description',
		placeholder: 'Enter a description...',
		defaultValue: 'This is some text that can be cleared with the button.',
		allowClear: true,
		rows: 4,
	},
};

export const Resizable: Story = {
	args: {
		label: 'Resizable Textarea',
		placeholder: 'This textarea can be resized in both directions...',
		resize: 'both',
		rows: 4,
	},
};

export const AutoResizing: Story = {
	args: {
		label: 'Auto-resizing Textarea',
		placeholder:
			'This textarea will automatically resize to fit the content as you type...',
		rows: 0,
	},
};

export const DifferentSizes: Story = {
	render: (args) => (
		<div className="flex flex-col gap-4">
			<STextarea
				{...args}
				label="Regular Textarea"
				placeholder="Regular size (default)..."
				size="regular"
				rows={4}
			/>
			<STextarea
				{...args}
				label="Large Textarea"
				placeholder="Large size..."
				size="large"
				rows={4}
			/>
		</div>
	),
};

export const ControlledTextarea: Story = {
	render: () => {
		const [value, setValue] = useState('This is a controlled textarea.');

		return (
			<div className="space-y-4">
				<STextarea
					label="Controlled Textarea"
					placeholder="Type something..."
					value={value}
					onChange={(e) => setValue((e.target as HTMLTextAreaElement).value)}
					allowClear
					onClear={() => setValue('')}
					rows={3}
				/>

				<div className="rounded-md bg-neutral-50 p-4">
					<p className="text-sm">
						Current value: <strong>{value}</strong>
					</p>
					<div className="mt-2 flex gap-2">
						<button
							className="rounded border bg-white px-3 py-1 text-sm shadow-sm hover:bg-slate-50"
							onClick={() => setValue('Hello, world!')}
						>
							Set to "Hello, world!"
						</button>
						<button
							className="rounded border bg-white px-3 py-1 text-sm shadow-sm hover:bg-slate-50"
							onClick={() => setValue('')}
						>
							Clear
						</button>
					</div>
				</div>
			</div>
		);
	},
};

export const TooltipPlacements: Story = {
	render: () => (
		<div className="grid grid-cols-2 gap-8 p-8">
			<STextarea
				label="Top Tooltip"
				labelInfo="Tooltip positioned at the top of the info icon"
				tooltipPlacement="top"
				placeholder="Top tooltip placement"
				rows={3}
			/>

			<STextarea
				label="Right Tooltip"
				labelInfo="Tooltip positioned to the right of the info icon"
				tooltipPlacement="right"
				placeholder="Right tooltip placement"
				rows={3}
			/>

			<STextarea
				label="Bottom Tooltip"
				labelInfo="Tooltip positioned at the bottom of the info icon"
				tooltipPlacement="bottom"
				placeholder="Bottom tooltip placement"
				rows={3}
			/>

			<STextarea
				label="Left Tooltip"
				labelInfo="Tooltip positioned to the left of the info icon"
				tooltipPlacement="left"
				placeholder="Left tooltip placement"
				rows={3}
			/>
		</div>
	),
};
