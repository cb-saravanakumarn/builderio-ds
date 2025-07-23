import type { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, within } from '@storybook/test';
import { SNotification } from './index';

const meta: Meta<typeof SNotification> = {
	title: 'Presentation/SNotification',
	component: SNotification,
	tags: ['autodocs'],
	argTypes: {
		variant: {
			control: { type: 'select' },
			options: ['info', 'primary', 'danger', 'warning', 'success', 'neutral'],
		},
		hasBorder: {
			control: { type: 'boolean' },
		},
		dismissible: {
			control: { type: 'boolean' },
		},
	},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		variant: 'info',
		title: 'System Update Available',
		description:
			'A new version of the application is available with improved features and bug fixes.',
		dismissible: false,
		dataTestId: 'default-notification',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		// Test notification is rendered
		const notification = canvas.getByTestId('default-notification');
		await expect(notification).toBeInTheDocument();

		// Test title and description are present
		const title = canvas.getByText('System Update Available');
		const description = canvas.getByText(
			'A new version of the application is available with improved features and bug fixes.',
		);
		await expect(title).toBeInTheDocument();
		await expect(description).toBeInTheDocument();

		// Test variant classes
		await expect(notification).toHaveClass('s-notification');
		await expect(notification).toHaveClass('s-notification-info');

		// Test not dismissible (no close button)
		const closeButton = canvas.queryByRole('button');
		await expect(closeButton).not.toBeInTheDocument();
	},
};

export const WithActions: Story = {
	args: {
		variant: 'primary',
		title: 'Confirm Account Deletion',
		description:
			'Are you sure you want to delete your account? This action cannot be undone.',
		primaryActionText: 'Delete Account',
		secondaryActionText: 'Cancel',
		onPrimaryAction: () => alert('Account deletion initiated!'),
		onSecondaryAction: () => alert('Account deletion cancelled!'),
		dataTestId: 'actions-notification',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		// Test notification structure
		const notification = canvas.getByTestId('actions-notification');
		await expect(notification).toBeInTheDocument();
		await expect(notification).toHaveClass('s-notification');
		await expect(notification).toHaveClass('s-notification-primary');

		// Test action buttons are present (they are divs with role="button", not actual buttons)
		const primaryAction = canvas.getByText('Delete Account');
		const secondaryAction = canvas.getByText('Cancel');
		await expect(primaryAction).toBeInTheDocument();
		await expect(secondaryAction).toBeInTheDocument();

		// Test action elements have proper attributes
		await expect(primaryAction).toHaveAttribute('role', 'button');
		await expect(secondaryAction).toHaveAttribute('role', 'button');

		// Test button interactions
		await userEvent.click(primaryAction);
		await userEvent.click(secondaryAction);
	},
};

export const Dismissible: Story = {
	args: {
		variant: 'warning',
		title: 'Session Expiring Soon',
		description:
			'Your session will expire in 5 minutes. Please save your work to avoid losing changes.',
		dismissible: true,
		onDismiss: () => alert('Warning acknowledged!'),
		dataTestId: 'dismissible-notification',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		// Test notification structure
		const notification = canvas.getByTestId('dismissible-notification');
		await expect(notification).toBeInTheDocument();
		await expect(notification).toHaveClass('s-notification');
		await expect(notification).toHaveClass('s-notification-warning');

		// Test dismiss button is present
		const dismissButton = canvas.getByRole('button');
		await expect(dismissButton).toBeInTheDocument();
		await expect(dismissButton).toHaveAttribute(
			'aria-label',
			'Dismiss notification',
		);

		// Test dismiss functionality
		await userEvent.click(dismissButton);
	},
};

export const NoBorder: Story = {
	args: {
		variant: 'success',
		hasBorder: false,
		title: 'Payment Processed',
		description:
			'Your payment of $49.99 has been successfully processed. A confirmation email has been sent.',
		showActions: false,
		dismissible: false,
		dataTestId: 'stroke-notification',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		// Test notification structure
		const notification = canvas.getByTestId('stroke-notification');
		await expect(notification).toBeInTheDocument();
		await expect(notification).toHaveClass('s-notification');
		await expect(notification).toHaveClass('s-notification-success');

		// Test stroke variant class
		await expect(notification).toHaveClass('s-notification-stroke');

		// Test content
		const title = canvas.getByText('Payment Processed');
		await expect(title).toBeInTheDocument();

		// Test no actions or dismiss button
		const buttons = canvas.queryAllByRole('button');
		await expect(buttons).toHaveLength(0);
	},
};

export const AllVariants: Story = {
	render: (args) => (
		<div className="space-y-4">
			<SNotification
				{...args}
				variant="info"
				title="New Feature Available"
				description="Dark mode is now available. Try it out in your account settings."
			/>
			<SNotification
				variant="primary"
				title="Subscription Renewal"
				description="Your subscription will renew in 7 days. Review your billing details."
			/>
			<SNotification
				variant="success"
				title="File Upload Complete"
				description="Your document 'annual-report.pdf' has been successfully uploaded."
			/>
			<SNotification
				variant="warning"
				title="Storage Space Low"
				description="You have used 90% of your storage space. Consider upgrading your plan."
			/>
			<SNotification
				variant="danger"
				title="Connection Error"
				description="Unable to connect to the server. Please check your internet connection."
			/>
			<SNotification
				variant="neutral"
				title="Scheduled Maintenance"
				description="System maintenance is scheduled for tonight at 2 AM UTC."
			/>
		</div>
	),
};

export const WithActionsAndDismiss: Story = {
	render: (args) => (
		<div className="max-w-md space-y-4">
			<SNotification
				{...args}
				variant="primary"
				title="Enable Two-Factor Authentication"
				description="Enhance your account security by enabling 2FA authentication."
				primaryActionText="Enable 2FA"
				secondaryActionText="Later"
				dismissible={true}
				onPrimaryAction={() => alert('Navigating to 2FA setup!')}
				onSecondaryAction={() => alert('2FA setup postponed!')}
				onDismiss={() => alert('2FA notice dismissed!')}
			/>
			<SNotification
				variant="warning"
				hasBorder={true}
				title="Unsaved Changes"
				description="You have unsaved changes that will be lost if you leave this page."
				primaryActionText="Save Changes"
				dismissible={true}
				onPrimaryAction={() => alert('Changes saved!')}
				onDismiss={() => alert('Warning dismissed!')}
			/>
		</div>
	),
};

export const ContentVariations: Story = {
	render: (args) => (
		<div className="max-w-md space-y-4">
			<SNotification variant="info" title="System Maintenance Complete" />
			<SNotification
				{...args}
				variant="success"
				description="Your profile changes have been automatically saved."
			/>
			<SNotification
				variant="warning"
				title="License Expiring"
				description="Your software license will expire in 30 days. Renew now to avoid service interruption."
				primaryActionText="Renew License"
			/>
		</div>
	),
};

export const WithChildren: Story = {
	render: () => (
		<div className="max-w-md space-y-4">
			<SNotification variant="info">
				<h4 className="text-para-medium">Custom Content</h4>
				<p className="mt-1 text-para-regular">
					You can provide any custom JSX content as children instead of using
					title and description props.
				</p>
			</SNotification>

			<SNotification variant="success" hasBorder>
				<div className="flex items-center gap-2">
					<span className="font-medium text-green-700">✓ Upload Complete</span>
					<span className="text-sm text-neutral-500">•</span>
					<span className="text-sm text-neutral-600">3 files processed</span>
				</div>
			</SNotification>

			<SNotification variant="warning">
				<div>
					<div className="flex items-center justify-between">
						<span className="font-medium text-amber-800">Storage Warning</span>
						<span className="rounded bg-amber-100 px-2 py-1 text-xs text-amber-800">
							85% full
						</span>
					</div>
					<p className="mt-1 text-sm text-amber-700">
						You're running low on storage space. Consider upgrading your plan.
					</p>
				</div>
			</SNotification>
		</div>
	),
};

export const ChildrenWithActions: Story = {
	render: () => (
		<div className="max-w-md space-y-4">
			<SNotification
				variant="primary"
				primaryActionText="Upgrade Now"
				secondaryActionText="Later"
				onPrimaryAction={() => alert('Upgrading plan!')}
				onSecondaryAction={() => alert('Reminder set!')}
				dismissible={true}
				onDismiss={() => alert('Dismissed!')}
			>
				<div>
					<div className="mb-2 flex items-center gap-2">
						<span className="font-semibold text-primary-700">
							Premium Features Available
						</span>
						<span className="rounded-full bg-primary-100 px-2 py-0.5 text-xs text-primary-800">
							New
						</span>
					</div>
					<p className="text-sm text-neutral-600">
						Unlock advanced analytics, priority support, and 10x more storage
						with our premium plan.
					</p>
					<div className="mt-2 flex gap-4 text-xs text-neutral-500">
						<span>• Advanced Analytics</span>
						<span>• Priority Support</span>
						<span>• 100GB Storage</span>
					</div>
				</div>
			</SNotification>
		</div>
	),
};

// Test Stories
export const AccessibilityTest: Story = {
	args: {
		variant: 'info',
		title: 'Accessibility Test',
		description:
			'This notification tests accessibility features including ARIA roles and keyboard navigation.',
		dismissible: true,
		dataTestId: 'accessibility-notification',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		// Test notification structure
		const notification = canvas.getByTestId('accessibility-notification');
		await expect(notification).toBeInTheDocument();

		// Test dismiss button accessibility
		const dismissButton = canvas.getByRole('button');
		await expect(dismissButton).toHaveAttribute(
			'aria-label',
			'Dismiss notification',
		);

		// Test keyboard navigation
		dismissButton.focus();
		await expect(dismissButton).toHaveFocus();
	},
};
