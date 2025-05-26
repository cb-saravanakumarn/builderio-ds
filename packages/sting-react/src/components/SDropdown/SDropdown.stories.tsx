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

const meta: Meta<typeof SDropdown> = {
	title: 'Components/SDropdown',
	component: SDropdown,
	tags: ['autodocs'],
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
};

// Example with radio items
export const WithRadioItems: Story = {
	render: () => {
		const [position, setPosition] = useState('bottom');

		return (
			<SDropdown>
				<SDropdownTrigger>
					Positions <ChevronDown className="ml-2 h-4 w-4" />
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
};

export const Grouped: Story = {
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
					'Bolivia',
					'Bosnia and Herzegovina',
					'Botswana',
					'Brazil',
					'Brunei',
					'Bulgaria',
					'Burkina Faso',
					'Burundi',
					'Cabo Verde',
					'Cambodia',
					'Cameroon',
					'Canada',
					'Central African Republic',
					'Chad',
					'Chile',
					'China',
					'Colombia',
					'Comoros',
					'Congo',
					'Costa Rica',
					'Croatia',
					'Cuba',
					'Cyprus',
					'Czech Republic',
					'Denmark',
					'Djibouti',
					'Dominica',
					'Dominican Republic',
					'East Timor',
					'Ecuador',
					'Egypt',
					'El Salvador',
					'Equatorial Guinea',
					'Eritrea',
					'Estonia',
					'Eswatini',
					'Ethiopia',
					'Fiji',
					'Finland',
					'France',
					'Gabon',
					'Gambia',
					'Georgia',
					'Germany',
					'Ghana',
					'Greece',
					'Grenada',
					'Guatemala',
					'Guinea',
					'Guinea-Bissau',
					'Guyana',
					'Haiti',
					'Honduras',
					'Hungary',
					'Iceland',
					'India',
				].map((country) => (
					<SDropdownItem key={country}>{country}</SDropdownItem>
				))}
			</SDropdownContent>
		</SDropdown>
	),
};
