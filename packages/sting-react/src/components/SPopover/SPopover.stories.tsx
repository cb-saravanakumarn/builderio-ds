import type { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, within } from '@storybook/test';
import { useState } from 'react';
import { SButton } from '../SButton';
import { SPopover } from './index';
import { SInput } from '../SInput';
import { SIcon } from '../SIcon';

// Define the args interface for PopoverContent props
interface PopoverStoryArgs {
	align?: 'start' | 'center' | 'end';
	sideOffset?: number;
	side?: 'top' | 'right' | 'bottom' | 'left';
	avoidCollisions?: boolean;
	padding?: 'regular' | 'none';
}

const meta = {
	title: 'Actions/SPopover',
	component: SPopover,
	tags: ['autodocs'],
	parameters: {
		docs: {
			description: {
				component: `
\`\`\`jsx
import { SPopover } from '@chargebee/sting-react';

// Basic usage
<SPopover>
  <SPopover.Trigger asChild>
    <button>Open</button>
  </SPopover.Trigger>
  <SPopover.Content>
    <p>Popover content goes here</p>
  </SPopover.Content>
</SPopover>

// With custom alignment and side offset
<SPopover>
  <SPopover.Trigger asChild>
    <button>Open</button>
  </SPopover.Trigger>
  <SPopover.Content align="start" sideOffset={8}>
    <p>Custom positioned content</p>
  </SPopover.Content>
</SPopover>
\`\`\`
        `,
			},
		},
	},
	argTypes: {
		// PopoverContent props
		align: {
			control: 'select',
			options: ['start', 'center', 'end'],
			description: 'The preferred alignment against the trigger',
			table: {
				category: 'PopoverContent',
				defaultValue: { summary: 'center' },
			},
		},
		sideOffset: {
			control: { type: 'number', min: 0, max: 20 },
			description: 'The distance in pixels from the trigger',
			table: {
				category: 'PopoverContent',
				defaultValue: { summary: '4' },
			},
		},
		side: {
			control: 'select',
			options: ['top', 'right', 'bottom', 'left'],
			description: 'The preferred side of the trigger to render against',
			table: {
				category: 'PopoverContent',
				defaultValue: { summary: 'bottom' },
			},
		},
		avoidCollisions: {
			control: 'boolean',
			description:
				'When true, overrides the side and align to prevent collisions',
			table: {
				category: 'PopoverContent',
				defaultValue: { summary: 'true' },
			},
		},
		padding: {
			control: 'select',
			options: ['regular', 'none'],
			description: 'Padding for the Popover root. Applies to all contents unless overridden.',
			table: {
				category: 'Popover',
				defaultValue: { summary: 'regular' },
			},
		},
	},
} satisfies Meta<PopoverStoryArgs>;

export default meta;
type Story = StoryObj<PopoverStoryArgs>;

export const Default: Story = {
	args: {
		align: 'center',
		sideOffset: 4,
		padding: 'regular',
	},
	render: (args) => (
		<SPopover padding={args.padding}>
			<SPopover.Trigger asChild>
				<SButton variant="primary">Open Popover</SButton>
			</SPopover.Trigger>
			<SPopover.Content align={args.align} sideOffset={args.sideOffset}>
				<div className="space-y-2">
					<h4 className="font-medium">Popover Title</h4>
					<p className="text-sm text-neutral-600">
						This is a basic popover with some content. You can put any content
						here.
					</p>
				</div>
			</SPopover.Content>
		</SPopover>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const trigger = canvas.getByRole('button', { name: /open popover/i });

		// Test initial state
		await expect(trigger).toBeInTheDocument();

		// Test opening popover
		await userEvent.click(trigger);

		// Wait for popover to appear
		const popoverContent = await canvas.findByText('Popover Title');
		await expect(popoverContent).toBeInTheDocument();
	},
};

export const WithForm: Story = {
	render: (args) => (
		<SPopover>
			<SPopover.Trigger asChild>
				<SButton variant="primary-outline">
					Settings <SIcon name="settings" className="ml-2 h-4 w-4" />
				</SButton>
			</SPopover.Trigger>
			<SPopover.Content
				align={args.align}
				sideOffset={args.sideOffset}
				className="w-80"
			>
				<div className="space-y-4">
					<div className="space-y-2">
						<h4 className="font-medium">Account Settings</h4>
						<p className="text-sm text-neutral-600">
							Update your account preferences below.
						</p>
					</div>
					<div className="grid gap-2">
						<SInput
							label="Display Name"
							placeholder="Enter display name"
						/>
						<SInput
							label="Email"
							type="email"
							placeholder="Enter email"
						/>
					</div>
					<div className="flex justify-end space-x-2">
						<SButton variant="neutral" size="regular">
							Cancel
						</SButton>
						<SButton variant="primary" size="regular">
							Save
						</SButton>
					</div>
				</div>
			</SPopover.Content>
		</SPopover>
	),
	parameters: {
		docs: {
			description: {
				story: 'Popover containing a form with inputs and action buttons',
			},
		},
	},
};

export const DifferentPlacements: Story = {
	render: (args) => (
		<div className="flex items-center justify-center gap-16 p-16">
			{/* Top */}
			<SPopover>
				<SPopover.Trigger asChild>
					<SButton variant="primary">Top</SButton>
				</SPopover.Trigger>
				<SPopover.Content
					side="top"
					align={args.align}
					sideOffset={args.sideOffset}
				>
					<p className="text-sm">Popover positioned on top</p>
				</SPopover.Content>
			</SPopover>

			{/* Right */}
			<SPopover>
				<SPopover.Trigger asChild>
					<SButton variant="primary">Right</SButton>
				</SPopover.Trigger>
				<SPopover.Content
					side="right"
					align={args.align}
					sideOffset={args.sideOffset}
				>
					<p className="text-sm">Popover positioned on right</p>
				</SPopover.Content>
			</SPopover>

			{/* Bottom */}
			<SPopover>
				<SPopover.Trigger asChild>
					<SButton variant="primary">Bottom</SButton>
				</SPopover.Trigger>
				<SPopover.Content
					side="bottom"
					align={args.align}
					sideOffset={args.sideOffset}
				>
					<p className="text-sm">Popover positioned on bottom</p>
				</SPopover.Content>
			</SPopover>

			{/* Left */}
			<SPopover>
				<SPopover.Trigger asChild>
					<SButton variant="primary">Left</SButton>
				</SPopover.Trigger>
				<SPopover.Content
					side="left"
					align={args.align}
					sideOffset={args.sideOffset}
				>
					<p className="text-sm">Popover positioned on left</p>
				</SPopover.Content>
			</SPopover>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story: 'Demonstrating different placement options for the popover',
			},
		},
	},
};

export const AlignmentOptions: Story = {
	render: (args) => (
		<div className="flex items-center justify-center gap-8 p-16">
			{/* Start alignment */}
			<SPopover>
				<SPopover.Trigger asChild>
					<SButton variant="primary-outline">Align Start</SButton>
				</SPopover.Trigger>
				<SPopover.Content align="start" sideOffset={args.sideOffset}>
					<p className="text-sm">Aligned to start of trigger</p>
				</SPopover.Content>
			</SPopover>

			{/* Center alignment */}
			<SPopover>
				<SPopover.Trigger asChild>
					<SButton variant="primary-outline">Align Center</SButton>
				</SPopover.Trigger>
				<SPopover.Content align="center" sideOffset={args.sideOffset}>
					<p className="text-sm">Aligned to center of trigger</p>
				</SPopover.Content>
			</SPopover>

			{/* End alignment */}
			<SPopover>
				<SPopover.Trigger asChild>
					<SButton variant="primary-outline">Align End</SButton>
				</SPopover.Trigger>
				<SPopover.Content align="end" sideOffset={args.sideOffset}>
					<p className="text-sm">Aligned to end of trigger</p>
				</SPopover.Content>
			</SPopover>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story: 'Different alignment options relative to the trigger element',
			},
		},
	},
};

export const WithAnchor: Story = {
	render: (args) => {
		const [anchorElement, setAnchorElement] = useState<HTMLElement | null>(
			null,
		);

		return (
			<div className="space-y-4 p-8">
				<p className="text-sm text-neutral-600">
					This example shows how to use SPopover.Anchor to position the popover
					relative to a different element than the trigger.
				</p>
				<div className="flex items-center gap-4">
					<div
						ref={setAnchorElement}
						className="rounded border-2 border-dashed border-neutral-300 p-4 text-sm"
					>
						Anchor Element
					</div>
					<SPopover>
						{anchorElement && (
							<SPopover.Anchor asChild>
								<div />
							</SPopover.Anchor>
						)}
						<SPopover.Trigger asChild>
							<SButton variant="primary">Open (anchored to box)</SButton>
						</SPopover.Trigger>
						<SPopover.Content align={args.align} sideOffset={args.sideOffset}>
							<p className="text-sm">
								This popover is positioned relative to the dashed box, not the
								button!
							</p>
						</SPopover.Content>
					</SPopover>
				</div>
			</div>
		);
	},
	parameters: {
		docs: {
			description: {
				story:
					'Using SPopover.Anchor to position the popover relative to a different element',
			},
		},
	},
};

export const ControlledPopover: Story = {
	render: (args) => {
		const [open, setOpen] = useState(false);

		return (
			<div className="space-y-4">
				<div className="flex gap-2">
					<SButton
						variant="primary"
						onClick={() => setOpen(true)}
						disabled={open}
					>
						Open Popover
					</SButton>
					<SButton
						variant="neutral"
						onClick={() => setOpen(false)}
						disabled={!open}
					>
						Close Popover
					</SButton>
				</div>

				<div className="rounded-md bg-neutral-50 p-4 text-sm">
					<p>
						Popover state: <strong>{open ? 'Open' : 'Closed'}</strong>
					</p>
				</div>

				<SPopover open={open} onOpenChange={setOpen}>
					<SPopover.Trigger asChild>
						<SButton variant="primary-outline">Toggle Popover</SButton>
					</SPopover.Trigger>
					<SPopover.Content align={args.align} sideOffset={args.sideOffset}>
						<div className="space-y-2">
							<h4 className="font-medium">Controlled Popover</h4>
							<p className="text-sm text-neutral-600">
								This popover's open state is controlled by external buttons.
							</p>
							<SButton
								size="regular"
								variant="neutral"
								onClick={() => setOpen(false)}
							>
								Close from inside
							</SButton>
						</div>
					</SPopover.Content>
				</SPopover>
			</div>
		);
	},
	parameters: {
		docs: {
			description: {
				story: 'Example of a controlled popover with external state management',
			},
		},
	},
};

export const InfoPopover: Story = {
	render: (args) => (
		<div className="space-y-4 p-8">
			<div className="flex items-center gap-2">
				<span>User Information</span>
				<SPopover>
					<SPopover.Trigger asChild>
						<button className="rounded-full p-1 hover:bg-neutral-100">
							<SIcon name="info" className="h-4 w-4 text-neutral-500" />
						</button>
					</SPopover.Trigger>
					<SPopover.Content
						align={args.align}
						sideOffset={args.sideOffset}
						className="w-64"
					>
						<div className="space-y-2">
							<h4 className="text-sm font-medium">About User Information</h4>
							<p className="text-xs text-neutral-600">
								This section contains personal details including name, email,
								and contact preferences. All information is kept secure and
								private according to our privacy policy.
							</p>
						</div>
					</SPopover.Content>
				</SPopover>
			</div>

			<div className="flex items-center gap-2">
				<span>Account Settings</span>
				<SPopover>
					<SPopover.Trigger asChild>
						<button className="rounded-full p-1 hover:bg-neutral-100">
							<SIcon name="info" className="h-4 w-4 text-neutral-500" />
						</button>
					</SPopover.Trigger>
					<SPopover.Content
						align={args.align}
						sideOffset={args.sideOffset}
						className="w-64"
					>
						<div className="space-y-2">
							<h4 className="text-sm font-medium">Account Settings Help</h4>
							<p className="text-xs text-neutral-600">
								Configure your account preferences, notification settings, and
								security options here.
							</p>
						</div>
					</SPopover.Content>
				</SPopover>
			</div>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story: 'Using popovers to show contextual help information',
			},
		},
	},
};

export const WithArrow: Story = {
	render: (args) => (
		<div className="flex items-center justify-center gap-16 p-16">
			{/* Top with arrow */}
			<SPopover>
				<SPopover.Trigger asChild>
					<SButton variant="primary">Top with Arrow</SButton>
				</SPopover.Trigger>
				<SPopover.Content
					side="top"
					align={args.align}
					sideOffset={args.sideOffset}
				>
					<SPopover.Arrow />
					<div className="space-y-2">
						<h4 className="text-sm font-medium">Top Popover</h4>
						<p className="text-xs text-neutral-600">
							This popover has an arrow pointing to the trigger.
						</p>
					</div>
				</SPopover.Content>
			</SPopover>

			{/* Right with arrow */}
			<SPopover>
				<SPopover.Trigger asChild>
					<SButton variant="primary">Right with Arrow</SButton>
				</SPopover.Trigger>
				<SPopover.Content
					side="right"
					align={args.align}
					sideOffset={args.sideOffset}
				>
					<SPopover.Arrow />
					<div className="space-y-2">
						<h4 className="text-sm font-medium">Right Popover</h4>
						<p className="text-xs text-neutral-600">
							Arrow positioned on the left side of the popover.
						</p>
					</div>
				</SPopover.Content>
			</SPopover>

			{/* Bottom with arrow */}
			<SPopover>
				<SPopover.Trigger asChild>
					<SButton variant="primary">Bottom with Arrow</SButton>
				</SPopover.Trigger>
				<SPopover.Content
					side="bottom"
					align={args.align}
					sideOffset={args.sideOffset}
				>
					<SPopover.Arrow />
					<div className="space-y-2">
						<h4 className="text-sm font-medium">Bottom Popover</h4>
						<p className="text-xs text-neutral-600">
							Arrow points upward to the trigger button.
						</p>
					</div>
				</SPopover.Content>
			</SPopover>

			{/* Left with arrow */}
			<SPopover>
				<SPopover.Trigger asChild>
					<SButton variant="primary">Left with Arrow</SButton>
				</SPopover.Trigger>
				<SPopover.Content
					side="left"
					align={args.align}
					sideOffset={args.sideOffset}
				>
					<SPopover.Arrow />
					<div className="space-y-2">
						<h4 className="text-sm font-medium">Left Popover</h4>
						<p className="text-xs text-neutral-600">
							Arrow positioned on the right side of the popover.
						</p>
					</div>
				</SPopover.Content>
			</SPopover>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story:
					'Popovers with arrows pointing to their triggers for better visual connection',
			},
		},
	},
};

export const PaddingOnRoot: Story = {
	render: (args) => (
		<div className="flex gap-8 p-8">
			{/* Regular padding (default) */}
			<SPopover>
				<SPopover.Trigger asChild>
					<SButton variant="primary">Regular Padding</SButton>
				</SPopover.Trigger>
				<SPopover.Content align={args.align} sideOffset={args.sideOffset}>
					<div className="bg-neutral-50">This popover has <b>regular</b> padding (p-sm).</div>
				</SPopover.Content>
			</SPopover>

			{/* No padding via root */}
			<SPopover padding="none">
				<SPopover.Trigger asChild>
					<SButton variant="primary-outline">No Padding</SButton>
				</SPopover.Trigger>
				<SPopover.Content align={args.align} sideOffset={args.sideOffset}>
					<div className="bg-neutral-50">This popover has <b>no</b> padding (padding="none" on root).</div>
				</SPopover.Content>
			</SPopover>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story: 'Demonstrates setting the padding prop on the SPopover root. The first popover uses the default (regular) padding, the second disables padding via the root prop.'
			},
		},
	},
};
