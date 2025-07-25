import type { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, within } from '@storybook/test';
import { CalendarIcon, SearchIcon } from 'lucide-react';
import { SInput } from './index';

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

// With prepend and append (compound component)
<SInput>
  <SInput.Prepend>
    <SearchIcon className="size-4" />
  </SInput.Prepend>
  <SInput.Field placeholder="Search..." />
  <SInput.Append>
    <CalendarIcon className="size-4" />
  </SInput.Append>
</SInput>

// Using the props-based API
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
} satisfies Meta<typeof SInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		placeholder: 'Default input',
		testId: 'default-input',
	},
	play: async ({ canvasElement }) => {
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
	play: async ({ canvasElement }) => {
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
	play: async ({ canvasElement }) => {
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
	render: (args) => (
		<div className="flex flex-col space-y-4">
			<SInput
				{...args}
				validationStatus="error"
				validationMessage="Please enter a valid email address"
				testId="error-input"
			/>

			<SInput
				{...args}
				label="Username"
				placeholder="Choose username"
				validationStatus="success"
				validationMessage="Username is available"
				testId="success-input"
			/>
		</div>
	),
	play: async ({ canvasElement }) => {
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
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const input = canvas.getByTestId('disabled-input');

		await expect(input).toBeDisabled();
		await expect(input).toHaveValue('This input is disabled');
	},
};

export const WithDelay: Story = {
	args: {
		label: 'Search with Debounce',
		placeholder: 'Type to search...',
		delay: 500,
		testId: 'debounced-input',
	},
};

export const WithClearButton: Story = {
	args: {
		label: 'Clearable Input',
		allowClear: true,
		defaultValue: 'This can be cleared',
		testId: 'clearable-input',
	},
	play: async ({ canvasElement }) => {
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

export const FullWidth: Story = {
	args: {
		label: 'Full Width Input',
		fullWidth: true,
		placeholder: 'This input takes full width',
		testId: 'full-width-input',
	},
};

export const CompoundWithPrepend: Story = {
	args: {
		label: 'Search',
	},
	render: (args) => (
		<SInput {...args}>
			<SInput.Prepend>
				<SearchIcon className="size-4" />
			</SInput.Prepend>
			<SInput.Field placeholder="Search..." testId="prepend-input" />
		</SInput>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const input = canvas.getByTestId('prepend-input');
		const searchIcon = canvas.getByRole('img', { hidden: true });

		await expect(input).toBeInTheDocument();
		await expect(searchIcon).toBeInTheDocument();
	},
};

export const CompoundWithAppend: Story = {
	args: {
		label: 'Date',
	},
	render: (args) => (
		<SInput {...args}>
			<SInput.Field placeholder="Select date..." testId="append-input" />
			<SInput.Append>
				<CalendarIcon className="size-4" />
			</SInput.Append>
		</SInput>
	),
};

export const CompoundWithBoth: Story = {
	args: {
		label: 'Date Range',
	},
	render: (args) => (
		<SInput {...args}>
			<SInput.Prepend>
				<CalendarIcon className="size-4" />
			</SInput.Prepend>
			<SInput.Field placeholder="Start date - End date" testId="both-input" />
			<SInput.Append>%</SInput.Append>
		</SInput>
	),
};

export const CompleteExample: Story = {
	args: {
		label: 'Example Input',
	},
	render: (args) => (
		<div className="flex w-[400px] flex-col space-y-6">
			<SInput
				{...args}
				label="Email Address"
				labelInfo="Enter a valid email address for account verification"
				tooltipPlacement="top"
				placeholder="name@company.com"
				description="We'll never share your email with anyone else"
				fullWidth
				allowClear
				testId="email-input"
			/>

			<SInput {...args} label="Phone Number">
				<SInput.Field
					placeholder="Enter your phone number"
					testId="phone-input"
				/>
			</SInput>

			<SInput
				{...args}
				label="Credit Card"
				labelInfo="We use secure encryption for all payment information"
				tooltipPlacement="top"
				placeholder="1234 5678 9012 3456"
				description="Enter your 16-digit card number"
				validationStatus="error"
				validationMessage="Please enter a valid card number"
				testId="card-input"
			/>

			<SInput {...args} label="Search Products">
				<SInput.Prepend>
					<SearchIcon className="size-4" />
				</SInput.Prepend>
				<SInput.Field
					placeholder="Search for products..."
					allowClear
					testId="search-input"
				/>
			</SInput>

			<SInput {...args} label="Discount Code">
				<SInput.Field
					placeholder="Enter discount code"
					testId="discount-input"
				/>
				<SInput.Append>
					<button className="rounded-md bg-primary-500 px-2 py-1 text-xs text-white hover:bg-primary-600">
						Apply
					</button>
				</SInput.Append>
			</SInput>
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

// Story showcasing props-based prepend/append API
export const PropsBasedPrependAppend: Story = {
	args: {
		label: 'Search',
		prepend: <SearchIcon className="size-4" />,
		append: <CalendarIcon className="size-4" />,
		placeholder: 'Search...',
		testId: 'props-prepend-append-input',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const input = canvas.getByTestId('props-prepend-append-input');
		await expect(input).toBeInTheDocument();
	},
};
