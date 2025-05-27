import type { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, within } from '@storybook/test';
import { CalendarIcon, InfoIcon, SearchIcon } from 'lucide-react';
import { SInput } from './index';

const meta = {
	title: 'Design System/Forms/SInput',
	component: SInput,
	parameters: {
		docs: {
			description: {
				component: `
\`\`\`jsx
import { SInput } from '@chargebee/sting-react';

// Basic usage
<SInput placeholder="Enter text" />

// With label and description
<SInput 
  label="Email" 
  description="Enter your work email"
  placeholder="name@company.com" 
/>

// With validation
<SInput 
  validationStatus="error"
  validationMessage="Please enter a valid email"
  placeholder="Enter email" 
/>

// With prefix and suffix (compound component)
<SInput>  
  <SInput.Prefix>
    <SearchIcon className="size-4" />
  </SInput.Prefix>  
  <SInput.Field placeholder="Search..." />  
  <SInput.Suffix>
    <CalendarIcon className="size-4" />
  </SInput.Suffix>  
</SInput>
\`\`\`
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
		labelInfo: <InfoIcon className="size-4" />,
		tooltipContent: 'This is helpful information about the input field',
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
	render: () => (
		<div className="flex flex-col space-y-4">
			<SInput
				label="Email"
				placeholder="Enter email"
				validationStatus="error"
				validationMessage="Please enter a valid email address"
				testId="error-input"
			/>

			<SInput
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

export const CompoundWithPrefix: Story = {
	render: () => (
		<SInput label="Search">
			<SInput.Prefix>
				<SearchIcon className="size-4" />
			</SInput.Prefix>
			<SInput.Field placeholder="Search..." testId="prefix-input" />
		</SInput>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const input = canvas.getByTestId('prefix-input');
		const searchIcon = canvas.getByRole('img', { hidden: true });

		await expect(input).toBeInTheDocument();
		await expect(searchIcon).toBeInTheDocument();
	},
};

export const CompoundWithSuffix: Story = {
	render: () => (
		<SInput label="Date">
			<SInput.Field placeholder="Select date..." testId="suffix-input" />
			<SInput.Suffix>
				<CalendarIcon className="size-4" />
			</SInput.Suffix>
		</SInput>
	),
};

export const CompoundWithBoth: Story = {
	render: () => (
		<SInput label="Date Range">
			<SInput.Prefix>
				<CalendarIcon className="size-4" />
			</SInput.Prefix>
			<SInput.Field placeholder="Start date - End date" testId="both-input" />
			<SInput.Suffix>%</SInput.Suffix>
		</SInput>
	),
};

export const CompleteExample: Story = {
	render: () => (
		<div className="flex w-[400px] flex-col space-y-6">
			<SInput
				label="Email Address"
				labelInfo={<InfoIcon className="size-4" />}
				tooltipContent="Enter a valid email address for account verification"
				placeholder="name@company.com"
				description="We'll never share your email with anyone else"
				fullWidth
				allowClear
				testId="email-input"
			/>

			<SInput label="Phone Number">
				<SInput.Field
					placeholder="Enter your phone number"
					testId="phone-input"
				/>
			</SInput>

			<SInput
				label="Credit Card"
				labelInfo={<InfoIcon className="size-4" />}
				tooltipContent="We use secure encryption for all payment information"
				placeholder="1234 5678 9012 3456"
				description="Enter your 16-digit card number"
				validationStatus="error"
				validationMessage="Please enter a valid card number"
				testId="card-input"
			/>

			<SInput label="Search Products">
				<SInput.Prefix>
					<SearchIcon className="size-4" />
				</SInput.Prefix>
				<SInput.Field
					placeholder="Search for products..."
					allowClear
					testId="search-input"
				/>
			</SInput>

			<SInput label="Discount Code">
				<SInput.Field
					placeholder="Enter discount code"
					testId="discount-input"
				/>
				<SInput.Suffix>
					<button className="rounded-md bg-primary-500 px-2 py-1 text-xs text-white hover:bg-primary-600">
						Apply
					</button>
				</SInput.Suffix>
			</SInput>
		</div>
	),
};
