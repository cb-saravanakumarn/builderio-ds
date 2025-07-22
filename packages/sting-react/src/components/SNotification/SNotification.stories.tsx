import type { Meta, StoryObj } from '@storybook/react';
import { SNotification } from './index';

const meta: Meta<typeof SNotification> = {
	title: 'Components/SNotification',
	component: SNotification,
	tags: ['autodocs'],
	argTypes: {
		variant: {
			control: { type: 'select' },
			options: ['info', 'primary', 'danger', 'warning', 'success', 'neutral'],
		},
		hasStroke: {
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
		description: 'A new version of the application is available with improved features and bug fixes.',
		dismissible: false,
	},
};

export const AutomaticContent: Story = {
	args: {
		variant: 'info',
		title: 'Content Shows Automatically',
		description: 'Title and description now show automatically when provided, without needing explicit showTitle/showDescription props.',
		showActions: false,
		dismissible: false,
	},
};

export const WithActions: Story = {
	args: {
		variant: 'primary',
		title: 'Confirm Account Deletion',
		description: 'Are you sure you want to delete your account? This action cannot be undone.',
		primaryActionText: 'Delete Account',
		secondaryActionText: 'Cancel',
		onPrimaryAction: () => alert('Account deletion initiated!'),
		onSecondaryAction: () => alert('Account deletion cancelled!'),
	},
};

export const Dismissible: Story = {
	args: {
		variant: 'warning',
		title: 'Session Expiring Soon',
		description: 'Your session will expire in 5 minutes. Please save your work to avoid losing changes.',
		dismissible: true,
		onDismiss: () => alert('Warning acknowledged!'),
	},
};

export const WithStroke: Story = {
	args: {
		variant: 'success',
		hasStroke: true,
		title: 'Payment Processed',
		description: 'Your payment of $49.99 has been successfully processed. A confirmation email has been sent.',
		showActions: false,
		dismissible: false,
	},
};

export const AllVariants: Story = {
	render: () => (
		<div className="space-y-4">
			<SNotification
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

export const AllVariantsWithStroke: Story = {
	render: () => (
		<div className="space-y-4 max-w-md">
			<SNotification
				variant="info"
				hasStroke={true}
				title="Browser Update Required"
				description="Please update your browser to the latest version for the best experience."
			/>
			<SNotification
				variant="primary"
				hasStroke={true}
				title="Profile Verification"
				description="Verify your email address to unlock all platform features."
			/>
			<SNotification
				variant="success"
				hasStroke={true}
				title="Export Completed"
				description="Your data has been successfully exported to CSV format."
			/>
			<SNotification
				variant="warning"
				hasStroke={true}
				title="Weak Password"
				description="Your password doesn't meet the security requirements. Consider updating it."
			/>
			<SNotification
				variant="danger"
				hasStroke={true}
				title="Access Denied"
				description="You don't have sufficient permissions to access this resource."
			/>
			<SNotification
				variant="neutral"
				hasStroke={true}
				title="Feature Deprecation"
				description="Legacy API endpoints will be deprecated in the next release."
			/>
		</div>
	),
};

export const DismissibleVariants: Story = {
	render: () => (
		<div className="space-y-4 max-w-md">
			<SNotification
				variant="info"
				dismissible={true}
				title="Cookie Policy Update"
				description="We've updated our cookie policy. Please review the changes."
				onDismiss={() => alert('Cookie notice dismissed!')}
			/>
			<SNotification
				variant="primary"
				hasStroke={true}
				dismissible={true}
				title="Beta Feature Access"
				description="You've been selected for early access to our new features."
				onDismiss={() => alert('Beta notice dismissed!')}
			/>
			<SNotification
				variant="danger"
				dismissible={true}
				title="Security Alert"
				description="Unusual login activity detected from a new device."
				onDismiss={() => alert('Security alert dismissed!')}
			/>
		</div>
	),
};

export const WithActionsAndDismiss: Story = {
	render: () => (
		<div className="space-y-4 max-w-md">
			<SNotification
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
				hasStroke={true}
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
	render: () => (
		<div className="space-y-4 max-w-md">
			<SNotification
				variant="info"
				title="System Maintenance Complete"
			/>
			<SNotification
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

export const Interactive: Story = {
	args: {
		variant: 'primary',
		title: 'Account Settings Update',
		description: 'Important changes have been made to your account settings. Please review and confirm.',
		primaryActionText: 'Review Changes',
		secondaryActionText: 'Remind Later',
		dismissible: true,
		hasStroke: true,
		onPrimaryAction: () => alert('Navigating to account settings!'),
		onSecondaryAction: () => alert('Reminder set for later!'),
		onDismiss: () => alert('Settings update notice dismissed!'),
	},
};

export const WithChildren: Story = {
	render: () => (
		<div className="space-y-4 max-w-md">
			<SNotification variant="info">
				<div>
					<h4 className="font-semibold text-neutral-900">Custom Content</h4>
					<p className="text-neutral-600 mt-1">
						You can provide any custom JSX content as children instead of using title and description props.
					</p>
				</div>
			</SNotification>

			<SNotification variant="success" hasStroke>
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
						<span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded">85% full</span>
					</div>
					<p className="text-sm text-amber-700 mt-1">
						You're running low on storage space. Consider upgrading your plan.
					</p>
				</div>
			</SNotification>
		</div>
	),
};

export const ChildrenWithActions: Story = {
	render: () => (
		<div className="space-y-4 max-w-md">
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
					<div className="flex items-center gap-2 mb-2">
						<span className="font-semibold text-primary-700">Premium Features Available</span>
						<span className="bg-primary-100 text-primary-800 text-xs px-2 py-0.5 rounded-full">New</span>
					</div>
					<p className="text-sm text-neutral-600">
						Unlock advanced analytics, priority support, and 10x more storage with our premium plan.
					</p>
					<div className="flex gap-4 mt-2 text-xs text-neutral-500">
						<span>• Advanced Analytics</span>
						<span>• Priority Support</span>
						<span>• 100GB Storage</span>
					</div>
				</div>
			</SNotification>
		</div>
	),
}; 