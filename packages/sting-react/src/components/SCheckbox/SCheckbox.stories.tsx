import type { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, within } from '@storybook/test';
import { useState } from 'react';
import { SCheckbox } from './index';

const meta = {
	title: 'Design System/Forms/SCheckbox',
	component: SCheckbox,
	tags: ['autodocs'],
	argTypes: {
		onCheckedChange: { action: 'checked changed' },
	},
	decorators: [
		(Story, context) => {
			if (
				typeof context.args.checked !== 'undefined' &&
				!context.parameters.noControlledBehavior
			) {
				const [checked, setChecked] = useState(context.args.checked);
				return (
					<Story
						args={{
							...context.args,
							checked,
							onCheckedChange: (value: boolean) => {
								setChecked(value);
								context.args.onCheckedChange?.(value);
							},
						}}
					/>
				);
			}
			return <Story />;
		},
	],
} satisfies Meta<typeof SCheckbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		label: 'Accept terms and conditions',
		checked: false,
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const checkbox = canvas.getByRole('checkbox');

		// Test initial state
		await expect(checkbox).toBeInTheDocument();
		await expect(checkbox).not.toBeChecked();

		// Test interaction
		await userEvent.click(checkbox);
		await expect(checkbox).toBeChecked();
	},
};

export const WithDescription: Story = {
	args: {
		label: 'Newsletter subscription',
		description: 'Receive weekly updates about new products and features',
		checked: false,
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const description = canvas.getByText(
			'Receive weekly updates about new products and features',
		);

		await expect(description).toBeInTheDocument();
		await expect(description).toHaveClass('text-sm', 'text-neutral-500');
	},
};

export const WithDetailedDescription: Story = {
	args: {
		label: 'Enable feature X',
		description:
			'Enabling this feature will allow you to use experimental features that might change in the future. These features are not yet stable and might have bugs.',
		checked: false,
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const description = canvas.getByText(/Enabling this feature will allow/);

		await expect(description).toBeInTheDocument();
		await expect(description).toHaveClass('text-sm', 'text-neutral-500');
	},
};

export const Checked: Story = {
	args: {
		label: 'Already checked option',
		checked: true,
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const checkbox = canvas.getByRole('checkbox');

		await expect(checkbox).toBeChecked();
	},
};

export const Disabled: Story = {
	args: {
		label: 'Disabled option',
		disabled: true,
		checked: false,
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const checkbox = canvas.getByRole('checkbox');

		await expect(checkbox).toBeDisabled();
		await expect(checkbox.parentElement).toHaveClass(
			'opacity-50',
			'cursor-not-allowed',
		);
	},
};

export const DisabledChecked: Story = {
	args: {
		label: 'Disabled and checked option',
		disabled: true,
		checked: true,
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const checkbox = canvas.getByRole('checkbox');

		await expect(checkbox).toBeDisabled();
		await expect(checkbox).toBeChecked();
	},
};

export const LabelOnly: Story = {
	args: {
		label: 'Just a label without description',
		checked: false,
	},
};

export const Controlled: Story = {
	render: () => {
		// Example of a controlled component
		const ControlledCheckbox = () => {
			const [isChecked, setIsChecked] = useState(false);

			return (
				<div className="space-y-4">
					<SCheckbox
						checked={isChecked}
						onCheckedChange={(checked) => setIsChecked(checked === true)}
						label="Controlled checkbox"
						description="This checkbox is controlled by React state"
					/>

					<div className="text-sm">
						Current state:{' '}
						<span className="font-medium">
							{isChecked ? 'Checked' : 'Unchecked'}
						</span>
					</div>

					<button
						className="rounded bg-primary-500 px-4 py-2 text-white hover:bg-primary-600"
						onClick={() => setIsChecked(!isChecked)}
					>
						Toggle from outside
					</button>
				</div>
			);
		};

		return <ControlledCheckbox />;
	},
	parameters: {
		noControlledBehavior: true,
		docs: {
			description: {
				story:
					'This example shows how to use SCheckbox as a controlled component by managing its state in React.',
			},
		},
	},
};

export const GroupOfCheckboxes: Story = {
	render: () => {
		const CheckboxGroup = () => {
			const [selected, setSelected] = useState<string[]>(['option1']);

			const options = [
				{
					id: 'option1',
					label: 'Option 1',
					description: 'First option description',
				},
				{
					id: 'option2',
					label: 'Option 2',
					description: 'Second option description',
				},
				{
					id: 'option3',
					label: 'Option 3',
					description: 'Third option description',
				},
			];

			const handleChange = (id: string) => (checked: boolean) => {
				if (checked) {
					setSelected([...selected, id]);
				} else {
					setSelected(selected.filter((item) => item !== id));
				}
			};

			return (
				<div className="space-y-6">
					<div className="space-y-4">
						{options.map((option) => (
							<SCheckbox
								key={option.id}
								checked={selected.includes(option.id)}
								onCheckedChange={handleChange(option.id)}
								label={option.label}
								description={option.description}
							/>
						))}
					</div>

					<div className="text-sm">
						Selected options:{' '}
						<span className="font-medium">{selected.join(', ')}</span>
					</div>
				</div>
			);
		};

		return <CheckboxGroup />;
	},
	parameters: {
		noControlledBehavior: true,
		docs: {
			description: {
				story:
					'This example shows how to create a group of checkboxes with descriptions that work together.',
			},
		},
	},
};

export const IndeterminateCheckbox: Story = {
	render: () => {
		const IndeterminateExample = () => {
			const [checkedItems, setCheckedItems] = useState({
				option1: false,
				option2: false,
				option3: false,
			});

			// Calculate the state of the parent checkbox
			const allChecked = Object.values(checkedItems).every(Boolean);
			const someChecked = Object.values(checkedItems).some(Boolean);
			const isIndeterminate = someChecked && !allChecked;

			const handleParentChange = (checked: boolean) => {
				setCheckedItems({
					option1: checked,
					option2: checked,
					option3: checked,
				});
			};

			const handleChildChange =
				(key: keyof typeof checkedItems) => (checked: boolean) => {
					setCheckedItems({
						...checkedItems,
						[key]: checked,
					});
				};

			return (
				<div className="space-y-6">
					<SCheckbox
						checked={allChecked}
						indeterminate={isIndeterminate}
						onCheckedChange={handleParentChange}
						label="Select all items"
						description="This checkbox will be indeterminate when some but not all options are selected"
					/>

					<div className="space-y-4 border-l-2 border-neutral-200 pl-6">
						<SCheckbox
							checked={checkedItems.option1}
							onCheckedChange={handleChildChange('option1')}
							label="Option 1"
						/>
						<SCheckbox
							checked={checkedItems.option2}
							onCheckedChange={handleChildChange('option2')}
							label="Option 2"
						/>
						<SCheckbox
							checked={checkedItems.option3}
							onCheckedChange={handleChildChange('option3')}
							label="Option 3"
						/>
					</div>
				</div>
			);
		};

		return <IndeterminateExample />;
	},
	parameters: {
		noControlledBehavior: true,
		docs: {
			description: {
				story:
					'This example demonstrates an indeterminate checkbox used with a "select all" pattern. The parent checkbox shows an indeterminate state when some (but not all) child items are selected.',
			},
		},
	},
};
