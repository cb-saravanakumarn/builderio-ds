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
		testId: 'default-spinner',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const spinner = canvas.getByTestId('default-spinner');
		await expect(spinner).toBeInTheDocument();
		await expect(spinner).toHaveClass('s-spinner');
	},
};

export const Sizes: Story = {
	render: (args) => (
		<div className="flex items-center gap-4">
			<SSpinner {...args} size="small" testId="spinner-small" />
			<SSpinner {...args} size="medium" testId="spinner-medium" />
			<SSpinner {...args} size="large" testId="spinner-large" />
		</div>
	),
	play: async ({ canvasElement, args }) => {
		const canvas = within(canvasElement);
		const sizes = ['small', 'medium', 'large'];
		for (const size of sizes) {
			const spinner = canvas.getByTestId(`spinner-${size}`);
			await expect(spinner).toBeInTheDocument();
			await expect(spinner).toHaveClass('s-spinner');
		}
	},
};
