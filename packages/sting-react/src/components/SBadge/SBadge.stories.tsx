import type { Meta, StoryObj } from '@storybook/react';
import { SBadge } from '@/components/SBadge';
import { badgeVariants } from './constants';
import { CheckIcon, InformationCircleIcon } from '@heroicons/react/24/outline';
import { expect, within } from '@storybook/test';
import { VariantProps } from 'tailwind-variants';

const meta = {
	title: 'Design System/Presentation/SBadge',
	component: SBadge,
	parameters: {
		layout: 'centered',
		docs: {
			description: {
				component: `
\`\`\`jsx
import { SBadge } from '@chargebee/sting-react';

// Basic usage
<SBadge variant="primary">Badge Text</SBadge>

// With icon
<SBadge variant="success" icon={<CheckIcon />}>Success</SBadge>

// Dark mode variant
<SBadge variant="info" mode="dark">Information</SBadge>
\`\`\`
        `,
			},
		},
	},
	tags: ['autodocs'],
	args: {
		children: 'Default Badge',
		variant: 'primary',
		size: 'regular',
		mode: 'light',
		rounded: false,
	},
} satisfies Meta<typeof SBadge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		children: 'Default Badge',
		variant: 'primary',
		size: 'regular',
		mode: 'light',
		rounded: false,
		dataTestId: 'default-badge',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const badge = canvas.getByTestId('default-badge');

		await expect(badge.querySelector('span')).toHaveClass(
			badgeVariants({ variant: 'primary', mode: 'light', rounded: false }),
		);
	},
};

export const Variants: Story = {
	args: {},

	render: (args) => (
		<div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }} {...args}>
			<SBadge variant="primary" data-testid="badge-primary">
				Primary
			</SBadge>
			<SBadge variant="neutral" data-testid="badge-neutral">
				Neutral
			</SBadge>
			<SBadge variant="danger" data-testid="badge-danger">
				Danger
			</SBadge>
			<SBadge variant="warning" data-testid="badge-warning">
				Warning
			</SBadge>
			<SBadge variant="success" data-testid="badge-success">
				Success
			</SBadge>
			<SBadge variant="info" data-testid="badge-info">
				Info
			</SBadge>
			<SBadge variant="brand" data-testid="badge-brand">
				Brand
			</SBadge>
		</div>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		const variants = [
			'primary',
			'neutral',
			'danger',
			'warning',
			'success',
			'info',
			'brand',
		] as VariantProps<typeof badgeVariants>['variant'][];

		for (const variant of variants) {
			const badge = canvas.getByTestId(`badge-${variant}`);
			await expect(badge.querySelector('span')).toHaveClass(
				badgeVariants({ variant }),
			);
		}
	},
};

export const Sizes: Story = {
	render: (args) => (
		<div
			style={{ display: 'flex', gap: '8px', alignItems: 'center' }}
			{...args}
		>
			<SBadge size="regular" data-testid="badge-regular">
				Regular
			</SBadge>
			<SBadge size="medium" data-testid="badge-medium">
				Medium
			</SBadge>
			<SBadge size="large" data-testid="badge-large">
				Large
			</SBadge>
		</div>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const regularBadge = canvas.getByTestId('badge-regular');
		const largeBadge = canvas.getByTestId('badge-large');

		await expect(regularBadge.querySelector('span')).toHaveClass(
			badgeVariants({ size: 'regular' }),
		);
		await expect(largeBadge.querySelector('span')).toHaveClass(
			badgeVariants({ size: 'large' }),
		);
	},
};

export const Modes: Story = {
	render: (args) => (
		<div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }} {...args}>
			<SBadge mode="light" variant="primary" data-testid="badge-light">
				Light
			</SBadge>
			<SBadge mode="dark" variant="primary" data-testid="badge-dark">
				Dark
			</SBadge>
		</div>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const lightBadge = canvas.getByTestId('badge-light');
		const darkBadge = canvas.getByTestId('badge-dark');

		await expect(lightBadge.querySelector('span')).toHaveClass(
			badgeVariants({ mode: 'light', variant: 'primary' }),
		);
		await expect(darkBadge.querySelector('span')).toHaveClass(
			badgeVariants({ mode: 'dark', variant: 'primary' }),
		);
	},
};

export const Rounded: Story = {
	render: (args) => (
		<div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }} {...args}>
			<SBadge data-testid="badge-small-radius">Small Radius</SBadge>
			<SBadge rounded data-testid="badge-full-radius">
				Full Radius
			</SBadge>
		</div>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const smallBadge = canvas.getByTestId('badge-small-radius');
		const fullBadge = canvas.getByTestId('badge-full-radius');

		await expect(smallBadge.querySelector('span')).toHaveClass(
			badgeVariants({ rounded: false }),
		);
		await expect(fullBadge.querySelector('span')).toHaveClass(
			badgeVariants({ rounded: true }),
		);
	},
};

export const WithIcon: Story = {
	render: (args) => (
		<div
			style={{
				display: 'flex',
				gap: '8px',
				flexWrap: 'wrap',
				alignItems: 'center',
			}}
			{...args}
		>
			<SBadge
				icon={<CheckIcon />}
				iconPosition="left"
				data-testid="badge-left-icon"
			>
				Left Icon
			</SBadge>
			<SBadge
				icon={<InformationCircleIcon />}
				iconPosition="right"
				data-testid="badge-right-icon"
			>
				Right Icon
			</SBadge>
		</div>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		const leftIconContainer = canvas.getByTestId('badge-left-icon');
		const rightIconContainer = canvas.getByTestId('badge-right-icon');

		// Check that icons exist
		await expect(leftIconContainer.querySelector('svg')).toBeInTheDocument();
		await expect(rightIconContainer.querySelector('svg')).toBeInTheDocument();

		// Verify icon positions
		// For right icon, the container should have the s-order-1 class for flexbox ordering
		await expect(rightIconContainer.querySelector('span > span')).toHaveClass(
			'order-1',
		);
		await expect(leftIconContainer).not.toHaveClass('order-1');

		// Both icons should have the size-3.5 class
		await expect(leftIconContainer.querySelector('span > span')).toHaveClass(
			'size-3.5',
		);
		await expect(rightIconContainer.querySelector('span > span')).toHaveClass(
			'size-3.5',
		);
	},
};

export const AsChild: Story = {
	render: (args) => (
		<SBadge asChild data-testid="badge-as-child" {...args}>
			<a
				href="#"
				onClick={(e) => {
					e.preventDefault();
				}}
			>
				Clickable Badge
			</a>
		</SBadge>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const root = canvas.getByTestId('badge-as-child');

		// We need to use the exact class string format that badgeVariants produces
		await expect(root).toHaveClass(
			badgeVariants({
				variant: 'primary',
				size: 'regular',
				rounded: true,
				mode: 'light',
			}),
		);

		// Verify that the link has the href attribute
		await expect(root.querySelector('a')).toHaveAttribute('href', '#');
	},
};
