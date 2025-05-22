// SSelect.stories.tsx

import type { Meta, StoryObj } from '@storybook/react';
import {
	SSelect,
	SSelectGroup,
	SSelectValue,
	SSelectTrigger,
	SSelectContent,
	SSelectLabel,
	SSelectItem,
	SSelectSeparator,
	SSelectScrollUpButton,
	SSelectScrollDownButton,
} from '.'; // Adjust the import path as necessary

const meta: Meta<typeof SSelect> = {
	title: 'Design System/Forms/SSelect',
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
			<SSelectTrigger className="w-[180px]">
				<SSelectValue placeholder="Select a fruit" />
			</SSelectTrigger>
			<SSelectContent>
				<SSelectGroup>
					<SSelectLabel>Fruits</SSelectLabel>
					<SSelectItem value="apple">Apple</SSelectItem>
					<SSelectItem value="banana">Banana</SSelectItem>
					<SSelectItem value="blueberry">Blueberry</SSelectItem>
					<SSelectItem value="grapes">Grapes</SSelectItem>
					<SSelectItem value="pineapple">Pineapple</SSelectItem>
				</SSelectGroup>
				<SSelectSeparator />
				<SSelectGroup>
					<SSelectLabel>Vegetables</SSelectLabel>
					<SSelectItem value="carrot">Carrot</SSelectItem>
					<SSelectItem value="broccoli">Broccoli</SSelectItem>
					<SSelectItem value="spinach">Spinach</SSelectItem>
				</SSelectGroup>
			</SSelectContent>
		</SSelect>
	),
	args: {
		disabled: false,
	},
};

export const WithScrollButtons: Story = {
	render: (args) => (
		<SSelect {...args}>
			<SSelectTrigger className="w-[180px]">
				<SSelectValue placeholder="Select a fruit" />
			</SSelectTrigger>
			<SSelectContent>
				<SSelectScrollUpButton />
				<SSelectGroup>
					<SSelectLabel>Fruits</SSelectLabel>
					<SSelectItem value="apple">Apple</SSelectItem>
					<SSelectItem value="banana">Banana</SSelectItem>
					<SSelectItem value="blueberry">Blueberry</SSelectItem>
					<SSelectItem value="grapes">Grapes</SSelectItem>
					<SSelectItem value="pineapple">Pineapple</SSelectItem>
				</SSelectGroup>
				<SSelectSeparator />
				<SSelectGroup>
					<SSelectLabel>Vegetables</SSelectLabel>
					<SSelectItem value="carrot">Carrot</SSelectItem>
					<SSelectItem value="broccoli">Broccoli</SSelectItem>
					<SSelectItem value="spinach">Spinach</SSelectItem>
				</SSelectGroup>
				<SSelectScrollDownButton />
			</SSelectContent>
		</SSelect>
	),
	args: {
		disabled: false,
	},
};

export const Disabled: Story = {
	render: (args) => (
		<SSelect {...args}>
			<SSelectTrigger className="w-[180px]">
				<SSelectValue placeholder="Select a fruit" />
			</SSelectTrigger>
			<SSelectContent>
				<SSelectGroup>
					<SSelectLabel>Fruits</SSelectLabel>
					<SSelectItem value="apple">Apple</SSelectItem>
					<SSelectItem value="banana">Banana</SSelectItem>
					<SSelectItem value="blueberry">Blueberry</SSelectItem>
					<SSelectItem value="grapes">Grapes</SSelectItem>
					<SSelectItem value="pineapple">Pineapple</SSelectItem>
				</SSelectGroup>
			</SSelectContent>
		</SSelect>
	),
	args: {
		disabled: true,
	},
};
