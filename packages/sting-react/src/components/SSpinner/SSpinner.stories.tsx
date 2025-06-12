import type { Meta, StoryObj } from '@storybook/react';
import { SSpinner } from '@/components/SSpinner';
import { spinnerVariants } from './constants';
import { expect, within } from '@storybook/test';
import { VariantProps } from 'tailwind-variants';

const meta = {
	title: 'Feedback/SSpinner',
	component: SSpinner,
	parameters: {
		layout: 'centered',
		docs: {
			description: {
				component: `
\`\`\`jsx
import { SSpinner } from '@chargebee/sting-react';

// Basic usage
<SSpinner />

// Different sizes
<SSpinner size="small" />
<SSpinner size="medium" />
<SSpinner size="large" />
\`\`\`
        `,
			},
		},
	},
	tags: ['autodocs'],
	args: {
		size: 'medium',
	},
} satisfies Meta<typeof SSpinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		size: 'medium',
		'data-testid': 'default-spinner',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const spinner = canvas.getByTestId('default-spinner');

		await expect(spinner).toHaveClass(spinnerVariants({ size: 'medium' }));
	},
};

export const Sizes: Story = {
	render: (args) => (
		<div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
			<SSpinner {...args} size="small" data-testid="spinner-small" />
			<SSpinner {...args} size="medium" data-testid="spinner-medium" />
			<SSpinner {...args} size="large" data-testid="spinner-large" />
		</div>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const sizes = ['small', 'medium', 'large'] as VariantProps<
			typeof spinnerVariants
		>['size'][];

		for (const size of sizes) {
			const spinner = canvas.getByTestId(`spinner-${size}`);
			await expect(spinner).toHaveClass(spinnerVariants({ size }));
		}
	},
};
