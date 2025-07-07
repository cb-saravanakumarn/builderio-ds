import type { Meta, StoryObj } from '@storybook/react';
import { SSelect } from '.';

const meta: Meta<typeof SSelect> = {
	title: 'Forms/SSelect',
	component: SSelect,
	tags: ['autodocs'],
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
					<SSelect.Label>Fruits</SSelect.Label>
					<SSelect.Item value="apple">Apple</SSelect.Item>
					<SSelect.Item value="banana">Banana</SSelect.Item>
					<SSelect.Item value="blueberry">Blueberry</SSelect.Item>
					<SSelect.Item value="grapes">Grapes</SSelect.Item>
					<SSelect.Item value="pineapple">Pineapple</SSelect.Item>
				</SSelect.Group>
				<SSelect.Separator />
				<SSelect.Group>
					<SSelect.Label>Vegetables</SSelect.Label>
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
					<SSelect.Label>Fruits</SSelect.Label>
					<SSelect.Item value="apple">Apple</SSelect.Item>
					<SSelect.Item value="banana">Banana</SSelect.Item>
					<SSelect.Item value="blueberry">Blueberry</SSelect.Item>
					<SSelect.Item value="grapes">Grapes</SSelect.Item>
					<SSelect.Item value="pineapple">Pineapple</SSelect.Item>
				</SSelect.Group>
				<SSelect.Separator />
				<SSelect.Group>
					<SSelect.Label>Vegetables</SSelect.Label>
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
					<SSelect.Label>Fruits</SSelect.Label>
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
	render: (args) => (
		<div>
			<SSelect.Label htmlFor="fruit-select">Choose a fruit</SSelect.Label>
			<SSelect {...args}>
				<SSelect.Trigger className="w-[180px]" id="fruit-select">
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
		</div>
	),
	args: {
		disabled: false,
	},
};

export const WithRequiredFieldLabel: Story = {
	render: (args) => (
		<div>
			<SSelect {...args}>
				<SSelect.Label htmlFor="required-select" required>
					Country (Required)
				</SSelect.Label>
				<SSelect.Trigger className="w-[200px]" id="required-select">
					<SSelect.Value placeholder="Select your country" />
				</SSelect.Trigger>
				<SSelect.Content>
					<SSelect.Group>
						<SSelect.GroupLabel>Countries</SSelect.GroupLabel>
						<SSelect.Item value="us">United States</SSelect.Item>
						<SSelect.Item value="ca">Canada</SSelect.Item>
						<SSelect.Item value="uk">United Kingdom</SSelect.Item>
						<SSelect.Item value="de">Germany</SSelect.Item>
						<SSelect.Item value="fr">France</SSelect.Item>
					</SSelect.Group>
				</SSelect.Content>
			</SSelect>
		</div>
	),
	args: {
		disabled: false,
	},
};

export const WithDisabledFieldLabel: Story = {
	render: (args) => (
		<div>
			<SSelect.Label htmlFor="disabled-select" disabled>
				Disabled Selection
			</SSelect.Label>
			<SSelect {...args}>
				<SSelect.Trigger className="w-[180px]" id="disabled-select">
					<SSelect.Value placeholder="Cannot select" />
				</SSelect.Trigger>
				<SSelect.Content>
					<SSelect.Group>
						<SSelect.GroupLabel>Options</SSelect.GroupLabel>
						<SSelect.Item value="option1">Option 1</SSelect.Item>
						<SSelect.Item value="option2">Option 2</SSelect.Item>
					</SSelect.Group>
				</SSelect.Content>
			</SSelect>
		</div>
	),
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
				labelRequired
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
				<SSelect.Label htmlFor="role-select" required>
					Role
				</SSelect.Label>
				<SSelect {...args}>
					<SSelect.Trigger className="w-full" id="role-select">
						<SSelect.Value placeholder="Select your role" />
					</SSelect.Trigger>
					<SSelect.Content>
						<SSelect.Group>
							<SSelect.Label>Roles</SSelect.Label>
							<SSelect.Item value="admin">Administrator</SSelect.Item>
							<SSelect.Item value="user">User</SSelect.Item>
							<SSelect.Item value="moderator">Moderator</SSelect.Item>
							<SSelect.Item value="viewer">Viewer</SSelect.Item>
						</SSelect.Group>
					</SSelect.Content>
				</SSelect>
			</div>

			<div>
				<SSelect>
					<SSelect.Label htmlFor="department-select">
						Department (Optional)
					</SSelect.Label>
					<SSelect.Trigger className="w-full" id="department-select">
						<SSelect.Value placeholder="Select department" />
					</SSelect.Trigger>
					<SSelect.Content>
						<SSelect.Group>
							<SSelect.Label>Departments</SSelect.Label>
							<SSelect.Item value="engineering">Engineering</SSelect.Item>
							<SSelect.Item value="design">Design</SSelect.Item>
							<SSelect.Item value="marketing">Marketing</SSelect.Item>
							<SSelect.Item value="sales">Sales</SSelect.Item>
							<SSelect.Item value="support">Support</SSelect.Item>
						</SSelect.Group>
					</SSelect.Content>
				</SSelect>
			</div>

			<div>
				<SSelect.Label htmlFor="country-searchable" required>
					Country
				</SSelect.Label>
				<SSelect.Searchable
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
				/>
			</div>
		</div>
	),
	args: {
		disabled: false,
	},
};
