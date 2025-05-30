import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { SRadioGroup } from './index';

/**
 * The SRadioGroup component provides a way to select a single option from a group of options.
 * It builds on the Radix UI RadioGroup primitive and follows the same styling patterns as other form components.
 *
 * The component can be used in two ways:
 * 1. With the `options` prop for simple radio groups
 * 2. With the compound component pattern using `SRadioGroup.Item` for more complex radio options
 */
const meta = {
	title: 'Forms/SRadioGroup',
	component: SRadioGroup.Root,
	tags: ['autodocs'],
	argTypes: {
		options: {
			control: 'object',
			description: 'Array of radio options to display',
		},
		value: {
			control: 'text',
			description: 'The selected value',
		},
		defaultValue: {
			control: 'text',
			description: 'The default selected value',
		},
		onValueChange: {
			action: 'valueChanged',
			description: 'Callback when value changes',
		},
		disabled: {
			control: 'boolean',
			description: 'Whether the radio group is disabled',
		},
		orientation: {
			control: { type: 'radio' },
			options: ['horizontal', 'vertical'],
			description: 'Layout direction of the radio group',
		},
		validationStatus: {
			control: { type: 'radio' },
			options: [undefined, 'error', 'success'],
			description: 'Validation status of the radio group',
		},
		validationMessage: {
			control: 'text',
			description:
				'Validation message to display when validation status is error',
		},
	},
} satisfies Meta<typeof SRadioGroup.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

const basicOptions = [
	{ value: 'apple', label: 'Apple' },
	{ value: 'banana', label: 'Banana' },
	{ value: 'orange', label: 'Orange' },
];

export const Basic: Story = {
	args: {
		options: basicOptions,
		defaultValue: 'apple',
		label: 'Select a fruit',
	},
};

export const WithDescriptions: Story = {
	args: {
		options: [
			{
				value: 'apple',
				label: 'Apple',
				description: 'Crisp and sweet',
			},
			{
				value: 'banana',
				label: 'Banana',
				description: 'Soft and creamy',
			},
			{
				value: 'orange',
				label: 'Orange',
				description: 'Juicy and tangy',
			},
		],
		defaultValue: 'apple',
		label: 'Select a fruit',
		description: 'Choose your preferred fruit from the options below.',
	},
};

export const Horizontal: Story = {
	args: {
		options: basicOptions,
		defaultValue: 'apple',
		label: 'Select a fruit',
		orientation: 'horizontal',
	},
};

export const Disabled: Story = {
	args: {
		options: basicOptions,
		defaultValue: 'apple',
		label: 'Select a fruit',
		disabled: true,
	},
};

export const IndividualDisabled: Story = {
	args: {
		options: [
			{ value: 'apple', label: 'Apple' },
			{ value: 'banana', label: 'Banana', disabled: true },
			{ value: 'orange', label: 'Orange' },
		],
		defaultValue: 'apple',
		label: 'Select a fruit',
	},
};

export const ValidationError: Story = {
	args: {
		options: basicOptions,
		defaultValue: 'apple',
		label: 'Select a fruit',
		validationStatus: 'error',
		validationMessage: 'Please select a different fruit',
	},
};

export const Controlled: Story = {
	render: (args) => {
		const [value, setValue] = useState('apple');
		return (
			<div className="w-full max-w-md space-y-4">
				<SRadioGroup.Root
					{...args}
					options={basicOptions}
					value={value}
					onValueChange={setValue}
					label="Select a fruit (Controlled)"
				/>
				<div className="rounded-md border bg-slate-50 p-4">
					<p>
						Selected value: <strong>{value}</strong>
					</p>
					<div className="mt-2 flex gap-2">
						<button
							className="rounded border bg-white px-3 py-1 text-sm shadow-sm hover:bg-slate-50"
							onClick={() => setValue('apple')}
						>
							Set to Apple
						</button>
						<button
							className="rounded border bg-white px-3 py-1 text-sm shadow-sm hover:bg-slate-50"
							onClick={() => setValue('banana')}
						>
							Set to Banana
						</button>
						<button
							className="rounded border bg-white px-3 py-1 text-sm shadow-sm hover:bg-slate-50"
							onClick={() => setValue('orange')}
						>
							Set to Orange
						</button>
					</div>
				</div>
				<div className="rounded-md border bg-slate-50 p-4 text-sm">
					<p>
						This example shows how to use SRadioGroup as a controlled component
						by managing its state in React.
					</p>
				</div>
			</div>
		);
	},
};

export const CompoundComponent: Story = {
	args: {
		label: 'Select a plan',
		description: 'Choose the subscription plan that works best for you.',
	},
	render: (args) => {
		const [plan, setPlan] = useState('basic');

		return (
			<div className="w-full max-w-md space-y-4">
				<SRadioGroup.Root
					value={plan}
					onValueChange={setPlan}
					label={args.label}
					description={args.description}
				>
					<SRadioGroup.Item
						value="basic"
						label="Basic Plan"
						description="For individual users"
					>
						<div className="mt-2 rounded-md border bg-slate-50 p-3">
							<ul className="list-disc pl-5 text-sm">
								<li>1 user</li>
								<li>10GB storage</li>
								<li>Email support</li>
							</ul>
							<p className="mt-2 font-semibold">$9.99/month</p>
						</div>
					</SRadioGroup.Item>

					<SRadioGroup.Item
						value="pro"
						label="Pro Plan"
						description="For small teams"
					>
						<div className="mt-2 rounded-md border bg-slate-50 p-3">
							<ul className="list-disc pl-5 text-sm">
								<li>5 users</li>
								<li>100GB storage</li>
								<li>Priority support</li>
								<li>Advanced analytics</li>
							</ul>
							<p className="mt-2 font-semibold">$29.99/month</p>
						</div>
					</SRadioGroup.Item>

					<SRadioGroup.Item
						value="enterprise"
						label="Enterprise Plan"
						description="For large organizations"
					>
						<div className="mt-2 rounded-md border bg-slate-50 p-3">
							<ul className="list-disc pl-5 text-sm">
								<li>Unlimited users</li>
								<li>1TB storage</li>
								<li>24/7 dedicated support</li>
								<li>Custom integrations</li>
								<li>Advanced security features</li>
							</ul>
							<p className="mt-2 font-semibold">$99.99/month</p>
						</div>
					</SRadioGroup.Item>
				</SRadioGroup.Root>

				<div className="rounded-md border bg-slate-50 p-4 text-sm">
					<p>
						This example demonstrates the compound component pattern using{' '}
						<code>SRadioGroup.Item</code>. This approach allows for more complex
						content within each radio option.
					</p>
				</div>
			</div>
		);
	},
};

export const CustomRadioItems: Story = {
	args: {
		label: 'Select a design style',
		orientation: 'vertical',
	},
	render: (args) => {
		const [selectedOption, setSelectedOption] = useState('option1');

		return (
			<div className="w-full max-w-md">
				<SRadioGroup.Root
					value={selectedOption}
					onValueChange={setSelectedOption}
					label={args.label}
					orientation={args.orientation}
				>
					<SRadioGroup.Item value="option1" label="Minimal">
						<div className="mt-2 rounded-md border p-3">
							<div className="flex items-center gap-3">
								<div className="h-6 w-6 rounded-full bg-slate-200" />
								<div className="h-2 flex-1 rounded bg-slate-200" />
							</div>
							<div className="mt-3 flex gap-2">
								<div className="h-8 w-20 rounded bg-slate-200" />
								<div className="h-8 w-20 rounded bg-blue-500" />
							</div>
						</div>
					</SRadioGroup.Item>

					<SRadioGroup.Item value="option2" label="Modern">
						<div className="mt-2 rounded-md border p-3">
							<div className="flex items-center gap-3">
								<div className="h-6 w-6 rounded-lg bg-violet-200" />
								<div className="h-2 flex-1 rounded-full bg-violet-200" />
							</div>
							<div className="mt-3 flex gap-2">
								<div className="h-8 w-20 rounded-lg bg-violet-200" />
								<div className="h-8 w-20 rounded-lg bg-violet-500" />
							</div>
						</div>
					</SRadioGroup.Item>

					<SRadioGroup.Item value="option3" label="Playful">
						<div className="mt-2 rounded-md border p-3">
							<div className="flex items-center gap-3">
								<div className="h-6 w-6 rounded-full bg-pink-200" />
								<div className="h-2 flex-1 rounded-full bg-pink-200" />
							</div>
							<div className="mt-3 flex gap-2">
								<div className="h-8 w-20 rounded-full bg-pink-200" />
								<div className="h-8 w-20 rounded-full bg-pink-500" />
							</div>
						</div>
					</SRadioGroup.Item>
				</SRadioGroup.Root>

				<div className="mt-4 rounded-md border bg-slate-50 p-4 text-sm">
					<p>
						This example shows how to use <code>SRadioGroup.Item</code> with
						custom visual content. Each option contains a visual preview of the
						design style.
					</p>
				</div>
			</div>
		);
	},
};

export const FormExample: Story = {
	args: {
		label: 'Select a subscription plan',
		options: [
			{
				value: 'basic',
				label: 'Basic Plan',
				description: '$9.99/month - Basic features',
			},
			{
				value: 'standard',
				label: 'Standard Plan',
				description: '$19.99/month - Standard features with support',
			},
			{
				value: 'premium',
				label: 'Premium Plan',
				description: '$29.99/month - All features, priority support',
			},
		],
	},
	render: (args) => {
		const [formData, setFormData] = useState({
			subscription: 'basic',
			validated: false,
			error: '',
		});

		const handleSubmit = (e: React.FormEvent) => {
			e.preventDefault();
			setFormData({
				...formData,
				validated: true,
				error:
					formData.subscription === 'basic'
						? 'Please select a premium plan'
						: '',
			});
		};

		return (
			<div className="w-full max-w-md rounded-md border p-4">
				<form onSubmit={handleSubmit} className="space-y-4">
					<h3 className="text-lg font-medium">Subscription Form</h3>

					<SRadioGroup.Root
						options={args.options}
						value={formData.subscription}
						onValueChange={(value) =>
							setFormData({
								...formData,
								subscription: value,
								validated: false,
								error: '',
							})
						}
						label={args.label}
						validationStatus={formData.error ? 'error' : undefined}
						validationMessage={formData.error}
					/>

					<button
						type="submit"
						className="rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
					>
						Subscribe
					</button>
				</form>

				<div className="mt-4 rounded-md border bg-slate-50 p-4 text-sm">
					<p>
						This example demonstrates how to implement form validation with the
						SRadioGroup component. The validation error appears when the user
						attempts to submit the form with the Basic plan selected.
					</p>
				</div>
			</div>
		);
	},
};
