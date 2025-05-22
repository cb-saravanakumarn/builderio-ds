import type { Meta, StoryObj } from '@storybook/react';

import { SInput, SInputProps, SearchField } from '.';

const meta: Meta<typeof SInput> = {
	component: SInput,
	decorators: [(Story: any) => <Story />],
	title: 'Design System/Forms/SInput',
	tags: ['autodocs'],
	args: {
		variant: 'input',
		type: 'text',
		placeholder: 'Placeholder',
		messageText: 'Message',
		size: 'regular',
		labelPosition: 'default',
		labelText: 'Label',
		disabled: false,
		error: false,
		withIcon: false,
		iconName: '',
		showResetButton: false,
		readOnly: false,
		onChangeValue: (value) => console.log(value),
	},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultInput: Story = {
	render: (args: SInputProps) => <SInput {...args} />,
};

export const SearchInput: Story = {
	render: (args: Omit<SInputProps, 'variant'>) => {
		// Use the SearchField component which is a preset wrapper around SInput
		return <SearchField {...args} />;
	},
	args: {
		placeholder: 'Search...',
		showResetButton: true,
		messageText: '',
		labelText: '',
		labelPosition: 'none',
	},
};

export const WithIcon: Story = {
	args: {
		withIcon: true,
		iconName: 'user',
	},
};

export const WithError: Story = {
	args: {
		error: true,
		messageText: 'This field has an error',
	},
};

export const Disabled: Story = {
	args: {
		disabled: true,
	},
};

export const ReadOnly: Story = {
	args: {
		readOnly: true,
		value: 'This text cannot be edited',
	},
};

export const WithResetButton: Story = {
	args: {
		showResetButton: true,
		value: 'Type something and click the X',
	},
};

export const LargeInput: Story = {
	args: {
		size: 'large',
	},
};
