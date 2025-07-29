import type { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, within } from '@storybook/test';
import { CalendarIcon, SearchIcon } from 'lucide-react';
import { SInput, SInputProps } from './';
import { ValidationStatus } from './constants';

const meta = {
	title: 'Forms/SInput',
	component: SInput,
	parameters: {
		docs: {
			description: {
				component: `
\`\`\`jsx
import { SInput } from '@chargebee/sting-react';

// Basic usage
<SInput placeholder="Enter text" />

// With label and tooltip
<SInput 
  label="Email" 
  labelInfo="Enter your work email address"
  tooltipPlacement="top"
  placeholder="name@company.com" 
/>

// With description and validation
<SInput 
  label="Email"
  description="Enter your work email"
  validationStatus="error"
  validationMessage="Please enter a valid email"
  placeholder="Enter email" 
/>

// Using the props-based API for prepend/append
<SInput
  prepend={<SearchIcon className="size-4" />}
  append={<CalendarIcon className="size-4" />}
  placeholder="Search..."
/>
\`\`\`

## Label Integration

The \`SInput\` component now uses the centralized \`SLabel\` component for consistent labeling:
- Use \`label\` prop for the label text
- Use \`labelInfo\` prop for tooltip content (displays an info icon)
- Use \`tooltipPlacement\` to control tooltip position
- Maintains all existing functionality while providing unified design
        `,
			},
		},
	},
	tags: ['autodocs'],
	args: {
		placeholder: 'Enter text',
	},
	argTypes: {},
} satisfies Meta<typeof SInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		placeholder: 'Default input',
		testId: 'default-input',
	},
	play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
		const canvas = within(canvasElement);
		const input = canvas.getByTestId('default-input');

		await expect(input).toBeInTheDocument();
		await userEvent.type(input, 'Hello World');
		await expect(input).toHaveValue('Hello World');
	},
};

export const WithLabel: Story = {
	args: {
		label: 'Input Label',
		placeholder: 'Input with label',
		testId: 'labeled-input',
	},
	play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
		const canvas = within(canvasElement);
		const input = canvas.getByTestId('labeled-input');
		const label = canvas.getByText('Input Label');

		await expect(label).toBeInTheDocument();
		await expect(input).toBeInTheDocument();
	},
};

export const WithLabelAndInfo: Story = {
	args: {
		label: 'Input Label',
		labelInfo: 'This is helpful information about the input field',
		tooltipPlacement: 'top',
		placeholder: 'Input with label and tooltip',
		testId: 'label-info-input',
	},
};

export const WithDescription: Story = {
	args: {
		label: 'Username',
		description: 'Enter your unique username for the platform',
		placeholder: 'johndoe',
		testId: 'description-input',
	},
	play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
		const canvas = within(canvasElement);
		const description = canvas.getByText(
			'Enter your unique username for the platform',
		);

		await expect(description).toBeInTheDocument();
	},
};

export const WithValidation: Story = {
	args: {
		label: 'Email',
		placeholder: 'Enter email',
	},
	render: (args: SInputProps) => (
		<div className="flex flex-col space-y-4">
			<SInput
				{...args}
				validationStatus={ValidationStatus.Error}
				validationMessage="Please enter a valid email address"
				testId="error-input"
			/>

			<SInput
				{...args}
				label="Username"
				placeholder="Choose username"
				validationStatus={ValidationStatus.Success}
				validationMessage="Username is available"
				testId="success-input"
			/>
		</div>
	),
	play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
		const canvas = within(canvasElement);
		const errorMessage = canvas.getByText('Please enter a valid email address');
		const successMessage = canvas.getByText('Username is available');

		await expect(errorMessage).toBeInTheDocument();
		await expect(successMessage).toBeInTheDocument();
	},
};

export const Disabled: Story = {
	args: {
		label: 'Disabled Input',
		value: 'This input is disabled',
		disabled: true,
		testId: 'disabled-input',
	},
	play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
		const canvas = within(canvasElement);
		const input = canvas.getByTestId('disabled-input');

		await expect(input).toBeDisabled();
		await expect(input).toHaveValue('This input is disabled');
	},
};

export const WithClearButton: Story = {
	args: {
		label: 'Clearable Input',
		allowClear: true,
		defaultValue: 'This can be cleared',
		testId: 'clearable-input',
	},
	play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
		const canvas = within(canvasElement);
		const input = canvas.getByTestId('clearable-input');

		// Verify initial state
		await expect(input).toHaveValue('This can be cleared');

		// Find the clear button and click it
		const clearButton = canvas.getByLabelText('Clear input');
		await userEvent.click(clearButton);

		// Verify the input is cleared
		await expect(input).toHaveValue('');
	},
};

export const CompleteExample: Story = {
	args: {
		label: 'Example Input',
	},
	render: (args: SInputProps) => (
		<div className="flex w-[400px] flex-col space-y-6">
			<SInput
				{...args}
				label="Email Address"
				labelInfo="Enter a valid email address for account verification"
				tooltipPlacement="top"
				placeholder="name@company.com"
				description="We'll never share your email with anyone else"
				allowClear
				testId="email-input"
			/>

			<SInput
				{...args}
				label="Phone Number"
				placeholder="Enter your phone number"
				testId="phone-input"
			/>

			<SInput
				{...args}
				label="Credit Card"
				labelInfo="We use secure encryption for all payment information"
				tooltipPlacement="top"
				placeholder="1234 5678 9012 3456"
				description="Enter your 16-digit card number"
				validationStatus={ValidationStatus.Error}
				validationMessage="Please enter a valid card number"
				testId="card-input"
			/>

			<SInput
				{...args}
				label="Search Products"
				prepend={<SearchIcon className="size-4" />}
				placeholder="Search for products..."
				allowClear
				testId="search-input"
			/>

			<SInput
				{...args}
				label="Discount Code"
				placeholder="Enter discount code"
				testId="discount-input"
				append={
					<button className="rounded-md bg-primary-500 px-2 py-1 text-xs text-white hover:bg-primary-600">
						Apply
					</button>
				}
			/>
		</div>
	),
};

export const TooltipPlacements: Story = {
	render: () => (
		<div className="grid grid-cols-2 gap-8 p-8">
			<SInput
				label="Top Tooltip"
				labelInfo="Tooltip positioned at the top of the info icon"
				tooltipPlacement="top"
				placeholder="Top tooltip placement"
			/>

			<SInput
				label="Right Tooltip"
				labelInfo="Tooltip positioned to the right of the info icon"
				tooltipPlacement="right"
				placeholder="Right tooltip placement"
			/>

			<SInput
				label="Bottom Tooltip"
				labelInfo="Tooltip positioned at the bottom of the info icon"
				tooltipPlacement="bottom"
				placeholder="Bottom tooltip placement"
			/>

			<SInput
				label="Left Tooltip"
				labelInfo="Tooltip positioned to the left of the info icon"
				tooltipPlacement="left"
				placeholder="Left tooltip placement"
			/>
		</div>
	),
};

export const PropsBasedLeadingTrailing: Story = {
	args: {
		label: 'Search',
		leadingIcon: <SearchIcon className="size-4" />,
		// trailingIcon: <CalendarIcon className="size-4" />,
		allowClear: true,
		value: 'Manually set value',
		placeholder: 'Search...',
		testId: 'props-leading-trailing-input',
	},
	play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
		const canvas = within(canvasElement);
		const input = canvas.getByTestId('props-leading-trailing-input');
		await expect(input).toBeInTheDocument();
	},
};
