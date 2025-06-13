import type { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, within } from '@storybook/test';
import { useState } from 'react';
import { SAccordion } from './index';
import { Info, Settings, User } from 'lucide-react';

const meta = {
	title: 'Presentation/SAccordion',
	component: SAccordion.Root,
	tags: ['autodocs'],
} satisfies Meta<typeof SAccordion.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		type: 'single',
		collapsible: true,
	},
	render: (args) => (
		<div className="w-full max-w-md">
			<SAccordion.Root {...args}>
				<SAccordion.Item value="item-1">
					<SAccordion.Trigger>What is Sting React?</SAccordion.Trigger>
					<SAccordion.Content>
						Sting React is a React component library built on top of Radix UI
						primitives, providing accessible and customizable components for
						building modern web applications.
					</SAccordion.Content>
				</SAccordion.Item>
				<SAccordion.Item value="item-2">
					<SAccordion.Trigger>How do I install?</SAccordion.Trigger>
					<SAccordion.Content>
						You can install Sting React using npm or yarn:
						<pre className="mt-2 rounded-md bg-neutral-100 p-2 text-sm">
							npm install @chargebee/sting-react
						</pre>
					</SAccordion.Content>
				</SAccordion.Item>
				<SAccordion.Item value="item-3">
					<SAccordion.Trigger>Is it accessible?</SAccordion.Trigger>
					<SAccordion.Content>
						Yes! Sting React is built on top of Radix UI primitives which are
						fully accessible and follow WAI-ARIA guidelines.
					</SAccordion.Content>
				</SAccordion.Item>
			</SAccordion.Root>
		</div>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const trigger = canvas.getAllByRole('button')[0];

		// Test initial state
		await expect(trigger).toBeInTheDocument();

		// Test interaction
		await userEvent.click(trigger);
		await expect(trigger).toHaveAttribute('data-state', 'open');

		// Close it again
		await userEvent.click(trigger);
		await expect(trigger).toHaveAttribute('data-state', 'closed');
	},
};

export const Multiple: Story = {
	args: {
		type: 'multiple',
	},
	render: (args) => (
		<div className="w-full max-w-md">
			<SAccordion.Root {...args}>
				<SAccordion.Item value="item-1">
					<SAccordion.Trigger>Account Settings</SAccordion.Trigger>
					<SAccordion.Content>
						<p>Manage your account settings and preferences.</p>
					</SAccordion.Content>
				</SAccordion.Item>
				<SAccordion.Item value="item-2">
					<SAccordion.Trigger>Privacy Policy</SAccordion.Trigger>
					<SAccordion.Content>
						<p>Read our privacy policy and terms of service.</p>
					</SAccordion.Content>
				</SAccordion.Item>
				<SAccordion.Item value="item-3">
					<SAccordion.Trigger>Notification Settings</SAccordion.Trigger>
					<SAccordion.Content>
						<p>Configure how and when you receive notifications.</p>
					</SAccordion.Content>
				</SAccordion.Item>
			</SAccordion.Root>
		</div>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const triggers = canvas.getAllByRole('button');

		// Test that we can open multiple accordions at once
		await userEvent.click(triggers[0]);
		await expect(triggers[0]).toHaveAttribute('data-state', 'open');

		await userEvent.click(triggers[1]);
		await expect(triggers[0]).toHaveAttribute('data-state', 'open');
		await expect(triggers[1]).toHaveAttribute('data-state', 'open');

		// Test closing an accordion
		await userEvent.click(triggers[0]);
		await expect(triggers[0]).toHaveAttribute('data-state', 'closed');
		await expect(triggers[1]).toHaveAttribute('data-state', 'open');
	},
};

export const Bordered: Story = {
	args: {
		type: 'single',
		collapsible: true,
		variant: 'bordered',
	},
	render: (args) => (
		<div className="w-full max-w-md">
			<SAccordion.Root {...args}>
				<SAccordion.Item value="item-1">
					<SAccordion.Trigger>Section 1</SAccordion.Trigger>
					<SAccordion.Content>Content for section 1</SAccordion.Content>
				</SAccordion.Item>
				<SAccordion.Item value="item-2">
					<SAccordion.Trigger>Section 2</SAccordion.Trigger>
					<SAccordion.Content>Content for section 2</SAccordion.Content>
				</SAccordion.Item>
				<SAccordion.Item value="item-3">
					<SAccordion.Trigger>Section 3</SAccordion.Trigger>
					<SAccordion.Content>Content for section 3</SAccordion.Content>
				</SAccordion.Item>
			</SAccordion.Root>
		</div>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const triggers = canvas.getAllByRole('button');
		
		// Check that the border styling is applied
		await expect(triggers[0].parentElement).toHaveClass('border');
		
		// Test interaction
		await userEvent.click(triggers[0]);
		await expect(triggers[0]).toHaveAttribute('data-state', 'open');
		
		// Test that the content is visible
		const content = canvas.getByText('Content for section 1');
		await expect(content).toBeVisible();
	},
};

export const Contained: Story = {
	args: {
		type: 'single',
		collapsible: true,
		variant: 'contained',
	},
	render: (args) => (
		<div className="w-full max-w-md">
			<SAccordion.Root {...args}>
				<SAccordion.Item value="item-1">
					<SAccordion.Trigger>Section 1</SAccordion.Trigger>
					<SAccordion.Content>Content for section 1</SAccordion.Content>
				</SAccordion.Item>
				<SAccordion.Item value="item-2">
					<SAccordion.Trigger>Section 2</SAccordion.Trigger>
					<SAccordion.Content>Content for section 2</SAccordion.Content>
				</SAccordion.Item>
				<SAccordion.Item value="item-3">
					<SAccordion.Trigger>Section 3</SAccordion.Trigger>
					<SAccordion.Content>Content for section 3</SAccordion.Content>
				</SAccordion.Item>
			</SAccordion.Root>
		</div>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const triggers = canvas.getAllByRole('button');
		
		// Check that the container styling is applied
		await expect(triggers[0].parentElement).toHaveClass('bg-neutral-50');
		
		// Test interaction
		await userEvent.click(triggers[0]);
		await expect(triggers[0]).toHaveAttribute('data-state', 'open');
		
		// Test that the content is visible
		const content = canvas.getByText('Content for section 1');
		await expect(content).toBeVisible();
	},
};

export const WithIcons: Story = {
	args: {
		type: 'single',
		collapsible: true,
	},
	render: (args) => (
		<div className="w-full max-w-md">
			<SAccordion.Root {...args}>
				<SAccordion.Item value="item-1">
					<SAccordion.Trigger>
						<div className="flex items-center gap-2">
							<User className="h-4 w-4" />
							<span>User Profile</span>
						</div>
					</SAccordion.Trigger>
					<SAccordion.Content>
						<p>Manage your user profile and account settings.</p>
					</SAccordion.Content>
				</SAccordion.Item>
				<SAccordion.Item value="item-2">
					<SAccordion.Trigger>
						<div className="flex items-center gap-2">
							<Settings className="h-4 w-4" />
							<span>Settings</span>
						</div>
					</SAccordion.Trigger>
					<SAccordion.Content>
						<p>Configure application settings and preferences.</p>
					</SAccordion.Content>
				</SAccordion.Item>
				<SAccordion.Item value="item-3">
					<SAccordion.Trigger>
						<div className="flex items-center gap-2">
							<Info className="h-4 w-4" />
							<span>About</span>
						</div>
					</SAccordion.Trigger>
					<SAccordion.Content>
						<p>Information about the application and version.</p>
					</SAccordion.Content>
				</SAccordion.Item>
			</SAccordion.Root>
		</div>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const triggers = canvas.getAllByRole('button');
		
		// Check that icons are rendered - using a different approach since SVGs don't have an implicit role
		const firstTrigger = triggers[0];
		const svgElements = firstTrigger.querySelectorAll('svg');
		await expect(svgElements.length).toBeGreaterThan(0);
		
		// Test interaction
		await userEvent.click(triggers[0]);
		await expect(triggers[0]).toHaveAttribute('data-state', 'open');
		
		// Verify content is visible
		const content = canvas.getByText('Manage your user profile and account settings.');
		await expect(content).toBeVisible();
	},
};

export const CustomIcon: Story = {
	args: {
		type: 'single',
		collapsible: true,
	},
	render: (args) => (
		<div className="w-full max-w-md">
			<SAccordion.Root {...args}>
				<SAccordion.Item value="item-1">
					<SAccordion.Trigger icon={<Plus className="h-4 w-4" />}>
						Custom Icon (Plus)
					</SAccordion.Trigger>
					<SAccordion.Content>
						This accordion uses a custom plus icon instead of the default
						chevron.
					</SAccordion.Content>
				</SAccordion.Item>
				<SAccordion.Item value="item-2">
					<SAccordion.Trigger icon={<PlusCircle className="h-4 w-4" />}>
						Another Custom Icon
					</SAccordion.Trigger>
					<SAccordion.Content>
						This accordion uses a different custom icon.
					</SAccordion.Content>
				</SAccordion.Item>
			</SAccordion.Root>
		</div>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const triggers = canvas.getAllByRole('button');
		
		// Check that custom icons are rendered
		const customIcons = triggers[0].querySelectorAll('svg');
		await expect(customIcons.length).toBeGreaterThan(0);
		
		// Test interaction
		await userEvent.click(triggers[0]);
		await expect(triggers[0]).toHaveAttribute('data-state', 'open');
		
		// Verify content is visible
		const content = canvas.getByText('This accordion uses a custom plus icon instead of the default chevron.');
		await expect(content).toBeVisible();
	},
};

export const NoIcon: Story = {
	args: {
		type: 'single',
		collapsible: true,
	},
	render: (args) => (
		<div className="w-full max-w-md">
			<SAccordion.Root {...args}>
				<SAccordion.Item value="item-1">
					<SAccordion.Trigger hideIcon>Without Icon</SAccordion.Trigger>
					<SAccordion.Content>
						This accordion trigger doesn't show an icon.
					</SAccordion.Content>
				</SAccordion.Item>
				<SAccordion.Item value="item-2">
					<SAccordion.Trigger>With Default Icon</SAccordion.Trigger>
					<SAccordion.Content>
						This accordion trigger shows the default icon for comparison.
					</SAccordion.Content>
				</SAccordion.Item>
			</SAccordion.Root>
		</div>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const triggers = canvas.getAllByRole('button');
		
		// Check that one trigger doesn't have an icon
		const firstTrigger = triggers[0];
		const secondTrigger = triggers[1];
		
		// First trigger should not have an icon since hideIcon is true
		await expect(firstTrigger.querySelector('svg')).toBeNull();
		
		// Second trigger should have the default icon
		await expect(secondTrigger.querySelector('svg')).not.toBeNull();
		
		// Test interaction still works on icon-less trigger
		await userEvent.click(firstTrigger);
		await expect(firstTrigger).toHaveAttribute('data-state', 'open');
	},
};

export const Disabled: Story = {
	args: {
		type: 'single',
		collapsible: true,
	},
	render: (args) => (
		<div className="w-full max-w-md">
			<SAccordion.Root {...args}>
				<SAccordion.Item value="item-1">
					<SAccordion.Trigger>Enabled Item</SAccordion.Trigger>
					<SAccordion.Content>
						This item is enabled and can be toggled.
					</SAccordion.Content>
				</SAccordion.Item>
				<SAccordion.Item value="item-2" disabled>
					<SAccordion.Trigger>Disabled Item</SAccordion.Trigger>
					<SAccordion.Content>
						This content won't be accessible because the item is disabled.
					</SAccordion.Content>
				</SAccordion.Item>
			</SAccordion.Root>
		</div>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const triggers = canvas.getAllByRole('button');
		
		// Check that the disabled trigger has the disabled attribute
		const disabledTrigger = triggers[1];
		await expect(disabledTrigger).toHaveAttribute('disabled');
		
		// Test that the enabled trigger can be clicked
		const enabledTrigger = triggers[0];
		await userEvent.click(enabledTrigger);
		await expect(enabledTrigger).toHaveAttribute('data-state', 'open');
		
		// Try to click the disabled trigger (should not change state)
		await userEvent.click(disabledTrigger);
		await expect(disabledTrigger).toHaveAttribute('data-state', 'closed');
	},
};

export const Controlled: Story = {
	args: {
		type: 'single',
		collapsible: true,
	},
	render: (args) => {
		const [value, setValue] = useState<string | undefined>('item-1');

		return (
			<div className="w-full max-w-md space-y-4">
				<SAccordion.Root
					{...args}
					value={value}
					onValueChange={(val) => setValue(val)}
				>
					<SAccordion.Item value="item-1">
						<SAccordion.Trigger>Section 1</SAccordion.Trigger>
						<SAccordion.Content>Content for section 1</SAccordion.Content>
					</SAccordion.Item>
					<SAccordion.Item value="item-2">
						<SAccordion.Trigger>Section 2</SAccordion.Trigger>
						<SAccordion.Content>Content for section 2</SAccordion.Content>
					</SAccordion.Item>
					<SAccordion.Item value="item-3">
						<SAccordion.Trigger>Section 3</SAccordion.Trigger>
						<SAccordion.Content>Content for section 3</SAccordion.Content>
					</SAccordion.Item>
				</SAccordion.Root>

				<div className="rounded-md border bg-slate-50 p-4">
					<p>
						Selected value: <strong>{value || 'none'}</strong>
					</p>
					<div className="mt-2 flex flex-wrap gap-2">
						<button
							className="rounded border bg-white px-3 py-1 text-sm shadow-sm hover:bg-slate-50"
							onClick={() => setValue('item-1')}
						>
							Open Section 1
						</button>
						<button
							className="rounded border bg-white px-3 py-1 text-sm shadow-sm hover:bg-slate-50"
							onClick={() => setValue('item-2')}
						>
							Open Section 2
						</button>
						<button
							className="rounded border bg-white px-3 py-1 text-sm shadow-sm hover:bg-slate-50"
							onClick={() => setValue('item-3')}
						>
							Open Section 3
						</button>
						<button
							className="rounded border bg-white px-3 py-1 text-sm shadow-sm hover:bg-slate-50"
							onClick={() => setValue(undefined)}
						>
							Close All
						</button>
					</div>
				</div>
			</div>
		);
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		
		// Initial state should show the first item open
		const accordionTriggers = canvas.getAllByRole('button', { name: /Section \d/ });
		await expect(accordionTriggers[0]).toHaveAttribute('data-state', 'open');
		
		// Test control buttons functionality
		const controlButtons = canvas.getAllByRole('button', { name: /Open Section \d|Close All/ });
		
		// Test Open Section 2 button
		await userEvent.click(controlButtons[1]);
		await expect(accordionTriggers[1]).toHaveAttribute('data-state', 'open');
		await expect(accordionTriggers[0]).toHaveAttribute('data-state', 'closed');
		
		// Test Close All button
		await userEvent.click(controlButtons[3]);
		for (const trigger of accordionTriggers) {
			await expect(trigger).toHaveAttribute('data-state', 'closed');
		}
		
		// Verify the selected value display is updated
		const selectedValueText = canvas.getByText(/Selected value:/);
		await expect(selectedValueText).toHaveTextContent('Selected value: none');
	},
};

// Additional icons for the CustomIcon story
const Plus = ({ className }: { className?: string }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
		className={className}
	>
		<line x1="12" y1="5" x2="12" y2="19" />
		<line x1="5" y1="12" x2="19" y2="12" />
	</svg>
);

const PlusCircle = ({ className }: { className?: string }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
		className={className}
	>
		<circle cx="12" cy="12" r="10" />
		<line x1="12" y1="8" x2="12" y2="16" />
		<line x1="8" y1="12" x2="16" y2="12" />
	</svg>
);
