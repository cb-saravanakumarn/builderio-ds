import type { Meta, StoryObj } from '@storybook/react';
import {
	SDropdown,
	SDropdownTrigger,
	SDropdownContent,
	SDropdownItem,
	SDropdownCheckboxItem,
	SDropdownRadioItem,
	SDropdownLabel,
	SDropdownSeparator,
	SDropdownShortcut,
	SDropdownGroup,
	SDropdownSub,
	SDropdownSubContent,
	SDropdownSubTrigger,
	SDropdownRadioGroup,
} from './index';
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
 * - `SDropdown`: The root component
 * - `SDropdownTrigger`: The button that toggles the dropdown
 * - `SDropdownContent`: The container for dropdown items
 * - `SDropdownItem`: A selectable item in the dropdown
 * - `SDropdownCheckboxItem`: A checkbox item in the dropdown
 * - `SDropdownRadioItem`: A radio item in the dropdown
 * - `SDropdownLabel`: A label for a group of items
 * - `SDropdownSeparator`: A visual separator between items
 * - `SDropdownShortcut`: A keyboard shortcut display
 * - `SDropdownGroup`: A group of related items
 * - `SDropdownSub`: A submenu container
 * - `SDropdownSubTrigger`: The trigger for a submenu
 * - `SDropdownSubContent`: The content of a submenu
 * - `SDropdownRadioGroup`: A group of radio items
 */
const meta: Meta<typeof SDropdown> = {
	title: 'Design System/Forms/SDropdown',
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
	render: () => (
		<SDropdown>
			<SDropdownTrigger>
				Options <ChevronDown className="ml-2 h-4 w-4" />
			</SDropdownTrigger>
			<SDropdownContent>
				<SDropdownItem>Profile</SDropdownItem>
				<SDropdownItem>Settings</SDropdownItem>
				<SDropdownSeparator />
				<SDropdownItem>Logout</SDropdownItem>
			</SDropdownContent>
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
	render: () => (
		<SDropdown>
			<SDropdownTrigger>
				Account <ChevronDown className="ml-2 h-4 w-4" />
			</SDropdownTrigger>
			<SDropdownContent>
				<SDropdownItem>
					<User className="mr-2 h-4 w-4" />
					<span>Profile</span>
					<SDropdownShortcut>⇧⌘P</SDropdownShortcut>
				</SDropdownItem>
				<SDropdownItem>
					<Settings className="mr-2 h-4 w-4" />
					<span>Settings</span>
					<SDropdownShortcut>⌘S</SDropdownShortcut>
				</SDropdownItem>
				<SDropdownSeparator />
				<SDropdownItem>
					<CreditCard className="mr-2 h-4 w-4" />
					<span>Billing</span>
					<SDropdownShortcut>⌘B</SDropdownShortcut>
				</SDropdownItem>
				<SDropdownSeparator />
				<SDropdownItem>
					<LogOut className="mr-2 h-4 w-4" />
					<span>Logout</span>
					<SDropdownShortcut>⇧⌘Q</SDropdownShortcut>
				</SDropdownItem>
			</SDropdownContent>
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
	render: () => {
		const [showStatusBar, setShowStatusBar] = useState(true);
		const [showActivityBar, setShowActivityBar] = useState(false);
		const [showPanel, setShowPanel] = useState(false);

		return (
			<SDropdown>
				<SDropdownTrigger>
					Preferences <ChevronDown className="ml-2 h-4 w-4" />
				</SDropdownTrigger>
				<SDropdownContent>
					<SDropdownLabel>Appearance</SDropdownLabel>
					<SDropdownSeparator />
					<SDropdownCheckboxItem
						checked={showStatusBar}
						onCheckedChange={setShowStatusBar}
					>
						Status Bar
					</SDropdownCheckboxItem>
					<SDropdownCheckboxItem
						checked={showActivityBar}
						onCheckedChange={setShowActivityBar}
					>
						Activity Bar
					</SDropdownCheckboxItem>
					<SDropdownCheckboxItem
						checked={showPanel}
						onCheckedChange={setShowPanel}
					>
						Panel
					</SDropdownCheckboxItem>
				</SDropdownContent>
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
	render: () => {
		const [position, setPosition] = useState('bottom');

		return (
			<SDropdown>
				<SDropdownTrigger>
					Positions ({position}) <ChevronDown className="ml-2 h-4 w-4" />
				</SDropdownTrigger>
				<SDropdownContent>
					<SDropdownRadioGroup value={position} onValueChange={setPosition}>
						<SDropdownRadioItem value="top">Top</SDropdownRadioItem>
						<SDropdownRadioItem value="right">Right</SDropdownRadioItem>
						<SDropdownRadioItem value="bottom">Bottom</SDropdownRadioItem>
						<SDropdownRadioItem value="left">Left</SDropdownRadioItem>
					</SDropdownRadioGroup>
				</SDropdownContent>
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
	render: () => (
		<SDropdown>
			<SDropdownTrigger>
				Advanced <ChevronDown className="ml-2 h-4 w-4" />
			</SDropdownTrigger>
			<SDropdownContent>
				<SDropdownItem>Basic Options</SDropdownItem>
				<SDropdownSub>
					<SDropdownSubTrigger>More Options</SDropdownSubTrigger>
					<SDropdownSubContent>
						<SDropdownItem>Option 1</SDropdownItem>
						<SDropdownItem>Option 2</SDropdownItem>
						<SDropdownItem>Option 3</SDropdownItem>
					</SDropdownSubContent>
				</SDropdownSub>
				<SDropdownSeparator />
				<SDropdownItem>Save</SDropdownItem>
			</SDropdownContent>
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
	render: () => (
		<SDropdown>
			<SDropdownTrigger>
				Categories <ChevronDown className="ml-2 h-4 w-4" />
			</SDropdownTrigger>
			<SDropdownContent>
				<SDropdownGroup>
					<SDropdownLabel>Personal</SDropdownLabel>
					<SDropdownItem>Profile</SDropdownItem>
					<SDropdownItem>Security</SDropdownItem>
					<SDropdownItem>Notifications</SDropdownItem>
				</SDropdownGroup>
				<SDropdownSeparator />
				<SDropdownGroup>
					<SDropdownLabel>Workspace</SDropdownLabel>
					<SDropdownItem>Team Members</SDropdownItem>
					<SDropdownItem>Billing</SDropdownItem>
					<SDropdownItem>Integrations</SDropdownItem>
				</SDropdownGroup>
				<SDropdownSeparator />
				<SDropdownGroup>
					<SDropdownLabel>Account</SDropdownLabel>
					<SDropdownItem>Help</SDropdownItem>
					<SDropdownItem>Logout</SDropdownItem>
				</SDropdownGroup>
			</SDropdownContent>
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
	render: () => (
		<SDropdown>
			<SDropdownTrigger>
				Long List <ChevronDown className="ml-2 h-4 w-4" />
			</SDropdownTrigger>
			<SDropdownContent>
				<SDropdownLabel>Select a Country</SDropdownLabel>
				<SDropdownSeparator />
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
						<SDropdownItem key={country}>{country}</SDropdownItem>
					))}
				<SDropdownItem>...</SDropdownItem>
			</SDropdownContent>
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
	render: () => (
		<div className="flex flex-col space-y-8">
			<h3 className="text-lg font-semibold">Dropdown Positioning</h3>

			<div className="flex flex-wrap gap-4">
				{/* Basic positions */}
				<SDropdown>
					<SDropdownTrigger>
						Bottom (Default) <ChevronDown className="ml-2 h-4 w-4" />
					</SDropdownTrigger>
					<SDropdownContent>
						<SDropdownItem>Item 1</SDropdownItem>
						<SDropdownItem>Item 2</SDropdownItem>
					</SDropdownContent>
				</SDropdown>

				<SDropdown>
					<SDropdownTrigger>
						Top <ChevronDown className="ml-2 h-4 w-4" />
					</SDropdownTrigger>
					<SDropdownContent position={{ side: 'top' }}>
						<SDropdownItem>Item 1</SDropdownItem>
						<SDropdownItem>Item 2</SDropdownItem>
					</SDropdownContent>
				</SDropdown>

				<SDropdown>
					<SDropdownTrigger>
						Left <ChevronDown className="ml-2 h-4 w-4" />
					</SDropdownTrigger>
					<SDropdownContent position={{ side: 'left' }}>
						<SDropdownItem>Item 1</SDropdownItem>
						<SDropdownItem>Item 2</SDropdownItem>
					</SDropdownContent>
				</SDropdown>

				<SDropdown>
					<SDropdownTrigger>
						Right <ChevronDown className="ml-2 h-4 w-4" />
					</SDropdownTrigger>
					<SDropdownContent position={{ side: 'right' }}>
						<SDropdownItem>Item 1</SDropdownItem>
						<SDropdownItem>Item 2</SDropdownItem>
					</SDropdownContent>
				</SDropdown>
			</div>

			<div className="flex flex-wrap gap-4">
				{/* Alignment examples */}
				<SDropdown>
					<SDropdownTrigger>
						Start Align <ChevronDown className="ml-2 h-4 w-4" />
					</SDropdownTrigger>
					<SDropdownContent position={{ align: 'start' }}>
						<SDropdownItem>Item 1</SDropdownItem>
						<SDropdownItem>Item 2</SDropdownItem>
					</SDropdownContent>
				</SDropdown>

				<SDropdown>
					<SDropdownTrigger>
						Center Align <ChevronDown className="ml-2 h-4 w-4" />
					</SDropdownTrigger>
					<SDropdownContent position={{ align: 'center' }}>
						<SDropdownItem>Item 1</SDropdownItem>
						<SDropdownItem>Item 2</SDropdownItem>
					</SDropdownContent>
				</SDropdown>

				<SDropdown>
					<SDropdownTrigger>
						End Align <ChevronDown className="ml-2 h-4 w-4" />
					</SDropdownTrigger>
					<SDropdownContent position={{ align: 'end' }}>
						<SDropdownItem>Item 1</SDropdownItem>
						<SDropdownItem>Item 2</SDropdownItem>
					</SDropdownContent>
				</SDropdown>
			</div>

			<div className="flex flex-wrap gap-4">
				{/* Offset examples */}
				<SDropdown>
					<SDropdownTrigger>
						With Side Offset <ChevronDown className="ml-2 h-4 w-4" />
					</SDropdownTrigger>
					<SDropdownContent position={{ sideOffset: 15 }}>
						<SDropdownItem>Item 1</SDropdownItem>
						<SDropdownItem>Item 2</SDropdownItem>
					</SDropdownContent>
				</SDropdown>

				<SDropdown>
					<SDropdownTrigger>
						With Align Offset <ChevronDown className="ml-2 h-4 w-4" />
					</SDropdownTrigger>
					<SDropdownContent position={{ alignOffset: 20 }}>
						<SDropdownItem>Item 1</SDropdownItem>
						<SDropdownItem>Item 2</SDropdownItem>
					</SDropdownContent>
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
	render: () => {
		const [open, setOpen] = useState(false);

		return (
			<div className="space-y-8">
				<div>
					<h3 className="mb-2 text-lg font-semibold">
						Uncontrolled (with defaultOpen)
					</h3>
					<SDropdown defaultOpen={true}>
						<SDropdownTrigger>
							Default Open <ChevronDown className="ml-2 h-4 w-4" />
						</SDropdownTrigger>
						<SDropdownContent>
							<SDropdownItem>Item 1</SDropdownItem>
							<SDropdownItem>Item 2</SDropdownItem>
						</SDropdownContent>
					</SDropdown>
				</div>

				<div>
					<h3 className="mb-2 text-lg font-semibold">Controlled</h3>
					<div className="flex items-center gap-4">
						<SButton onClick={() => setOpen(!open)}>
							{open ? 'Close Dropdown' : 'Open Dropdown'}
						</SButton>

						<SDropdown open={open} onOpenChange={setOpen}>
							<SDropdownTrigger>
								Controlled <ChevronDown className="ml-2 size-4" />
							</SDropdownTrigger>
							<SDropdownContent>
								<SDropdownItem>Item 1</SDropdownItem>
								<SDropdownItem>Item 2</SDropdownItem>
							</SDropdownContent>
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
	render: () => {
		const [notifyEmail, setNotifyEmail] = useState(true);
		const [notifyPush, setNotifyPush] = useState(false);
		const [theme, setTheme] = useState('light');

		return (
			<SDropdown>
				<SDropdownTrigger>
					Settings <ChevronDown className="ml-2 h-4 w-4" />
				</SDropdownTrigger>
				<SDropdownContent className="w-56">
					<SDropdownGroup>
						<SDropdownLabel inset>Account</SDropdownLabel>
						<SDropdownItem>
							<User className="mr-2 h-4 w-4" />
							<span>Profile</span>
							<SDropdownShortcut>⇧⌘P</SDropdownShortcut>
						</SDropdownItem>
						<SDropdownSeparator />
					</SDropdownGroup>

					<SDropdownGroup>
						<SDropdownLabel inset>Appearance</SDropdownLabel>
						<SDropdownRadioGroup value={theme} onValueChange={setTheme}>
							<SDropdownRadioItem value="light">Light</SDropdownRadioItem>
							<SDropdownRadioItem value="dark">Dark</SDropdownRadioItem>
							<SDropdownRadioItem value="system">System</SDropdownRadioItem>
						</SDropdownRadioGroup>
						<SDropdownSeparator />
					</SDropdownGroup>

					<SDropdownGroup>
						<SDropdownLabel inset>Notifications</SDropdownLabel>
						<SDropdownCheckboxItem
							checked={notifyEmail}
							onCheckedChange={setNotifyEmail}
						>
							Email
						</SDropdownCheckboxItem>
						<SDropdownCheckboxItem
							checked={notifyPush}
							onCheckedChange={setNotifyPush}
						>
							Push Notifications
						</SDropdownCheckboxItem>
						<SDropdownSeparator />
					</SDropdownGroup>

					<SDropdownGroup>
						<SDropdownLabel inset>Advanced</SDropdownLabel>
						<SDropdownSub>
							<SDropdownSubTrigger inset>More Options</SDropdownSubTrigger>
							<SDropdownSubContent>
								<SDropdownItem>Import Data</SDropdownItem>
								<SDropdownItem>Export Data</SDropdownItem>
							</SDropdownSubContent>
						</SDropdownSub>
					</SDropdownGroup>

					<SDropdownSeparator />
					<SDropdownItem>
						<LogOut className="mr-2 h-4 w-4" />
						<span>Log out</span>
						<SDropdownShortcut>⇧⌘Q</SDropdownShortcut>
					</SDropdownItem>
				</SDropdownContent>
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
