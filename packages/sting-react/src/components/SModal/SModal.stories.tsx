import type { Meta, StoryObj } from '@storybook/react';
import { SModal } from '@/components/SModal';
import { SButton } from '@/components/SButton';
import { SInput } from '@/components/SInput';
import { SSelect } from '@/components/SSelect';
import { SCheckbox } from '@/components/SCheckbox';

type SModalProps = React.ComponentProps<typeof SModal> & {
	size: 'xsmall' | 'small' | 'regular' | 'large' | 'xlarge';
	variant: 'default' | 'fullscreen';
	space: 'xsmall' | 'small' | 'regular' | 'large' | 'xlarge' | 'xxlarge';
	bodyHeight: 'small' | 'regular' | 'large';
	showCloseButton: boolean;
	textSize: 'xsmall' | 'small' | 'regular' | 'large' | 'xlarge' | 'xxlarge';
	padding: 'xsmall' | 'small' | 'regular' | 'large' | 'xlarge' | 'xxlarge';
	showShadow: boolean;
	title?: string;
	description?: string;
};

const meta: Meta<SModalProps> = {
	title: 'Actions/SModal',
	component: SModal,
	tags: ['autodocs'],
	parameters: {
		layout: 'centered',
		docs: {
			description: {
				component:
					'A modal dialog component built with Radix UI Dialog primitive. It supports different sizes, variants, spaces, and can be used for various use cases like forms, confirmations, and information displays.',
			},
		},
	},
	argTypes: {
		size: {
			control: { type: 'select' },
			sptions: ['xsmall', 'small', 'regular', 'large', 'xlarge'],
			description: 'Controls the width of the modal',
			table: {
				category: 'Size & Layout',
			},
		},
		bodyHeight: {
			control: { type: 'select' },
			options: ['small', 'regular', 'large'],
			description: 'Controls the maximum height of the modal body',
			table: {
				category: 'Size & Layout',
			},
		},
		variant: {
			control: { type: 'select' },
			options: ['default', 'fullscreen'],
			description: 'The variant of the modal (centered or fullscreen)',
			table: {
				category: 'Appearance',
			},
		},
		space: {
			control: { type: 'select' },
			options: ['xsmall', 'small', 'regular', 'large', 'xlarge', 'xxlarge'],
			description: 'Controls the internal spacing between modal elements',
			table: {
				category: 'Size & Layout',
			},
		},
		showCloseButton: {
			control: { type: 'boolean' },
			description: 'Toggle visibility of the close button in the header',
			table: {
				category: 'Header Options',
			},
		},
		textSize: {
			control: { type: 'select' },
			options: ['xsmall', 'small', 'regular', 'large', 'xlarge', 'xxlarge'],
			description: 'Controls the size of text in the modal title',
			table: {
				category: 'Typography',
			},
		},
		padding: {
			control: { type: 'select' },
			options: ['xsmall', 'small', 'regular', 'large', 'xlarge', 'xxlarge'],
			description: 'Controls the padding around the modal content',
			table: {
				category: 'Size & Layout',
			},
		},
		showShadow: {
			control: { type: 'boolean' },
			description: 'Toggle shadow effect on the modal header',
			table: {
				category: 'Appearance',
			},
		},
	},
};

export default meta;
type Story = StoryObj<SModalProps>;

// Basic Modal Example
export const Default: Story = {
	args: {
		variant: 'default',
		size: 'regular',
		space: 'regular',
		showCloseButton: true,
		textSize: 'regular',
		showShadow: false,
		padding: 'regular',
	},
	render: (args) => (
		<SModal>
			<SModal.Trigger asChild>
				<SButton>Open Modal</SButton>
			</SModal.Trigger>
			<SModal.Content
				size={args.size}
				variant={args.variant}
				padding={args.padding}
				space={args.space}
			>
				<SModal.Header
					showShadow={args.showShadow}
					showCloseButton={args.showCloseButton}
				>
					<SModal.Title textSize={args.textSize}>
						Product Information
					</SModal.Title>
					<SModal.Description>
						View details about this product
					</SModal.Description>
				</SModal.Header>

				<SModal.Body>
					<p className="mb-4">
						This product is designed to help you streamline your workflow and
						increase productivity.
					</p>
					<h4 className="mb-2 font-semibold">Features:</h4>
					<ul className="mb-4 list-disc pl-5">
						<li>Intuitive user interface</li>
						<li>Advanced automation capabilities</li>
						<li>Cross-platform compatibility</li>
						<li>Seamless integration with existing tools</li>
					</ul>
					<p>
						For more information, please visit our documentation portal or
						contact support.
					</p>
				</SModal.Body>
				<SModal.Footer>
					<SModal.Close asChild>
						<SButton
							variant="neutral"
							className="flex w-full justify-center md:w-auto"
						>
							Close
						</SButton>
					</SModal.Close>
					<SButton className="flex w-full justify-center md:w-auto">
						Learn More
					</SButton>
				</SModal.Footer>
			</SModal.Content>
		</SModal>
	),
};

// Size Variants
export const SizeVariants: Story = {
	args: {
		space: 'regular',
	},
	render: (args) => (
		<div className="flex flex-wrap gap-4">
			{['xsmall', 'small', 'regular', 'large'].map((size) => (
				<SModal key={size}>
					<SModal.Trigger asChild>
						<SButton>
							{size.charAt(0).toUpperCase() + size.slice(1)} Size
						</SButton>
					</SModal.Trigger>
					<SModal.Content size={size as any} space={args.space}>
						<SModal.Header>
							<SModal.Title>
								{size.charAt(0).toUpperCase() + size.slice(1)} Modal
							</SModal.Title>
							<SModal.Description>
								This demonstrates the {size} size variant
							</SModal.Description>
						</SModal.Header>
						<SModal.Body>
							<p>
								This is an example of a modal with {size} size. Different sizes
								can be used for different types of content and use cases.
							</p>
						</SModal.Body>
						<SModal.Footer>
							<SModal.Close asChild>
								<SButton variant="neutral">Close</SButton>
							</SModal.Close>
						</SModal.Footer>
					</SModal.Content>
				</SModal>
			))}
		</div>
	),
};

// Spacing Variants
export const SpacingVariants: Story = {
	args: {
		size: 'regular',
	},
	render: (args) => (
		<div className="flex flex-wrap gap-4">
			{['xsmall', 'small', 'regular', 'large'].map((space) => (
				<SModal key={space}>
					<SModal.Trigger asChild>
						<SButton>
							{space.charAt(0).toUpperCase() + space.slice(1)} Spacing
						</SButton>
					</SModal.Trigger>
					<SModal.Content size={args.size} space={space as any}>
						<SModal.Header>
							<SModal.Title>
								{space.charAt(0).toUpperCase() + space.slice(1)} Spacing
							</SModal.Title>
						</SModal.Header>
						<SModal.Body>
							<p>
								This modal demonstrates {space} internal spacing between
								elements.
							</p>
							<p className="mt-4">
								Spacing can be adjusted to fit different content needs and
								visual density requirements.
							</p>
						</SModal.Body>
						<SModal.Footer>
							<SModal.Close asChild>
								<SButton variant="neutral">Close</SButton>
							</SModal.Close>
						</SModal.Footer>
					</SModal.Content>
				</SModal>
			))}
		</div>
	),
};

// Fullscreen Modal
export const Fullscreen: Story = {
	args: {
		variant: 'fullscreen',
		space: 'large',
		showShadow: true,
	},
	render: (args) => (
		<SModal>
			<SModal.Trigger asChild>
				<SButton>Fullscreen Modal</SButton>
			</SModal.Trigger>
			<SModal.Content variant={args.variant} space={args.space}>
				<SModal.Header showShadow={args.showShadow}>
					<SModal.Title>Fullscreen Dashboard</SModal.Title>
					<SModal.Description>
						A fullscreen modal ideal for dashboards, complex forms, or detailed
						views
					</SModal.Description>
				</SModal.Header>
				<SModal.Body>
					<div className="grid grid-cols-1 gap-4 md:grid-cols-3">
						<div className="rounded-md bg-gray-100 p-4">
							<h4 className="mb-2 font-semibold">Analytics Overview</h4>
							<p>Summary of key metrics and performance indicators</p>
						</div>
						<div className="rounded-md bg-gray-100 p-4">
							<h4 className="mb-2 font-semibold">Recent Activity</h4>
							<p>List of recent user actions and system events</p>
						</div>
						<div className="rounded-md bg-gray-100 p-4">
							<h4 className="mb-2 font-semibold">Resource Usage</h4>
							<p>Current system resource allocation and utilization</p>
						</div>
					</div>
				</SModal.Body>
				<SModal.Footer>
					<SModal.Close asChild>
						<SButton variant="neutral">Exit Fullscreen</SButton>
					</SModal.Close>
					<SButton>Save Configuration</SButton>
				</SModal.Footer>
			</SModal.Content>
		</SModal>
	),
};

// Form Modal
export const WithForm: Story = {
	args: {
		size: 'regular',
		title: 'User Profile',
		description: 'Update your profile information',
	},
	render: (args) => (
		<SModal>
			<SModal.Trigger asChild>
				<SButton>Open Form</SButton>
			</SModal.Trigger>
			<SModal.Content size={args.size}>
				<SModal.Header>
					<SModal.Title>{args.title}</SModal.Title>
					<SModal.Description>{args.description}</SModal.Description>
				</SModal.Header>
				<SModal.Body>
					<div className="grid gap-4 py-2">
						<SInput label="Full Name">
							<SInput.Field placeholder="John Doe" />
						</SInput>

						<SInput label="Email">
							<SInput.Field type="email" placeholder="john.doe@example.com" />
						</SInput>

						<SSelect>
							<SSelect.Trigger className="w-full">
								<SSelect.Value placeholder="Select a role" />
							</SSelect.Trigger>
							<SSelect.Content>
								<SSelect.Item value="user">User</SSelect.Item>
								<SSelect.Item value="administrator">Administrator</SSelect.Item>
								<SSelect.Item value="editor">Editor</SSelect.Item>
							</SSelect.Content>
						</SSelect>

						<SCheckbox
							label="Enable email notifications"
							description="You'll receive emails about account activity and updates"
						/>
					</div>
				</SModal.Body>
				<SModal.Footer>
					<SModal.Close asChild>
						<SButton variant="neutral">Cancel</SButton>
					</SModal.Close>
					<SButton>Save Changes</SButton>
				</SModal.Footer>
			</SModal.Content>
		</SModal>
	),
};

// Confirmation Modal
export const Confirmation: Story = {
	args: {
		size: 'small',
		space: 'regular',
		title: 'Confirm Deletion',
	},
	render: (args) => (
		<SModal>
			<SModal.Trigger asChild>
				<SButton>Delete Item</SButton>
			</SModal.Trigger>
			<SModal.Content size={args.size} space={args.space}>
				<SModal.Header>
					<SModal.Title>{args.title}</SModal.Title>
				</SModal.Header>
				<SModal.Body>
					<p>
						Are you sure you want to delete this item? This action cannot be
						undone.
					</p>
				</SModal.Body>
				<SModal.Footer>
					<SModal.Close asChild>
						<SButton variant="neutral">Cancel</SButton>
					</SModal.Close>
					<SButton variant="danger">Delete</SButton>
				</SModal.Footer>
			</SModal.Content>
		</SModal>
	),
};

// Modal with Long Content and Scroll
export const LongContent: Story = {
	args: {
		size: 'regular',
		bodyHeight: 'large',
		showShadow: true,
		title: 'Terms and Conditions',
		description: 'Please review our terms carefully',
	},
	render: (args) => (
		<SModal>
			<SModal.Trigger asChild>
				<SButton>Terms & Conditions</SButton>
			</SModal.Trigger>
			<SModal.Content size={args.size} bodyHeight={args.bodyHeight}>
				<SModal.Header showShadow={args.showShadow}>
					<SModal.Title>{args.title}</SModal.Title>
					<SModal.Description>{args.description}</SModal.Description>
				</SModal.Header>
				<SModal.Body>
					<div className="space-y-4">
						<h3 className="font-bold">1. Introduction</h3>
						<p>
							Welcome to our platform. These Terms of Service govern your use of
							our website and services. By accessing or using our services, you
							agree to be bound by these Terms.
						</p>

						<h3 className="font-bold">2. Definitions</h3>
						<p>
							"Service" refers to the website and any related services offered
							by our company. "User" refers to any individual who accesses or
							uses our Service. "Content" refers to any information, data, text,
							graphics, images, or other materials that may be viewed on our
							Service.
						</p>

						<h3 className="font-bold">3. Account Registration</h3>
						<p>
							To access certain features of the Service, you may be required to
							register for an account. You agree to provide accurate, current,
							and complete information during the registration process and to
							update such information to keep it accurate, current, and
							complete.
						</p>

						<h3 className="font-bold">4. User Responsibilities</h3>
						<p>
							Users are responsible for all activities that occur under their
							account. Users must not use the Service for any illegal or
							unauthorized purpose. Users agree not to reproduce, duplicate,
							copy, sell, resell, or exploit any portion of the Service without
							express written permission.
						</p>

						<h3 className="font-bold">5. Privacy Policy</h3>
						<p>
							Our Privacy Policy describes how we handle the information you
							provide to us when you use our Service. By using our Service, you
							agree that we can use such information in accordance with our
							Privacy Policy.
						</p>

						<h3 className="font-bold">6. Intellectual Property</h3>
						<p>
							The Service and its original content, features, and functionality
							are and will remain the exclusive property of our company. The
							Service is protected by copyright, trademark, and other laws. Our
							trademarks and trade dress may not be used in connection with any
							product or service without prior written consent.
						</p>

						<h3 className="font-bold">7. Termination</h3>
						<p>
							We may terminate or suspend your account and bar access to the
							Service immediately, without prior notice or liability, under our
							sole discretion, for any reason whatsoever, including without
							limitation if you breach the Terms.
						</p>

						<h3 className="font-bold">8. Limitation of Liability</h3>
						<p>
							In no event shall our company, nor its directors, employees,
							partners, agents, suppliers, or affiliates, be liable for any
							indirect, incidental, special, consequential or punitive damages,
							including without limitation, loss of profits, data, use,
							goodwill, or other intangible losses, resulting from your access
							to or use of or inability to access or use the Service.
						</p>

						<h3 className="font-bold">9. Changes to Terms</h3>
						<p>
							We reserve the right, at our sole discretion, to modify or replace
							these Terms at any time. It is your responsibility to check our
							Terms periodically for changes. Your continued use of the Service
							following the posting of any changes to these Terms constitutes
							acceptance of those changes.
						</p>

						<h3 className="font-bold">10. Contact Us</h3>
						<p>
							If you have any questions about these Terms, please contact us
							through the provided contact information on our website.
						</p>
					</div>
				</SModal.Body>
				<SModal.Footer>
					<SModal.Close asChild>
						<SButton variant="neutral">Decline</SButton>
					</SModal.Close>
					<SButton>Accept</SButton>
				</SModal.Footer>
			</SModal.Content>
		</SModal>
	),
};

// Custom Header Style
export const CustomHeader: Story = {
	args: {
		size: 'regular',
		title: 'Important Information',
	},
	render: (args) => (
		<SModal>
			<SModal.Trigger asChild>
				<SButton>Custom Header</SButton>
			</SModal.Trigger>
			<SModal.Content size={args.size}>
				<SModal.Header className="border-b border-blue-100 bg-blue-50">
					<div className="flex items-center">
						<div className="mr-3 rounded-full bg-blue-500 p-2 text-white">
							<svg
								width="20"
								height="20"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M12 16V12M12 8H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
						</div>
						<SModal.Title>{args.title}</SModal.Title>
					</div>
				</SModal.Header>
				<SModal.Body>
					<p>
						This example shows how you can customize the header with additional
						styling and components.
					</p>
				</SModal.Body>
				<SModal.Footer>
					<SModal.Close asChild>
						<SButton>Got it</SButton>
					</SModal.Close>
				</SModal.Footer>
			</SModal.Content>
		</SModal>
	),
};
