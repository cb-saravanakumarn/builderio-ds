import type { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, within } from '@storybook/test';
import { SToast, type SToastProps } from './SToast';
import { SToaster, type ToasterPlacement } from './SToaster';
import { useToast } from './use-toast';
import { SButton } from '../SButton';

interface ToastStoryArgs extends SToastProps {
	// Interactive demo args
	showButtons?: boolean;
	placement?: ToasterPlacement;

	// Content args
	description?: string;
	actionText?: string;
	actionAltText?: string;

	// Display control args
	showHeadings?: boolean;
	showHeading?: boolean;

	// Programmatic demo args
	persistentToastTitle?: string;
	persistentToastDescription?: string;
	autoToastTitle?: string;
	autoToastDescription?: string;
	autoToastDuration?: number;
}

const meta = {
	title: 'Feedback/SToast',
	component: SToast,
	tags: ['autodocs'],
	parameters: {
		layout: 'fullscreen',
	},
	decorators: [
		(Story) => (
			<div style={{ position: 'relative', minHeight: '50vh' }}>
				<Story />
			</div>
		),
	],
} satisfies Meta<typeof SToast>;

export default meta;
type Story = StoryObj<ToastStoryArgs>;

// Demo component that uses the toast hook
function ToastDemo() {
	const { toast } = useToast();

	return (
		<div className="flex flex-wrap gap-4 p-8">
			<SButton
				variant="primary"
				onClick={() => {
					toast({
						title: 'Success!',
						description: 'Your action was completed successfully.',
					});
				}}
			>
				Show Default Toast
			</SButton>

			<SButton
				variant="danger"
				onClick={() => {
					toast({
						variant: 'destructive',
						title: 'Error!',
						description: 'Something went wrong. Please try again.',
					});
				}}
			>
				Show Error Toast
			</SButton>

			<SButton
				variant="primary"
				onClick={() => {
					toast({
						variant: 'success',
						title: 'Success!',
						description: 'Your action was completed successfully.',
					});
				}}
			>
				Show Success Toast
			</SButton>

			<SButton
				variant="primary-outline"
				onClick={() => {
					toast({
						title: 'With Action',
						description: 'This toast has an action button.',
						action: (
							<SToast.Action altText="Try again">Try again</SToast.Action>
						),
					});
				}}
			>
				Toast with Action
			</SButton>

			<SButton
				variant="neutral"
				onClick={() => {
					toast({
						title: 'Simple message',
					});
				}}
			>
				Title Only
			</SButton>

			<SButton
				variant="neutral-ghost"
				onClick={() => {
					toast({
						description: 'This toast only has a description.',
					});
				}}
			>
				Description Only
			</SButton>
		</div>
	);
}

export const Interactive: Story = {
	args: {
		// Default args for the interactive demo
		showButtons: true,
	},
	render: (args) => (
		<div>
			<ToastDemo {...args} />
			<SToaster />
		</div>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const defaultButton = canvas.getByText('Show Default Toast');

		// Test default toast
		await userEvent.click(defaultButton);

		// Wait for toast to appear
		await expect(canvas.getByText('Success!')).toBeInTheDocument();
		await expect(
			canvas.getByText('Your action was completed successfully.'),
		).toBeInTheDocument();
	},
};

export const DefaultToast: Story = {
	args: {
		variant: 'default',
		open: true,
		title: 'Notification',
		description: 'This is a default toast notification.',
	},
	render: (args) => (
		<SToast.Provider>
			<SToast variant={args.variant} open={args.open}>
				<div className="grid gap-1">
					{args.title && <SToast.Title>{args.title}</SToast.Title>}
					{args.description && (
						<SToast.Description>{args.description}</SToast.Description>
					)}
				</div>
				<SToast.Close />
			</SToast>
			<SToast.Viewport />
		</SToast.Provider>
	),
	play: async ({ canvasElement, args }) => {
		const canvas = within(canvasElement);

		if (args.title) {
			await expect(canvas.getByText(args.title)).toBeInTheDocument();
		}
		if (args.description) {
			await expect(canvas.getByText(args.description)).toBeInTheDocument();
		}

		const closeButton = canvas.getByRole('button');
		await expect(closeButton).toBeInTheDocument();
	},
};

export const DestructiveToast: Story = {
	args: {
		variant: 'destructive',
		open: true,
		title: 'Error',
		description: 'Something went wrong. Please try again.',
	},
	render: (args) => (
		<SToast.Provider>
			<SToast variant={args.variant} open={args.open}>
				<div className="grid gap-1">
					{args.title && <SToast.Title>{args.title}</SToast.Title>}
					{args.description && (
						<SToast.Description>{args.description}</SToast.Description>
					)}
				</div>
				<SToast.Close />
			</SToast>
			<SToast.Viewport />
		</SToast.Provider>
	),
	play: async ({ canvasElement, args }) => {
		const canvas = within(canvasElement);

		if (args.title) {
			await expect(canvas.getByText(args.title)).toBeInTheDocument();
		}
		if (args.description) {
			await expect(canvas.getByText(args.description)).toBeInTheDocument();
		}

		const toast = canvas
			.getByText(args.title!)
			.closest('[data-radix-toast-root]');
		await expect(toast).toHaveClass('border-danger-500');
	},
};

export const SuccessToast: Story = {
	args: {
		variant: 'success',
		open: true,
		title: 'Success!',
		description: 'Your action was completed successfully.',
	},
	render: (args) => (
		<SToast.Provider>
			<SToast variant={args.variant} open={args.open}>
				<div className="grid gap-1">
					{args.title && <SToast.Title>{args.title}</SToast.Title>}
					{args.description && (
						<SToast.Description>{args.description}</SToast.Description>
					)}
				</div>
				<SToast.Close />
			</SToast>
			<SToast.Viewport />
		</SToast.Provider>
	),
	play: async ({ canvasElement, args }) => {
		const canvas = within(canvasElement);

		if (args.title) {
			await expect(canvas.getByText(args.title)).toBeInTheDocument();
		}
		if (args.description) {
			await expect(canvas.getByText(args.description)).toBeInTheDocument();
		}

		const toast = canvas
			.getByText(args.title!)
			.closest('[data-radix-toast-root]');
		await expect(toast).toHaveClass('border-success-500');
	},
};

export const WithAction: Story = {
	args: {
		variant: 'default',
		open: true,
		title: 'Update Available',
		description: 'A new version is available. Would you like to update?',
		actionText: 'Update',
		actionAltText: 'Update now',
	},
	render: (args) => (
		<SToast.Provider>
			<SToast variant={args.variant} open={args.open}>
				<div className="grid gap-1">
					{args.title && <SToast.Title>{args.title}</SToast.Title>}
					{args.description && (
						<SToast.Description>{args.description}</SToast.Description>
					)}
				</div>
				{args.actionText && (
					<SToast.Action altText={args.actionAltText || args.actionText}>
						{args.actionText}
					</SToast.Action>
				)}
				<SToast.Close />
			</SToast>
			<SToast.Viewport />
		</SToast.Provider>
	),
	play: async ({ canvasElement, args }) => {
		const canvas = within(canvasElement);

		if (args.title) {
			await expect(canvas.getByText(args.title)).toBeInTheDocument();
		}

		if (args.actionText) {
			const actionButton = canvas.getByText(args.actionText);
			await expect(actionButton).toBeInTheDocument();
			if (args.actionAltText) {
				await expect(actionButton).toHaveAttribute('alt', args.actionAltText);
			}
		}
	},
};

export const TitleOnly: Story = {
	args: {
		variant: 'default',
		open: true,
		title: 'Simple notification',
	},
	render: (args) => (
		<SToast.Provider>
			<SToast variant={args.variant} open={args.open}>
				<div className="grid gap-1">
					{args.title && <SToast.Title>{args.title}</SToast.Title>}
				</div>
				<SToast.Close />
			</SToast>
			<SToast.Viewport />
		</SToast.Provider>
	),
	play: async ({ canvasElement, args }) => {
		const canvas = within(canvasElement);

		if (args.title) {
			await expect(canvas.getByText(args.title)).toBeInTheDocument();
		}
	},
};

export const DescriptionOnly: Story = {
	args: {
		variant: 'default',
		open: true,
		description: 'This toast only has a description message.',
	},
	render: (args) => (
		<SToast.Provider>
			<SToast variant={args.variant} open={args.open}>
				<div className="grid gap-1">
					{args.description && (
						<SToast.Description>{args.description}</SToast.Description>
					)}
				</div>
				<SToast.Close />
			</SToast>
			<SToast.Viewport />
		</SToast.Provider>
	),
	play: async ({ canvasElement, args }) => {
		const canvas = within(canvasElement);

		if (args.description) {
			await expect(canvas.getByText(args.description)).toBeInTheDocument();
		}
	},
};

export const AllVariants: Story = {
	args: {
		showHeadings: true,
	},
	render: (args) => (
		<div className="space-y-4 p-8">
			{args.showHeadings && (
				<h3 className="text-lg font-semibold">Toast Variants</h3>
			)}

			<div className="space-y-4">
				<div>
					{args.showHeadings && (
						<h4 className="mb-2 text-sm font-medium">Default</h4>
					)}
					<SToast.Provider>
						<SToast open={true} variant="default">
							<div className="grid gap-1">
								<SToast.Title>Default Toast</SToast.Title>
								<SToast.Description>
									This is a default toast with neutral styling.
								</SToast.Description>
							</div>
							<SToast.Close />
						</SToast>
						<SToast.Viewport />
					</SToast.Provider>
				</div>

				<div>
					{args.showHeadings && (
						<h4 className="mb-2 text-sm font-medium">Destructive</h4>
					)}
					<SToast.Provider>
						<SToast open={true} variant="destructive">
							<div className="grid gap-1">
								<SToast.Title>Error Toast</SToast.Title>
								<SToast.Description>
									This is a destructive toast for errors and warnings.
								</SToast.Description>
							</div>
							<SToast.Close />
						</SToast>
						<SToast.Viewport />
					</SToast.Provider>
				</div>

				<div>
					{args.showHeadings && (
						<h4 className="mb-2 text-sm font-medium">Success</h4>
					)}
					<SToast.Provider>
						<SToast open={true} variant="success">
							<div className="grid gap-1">
								<SToast.Title>Success Toast</SToast.Title>
								<SToast.Description>
									This is a success toast for positive feedback.
								</SToast.Description>
							</div>
							<SToast.Close />
						</SToast>
						<SToast.Viewport />
					</SToast.Provider>
				</div>
			</div>
		</div>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		await expect(canvas.getByText('Default Toast')).toBeInTheDocument();
		await expect(canvas.getByText('Error Toast')).toBeInTheDocument();
		await expect(canvas.getByText('Success Toast')).toBeInTheDocument();
	},
};

export const ProgrammaticUsage: Story = {
	args: {
		showHeading: true,
		persistentToastTitle: 'Persistent Toast',
		persistentToastDescription: 'This toast will stay until dismissed.',
		autoToastTitle: 'Auto-dismiss Toast',
		autoToastDescription: 'This will auto-dismiss after 5 seconds.',
		autoToastDuration: 5000,
	},
	render: (args) => {
		function ProgrammaticDemo() {
			const { toast, dismiss } = useToast();
			let toastId: string;

			return (
				<div className="space-y-4 p-8">
					{args.showHeading && (
						<h3 className="text-lg font-semibold">
							Programmatic Toast Control
						</h3>
					)}
					<div className="flex flex-wrap gap-4">
						<SButton
							onClick={() => {
								const result = toast({
									title: args.persistentToastTitle,
									description: args.persistentToastDescription,
								});
								toastId = result.id;
							}}
						>
							Show Persistent Toast
						</SButton>

						<SButton
							variant="danger-outline"
							onClick={() => {
								dismiss(toastId);
							}}
						>
							Dismiss Specific Toast
						</SButton>

						<SButton
							variant="neutral"
							onClick={() => {
								dismiss();
							}}
						>
							Dismiss All Toasts
						</SButton>

						<SButton
							variant="primary-outline"
							onClick={() => {
								toast({
									title: args.autoToastTitle,
									description: args.autoToastDescription,
									duration: args.autoToastDuration,
								});
							}}
						>
							Auto-dismiss Toast
						</SButton>
					</div>
				</div>
			);
		}

		return (
			<div>
				<ProgrammaticDemo />
				<SToaster />
			</div>
		);
	},
	play: async ({ canvasElement, args }) => {
		const canvas = within(canvasElement);

		const persistentButton = canvas.getByText('Show Persistent Toast');
		await userEvent.click(persistentButton);

		await expect(
			canvas.getByText(args.persistentToastTitle!),
		).toBeInTheDocument();
	},
};

export const PlacementOptions: Story = {
	args: {
		placement: 'bottom-right',
		showHeading: true,
	},
	render: (args) => {
		function PlacementDemo() {
			const { toast } = useToast();

			const placements: ToasterPlacement[] = [
				'top-left',
				'top-center',
				'top-right',
				'bottom-left',
				'bottom-center',
				'bottom-right'
			];

			return (
				<div className="space-y-4 p-8">
					{args.showHeading && (
						<h3 className="text-lg font-semibold">Toast Placement Options</h3>
					)}
					<div className="grid grid-cols-3 gap-4">
						{placements.map((placement) => (
							<SButton
								key={placement}
								variant="primary-outline"
								onClick={() => {
									toast({
										title: placement.replace('-', ' ').toUpperCase(),
										description: `Toast positioned at ${placement}`,
									});
								}}
							>
								{placement.replace('-', ' ')}
							</SButton>
						))}
					</div>
					<div className="mt-4 text-sm text-neutral-600">
						Note: This demo uses the default placement. For different placements,
						use a separate SToaster component with the placement prop.
					</div>
				</div>
			);
		}

		return (
			<div>
				<PlacementDemo />
				<SToaster />
			</div>
		);
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		const topLeftButton = canvas.getByText('top left');
		await userEvent.click(topLeftButton);

		await expect(canvas.getByText('TOP LEFT')).toBeInTheDocument();
	},
};

export const CustomPlacement: Story = {
	args: {
		placement: 'top-right',
		showHeading: true,
	},
	render: (args) => {
		function CustomPlacementDemo() {
			const { toast } = useToast();

			return (
				<div className="space-y-4 p-8">
					{args.showHeading && (
						<h3 className="text-lg font-semibold">
							Custom Placement: {args.placement}
						</h3>
					)}
					<SButton
						onClick={() => {
							toast({
								title: 'Custom Position',
								description: `This toast appears at ${args.placement}`,
								variant: 'success',
							});
						}}
					>
						Show Toast at {args.placement}
					</SButton>
				</div>
			);
		}

		return (
			<div style={{ position: 'relative', minHeight: '50vh' }}>
				<CustomPlacementDemo />
				<SToaster placement={args.placement} />
			</div>
		);
	},
	play: async ({ canvasElement, args }) => {
		const canvas = within(canvasElement);

		const button = canvas.getByText(`Show Toast at ${args.placement}`);
		await userEvent.click(button);

		await expect(canvas.getByText('Custom Position')).toBeInTheDocument();
	},
};
