import type { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, within } from '@storybook/test';
import { useState } from 'react';
import { SCheckbox } from './index';
import { SButton } from '../SButton';

const meta = {
	title: 'Forms/SCheckbox',
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
	args: {
		label: 'Controlled checkbox',
		description: 'This checkbox is controlled by React state',
	},
	render: (args) => {
		// Example of a controlled component
		const ControlledCheckbox = () => {
			const [isChecked, setIsChecked] = useState(false);

			return (
				<div className="space-y-4">
					<SCheckbox
						{...args}
						checked={isChecked}
						onCheckedChange={(checked) => setIsChecked(checked === true)}
					/>

					<div className="text-sm">
						Current state:{' '}
						<span className="font-medium">
							{isChecked ? 'Checked' : 'Unchecked'}
						</span>
					</div>

					<SButton onClick={() => setIsChecked(!isChecked)} variant="primary">
						Toggle from outside
					</SButton>
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
	render: (args) => {
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

export const WithErrorMessage: Story = {
	args: {
		label: 'Accept privacy policy',
		description: 'You must accept our privacy policy to continue',
		checked: false,
		validationStatus: 'error',
		validationMessage: 'This field is required',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const errorMessage = canvas.getByText('This field is required');

		await expect(errorMessage).toBeInTheDocument();
		await expect(errorMessage).toHaveClass('text-error-500');
	},
};

export const FormValidation: Story = {
	render: (args) => {
		const FormValidationExample = () => {
			const [isChecked, setIsChecked] = useState(false);
			const [hasAttemptedSubmit, setHasAttemptedSubmit] = useState(false);
			const [isFormSubmitted, setIsFormSubmitted] = useState(false);

			const handleSubmit = (e: React.FormEvent) => {
				e.preventDefault();
				setHasAttemptedSubmit(true);

				if (isChecked) {
					setIsFormSubmitted(true);
				}
			};

			if (isFormSubmitted) {
				return (
					<div className="rounded bg-success-50 p-4 text-success-700">
						Form submitted successfully!
					</div>
				);
			}

			return (
				<form onSubmit={handleSubmit} className="space-y-6">
					<SCheckbox
						checked={isChecked}
						onCheckedChange={(checked) => setIsChecked(checked === true)}
						label="I agree to the terms and conditions"
						description="By checking this box, you agree to our Terms of Service and Privacy Policy"
						validationStatus={
							hasAttemptedSubmit && !isChecked ? 'error' : undefined
						}
						validationMessage={
							hasAttemptedSubmit && !isChecked
								? 'You must accept the terms to continue'
								: undefined
						}
					/>

					<SButton type="submit" variant="primary">
						Submit Form
					</SButton>
				</form>
			);
		};

		return <FormValidationExample />;
	},
	parameters: {
		noControlledBehavior: true,
		docs: {
			description: {
				story:
					'This example demonstrates how to implement form validation with the SCheckbox component. The validation error appears when the user attempts to submit the form without checking the box.',
			},
		},
	},
};

export const IndeterminateCheckbox: Story = {
	args: {
		label: 'Select all items',
		description:
			'This checkbox will be indeterminate when some but not all options are selected',
		checked: false,
		indeterminate: false,
	},
	render: function IndeterminateExample(args) {
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
					{...args}
					checked={allChecked}
					indeterminate={isIndeterminate}
					onCheckedChange={handleParentChange}
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

export const CheckboxGroup: Story = {
	args: {
		label: 'Select your preferences',
		description: 'Choose one or more options from the list below',
	},
	render: (args) => {
		const CheckboxGroupExample = () => {
			const [selectedValues, setSelectedValues] = useState<string[]>([
				'option1',
			]);

			return (
				<div className="space-y-6">
					<SCheckbox.Group
						values={selectedValues}
						onValuesChange={setSelectedValues}
						label={args.label}
						description={args.description}
					>
						<SCheckbox.Item
							value="option1"
							label="Email notifications"
							description="Receive updates via email"
						/>
						<SCheckbox.Item
							value="option2"
							label="SMS notifications"
							description="Receive updates via text message"
						/>
						<SCheckbox.Item
							value="option3"
							label="Push notifications"
							description="Receive updates via mobile app"
						/>
					</SCheckbox.Group>

					<div className="rounded-md bg-neutral-50 p-3 text-sm">
						Selected values:{' '}
						<span className="font-medium">{selectedValues.join(', ')}</span>
					</div>
				</div>
			);
		};

		return <CheckboxGroupExample />;
	},
	parameters: {
		noControlledBehavior: true,
		docs: {
			description: {
				story:
					'This example demonstrates the compound component pattern using SCheckbox.Group and SCheckbox.Item, which makes it easier to manage the state of multiple checkboxes.',
			},
		},
	},
};

export const HorizontalCheckboxGroup: Story = {
	render: (args) => {
		const [selectedValues, setSelectedValues] = useState<string[]>(['small']);

		return (
			<div className="space-y-6">
				<SCheckbox.Group
					values={selectedValues}
					onValuesChange={setSelectedValues}
					label="Display options"
					orientation="horizontal"
				>
					<SCheckbox.Item value="small" label="Small" />
					<SCheckbox.Item value="medium" label="Medium" />
					<SCheckbox.Item value="large" label="Large" />
				</SCheckbox.Group>

				<div className="rounded-md bg-neutral-50 p-3 text-sm">
					Selected size:{' '}
					<span className="font-medium">{selectedValues.join(', ')}</span>
				</div>
			</div>
		);
	},
	parameters: {
		docs: {
			description: {
				story:
					'Checkbox group with horizontal layout for compact option selection.',
			},
		},
	},
};

export const MixedDisabledItems: Story = {
	render: (args) => {
		const [selectedValues, setSelectedValues] = useState<string[]>(['option1']);

		return (
			<SCheckbox.Group
				values={selectedValues}
				onValuesChange={setSelectedValues}
				label="Feature access"
				description="Select which features you want to enable"
			>
				<SCheckbox.Item value="option1" label="Basic features" />
				<SCheckbox.Item value="option2" label="Advanced features" />
				<SCheckbox.Item
					value="option3"
					label="Premium features"
					description="Requires subscription"
					disabled
				/>
				<SCheckbox.Item
					value="option4"
					label="Experimental features"
					description="May contain bugs"
				/>
			</SCheckbox.Group>
		);
	},
	parameters: {
		docs: {
			description: {
				story:
					'This example shows how to disable specific items within a checkbox group while keeping others interactive.',
			},
		},
	},
};

export const ValidationErrorGroup: Story = {
	render: (args) => {
		const ValidationExample = () => {
			const [selectedValues, setSelectedValues] = useState<string[]>([]);
			const [hasError, setHasError] = useState(false);

			const handleSubmit = (e: React.FormEvent) => {
				e.preventDefault();
				setHasError(selectedValues.length === 0);
			};

			return (
				<form onSubmit={handleSubmit} className="space-y-4">
					<SCheckbox.Group
						values={selectedValues}
						onValuesChange={(values: string[]) => {
							setSelectedValues(values);
							if (values.length > 0) setHasError(false);
						}}
						label="Required selections"
						description="Please select at least one option"
						validationStatus={hasError ? 'error' : undefined}
						validationMessage={
							hasError ? 'At least one option must be selected' : undefined
						}
					>
						<SCheckbox.Item value="option1" label="Option 1" />
						<SCheckbox.Item value="option2" label="Option 2" />
						<SCheckbox.Item value="option3" label="Option 3" />
					</SCheckbox.Group>

					<SButton type="submit" variant="primary">
						Submit
					</SButton>
				</form>
			);
		};

		return <ValidationExample />;
	},
	parameters: {
		docs: {
			description: {
				story:
					'This example demonstrates form validation with the checkbox group. The validation error appears when the user attempts to submit the form without selecting any options.',
			},
		},
	},
};
