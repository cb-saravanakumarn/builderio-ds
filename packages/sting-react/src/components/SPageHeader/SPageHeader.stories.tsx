import type { Meta, StoryObj } from '@storybook/react';
import { SPageHeader } from './index';
import { SButton } from '../SButton';
import { SBadge } from '../SBadge';
import { SBreadcrumb } from '../SBreadcrumb';
import { ArrowLeftIcon, XIcon } from 'lucide-react';

const meta: Meta<typeof SPageHeader> = {
	title: 'Actions/SPageHeader',
	component: SPageHeader,
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Mock breadcrumb data
const breadcrumbItems = [
	{ label: 'Dashboard', href: '#' },
	{ label: 'Projects', href: '#' },
	{ label: 'Current Project', href: '#', current: true },
];

export const Default: Story = {
	args: {
		breadcrumb: <SBreadcrumb items={breadcrumbItems} />,
		title: 'Page Title',
		leadingAction: <XIcon className="size-5" />,
		onLeadingActionClick: () => alert('Close clicked'),
		metaData: (
			<>
				<SBadge variant="neutral" size="regular" mode="light" icon="📊">
					Metadata
				</SBadge>
				<SBadge variant="neutral" size="regular" mode="light" icon="📊">
					Metadata
				</SBadge>
				<SBadge variant="neutral" size="regular" mode="light" icon="📊">
					Metadata
				</SBadge>
			</>
		),
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam.',
		actions: (
			<>
				<div className="flex items-center gap-xs text-para-regular text-neutral-500">
					<span className="text-success-500">☁</span>
					Auto-saved 2m ago
				</div>
				<SButton variant="neutral-ghost" size="regular">
					Tertiary
				</SButton>
				<SButton variant="primary-outline" size="regular">
					Secondary
				</SButton>
				<SButton variant="primary" size="regular">
					Primary
				</SButton>
				<SButton variant="primary-outline" size="regular" icon="⋯"></SButton>
			</>
		),
	},
};

export const WithBackAction: Story = {
	args: {
		breadcrumb: <SBreadcrumb items={breadcrumbItems} />,
		title: 'Page with Back Action',
		leadingAction: <ArrowLeftIcon className="size-5" />,
		onLeadingActionClick: () => alert('Go back clicked'),
		description: 'This page header includes a back arrow for navigation.',
		actions: (
			<SButton variant="primary" size="regular">
				Save
			</SButton>
		),
	},
};

export const WithCloseAction: Story = {
	args: {
		title: 'Modal or Dialog Title',
		leadingAction: <XIcon className="size-5" />,
		onLeadingActionClick: () => alert('Close clicked'),
		description: 'This page header includes a close icon for dismissing.',
		actions: (
			<>
				<SButton variant="primary-outline" size="regular">
					Cancel
				</SButton>
				<SButton variant="primary" size="regular">
					Confirm
				</SButton>
			</>
		),
	},
};

export const WithoutBreadcrumb: Story = {
	args: {
		title: 'Page Title',
		metaData: (
			<>
				<SBadge variant="neutral" size="regular" mode="light">
					Status: Active
				</SBadge>
				<SBadge variant="info" size="regular" mode="light">
					Priority: High
				</SBadge>
			</>
		),
		description: 'A page header without breadcrumb navigation.',
		actions: (
			<>
				<SButton variant="primary-outline" size="regular">
					Edit
				</SButton>
				<SButton variant="primary" size="regular">
					Save
				</SButton>
			</>
		),
	},
};

export const MinimalHeader: Story = {
	args: {
		title: 'Simple Page Title',
		actions: (
			<SButton variant="primary" size="regular">
				Action
			</SButton>
		),
	},
};

export const FullExample: Story = {
	args: {
		breadcrumb: <SBreadcrumb items={breadcrumbItems} />,
		title: 'Project Dashboard',
		metaData: (
			<>
				<SBadge variant="success" size="regular" mode="light">
					Active
				</SBadge>
				<SBadge variant="neutral" size="regular" mode="light">
					Version 2.1.0
				</SBadge>
				<SBadge variant="warning" size="regular" mode="light">
					Needs Review
				</SBadge>
			</>
		),
		description:
			'This is a comprehensive project dashboard that provides an overview of all project activities, metrics, and key performance indicators. Use this space to monitor progress and make data-driven decisions.',
		actions: (
			<>
				<div className="flex items-center gap-xs text-para-regular text-neutral-500">
					<span className="text-success-500">☁</span>
					Auto-saved 2m ago
				</div>
				<SButton variant="neutral-ghost" size="regular">
					Export
				</SButton>
				<SButton variant="primary-outline" size="regular">
					Settings
				</SButton>
				<SButton variant="primary" size="regular">
					Create New
				</SButton>
				<SButton variant="primary-outline" size="regular" icon="⋯"></SButton>
			</>
		),
	},
};
