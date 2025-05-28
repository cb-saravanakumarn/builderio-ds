import {
	ArrowRightIcon,
	BeakerIcon,
	ArrowLeftIcon,
} from '@heroicons/react/24/outline';
import type { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, within } from '@storybook/test';
import { SButton } from './index';

const meta = {
	title: 'Design System/Actions/SButton',
	component: SButton,
	tags: ['autodocs'],
} satisfies Meta<typeof SButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		children: 'Button',
		variant: 'primary',
		asChild: false,
		loading: false,
		fullWidth: false,
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const button = canvas.getByRole('button');

		// Test initial state
		await expect(button).toBeInTheDocument();
		await expect(button).toHaveClass('btn btn-primary');

		// Test click interaction
		await userEvent.click(button);
		await expect(button).toHaveFocus();
	},
};

export const WithLeftIcon: Story = {
	render: (args) => (
		<SButton
			{...args}
			icon={<BeakerIcon className="size-4" />}
			iconPosition="left"
		>
			{args.children}
		</SButton>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const button = canvas.getByRole('button');
		const icon = button.querySelector('svg');

		await expect(icon).toBeInTheDocument();
		await expect(button.firstElementChild?.firstElementChild).toContainElement(
			icon as SVGElement,
		);
	},
};

export const WithRightIcon: Story = {
	render: (args) => (
		<SButton
			{...args}
			icon={<ArrowRightIcon className="size-4" />}
			iconPosition="right"
		>
			{args.children}
		</SButton>
	),
	args: {
		children: 'With Right Icon',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const button = canvas.getByRole('button');
		const icon = button.querySelector('svg');

		await expect(icon).toBeInTheDocument();
		await expect(button.firstElementChild?.lastElementChild).toContainElement(
			icon as SVGElement,
		);
	},
};

export const Loading: Story = {
	args: {
		loading: true,
		children: 'Loading',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const button = canvas.getByRole('button');

		await expect(button).toBeDisabled();
		await expect(button).toHaveAttribute('aria-disabled', 'true');
		await expect(button).toHaveAttribute('data-state', 'loading');
		await expect(button).toContainHTML('class="animate-spin');

		// Verify button cannot be clicked while loading
		await userEvent.click(button);
		await expect(button).toBeDisabled();
	},
};

export const Disabled: Story = {
	args: {
		disabled: true,
		children: 'Disabled',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const button = canvas.getByRole('button');

		await expect(button).toBeDisabled();
		await expect(button).toHaveAttribute('aria-disabled', 'true');
		await expect(button).toHaveClass('btn-disabled');

		// Verify button cannot be clicked while disabled
		await userEvent.click(button);
		await expect(button).toBeDisabled();
	},
};

export const AsLink: Story = {
	render: (args) => (
		<SButton {...args} asChild>
			<a href="#" onClick={(e) => e.preventDefault()}>
				Link as Button
			</a>
		</SButton>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const link = canvas.getByRole('link');

		await expect(link).toBeInTheDocument();
		await expect(link).toHaveAttribute('href', '#');
	},
};

export const AllVariants: Story = {
	args: {
		children: 'Button Text',
	},
	render: (args) => (
		<div className="flex flex-wrap gap-4">
			<div className="flex flex-wrap gap-4">
				<SButton {...args} variant="primary">
					Primary
				</SButton>
				<SButton {...args} variant="neutral">
					Neutral
				</SButton>
				<SButton {...args} variant="danger">
					Danger
				</SButton>
			</div>
			<div className="flex flex-wrap gap-4">
				<SButton {...args} variant="primary-outline">
					Primary Outline
				</SButton>
				<SButton {...args} variant="neutral">
					Neutral Outline
				</SButton>
				<SButton {...args} variant="danger-outline">
					Danger Outline
				</SButton>
			</div>
			<div className="flex flex-wrap gap-4">
				<SButton {...args} variant="primary-ghost">
					Primary Ghost
				</SButton>
				<SButton {...args} variant="neutral-ghost">
					Neutral Ghost
				</SButton>
				<SButton {...args} variant="danger-ghost">
					Danger Ghost
				</SButton>
			</div>
		</div>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const buttons = canvas.getAllByRole('button');

		// Test default variants
		await expect(buttons[0]).toHaveClass('btn-primary');
		await expect(buttons[1]).toHaveClass('btn-neutral');
		await expect(buttons[2]).toHaveClass('btn-danger');

		// Test outline variants
		await expect(buttons[3]).toHaveClass('btn-primary-outline');
		await expect(buttons[4]).toHaveClass('btn-neutral-outline');
		await expect(buttons[5]).toHaveClass('btn-danger-outline');

		// Test ghost variants
		await expect(buttons[6]).toHaveClass('btn-primary-ghost');
		await expect(buttons[7]).toHaveClass('btn-neutral-ghost');
		await expect(buttons[8]).toHaveClass('btn-danger-ghost');
	},
};

export const Sizes: Story = {
	args: {
		children: 'Button Text',
		variant: 'primary',
	},
	render: (args) => (
		<div className="flex items-center gap-4">
			<SButton {...args} size="regular">
				Regular
			</SButton>
			<SButton {...args} size="large">
				Large
			</SButton>
		</div>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const buttons = canvas.getAllByRole('button');

		await expect(buttons[0]).toHaveClass('s-btn-small');
		await expect(buttons[1]).not.toHaveClass('s-btn-small');
		await expect(buttons[1]).not.toHaveClass('s-btn-large');
		await expect(buttons[2]).toHaveClass('s-btn-large');
	},
};

export const FullWidth: Story = {
	args: {
		children: 'Button Text',
		fullWidth: true,
	},
	render: (args) => (
		<div className="grid gap-4">
			<SButton {...args}>Full Width Button</SButton>
			<SButton {...args} variant="neutral">
				Full Width Neutral
			</SButton>
		</div>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const buttons = canvas.getAllByRole('button');

		for (const button of buttons) {
			await expect(button).toHaveClass('btn-full-width');
		}
	},
};

export const IconButtons: Story = {
	args: {
		variant: 'primary',
		'aria-label': 'Icon button',
	},
	render: (args) => (
		<div className="flex flex-wrap gap-4">
			{['primary', 'primary-outline', 'danger', 'danger-ghost'].map(
				(variant) => (
					<SButton
						{...args}
						key={variant}
						variant={variant as any}
						aria-label={`${variant} icon button`}
					>
						<BeakerIcon className="size-4" />
					</SButton>
				),
			)}
		</div>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const buttons = canvas.getAllByRole('button');

		for (const button of buttons) {
			const icon = button.querySelector('svg');
			await expect(icon).toBeInTheDocument();
		}
	},
};

export const IconButtonSizes: Story = {
	args: {
		variant: 'primary',
		'aria-label': 'Icon button',
	},
	render: (args) => (
		<div className="flex items-center gap-4">
			<SButton {...args} size="regular" aria-label="Regular icon">
				<BeakerIcon className="size-4" />
			</SButton>
			<SButton {...args} size="large" aria-label="Large icon">
				<BeakerIcon className="size-4" />
			</SButton>
		</div>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const buttons = canvas.getAllByRole('button');

		await expect(buttons[2]).toHaveClass('btn-large');
	},
};

export const LoadingStates: Story = {
	args: {
		loading: true,
		children: 'Loading Text',
	},
	render: (args) => (
		<div className="flex flex-wrap gap-4">
			<SButton {...args}>Loading</SButton>
			<SButton {...args} variant="danger">
				Loading Danger
			</SButton>
		</div>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const buttons = canvas.getAllByRole('button');

		for (const button of buttons) {
			await expect(button).toBeDisabled();
			await expect(button).toHaveAttribute('aria-disabled', 'true');
			await expect(button).toHaveAttribute('data-state', 'loading');
			await expect(button).toContainHTML('class="animate-spin');
		}
	},
};

export const LoadingWithIcons: Story = {
	args: {
		variant: 'primary',
		icon: <ArrowLeftIcon className="size-4" />,
		iconPosition: 'left',
	},
	render: (args) => (
		<div className="flex flex-col space-y-8">
			<div className="flex flex-wrap gap-4">
				<h3 className="mb-2 w-full text-sm font-medium">
					Normal state with icons on both sides:
				</h3>
				<SButton
					{...args}
					variant="primary"
					icon={<ArrowLeftIcon className="size-4" />}
					iconPosition="left"
				>
					<span className="flex items-center">
						Navigate
						<ArrowRightIcon className="ml-2 size-4" />
					</span>
				</SButton>

				<SButton
					{...args}
					variant="primary-outline"
					icon={<BeakerIcon className="size-4" />}
					iconPosition="left"
				>
					<span className="flex items-center">
						Process
						<ArrowRightIcon className="ml-2 size-4" />
					</span>
				</SButton>

				<SButton
					{...args}
					variant="danger"
					icon={<ArrowLeftIcon className="size-4" />}
					iconPosition="right"
				>
					<span className="flex items-center">
						<BeakerIcon className="mr-2 size-4" />
						Return
					</span>
				</SButton>
			</div>

			<div className="flex flex-wrap gap-4">
				<h3 className="mb-2 w-full text-sm font-medium">
					Loading state - left icon is replaced by spinner:
				</h3>
				<SButton
					{...args}
					variant="primary"
					loading={true}
					icon={<ArrowLeftIcon className="size-4" />}
					iconPosition="left"
				>
					<span className="flex items-center">
						Navigate
						<ArrowRightIcon className="ml-2 size-4" />
					</span>
				</SButton>

				<SButton
					{...args}
					variant="primary-outline"
					loading={true}
					icon={<BeakerIcon className="size-4" />}
					iconPosition="left"
				>
					<span className="flex items-center">
						Process
						<ArrowRightIcon className="ml-2 size-4" />
					</span>
				</SButton>
			</div>

			<div className="flex flex-wrap gap-4">
				<h3 className="mb-2 w-full text-sm font-medium">
					Loading state - right icon is replaced by spinner:
				</h3>
				<SButton
					{...args}
					variant="primary"
					loading={true}
					icon={<ArrowRightIcon className="size-4" />}
					iconPosition="right"
				>
					<span className="flex items-center">
						<ArrowLeftIcon className="mr-2 size-4" />
						Navigate
					</span>
				</SButton>

				<SButton
					{...args}
					variant="danger"
					loading={true}
					icon={<ArrowLeftIcon className="size-4" />}
					iconPosition="right"
				>
					<span className="flex items-center">
						<BeakerIcon className="mr-2 size-4" />
						Return
					</span>
				</SButton>
			</div>

			<div className="flex flex-wrap gap-4">
				<h3 className="mb-2 w-full text-sm font-medium">
					Loading vs Disabled (different visual styles):
				</h3>
				<SButton
					{...args}
					variant="primary"
					loading={true}
					icon={<BeakerIcon className="size-4" />}
					iconPosition="left"
				>
					Loading State
				</SButton>

				<SButton
					{...args}
					variant="primary"
					disabled={true}
					icon={<BeakerIcon className="size-4" />}
					iconPosition="left"
				>
					Disabled State
				</SButton>
			</div>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story:
					'This example showcases how loading states interact with icons. When a button is in a loading state, the icon specified through the `icon` prop is replaced by a loading spinner, while any icons embedded in the children remain visible.',
			},
		},
	},
};
