import type { Meta, StoryObj } from '@storybook/react';
import { STabs } from './index';
import React from 'react';

const meta: Meta<typeof STabs> = {
	title: 'Navigation/STabs',
	component: STabs,
	tags: ['autodocs'],
	parameters: {
		docs: {
			description: {
				component: `
\`\`\`jsx
import { STabs } from '@chargebee/sting-react';

// Basic usage
<STabs defaultValue="tab1">
  <STabs.List>
    <STabs.Trigger value="tab1">Tab 1</STabs.Trigger>
    <STabs.Trigger value="tab2">Tab 2</STabs.Trigger>
  </STabs.List>
  <STabs.Content value="tab1">Tab 1 content</STabs.Content>
  <STabs.Content value="tab2">Tab 2 content</STabs.Content>
</STabs>

// With underline variant
<STabs defaultValue="tab1" variant="underline">
  <STabs.List>
    <STabs.Trigger value="tab1">Tab 1</STabs.Trigger>
    <STabs.Trigger value="tab2">Tab 2</STabs.Trigger>
  </STabs.List>
  <STabs.Content value="tab1">Tab 1 content</STabs.Content>
  <STabs.Content value="tab2">Tab 2 content</STabs.Content>
</STabs>
\`\`\`

Note: Tab triggers use the 'underline' variant by default.
        `,
			},
		},
	},
	argTypes: {
		variant: {
			control: 'select',
			options: ['default', 'underline'],
			description: 'The visual style of the tabs',
			table: {
				defaultValue: { summary: 'default' },
			},
		},
		size: {
			control: 'select',
			options: ['sm', 'md', 'lg'],
			description: 'The size of the tabs',
			table: {
				defaultValue: { summary: 'md' },
			},
		},
		fullWidth: {
			control: 'boolean',
			description: 'Whether tabs should take up full available width',
		},
		defaultValue: {
			control: 'text',
			description: 'The initial active tab (uncontrolled)',
		},
		value: {
			control: 'text',
			description: 'The controlled value of the active tab',
		},
	},
};

export default meta;
type Story = StoryObj<typeof STabs>;

const TabsDemo = (args: any) => (
	<STabs {...args} className="w-[400px]">
		<STabs.List variant={args.variant} fullWidth={args.fullWidth}>
			<STabs.Trigger value="tab1" fullWidth={args.fullWidth}>
				Account
			</STabs.Trigger>
			<STabs.Trigger value="tab2" fullWidth={args.fullWidth}>
				Password
			</STabs.Trigger>
			<STabs.Trigger value="tab3" fullWidth={args.fullWidth}>
				Settings
			</STabs.Trigger>
		</STabs.List>
		<STabs.Content value="tab1">
			<div className="rounded-md border border-neutral-200 p-4">
				<h3 className="mb-2 text-lg font-medium">Account</h3>
				<p className="text-neutral-600">
					Manage your account settings and preferences.
				</p>
			</div>
		</STabs.Content>
		<STabs.Content value="tab2">
			<div className="rounded-md border border-neutral-200 p-4">
				<h3 className="mb-2 text-lg font-medium">Password</h3>
				<p className="text-neutral-600">
					Change your password and security settings.
				</p>
			</div>
		</STabs.Content>
		<STabs.Content value="tab3">
			<div className="rounded-md border border-neutral-200 p-4">
				<h3 className="mb-2 text-lg font-medium">Settings</h3>
				<p className="text-neutral-600">
					Customize your application preferences.
				</p>
			</div>
		</STabs.Content>
	</STabs>
);

export const Default: Story = {
	render: (args) => <TabsDemo {...args} />,
	args: {
		defaultValue: 'tab1',
		variant: 'default',
		size: 'md',
		fullWidth: false,
	},
};

export const Underline: Story = {
	render: (args) => <TabsDemo {...args} />,
	args: {
		defaultValue: 'tab1',
		variant: 'underline',
		size: 'md',
		fullWidth: false,
	},
};

export const FullWidth: Story = {
	render: (args) => <TabsDemo {...args} />,
	args: {
		defaultValue: 'tab1',
		variant: 'default',
		size: 'md',
		fullWidth: true,
	},
};

export const Controlled: Story = {
	render: () => {
		const [value, setValue] = React.useState('tab1');

		return (
			<div className="space-y-6">
				<div className="flex flex-wrap gap-2">
					<button
						onClick={() => setValue('tab1')}
						className={`rounded-md border px-3 py-1 text-sm ${
							value === 'tab1'
								? 'border-primary-500 bg-primary-50 text-primary-600'
								: 'border-neutral-200 text-neutral-600'
						}`}
					>
						Show Account
					</button>
					<button
						onClick={() => setValue('tab2')}
						className={`rounded-md border px-3 py-1 text-sm ${
							value === 'tab2'
								? 'border-primary-500 bg-primary-50 text-primary-600'
								: 'border-neutral-200 text-neutral-600'
						}`}
					>
						Show Password
					</button>
					<button
						onClick={() => setValue('tab3')}
						className={`rounded-md border px-3 py-1 text-sm ${
							value === 'tab3'
								? 'border-primary-500 bg-primary-50 text-primary-600'
								: 'border-neutral-200 text-neutral-600'
						}`}
					>
						Show Settings
					</button>
				</div>

				<STabs value={value} onValueChange={setValue} className="w-[400px]">
					<STabs.List>
						<STabs.Trigger value="tab1">Account</STabs.Trigger>
						<STabs.Trigger value="tab2">Password</STabs.Trigger>
						<STabs.Trigger value="tab3">Settings</STabs.Trigger>
					</STabs.List>
					<STabs.Content value="tab1">
						<div className="rounded-md border border-neutral-200 p-4">
							<h3 className="mb-2 text-lg font-medium">Account</h3>
							<p className="text-neutral-600">
								Manage your account settings and preferences.
							</p>
						</div>
					</STabs.Content>
					<STabs.Content value="tab2">
						<div className="rounded-md border border-neutral-200 p-4">
							<h3 className="mb-2 text-lg font-medium">Password</h3>
							<p className="text-neutral-600">
								Change your password and security settings.
							</p>
						</div>
					</STabs.Content>
					<STabs.Content value="tab3">
						<div className="rounded-md border border-neutral-200 p-4">
							<h3 className="mb-2 text-lg font-medium">Settings</h3>
							<p className="text-neutral-600">
								Customize your application preferences.
							</p>
						</div>
					</STabs.Content>
				</STabs>

				<div className="rounded-md bg-neutral-50 p-4 text-sm">
					<p>
						This example demonstrates controlling the active tab with state.
						Click the buttons above to change the active tab.
					</p>
				</div>
			</div>
		);
	},
};

export const WithIcons: Story = {
	render: (args) => (
		<STabs {...args} className="w-[400px]">
			<STabs.List variant={args.variant} fullWidth={args.fullWidth}>
				<STabs.Trigger value="tab1" fullWidth={args.fullWidth}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="mr-2 h-4 w-4"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					>
						<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
						<circle cx="12" cy="7" r="4" />
					</svg>
					Account
				</STabs.Trigger>
				<STabs.Trigger value="tab2" fullWidth={args.fullWidth}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="mr-2 h-4 w-4"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					>
						<rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
						<path d="M7 11V7a5 5 0 0 1 10 0v4" />
					</svg>
					Security
				</STabs.Trigger>
				<STabs.Trigger value="tab3" fullWidth={args.fullWidth}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="mr-2 h-4 w-4"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					>
						<path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
						<circle cx="12" cy="12" r="3" />
					</svg>
					Settings
				</STabs.Trigger>
			</STabs.List>
			<STabs.Content value="tab1">
				<div className="rounded-md border border-neutral-200 p-4">
					<h3 className="mb-2 text-lg font-medium">Account</h3>
					<p className="text-neutral-600">
						Manage your account settings and preferences.
					</p>
				</div>
			</STabs.Content>
			<STabs.Content value="tab2">
				<div className="rounded-md border border-neutral-200 p-4">
					<h3 className="mb-2 text-lg font-medium">Security</h3>
					<p className="text-neutral-600">
						Change your password and security settings.
					</p>
				</div>
			</STabs.Content>
			<STabs.Content value="tab3">
				<div className="rounded-md border border-neutral-200 p-4">
					<h3 className="mb-2 text-lg font-medium">Settings</h3>
					<p className="text-neutral-600">
						Customize your application preferences.
					</p>
				</div>
			</STabs.Content>
		</STabs>
	),
	args: {
		defaultValue: 'tab1',
		variant: 'default',
		size: 'md',
		fullWidth: false,
	},
};
