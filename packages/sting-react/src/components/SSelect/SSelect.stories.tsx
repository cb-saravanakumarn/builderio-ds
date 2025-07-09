import type { Meta, StoryObj } from '@storybook/react';
import { SSelect } from '.';

const meta: Meta<typeof SSelect> = {
	title: 'Forms/SSelect',
	component: SSelect,
	tags: ['autodocs'],
	parameters: {
		docs: {
			description: {
				component: `
\`\`\`jsx
import { SSelect } from '@chargebee/sting-react';

// Basic compound component usage
<SSelect>
  <SSelect.Trigger>
    <SSelect.Value placeholder="Select option" />
  </SSelect.Trigger>
  <SSelect.Content>
    <SSelect.Item value="option1">Option 1</SSelect.Item>
    <SSelect.Item value="option2">Option 2</SSelect.Item>
  </SSelect.Content>
</SSelect>

// Searchable variant with integrated label
<SSelect.Searchable
  label="Country"
  labelInfo="Select your country of residence"
  labelTooltipPlacement="top"
  options={[
    { value: 'us', label: 'United States' },
    { value: 'ca', label: 'Canada' }
  ]}
  placeholder="Choose country"
/>
\`\`\`

## Label Integration

The \`SSelect.Searchable\` component includes integrated \`SLabel\` support:
- Use \`label\` prop for the label text
- Use \`labelInfo\` prop for tooltip content
- Use \`labelTooltipPlacement\` to control tooltip position
- Provides consistent labeling with other form components
`,
			},
		},
	},
	argTypes: {
		disabled: {
			control: 'boolean',
			description: 'Disables the select component',
		},
	},
};

export default meta;

type Story = StoryObj<typeof SSelect>;

export const Default: Story = {
	render: (args) => (
		<SSelect {...args}>
			<SSelect.Trigger className="w-[180px]">
				<SSelect.Value placeholder="Select a fruit" />
			</SSelect.Trigger>
			<SSelect.Content>
				<SSelect.Group>
					<SSelect.GroupLabel>Fruits</SSelect.GroupLabel>
					<SSelect.Item value="apple">Apple</SSelect.Item>
					<SSelect.Item value="banana">Banana</SSelect.Item>
					<SSelect.Item value="blueberry">Blueberry</SSelect.Item>
					<SSelect.Item value="grapes">Grapes</SSelect.Item>
					<SSelect.Item value="pineapple">Pineapple</SSelect.Item>
				</SSelect.Group>
				<SSelect.Separator />
				<SSelect.Group>
					<SSelect.GroupLabel>Vegetables</SSelect.GroupLabel>
					<SSelect.Item value="carrot">Carrot</SSelect.Item>
					<SSelect.Item value="broccoli">Broccoli</SSelect.Item>
					<SSelect.Item value="spinach">Spinach</SSelect.Item>
				</SSelect.Group>
			</SSelect.Content>
		</SSelect>
	),
	args: {
		disabled: false,
	},
};

export const SearchableWithOptions: Story = {
	render: (args) => {
		const countries = [
			{ value: 'us', label: 'United States' },
			{ value: 'ca', label: 'Canada' },
			{ value: 'uk', label: 'United Kingdom' },
			{ value: 'de', label: 'Germany' },
			{ value: 'fr', label: 'France' },
			{ value: 'jp', label: 'Japan' },
			{ value: 'au', label: 'Australia' },
			{ value: 'in', label: 'India' },
			{ value: 'br', label: 'Brazil' },
			{ value: 'mx', label: 'Mexico' },
			{ value: 'es', label: 'Spain' },
			{ value: 'it', label: 'Italy' },
			{ value: 'nl', label: 'Netherlands' },
			{ value: 'se', label: 'Sweden' },
			{ value: 'no', label: 'Norway' },
			{ value: 'dk', label: 'Denmark' },
			{ value: 'fi', label: 'Finland' },
			{ value: 'ch', label: 'Switzerland' },
			{ value: 'at', label: 'Austria' },
			{ value: 'be', label: 'Belgium' },
		];

		return (
			<SSelect.Searchable
				options={countries}
				placeholder="Select a country"
				searchPlaceholder="Search countries..."
				onValueChange={(value) => console.log('Selected:', value)}
				onSearch={(searchValue) => console.log('Searching:', searchValue)}
				{...args}
			/>
		);
	},
	args: {
		disabled: false,
	},
};

// Story with custom filter function
export const SearchableWithCustomFilter: Story = {
	render: (args) => {
		const programmingLanguages = [
			{ value: 'javascript', label: 'JavaScript' },
			{ value: 'typescript', label: 'TypeScript' },
			{ value: 'python', label: 'Python' },
			{ value: 'java', label: 'Java' },
			{ value: 'csharp', label: 'C#' },
			{ value: 'cpp', label: 'C++' },
			{ value: 'go', label: 'Go' },
			{ value: 'rust', label: 'Rust' },
			{ value: 'php', label: 'PHP' },
			{ value: 'ruby', label: 'Ruby' },
			{ value: 'swift', label: 'Swift' },
			{ value: 'kotlin', label: 'Kotlin' },
		];

		// Custom filter that matches from the beginning of the word
		const customFilter = (
			option: { value: string; label: string },
			searchValue: string,
		) => {
			return option.label.toLowerCase().startsWith(searchValue.toLowerCase());
		};

		return (
			<SSelect.Searchable
				options={programmingLanguages}
				placeholder="Select a programming language"
				searchPlaceholder="Type language name..."
				filterFn={customFilter}
				noResultsText="No programming languages found"
				onValueChange={(value) => console.log('Selected language:', value)}
				{...args}
			/>
		);
	},
	args: {
		disabled: false,
	},
};

export const WithScrollButtons: Story = {
	render: (args) => (
		<SSelect {...args}>
			<SSelect.Trigger className="w-[180px]">
				<SSelect.Value placeholder="Select a fruit" />
			</SSelect.Trigger>
			<SSelect.Content>
				<SSelect.ScrollUpButton />
				<SSelect.Group>
					<SSelect.GroupLabel>Fruits</SSelect.GroupLabel>
					<SSelect.Item value="apple">Apple</SSelect.Item>
					<SSelect.Item value="banana">Banana</SSelect.Item>
					<SSelect.Item value="blueberry">Blueberry</SSelect.Item>
					<SSelect.Item value="grapes">Grapes</SSelect.Item>
					<SSelect.Item value="pineapple">Pineapple</SSelect.Item>
				</SSelect.Group>
				<SSelect.Separator />
				<SSelect.Group>
					<SSelect.GroupLabel>Vegetables</SSelect.GroupLabel>
					<SSelect.Item value="carrot">Carrot</SSelect.Item>
					<SSelect.Item value="broccoli">Broccoli</SSelect.Item>
					<SSelect.Item value="spinach">Spinach</SSelect.Item>
				</SSelect.Group>
				<SSelect.ScrollDownButton />
			</SSelect.Content>
		</SSelect>
	),
	args: {
		disabled: false,
	},
};

export const Disabled: Story = {
	render: (args) => (
		<SSelect {...args}>
			<SSelect.Trigger className="w-[180px]">
				<SSelect.Value placeholder="Select a fruit" />
			</SSelect.Trigger>
			<SSelect.Content>
				<SSelect.Group>
					<SSelect.GroupLabel>Fruits</SSelect.GroupLabel>
					<SSelect.Item value="apple">Apple</SSelect.Item>
					<SSelect.Item value="banana">Banana</SSelect.Item>
					<SSelect.Item value="blueberry">Blueberry</SSelect.Item>
					<SSelect.Item value="grapes">Grapes</SSelect.Item>
					<SSelect.Item value="pineapple">Pineapple</SSelect.Item>
				</SSelect.Group>
			</SSelect.Content>
		</SSelect>
	),
	args: {
		disabled: true,
	},
};

export const WithFieldLabel: Story = {
	render: (args) => {
		const fruits = [
			{ value: 'apple', label: 'Apple' },
			{ value: 'banana', label: 'Banana' },
			{ value: 'blueberry', label: 'Blueberry' },
			{ value: 'grapes', label: 'Grapes' },
			{ value: 'pineapple', label: 'Pineapple' },
		];

		return (
			<SSelect.Searchable
				label="Choose a fruit"
				options={fruits}
				placeholder="Select a fruit"
				{...args}
			/>
		);
	},
	args: {
		disabled: false,
	},
};

export const WithRequiredFieldLabel: Story = {
	render: (args) => {
		const countries = [
			{ value: 'us', label: 'United States' },
			{ value: 'ca', label: 'Canada' },
			{ value: 'uk', label: 'United Kingdom' },
			{ value: 'de', label: 'Germany' },
			{ value: 'fr', label: 'France' },
		];

		return (
			<SSelect.Searchable
				label="Country (Required)"
				options={countries}
				placeholder="Select your country"
				required
				{...args}
			/>
		);
	},
	args: {
		disabled: false,
	},
};

export const WithDisabledFieldLabel: Story = {
	render: (args) => {
		const options = [
			{ value: 'option1', label: 'Option 1' },
			{ value: 'option2', label: 'Option 2' },
		];

		return (
			<SSelect.Searchable
				label="Disabled Selection"
				options={options}
				placeholder="Cannot select"
				disabled
				{...args}
			/>
		);
	},
	args: {
		disabled: true,
	},
};

export const SearchableWithFieldLabel: Story = {
	render: (args) => {
		const countries = [
			{ value: 'us', label: 'United States' },
			{ value: 'ca', label: 'Canada' },
			{ value: 'uk', label: 'United Kingdom' },
			{ value: 'de', label: 'Germany' },
			{ value: 'fr', label: 'France' },
			{ value: 'jp', label: 'Japan' },
			{ value: 'au', label: 'Australia' },
			{ value: 'in', label: 'India' },
			{ value: 'br', label: 'Brazil' },
			{ value: 'mx', label: 'Mexico' },
		];

		return (
			<SSelect.Searchable
				options={countries}
				placeholder="Search and select a country"
				searchPlaceholder="Type to search countries..."
				onValueChange={(value) => console.log('Selected:', value)}
				onSearch={(searchValue) => console.log('Searching:', searchValue)}
				triggerClassName="w-[250px]"
				label="Select Country"
				required
				{...args}
			/>
		);
	},
	args: {
		disabled: false,
	},
};

export const FormExample: Story = {
	render: (args) => (
		<div className="max-w-md space-y-6 p-4">
			<h3 className="text-lg font-semibold">User Profile Form</h3>
			<div>
				<SSelect.Searchable
					label="Role"
					options={[
						{ value: 'admin', label: 'Administrator' },
						{ value: 'user', label: 'User' },
						{ value: 'moderator', label: 'Moderator' },
						{ value: 'viewer', label: 'Viewer' },
					]}
					placeholder="Select your role"
					required
					{...args}
				/>
			</div>

			<div>
				<SSelect.Searchable
					label="Department (Optional)"
					options={[
						{ value: 'engineering', label: 'Engineering' },
						{ value: 'design', label: 'Design' },
						{ value: 'marketing', label: 'Marketing' },
						{ value: 'sales', label: 'Sales' },
						{ value: 'support', label: 'Support' },
					]}
					placeholder="Select department"
					{...args}
				/>
			</div>

			<div>
				<SSelect.Searchable
					label="Country"
					options={[
						{ value: 'us', label: 'United States' },
						{ value: 'ca', label: 'Canada' },
						{ value: 'uk', label: 'United Kingdom' },
						{ value: 'de', label: 'Germany' },
						{ value: 'fr', label: 'France' },
						{ value: 'jp', label: 'Japan' },
						{ value: 'au', label: 'Australia' },
						{ value: 'in', label: 'India' },
					]}
					placeholder="Search and select your country"
					searchPlaceholder="Type country name..."
					triggerClassName="w-full"
					required
					{...args}
				/>
			</div>
		</div>
	),
	args: {
		disabled: false,
	},
};

export const WithLabelIntegration: Story = {
	render: () => {
		const countries = [
			{ value: 'us', label: 'United States' },
			{ value: 'ca', label: 'Canada' },
			{ value: 'uk', label: 'United Kingdom' },
			{ value: 'de', label: 'Germany' },
			{ value: 'fr', label: 'France' },
		];

		return (
			<div className="max-w-md space-y-6">
				<SSelect.Searchable
					label="Country"
					options={countries}
					placeholder="Select your country"
				/>

				<SSelect.Searchable
					label="Country with Tooltip"
					labelInfo="Select the country where you currently reside"
					labelTooltipPlacement="top"
					options={countries}
					placeholder="Choose your country"
				/>

				<SSelect.Searchable
					label="Required Country"
					labelInfo="This field is required for account verification"
					labelTooltipPlacement="top"
					options={countries}
					placeholder="Select country (required)"
					required
				/>
			</div>
		);
	},
};

export const TooltipPlacements: Story = {
	render: () => {
		const options = [
			{ value: 'option1', label: 'Option 1' },
			{ value: 'option2', label: 'Option 2' },
			{ value: 'option3', label: 'Option 3' },
		];

		return (
			<div className="grid grid-cols-2 gap-8 p-8">
				<SSelect.Searchable
					label="Top Tooltip"
					labelInfo="Tooltip positioned at the top of the info icon"
					labelTooltipPlacement="top"
					options={options}
					placeholder="Top tooltip placement"
				/>

				<SSelect.Searchable
					label="Right Tooltip"
					labelInfo="Tooltip positioned to the right of the info icon"
					labelTooltipPlacement="right"
					options={options}
					placeholder="Right tooltip placement"
				/>

				<SSelect.Searchable
					label="Bottom Tooltip"
					labelInfo="Tooltip positioned at the bottom of the info icon"
					labelTooltipPlacement="bottom"
					options={options}
					placeholder="Bottom tooltip placement"
				/>

				<SSelect.Searchable
					label="Left Tooltip"
					labelInfo="Tooltip positioned to the left of the info icon"
					labelTooltipPlacement="left"
					options={options}
					placeholder="Left tooltip placement"
				/>
			</div>
		);
	},
};
