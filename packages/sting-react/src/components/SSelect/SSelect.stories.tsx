import type { Meta, StoryObj } from '@storybook/react';
import { SSelect } from './index';
import './SSelect.css';

const meta = {
	title: 'Forms/SSelect',
	component: SSelect,
	tags: ['autodocs'],
} satisfies Meta<typeof SSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

const fruits = [
	{ value: 'apple', label: 'Apple' },
	{ value: 'banana', label: 'Banana' },
	{ value: 'orange', label: 'Orange' },
	{ value: 'grape', label: 'Grape' },
	{ value: 'mango', label: 'Mango' },
	{ value: 'pineapple', label: 'Pineapple' },
	{ value: 'strawberry', label: 'Strawberry' },
	{ value: 'watermelon', label: 'Watermelon' },
];

const frameworks = [
	{ value: 'react', label: 'React' },
	{ value: 'vue', label: 'Vue' },
	{ value: 'angular', label: 'Angular' },
	{ value: 'svelte', label: 'Svelte' },
	{ value: 'nextjs', label: 'Next.js' },
	{ value: 'nuxtjs', label: 'Nuxt.js' },
];

// Props-based API examples
export const Default: Story = {
	args: {
		options: fruits,
		placeholder: 'Select a fruit...',
	},
};

export const WithDefaultValue: Story = {
	args: {
		options: fruits,
		defaultValue: 'apple',
		placeholder: 'Select a fruit...',
	},
};

export const MultiSelect: Story = {
	args: {
		options: fruits,
		multiple: true,
		placeholder: 'Select fruits...',
	},
};

export const MultiSelectWithDefaults: Story = {
	args: {
		options: fruits,
		multiple: true,
		defaultValue: ['apple', 'banana'],
		placeholder: 'Select fruits...',
	},
};

export const NotSearchable: Story = {
	args: {
		options: fruits,
		searchable: false,
		placeholder: 'Select a fruit...',
	},
};

export const NotClearable: Story = {
	args: {
		options: fruits,
		clearable: false,
		defaultValue: 'apple',
		placeholder: 'Select a fruit...',
	},
};

export const Disabled: Story = {
	args: {
		options: fruits,
		disabled: true,
		defaultValue: 'apple',
		placeholder: 'Select a fruit...',
	},
};

// Compound composition API examples
export const CompoundComposition: Story = {
	render: () => (
		<SSelect>
			<SSelect.Trigger className="w-[280px]">
				<SSelect.Value placeholder="Select a framework..." />
			</SSelect.Trigger>
			<SSelect.Content>
				<SSelect.Command>
					<SSelect.Input placeholder="Search framework..." />
					<SSelect.List>
						<SSelect.Empty>No framework found.</SSelect.Empty>
						<SSelect.Group>
							<SSelect.Label>Frontend Frameworks</SSelect.Label>
							<SSelect.Item value="react">React</SSelect.Item>
							<SSelect.Item value="vue">Vue</SSelect.Item>
							<SSelect.Item value="angular">Angular</SSelect.Item>
							<SSelect.Item value="svelte">Svelte</SSelect.Item>
						</SSelect.Group>
						<SSelect.Separator />
						<SSelect.Group>
							<SSelect.Label>Full-stack Frameworks</SSelect.Label>
							<SSelect.Item value="nextjs">Next.js</SSelect.Item>
							<SSelect.Item value="nuxtjs">Nuxt.js</SSelect.Item>
						</SSelect.Group>
					</SSelect.List>
				</SSelect.Command>
			</SSelect.Content>
		</SSelect>
	),
};

export const CompoundMultiSelect: Story = {
	render: () => (
		<SSelect multiple>
			<SSelect.Trigger className="w-[280px]">
				<SSelect.Value placeholder="Select frameworks..." />
			</SSelect.Trigger>
			<SSelect.Content>
				<SSelect.Command>
					<SSelect.Input placeholder="Search framework..." />
					<SSelect.List>
						<SSelect.Empty>No framework found.</SSelect.Empty>
						{frameworks.map((framework) => (
							<SSelect.Item key={framework.value} value={framework.value}>
								{framework.label}
							</SSelect.Item>
						))}
					</SSelect.List>
				</SSelect.Command>
			</SSelect.Content>
		</SSelect>
	),
};

export const CompoundNoSearch: Story = {
	render: () => (
		<SSelect searchable={false}>
			<SSelect.Trigger className="w-[280px]">
				<SSelect.Value placeholder="Select a fruit..." />
			</SSelect.Trigger>
			<SSelect.Content>
				<SSelect.Command>
					<SSelect.List>
						<SSelect.Empty>No fruits available.</SSelect.Empty>
						{fruits.slice(0, 4).map((fruit) => (
							<SSelect.Item key={fruit.value} value={fruit.value}>
								{fruit.label}
							</SSelect.Item>
						))}
					</SSelect.List>
				</SSelect.Command>
			</SSelect.Content>
		</SSelect>
	),
};

export const CustomTrigger: Story = {
	render: () => (
		<SSelect>
			<SSelect.Trigger className="h-12 w-[280px] border-blue-200 bg-blue-50 px-4 hover:bg-blue-100">
				<div className="flex items-center gap-2">
					<div className="h-2 w-2 rounded-full bg-blue-500"></div>
					<SSelect.Value placeholder="Choose your preference..." />
				</div>
			</SSelect.Trigger>
			<SSelect.Content>
				<SSelect.Command>
					<SSelect.Input placeholder="Search..." />
					<SSelect.List>
						<SSelect.Empty>No options found.</SSelect.Empty>
						{fruits.map((fruit) => (
							<SSelect.Item key={fruit.value} value={fruit.value}>
								{fruit.label}
							</SSelect.Item>
						))}
					</SSelect.List>
				</SSelect.Command>
			</SSelect.Content>
		</SSelect>
	),
};
