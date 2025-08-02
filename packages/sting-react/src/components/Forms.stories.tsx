import type { Meta, StoryObj } from '@storybook/react';
import { SInput } from './SInput';
import { SSelect } from './SSelect';
import { SDropdown } from './SDropdown';
import { SButton } from './SButton';
import { SIcon } from './SIcon';

/**
 * A collection of form components for comparing layouts, heights, and visual consistency.
 * These stories help ensure that form elements align properly when used side by side.
 */
const meta: Meta = {
	title: 'Forms/Component Comparison',
	parameters: {
		docs: {
			description: {
				component: `
This story collection demonstrates form components side by side to verify:
- Height consistency across different form elements
- Visual alignment and spacing
- Overall design harmony when components are used together

Use these stories to ensure a cohesive form design experience.
				`,
			},
		},
	},
};

export default meta;
type Story = StoryObj<typeof meta>;

// Sample data for the components
const selectOptions = [
	{ value: 'option1', label: 'Option 1' },
	{ value: 'option2', label: 'Option 2' },
	{ value: 'option3', label: 'Option 3' },
	{ value: 'option4', label: 'Option 4' },
];

const dropdownItems = [
	{ value: 'item1', label: 'Item 1' },
	{ value: 'item2', label: 'Item 2' },
	{ value: 'item3', label: 'Item 3' },
	{ value: 'item4', label: 'Item 4' },
];

/**
 * Compares the height and visual alignment of Input, Select, and Dropdown components
 * when placed side by side. This helps ensure consistent form layouts.
 */
export const HeightComparison: Story = {
	render: () => (
		<div className="space-y-8 p-8">
			<div>
				<h2 className="mb-4 text-lg font-semibold">
					Form Elements Height Comparison
				</h2>
				<p className="mb-6 text-sm text-gray-600">
					The following components should have consistent heights and alignment
					when used side by side:
				</p>
			</div>

			{/* Basic Form Elements Side by Side */}
			<div>
				<h3 className="text-md mb-3 font-medium">Basic Elements</h3>
				<div className="flex items-start gap-4">
					<div className="flex-1">
						<label className="mb-2 block text-sm font-medium">
							Input Field
						</label>
						<SInput placeholder="Enter text here..." />
					</div>

					<div className="flex-1">
						<label className="mb-2 block text-sm font-medium">
							Select Field
						</label>
						<SSelect
							options={selectOptions}
							placeholder="Choose an option..."
						/>
					</div>

					<div className="flex-1">
						<label className="mb-2 block text-sm font-medium">
							Dropdown Menu
						</label>
						<SDropdown>
							<SDropdown.Trigger asChild>
								<SButton
									icon={<SIcon name="chevron-down" className="size-4" />}
									variant="neutral"
								></SButton>
							</SDropdown.Trigger>
							<SDropdown.Content className="w-full">
								{dropdownItems.map((item) => (
									<SDropdown.Item key={item.value}>{item.label}</SDropdown.Item>
								))}
							</SDropdown.Content>
						</SDropdown>
					</div>

					<div className="flex-1">
						<label className="mb-2 block text-sm font-medium">Button</label>
						<SButton variant="primary" className="w-full">
							Action Button
						</SButton>
					</div>
				</div>
			</div>

			{/* With Visual Alignment Helpers */}
			<div>
				<h3 className="text-md mb-3 font-medium">With Alignment Grid</h3>
				<div className="grid grid-cols-4 gap-4">
					<div className="rounded border border-dashed border-gray-300 p-4">
						<label className="mb-2 block text-sm font-medium">Input</label>
						<SInput placeholder="Input field" />
						<div className="mt-2 text-xs text-gray-500">
							Height: Check baseline alignment
						</div>
					</div>

					<div className="rounded border border-dashed border-gray-300 p-4">
						<label className="mb-2 block text-sm font-medium">Select</label>
						<SSelect options={selectOptions} placeholder="Select option" />
						<div className="mt-2 text-xs text-gray-500">
							Height: Should match input
						</div>
					</div>

					<div className="rounded border border-dashed border-gray-300 p-4">
						<label className="mb-2 block text-sm font-medium">Dropdown</label>
						<SDropdown>
							<SDropdown.Trigger asChild>
								<SButton
									icon={<SIcon name="chevron-down" className="size-4" />}
									variant="neutral"
									className="justify-between"
								></SButton>
							</SDropdown.Trigger>
							<SDropdown.Content>
								{dropdownItems.map((item) => (
									<SDropdown.Item key={item.value}>{item.label}</SDropdown.Item>
								))}
							</SDropdown.Content>
						</SDropdown>
						<div className="mt-2 text-xs text-gray-500">
							Height: Should align with others
						</div>
					</div>

					<div className="rounded border border-dashed border-gray-300 p-4">
						<label className="mb-2 block text-sm font-medium">Button</label>
						<SButton variant="primary" className="w-full">
							Button
						</SButton>
						<div className="mt-2 text-xs text-gray-500">
							Height: Should match form elements
						</div>
					</div>
				</div>
			</div>

			{/* Compact Layout Test */}
			<div>
				<h3 className="text-md mb-3 font-medium">Compact Layout</h3>
				<div className="flex items-end gap-2">
					<SInput placeholder="Quick input" className="flex-1" />
					<SSelect
						options={selectOptions}
						placeholder="Quick select"
						className="flex-1"
					/>
					<SDropdown>
						<SDropdown.Trigger asChild>
							<SButton
								icon={<SIcon name="chevron-down" className="size-4" />}
								variant="neutral"
								className="justify-between"
							></SButton>
						</SDropdown.Trigger>
						<SDropdown.Content>
							{dropdownItems.map((item) => (
								<SDropdown.Item key={item.value}>{item.label}</SDropdown.Item>
							))}
						</SDropdown.Content>
					</SDropdown>
					<SButton variant="primary">Submit</SButton>
				</div>
			</div>

			{/* Different States Comparison */}
			<div>
				<h3 className="text-md mb-3 font-medium">Different States</h3>
				<div className="space-y-4">
					<div className="flex items-start gap-4">
						<div className="flex-1">
							<label className="mb-2 block text-sm font-medium">
								Disabled State
							</label>
							<SInput placeholder="Disabled input" disabled />
						</div>
						<div className="flex-1">
							<label className="mb-2 block text-sm font-medium">
								Disabled State
							</label>
							<SSelect
								options={selectOptions}
								placeholder="Disabled select"
								disabled
							/>
						</div>
						<div className="flex-1">
							<label className="mb-2 block text-sm font-medium">
								Disabled State
							</label>
							<SDropdown>
								<SDropdown.Trigger asChild>
									<SButton
										icon={<SIcon name="chevron-down" className="size-4" />}
										variant="neutral"
										className="justify-between"
										disabled
									></SButton>
								</SDropdown.Trigger>
							</SDropdown>
						</div>
						<div className="flex-1">
							<label className="mb-2 block text-sm font-medium">
								Disabled State
							</label>
							<SButton variant="primary" className="w-full" disabled>
								Disabled Button
							</SButton>
						</div>
					</div>

					<div className="flex items-start gap-4">
						<div className="flex-1">
							<label className="mb-2 block text-sm font-medium">
								With Values
							</label>
							<SInput value="Sample input value" readOnly />
						</div>
						<div className="flex-1">
							<label className="mb-2 block text-sm font-medium">
								With Values
							</label>
							<SSelect options={selectOptions} value="option2" />
						</div>
						<div className="flex-1">
							<label className="mb-2 block text-sm font-medium">
								With Values
							</label>
							<SDropdown>
								<SDropdown.Trigger asChild>
									<SButton
										icon={<SIcon name="chevron-down" className="size-4" />}
										variant="neutral"
									></SButton>
								</SDropdown.Trigger>
								<SDropdown.Content>
									{dropdownItems.map((item) => (
										<SDropdown.Item key={item.value}>
											{item.label}
										</SDropdown.Item>
									))}
								</SDropdown.Content>
							</SDropdown>
						</div>
						<div className="flex-1">
							<label className="mb-2 block text-sm font-medium">
								With Values
							</label>
							<SButton variant="primary" className="w-full">
								Active Button
							</SButton>
						</div>
					</div>
				</div>
			</div>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story: `
This story displays Input, Select, and Dropdown components side by side to verify:

1. **Height Consistency**: All components should have the same baseline height
2. **Visual Alignment**: Components should align properly when placed in the same row
3. **State Consistency**: Different states (disabled, with values) should maintain alignment
4. **Layout Flexibility**: Components should work well in various layout scenarios

Use this story to identify any height or alignment issues that need to be addressed in the CSS.
				`,
			},
		},
	},
};

/**
 * Demonstrates form components in a real-world form layout scenario
 */
export const FormLayout: Story = {
	render: () => (
		<div className="mx-auto max-w-2xl p-8">
			<div className="space-y-6">
				<div>
					<h2 className="mb-2 text-lg font-semibold">User Profile Form</h2>
					<p className="text-sm text-gray-600">
						A realistic form layout using different form components together.
					</p>
				</div>

				<form className="space-y-4">
					<div className="grid grid-cols-2 gap-4">
						<div>
							<label className="mb-2 block text-sm font-medium">
								First Name
							</label>
							<SInput placeholder="Enter first name" />
						</div>
						<div>
							<label className="mb-2 block text-sm font-medium">
								Last Name
							</label>
							<SInput placeholder="Enter last name" />
						</div>
					</div>

					<div>
						<label className="mb-2 block text-sm font-medium">Email</label>
						<SInput type="email" placeholder="Enter email address" />
					</div>

					<div className="grid grid-cols-2 gap-4">
						<div>
							<label className="mb-2 block text-sm font-medium">Country</label>
							<SSelect
								options={[
									{ value: 'us', label: 'United States' },
									{ value: 'ca', label: 'Canada' },
									{ value: 'uk', label: 'United Kingdom' },
									{ value: 'au', label: 'Australia' },
								]}
								placeholder="Select country"
							/>
						</div>
						<div>
							<label className="mb-2 block text-sm font-medium">Actions</label>
							<SDropdown>
								<SDropdown.Trigger asChild>
									<SButton
										icon={<SIcon name="chevron-down" className="size-4" />}
										variant="neutral"
									></SButton>
								</SDropdown.Trigger>
								<SDropdown.Content>
									<SDropdown.Item>Import from LinkedIn</SDropdown.Item>
									<SDropdown.Item>Import from Google</SDropdown.Item>
									<SDropdown.Separator />
									<SDropdown.Item>Clear form</SDropdown.Item>
								</SDropdown.Content>
							</SDropdown>
						</div>
					</div>

					<div className="flex items-center gap-4 pt-4">
						<SButton type="submit">Save Profile</SButton>
						<SButton variant="neutral">Cancel</SButton>
					</div>
				</form>
			</div>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story: `
A realistic form layout that demonstrates how the components work together in a typical use case.
This helps identify any visual inconsistencies or alignment issues in a real-world scenario.
				`,
			},
		},
	},
};
