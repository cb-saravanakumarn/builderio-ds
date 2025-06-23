import type { Meta, StoryObj } from '@storybook/react';
import { SSelect } from '.';

const meta: Meta<typeof SSelect> = {
	title: 'Forms/SSelect',
	component: SSelect,
	tags: ['autodocs'],
	argTypes: {
		// Define controls for the SSelect component
		disabled: {
			control: 'boolean',
			description: 'Disables the select component',
		},
		// Add more controls as needed
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
