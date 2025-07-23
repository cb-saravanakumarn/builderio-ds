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

const fruitsWithDisabled = [
	{ value: 'apple', label: 'Apple' },
	{ value: 'banana', label: 'Banana (Out of stock)', disabled: true },
	{ value: 'orange', label: 'Orange' },
	{ value: 'grape', label: 'Grape (Seasonal)', disabled: true },
	{ value: 'mango', label: 'Mango' },
	{ value: 'pineapple', label: 'Pineapple (Not available)', disabled: true },
	{ value: 'strawberry', label: 'Strawberry' },
	{ value: 'watermelon', label: 'Watermelon' },
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
	render: (args) => (
		<SSelect {...args}>
			<SSelect.Trigger className="w-[280px]">
				<SSelect.Value placeholder="Select a framework..." />
			</SSelect.Trigger>
			<SSelect.Content>
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
			</SSelect.Content>
		</SSelect>
	),
};

export const CompoundMultiSelect: Story = {
	render: (args) => (
		<SSelect multiple {...args}>
			<SSelect.Trigger className="w-[280px]">
				<SSelect.Value placeholder="Select frameworks..." />
			</SSelect.Trigger>
			<SSelect.Content>
				<SSelect.Input placeholder="Search framework..." />
				<SSelect.List>
					<SSelect.Empty>No framework found.</SSelect.Empty>
					{frameworks.map((framework) => (
						<SSelect.Item key={framework.value} value={framework.value}>
							{framework.label}
						</SSelect.Item>
					))}
				</SSelect.List>
			</SSelect.Content>
		</SSelect>
	),
};

export const CompoundNoSearch: Story = {
	render: (args) => (
		<SSelect searchable={false} {...args}>
			<SSelect.Trigger className="w-[280px]">
				<SSelect.Value placeholder="Select a fruit..." />
			</SSelect.Trigger>
			<SSelect.Content>
				<SSelect.List>
					<SSelect.Empty>No fruits available.</SSelect.Empty>
					{fruits.slice(0, 4).map((fruit) => (
						<SSelect.Item key={fruit.value} value={fruit.value}>
							{fruit.label}
						</SSelect.Item>
					))}
				</SSelect.List>
			</SSelect.Content>
		</SSelect>
	),
};

export const WithDisabledItems: Story = {
	render: (args) => (
		<div className="space-y-8">
			<div>
				<h3 className="mb-4 text-lg font-semibold">
					Props-based API with disabled items
				</h3>
				<SSelect
					options={fruitsWithDisabled}
					placeholder="Select a fruit..."
					{...args}
				/>
			</div>
			<div>
				<h3 className="mb-4 text-lg font-semibold">
					Compound API with disabled items
				</h3>
				<SSelect {...args}>
					<SSelect.Trigger>
						<SSelect.Value placeholder="Select a fruit..." />
					</SSelect.Trigger>
					<SSelect.Content>
						<SSelect.Input placeholder="Search fruits..." />
						<SSelect.List>
							<SSelect.Empty>No fruits found.</SSelect.Empty>
							<SSelect.Item value="apple">Apple</SSelect.Item>
							<SSelect.Item value="banana" disabled>
								Banana (Out of stock)
							</SSelect.Item>
							<SSelect.Item value="orange">Orange</SSelect.Item>
							<SSelect.Item value="grape" disabled>
								Grape (Seasonal)
							</SSelect.Item>
							<SSelect.Item value="mango">Mango</SSelect.Item>
							<SSelect.Item value="pineapple" disabled>
								Pineapple (Not available)
							</SSelect.Item>
							<SSelect.Item value="strawberry">Strawberry</SSelect.Item>
							<SSelect.Item value="watermelon">Watermelon</SSelect.Item>
						</SSelect.List>
					</SSelect.Content>
				</SSelect>
			</div>
		</div>
	),
};
