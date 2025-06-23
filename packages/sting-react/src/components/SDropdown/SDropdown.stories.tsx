import type { Meta, StoryObj } from '@storybook/react';
import { SDropdown } from './index';
import './SDropdown.css';
import { useState } from 'react';

// Import an icon for the trigger button
import { ChevronDown, Settings, User, CreditCard, LogOut } from 'lucide-react';
import { SButton } from '../SButton';

/**
 * `SDropdown` is a component that displays a menu when triggered.
 * It is built on top of Radix UI's Dropdown Menu component.
 *
 * The dropdown component consists of multiple subcomponents:
 * - `SDropdown.Root`: The root component
 * - `SDropdown.Trigger`: The button that toggles the dropdown
 * - `SDropdown.Content`: The container for dropdown items
 * - `SDropdown.Item`: A selectable item in the dropdown
 * - `SDropdown.CheckboxItem`: A checkbox item in the dropdown
 * - `SDropdown.RadioItem`: A radio item in the dropdown
 * - `SDropdown.Label`: A label for a group of items
 * - `SDropdown.Separator`: A visual separator between items
 * - `SDropdown.Shortcut`: A keyboard shortcut display
 * - `SDropdown.Group`: A group of related items
 * - `SDropdown.Sub`: A submenu container
 * - `SDropdown.SubTrigger`: The trigger for a submenu
 * - `SDropdown.SubContent`: The content of a submenu
 * - `SDropdown.RadioGroup`: A group of radio items
 */
const meta: Meta<typeof SDropdown> = {
	title: 'Forms/SDropdown',
	component: SDropdown,
	tags: ['autodocs'],
	parameters: {
		docs: {
			description: {
				component: 'A dropdown menu component built with Radix UI',
			},
		},
	},
	argTypes: {
		// Root SDropdown props
		defaultOpen: {
			description: 'The initial open state of the dropdown',
			control: 'boolean',
		},
		open: {
			description: 'The controlled open state of the dropdown',
			control: 'boolean',
		},
		onOpenChange: {
			description: 'Event handler called when the open state changes',
			control: false,
		},
		modal: {
			description: 'Whether the dropdown should be modal (trap focus)',
			control: 'boolean',
			defaultValue: true,
		},
	},
};

export default meta;
type Story = StoryObj<typeof SDropdown>;

// Basic dropdown example
export const Basic: Story = {
	args: {
		modal: true,
	},
	render: (args) => (
		<SDropdown {...args}>
			<SDropdown.Trigger>
				Options <ChevronDown className="ml-2 h-4 w-4" />
			</SDropdown.Trigger>
			<SDropdown.Content>
				<SDropdown.Item>Profile</SDropdown.Item>
				<SDropdown.Item>Settings</SDropdown.Item>
				<SDropdown.Separator />
				<SDropdown.Item>Logout</SDropdown.Item>
			</SDropdown.Content>
		</SDropdown>
	),
	parameters: {
		docs: {
			description: {
				story: 'A basic dropdown with simple items',
			},
		},
	},
};

// Example with icons and shortcuts
export const WithIconsAndShortcuts: Story = {
	args: {
		modal: true,
	},
	render: (args) => (
		<SDropdown {...args}>
			<SDropdown.Trigger>
				Account <ChevronDown className="ml-2 h-4 w-4" />
			</SDropdown.Trigger>
			<SDropdown.Content>
				<SDropdown.Item>
					<User className="mr-2 h-4 w-4" />
					<span>Profile</span>
					<SDropdown.Shortcut>⇧⌘P</SDropdown.Shortcut>
				</SDropdown.Item>
				<SDropdown.Item>
					<Settings className="mr-2 h-4 w-4" />
					<span>Settings</span>
					<SDropdown.Shortcut>⌘S</SDropdown.Shortcut>
				</SDropdown.Item>
				<SDropdown.Separator />
				<SDropdown.Item>
					<CreditCard className="mr-2 h-4 w-4" />
					<span>Billing</span>
					<SDropdown.Shortcut>⌘B</SDropdown.Shortcut>
				</SDropdown.Item>
				<SDropdown.Separator />
				<SDropdown.Item>
					<LogOut className="mr-2 h-4 w-4" />
					<span>Logout</span>
					<SDropdown.Shortcut>⇧⌘Q</SDropdown.Shortcut>
				</SDropdown.Item>
			</SDropdown.Content>
		</SDropdown>
	),
	parameters: {
		docs: {
			description: {
				story: 'Dropdown with icons and keyboard shortcuts',
			},
		},
	},
};

// Example with checkbox items
export const WithCheckboxItems: Story = {
	args: {
		modal: true,
	},
	render: (args) => {
		const [showStatusBar, setShowStatusBar] = useState(true);
		const [showActivityBar, setShowActivityBar] = useState(false);
		const [showPanel, setShowPanel] = useState(false);

		return (
			<SDropdown {...args}>
				<SDropdown.Trigger>
					Preferences <ChevronDown className="ml-2 h-4 w-4" />
				</SDropdown.Trigger>
				<SDropdown.Content>
					<SDropdown.Label>Appearance</SDropdown.Label>
					<SDropdown.Separator />
					<SDropdown.CheckboxItem
						checked={showStatusBar}
						onCheckedChange={setShowStatusBar}
					>
						Status Bar
					</SDropdown.CheckboxItem>
					<SDropdown.CheckboxItem
						checked={showActivityBar}
						onCheckedChange={setShowActivityBar}
					>
						Activity Bar
					</SDropdown.CheckboxItem>
					<SDropdown.CheckboxItem
						checked={showPanel}
						onCheckedChange={setShowPanel}
					>
						Panel
					</SDropdown.CheckboxItem>
				</SDropdown.Content>
			</SDropdown>
		);
	},
	parameters: {
		docs: {
			description: {
				story: 'Dropdown with checkbox items for settings',
			},
		},
	},
};

// Example with radio items
export const WithRadioItems: Story = {
	args: {
		modal: true,
	},
	render: (args) => {
		const [position, setPosition] = useState('bottom');

		return (
			<SDropdown {...args}>
				<SDropdown.Trigger>
					Positions ({position}) <ChevronDown className="ml-2 h-4 w-4" />
				</SDropdown.Trigger>
				<SDropdown.Content>
					<SDropdown.RadioGroup value={position} onValueChange={setPosition}>
						<SDropdown.RadioItem value="top">Top</SDropdown.RadioItem>
						<SDropdown.RadioItem value="right">Right</SDropdown.RadioItem>
						<SDropdown.RadioItem value="bottom">Bottom</SDropdown.RadioItem>
						<SDropdown.RadioItem value="left">Left</SDropdown.RadioItem>
					</SDropdown.RadioGroup>
				</SDropdown.Content>
			</SDropdown>
		);
	},
	parameters: {
		docs: {
			description: {
				story: 'Dropdown with radio items for selecting positions',
			},
		},
	},
};

// Example with sub menu
export const WithSubMenu: Story = {
	args: {
		modal: true,
	},
	render: (args) => (
		<SDropdown {...args}>
			<SDropdown.Trigger>
				Advanced <ChevronDown className="ml-2 h-4 w-4" />
			</SDropdown.Trigger>
			<SDropdown.Content>
				<SDropdown.Item>Basic Options</SDropdown.Item>
				<SDropdown.Sub>
					<SDropdown.SubTrigger>More Options</SDropdown.SubTrigger>
					<SDropdown.SubContent>
						<SDropdown.Item>Option 1</SDropdown.Item>
						<SDropdown.Item>Option 2</SDropdown.Item>
						<SDropdown.Item>Option 3</SDropdown.Item>
					</SDropdown.SubContent>
				</SDropdown.Sub>
				<SDropdown.Separator />
				<SDropdown.Item>Save</SDropdown.Item>
			</SDropdown.Content>
		</SDropdown>
	),
	parameters: {
		docs: {
			description: {
				story: 'Dropdown with a submenu for advanced options',
			},
		},
	},
};

// Example with grouped items
export const WithGroups: Story = {
	args: {
		modal: true,
	},
	render: (args) => (
		<SDropdown {...args}>
			<SDropdown.Trigger>
				Categories <ChevronDown className="ml-2 h-4 w-4" />
			</SDropdown.Trigger>
			<SDropdown.Content>
				<SDropdown.Group>
					<SDropdown.Label>Personal</SDropdown.Label>
					<SDropdown.Item>Profile</SDropdown.Item>
					<SDropdown.Item>Security</SDropdown.Item>
					<SDropdown.Item>Notifications</SDropdown.Item>
				</SDropdown.Group>
				<SDropdown.Separator />
				<SDropdown.Group>
					<SDropdown.Label>Workspace</SDropdown.Label>
					<SDropdown.Item>Team Members</SDropdown.Item>
					<SDropdown.Item>Billing</SDropdown.Item>
					<SDropdown.Item>Integrations</SDropdown.Item>
				</SDropdown.Group>
				<SDropdown.Separator />
				<SDropdown.Group>
					<SDropdown.Label>Account</SDropdown.Label>
					<SDropdown.Item>Help</SDropdown.Item>
					<SDropdown.Item>Logout</SDropdown.Item>
				</SDropdown.Group>
			</SDropdown.Content>
		</SDropdown>
	),
	parameters: {
		docs: {
			description: {
				story: 'Dropdown with grouped items',
			},
		},
	},
};

// Example with ScrollArea for many items
export const WithScrollArea: Story = {
	args: {
		modal: true,
	},
	render: (args) => (
		<SDropdown {...args}>
			<SDropdown.Trigger>
				Long List <ChevronDown className="ml-2 h-4 w-4" />
			</SDropdown.Trigger>
			<SDropdown.Content>
				<SDropdown.Label>Select a Country</SDropdown.Label>
				<SDropdown.Separator />
				{[
					'Afghanistan',
					'Albania',
					'Algeria',
					'Andorra',
					'Angola',
					'Antigua and Barbuda',
					'Argentina',
					'Armenia',
					'Australia',
					'Austria',
					'Azerbaijan',
					'Bahamas',
					'Bahrain',
					'Bangladesh',
					'Barbados',
					'Belarus',
					'Belgium',
					'Belize',
					'Benin',
					'Bhutan',
					// Shortened list for readability
				]
					.slice(0, 15)
					.map((country) => (
						<SDropdown.Item key={country}>{country}</SDropdown.Item>
					))}
				<SDropdown.Item>...</SDropdown.Item>
			</SDropdown.Content>
		</SDropdown>
	),
	parameters: {
		docs: {
			description: {
				story: 'Dropdown with a long list of items in a scrollable area',
			},
		},
	},
};

// Comprehensive example showing positioning options
export const Positioning: Story = {
	args: {
		modal: true,
	},
	render: (args) => (
		<div className="flex flex-col space-y-8">
			<h3 className="text-lg font-semibold">Dropdown Positioning</h3>

			<div className="flex flex-wrap gap-4">
				{/* Basic positions */}
				<SDropdown {...args}>
					<SDropdown.Trigger>
						Bottom (Default) <ChevronDown className="ml-2 h-4 w-4" />
					</SDropdown.Trigger>
					<SDropdown.Content>
						<SDropdown.Item>Item 1</SDropdown.Item>
						<SDropdown.Item>Item 2</SDropdown.Item>
					</SDropdown.Content>
				</SDropdown>

				<SDropdown {...args}>
					<SDropdown.Trigger>
						Top <ChevronDown className="ml-2 h-4 w-4" />
					</SDropdown.Trigger>
					<SDropdown.Content position={{ side: 'top' }}>
						<SDropdown.Item>Item 1</SDropdown.Item>
						<SDropdown.Item>Item 2</SDropdown.Item>
					</SDropdown.Content>
				</SDropdown>

				<SDropdown {...args}>
					<SDropdown.Trigger>
						Left <ChevronDown className="ml-2 h-4 w-4" />
					</SDropdown.Trigger>
					<SDropdown.Content position={{ side: 'left' }}>
						<SDropdown.Item>Item 1</SDropdown.Item>
						<SDropdown.Item>Item 2</SDropdown.Item>
					</SDropdown.Content>
				</SDropdown>

				<SDropdown {...args}>
					<SDropdown.Trigger>
						Right <ChevronDown className="ml-2 h-4 w-4" />
					</SDropdown.Trigger>
					<SDropdown.Content position={{ side: 'right' }}>
						<SDropdown.Item>Item 1</SDropdown.Item>
						<SDropdown.Item>Item 2</SDropdown.Item>
					</SDropdown.Content>
				</SDropdown>
			</div>

			<div className="flex flex-wrap gap-4">
				{/* Alignment examples */}
				<SDropdown {...args}>
					<SDropdown.Trigger>
						Start Align <ChevronDown className="ml-2 h-4 w-4" />
					</SDropdown.Trigger>
					<SDropdown.Content position={{ align: 'start' }}>
						<SDropdown.Item>Item 1</SDropdown.Item>
						<SDropdown.Item>Item 2</SDropdown.Item>
					</SDropdown.Content>
				</SDropdown>

				<SDropdown {...args}>
					<SDropdown.Trigger>
						Center Align <ChevronDown className="ml-2 h-4 w-4" />
					</SDropdown.Trigger>
					<SDropdown.Content position={{ align: 'center' }}>
						<SDropdown.Item>Item 1</SDropdown.Item>
						<SDropdown.Item>Item 2</SDropdown.Item>
					</SDropdown.Content>
				</SDropdown>

				<SDropdown {...args}>
					<SDropdown.Trigger>
						End Align <ChevronDown className="ml-2 h-4 w-4" />
					</SDropdown.Trigger>
					<SDropdown.Content position={{ align: 'end' }}>
						<SDropdown.Item>Item 1</SDropdown.Item>
						<SDropdown.Item>Item 2</SDropdown.Item>
					</SDropdown.Content>
				</SDropdown>
			</div>

			<div className="flex flex-wrap gap-4">
				{/* Offset examples */}
				<SDropdown {...args}>
					<SDropdown.Trigger>
						With Side Offset <ChevronDown className="ml-2 h-4 w-4" />
					</SDropdown.Trigger>
					<SDropdown.Content position={{ sideOffset: 15 }}>
						<SDropdown.Item>Item 1</SDropdown.Item>
						<SDropdown.Item>Item 2</SDropdown.Item>
					</SDropdown.Content>
				</SDropdown>

				<SDropdown {...args}>
					<SDropdown.Trigger>
						With Align Offset <ChevronDown className="ml-2 h-4 w-4" />
					</SDropdown.Trigger>
					<SDropdown.Content position={{ alignOffset: 20 }}>
						<SDropdown.Item>Item 1</SDropdown.Item>
						<SDropdown.Item>Item 2</SDropdown.Item>
					</SDropdown.Content>
				</SDropdown>
			</div>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story: 'Examples of various positioning options for dropdowns',
			},
		},
	},
};

// Example showing controlled vs uncontrolled usage
export const ControlledUsage: Story = {
	args: {
		modal: true,
	},
	render: (args) => {
		const [open, setOpen] = useState(false);

		return (
			<div className="space-y-8">
				<div>
					<h3 className="mb-2 text-lg font-semibold">
						Uncontrolled (with defaultOpen)
					</h3>
					<SDropdown {...args} defaultOpen={true}>
						<SDropdown.Trigger>
							Default Open <ChevronDown className="ml-2 h-4 w-4" />
						</SDropdown.Trigger>
						<SDropdown.Content>
							<SDropdown.Item>Item 1</SDropdown.Item>
							<SDropdown.Item>Item 2</SDropdown.Item>
						</SDropdown.Content>
					</SDropdown>
				</div>

				<div>
					<h3 className="mb-2 text-lg font-semibold">Controlled</h3>
					<div className="flex items-center gap-4">
						<SButton onClick={() => setOpen(!open)}>
							{open ? 'Close Dropdown' : 'Open Dropdown'}
						</SButton>

						<SDropdown {...args} open={open} onOpenChange={setOpen}>
							<SDropdown.Trigger>
								Controlled <ChevronDown className="ml-2 size-4" />
							</SDropdown.Trigger>
							<SDropdown.Content>
								<SDropdown.Item>Item 1</SDropdown.Item>
								<SDropdown.Item>Item 2</SDropdown.Item>
							</SDropdown.Content>
						</SDropdown>
					</div>
				</div>
			</div>
		);
	},
	parameters: {
		docs: {
			description: {
				story: 'Examples of controlled and uncontrolled dropdown usage',
			},
		},
	},
};

// Comprehensive example with all subcomponents
export const ComprehensiveExample: Story = {
	args: {
		modal: true,
	},
	render: (args) => {
		const [notifyEmail, setNotifyEmail] = useState(true);
		const [notifyPush, setNotifyPush] = useState(false);
		const [theme, setTheme] = useState('light');

		return (
			<SDropdown {...args}>
				<SDropdown.Trigger>
					Settings <ChevronDown className="ml-2 h-4 w-4" />
				</SDropdown.Trigger>
				<SDropdown.Content className="w-56">
					<SDropdown.Group>
						<SDropdown.Label inset>Account</SDropdown.Label>
						<SDropdown.Item>
							<User className="mr-2 h-4 w-4" />
							<span>Profile</span>
							<SDropdown.Shortcut>⇧⌘P</SDropdown.Shortcut>
						</SDropdown.Item>
						<SDropdown.Separator />
					</SDropdown.Group>

					<SDropdown.Group>
						<SDropdown.Label inset>Appearance</SDropdown.Label>
						<SDropdown.RadioGroup value={theme} onValueChange={setTheme}>
							<SDropdown.RadioItem value="light">Light</SDropdown.RadioItem>
							<SDropdown.RadioItem value="dark">Dark</SDropdown.RadioItem>
							<SDropdown.RadioItem value="system">System</SDropdown.RadioItem>
						</SDropdown.RadioGroup>
						<SDropdown.Separator />
					</SDropdown.Group>

					<SDropdown.Group>
						<SDropdown.Label inset>Notifications</SDropdown.Label>
						<SDropdown.CheckboxItem
							checked={notifyEmail}
							onCheckedChange={setNotifyEmail}
						>
							Email
						</SDropdown.CheckboxItem>
						<SDropdown.CheckboxItem
							checked={notifyPush}
							onCheckedChange={setNotifyPush}
						>
							Push Notifications
						</SDropdown.CheckboxItem>
						<SDropdown.Separator />
					</SDropdown.Group>

					<SDropdown.Group>
						<SDropdown.Label inset>Advanced</SDropdown.Label>
						<SDropdown.Sub>
							<SDropdown.SubTrigger inset>More Options</SDropdown.SubTrigger>
							<SDropdown.SubContent>
								<SDropdown.Item>Import Data</SDropdown.Item>
								<SDropdown.Item>Export Data</SDropdown.Item>
							</SDropdown.SubContent>
						</SDropdown.Sub>
					</SDropdown.Group>

					<SDropdown.Separator />
					<SDropdown.Item>
						<LogOut className="mr-2 h-4 w-4" />
						<span>Log out</span>
						<SDropdown.Shortcut>⇧⌘Q</SDropdown.Shortcut>
					</SDropdown.Item>
				</SDropdown.Content>
			</SDropdown>
		);
	},
	parameters: {
		docs: {
			description: {
				story:
					'A comprehensive example showing all dropdown subcomponents working together',
			},
		},
	},
};
