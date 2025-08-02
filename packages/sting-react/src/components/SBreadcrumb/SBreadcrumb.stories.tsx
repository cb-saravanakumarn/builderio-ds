import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { SBreadcrumb } from './index';
import { SIcon } from '../SIcon';
import { expect, fn, userEvent, within } from '@storybook/test';

/**
 * Mock Link component to demonstrate custom link components
 */
interface MockLinkProps {
	href?: string;
	children: React.ReactNode;
	className?: string;
	title?: string;
	'aria-current'?:
		| boolean
		| 'page'
		| 'step'
		| 'location'
		| 'date'
		| 'time'
		| 'true'
		| 'false';
	style?: React.CSSProperties;
}

const MockLink = ({ href, children, className, ...props }: MockLinkProps) => {
	const handleClick = (e: React.MouseEvent) => {
		e.preventDefault();
		console.log(`Navigate to: ${href}`);
	};

	return (
		<a
			href={href}
			onClick={handleClick}
			className={`${className} mock-link`}
			{...props}
		>
			{children}
		</a>
	);
};

const meta: Meta<typeof SBreadcrumb> = {
	title: 'Navigation/SBreadcrumb',
	component: SBreadcrumb,
	tags: ['autodocs'],
	argTypes: {
		separator: {
			control: 'text',
			description: 'Custom separator between breadcrumb items',
			defaultValue: '/',
		},
		maxItemWidth: {
			control: { type: 'number' },
			description: 'Maximum width for breadcrumb items before truncation',
			defaultValue: 200,
		},
		maxItems: {
			control: { type: 'number' },
			description: 'Maximum number of items to display before truncating',
		},
		ellipsis: {
			control: { type: 'text' },
			description: 'Custom ellipsis to show when truncating',
		},
	},
};

export default meta;
type Story = StoryObj<typeof SBreadcrumb>;

/**
 * Basic usage of the SBreadcrumb component with multiple items
 */
export const Default: Story = {
	render: (args) => (
		<SBreadcrumb {...args}>
			<SBreadcrumb.Item label="Home" href="#" />
			<SBreadcrumb.Item label="Products" href="#" />
			<SBreadcrumb.Item label="Category" href="#" />
			<SBreadcrumb.Item label="Current Page" />
		</SBreadcrumb>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		// Check that all breadcrumb items are rendered
		await expect(canvas.getByText('Home')).toBeInTheDocument();
		await expect(canvas.getByText('Products')).toBeInTheDocument();
		await expect(canvas.getByText('Category')).toBeInTheDocument();
		await expect(canvas.getByText('Current Page')).toBeInTheDocument();

		// Check that the last item is the current page (doesn't have a link)
		const currentPage = canvas.getByText('Current Page');
		await expect(currentPage.closest('a')).toBeNull();
		await expect(currentPage.closest('span')).not.toBeNull();

		// Check that other items have links
		const homeLink = canvas.getByText('Home').closest('a');
		await expect(homeLink).toHaveAttribute('href', '#');
	},
};

/**
 * Breadcrumb with a custom separator
 */
export const CustomSeparator: Story = {
	args: {
		separator: '>',
	},
	render: (args) => (
		<SBreadcrumb {...args}>
			<SBreadcrumb.Item label="Home" href="#" />
			<SBreadcrumb.Item label="Products" href="#" />
			<SBreadcrumb.Item label="Current Page" />
		</SBreadcrumb>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		// Check for custom separator
		const separators = canvas.getAllByText('>');
		await expect(separators.length).toBe(2); // Should have 2 separators for 3 items

		// Check that all breadcrumb items are rendered
		await expect(canvas.getByText('Home')).toBeInTheDocument();
		await expect(canvas.getByText('Products')).toBeInTheDocument();
		await expect(canvas.getByText('Current Page')).toBeInTheDocument();
	},
};

/**
 * Breadcrumb with truncated items
 */
export const TruncatedItems: Story = {
	args: {
		maxItemWidth: 100,
	},
	render: (args) => (
		<SBreadcrumb {...args}>
			<SBreadcrumb.Item label="Home" href="#" />
			<SBreadcrumb.Item label="Products with a Very Long Name" href="#" />
			<SBreadcrumb.Item
				label="Another Extremely Long Category Name That Should Truncate"
				href="#"
			/>
			<SBreadcrumb.Item label="Final Destination with Extra Text for Demonstration" />
		</SBreadcrumb>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		// Check that all breadcrumb items are rendered
		await expect(canvas.getByText('Home')).toBeInTheDocument();
		await expect(
			canvas.getByText('Products with a Very Long Name'),
		).toBeInTheDocument();
		await expect(
			canvas.getByText(
				'Another Extremely Long Category Name That Should Truncate',
			),
		).toBeInTheDocument();
		await expect(
			canvas.getByText('Final Destination with Extra Text for Demonstration'),
		).toBeInTheDocument();

		// Check that truncation styles are applied (max-width)
		const longItem = canvas
			.getByText('Another Extremely Long Category Name That Should Truncate')
			.closest('a');
		await expect(longItem).toHaveStyle({ maxWidth: '100px' });
	},
};

/**
 * Breadcrumb with a custom link component (using MockLink)
 */
export const CustomLinkComponent: Story = {
	args: {
		linkComponent: MockLink,
	},
	render: (args) => (
		<SBreadcrumb {...args}>
			<SBreadcrumb.Item label="Home" href="#" />
			<SBreadcrumb.Item label="Products" href="#" />
			<SBreadcrumb.Item label="Current Page" />
		</SBreadcrumb>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const consoleSpy = fn();
		console.log = consoleSpy;

		// Check that MockLink component is used (has 'mock-link' class)
		const homeLink = canvas.getByText('Home').closest('a');
		await expect(homeLink).toHaveClass('mock-link');

		// Test the click handler of the MockLink
		if (homeLink) {
			await userEvent.click(homeLink);
			await expect(consoleSpy).toHaveBeenCalledWith('Navigate to: #');
		}
	},
};

/**
 * Breadcrumb with Lucide icons
 */
export const WithIcons: Story = {
	render: (args) => (
		<SBreadcrumb {...args}>
			<SBreadcrumb.Item label="Home" href="#" icon={<SIcon name="house" size={16} />} />
			<SBreadcrumb.Item
				label="Products"
				href="#"
				icon={<SIcon name="shopping-cart" size={16} />}
			/>
			<SBreadcrumb.Item
				label="Category"
				href="#"
				icon={<SIcon name="link" size={16} />}
			/>
			<SBreadcrumb.Item label="Current Page" />
		</SBreadcrumb>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		// Check that all breadcrumb items are rendered with their icons
		const homeItem = canvas.getByText('Home').parentElement;
		await expect(homeItem?.querySelector('svg')).not.toBeNull();

		const productsItem = canvas.getByText('Products').parentElement;
		await expect(productsItem?.querySelector('svg')).not.toBeNull();

		const categoryItem = canvas.getByText('Category').parentElement;
		await expect(categoryItem?.querySelector('svg')).not.toBeNull();

		// The last item (Current Page) doesn't have an icon
		const currentPageItem = canvas.getByText('Current Page').parentElement;
		await expect(currentPageItem?.querySelector('svg')).toBeNull();
	},
};

/**
 * Using the items prop instead of children
 */
export const UsingItemsProp: Story = {
	args: {
		items: [
			{ label: 'Home', href: '#' },
			{ label: 'Products', href: '#' },
			{ label: 'Category', href: '#' },
			{ label: 'Current Page' },
		],
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		// Check that all breadcrumb items are rendered
		await expect(canvas.getByText('Home')).toBeInTheDocument();
		await expect(canvas.getByText('Products')).toBeInTheDocument();
		await expect(canvas.getByText('Category')).toBeInTheDocument();
		await expect(canvas.getByText('Current Page')).toBeInTheDocument();

		// Check that correct number of separators are rendered
		const separators = canvas.getAllByText('/');
		await expect(separators.length).toBe(3); // Should have 3 separators for 4 items

		// Check that the last item is the current page (doesn't have a link)
		const currentPage = canvas.getByText('Current Page');
		await expect(currentPage.closest('a')).toBeNull();
		await expect(currentPage.closest('span')).not.toBeNull();
	},
};

export const WithItems: Story = {
	render: () => (
		<SBreadcrumb
			items={[
				{ label: 'Home', href: '#' },
				{ label: 'Products', href: '#' },
				{ label: 'Electronics', href: '#' },
				{ label: 'Current Page' },
			]}
		/>
	),
};

/**
 * Breadcrumb with truncation based on maxItems
 */
export const WithTruncation: Story = {
	args: {
		maxItems: 5,
		ellipsis: '...',
	},
	render: (args) => {
		const items = [
			{ label: 'Home', href: '#' },
			{ label: 'Products', href: '#' },
			{ label: 'Electronics', href: '#' },
			{ label: 'Computers', href: '#' },
			{ label: 'Laptops', href: '#' },
			{ label: 'Gaming Laptops', href: '#' },
			{ label: 'ASUS', href: '#' },
			{ label: 'ROG Series', href: '#' },
			{ label: 'Zephyrus G14' },
		];

		return <SBreadcrumb {...args} items={items} />;
	},
};

/**
 * Breadcrumb with custom separator (SVG)
 */
export const WithCustomSeparator: Story = {
	render: () => (
		<SBreadcrumb
			separator={
				<svg
					width="16"
					height="16"
					viewBox="0 0 16 16"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M6 12L10 8L6 4"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
			}
			items={[
				{ label: 'Home', href: '#' },
				{ label: 'Products', href: '#' },
				{ label: 'Electronics', href: '#' },
				{ label: 'Current Page' },
			]}
		/>
	),
};

/**
 * Breadcrumb with custom ellipsis character
 */
export const WithCustomEllipsis: Story = {
	args: {
		maxItems: 5,
		ellipsis: '•••',
	},
	render: (args) => {
		const items = [
			{ label: 'Home', href: '#' },
			{ label: 'Products', href: '#' },
			{ label: 'Electronics', href: '#' },
			{ label: 'Computers', href: '#' },
			{ label: 'Laptops', href: '#' },
			{ label: 'Gaming Laptops', href: '#' },
			{ label: 'ASUS', href: '#' },
			{ label: 'ROG Series', href: '#' },
			{ label: 'Zephyrus G14' },
		];

		return <SBreadcrumb {...args} items={items} />;
	},
};

/**
 * Demonstrating different truncation values
 */
export const WithDifferentTruncationValues: Story = {
	args: {
		maxItems: 3,
	},
	render: (args) => {
		const items = [
			{ label: 'Home', href: '#' },
			{ label: 'Products', href: '#' },
			{ label: 'Electronics', href: '#' },
			{ label: 'Computers', href: '#' },
			{ label: 'Laptops', href: '#' },
			{ label: 'Gaming Laptops', href: '#' },
			{ label: 'ASUS', href: '#' },
			{ label: 'ROG Series', href: '#' },
			{ label: 'Zephyrus G14' },
		];

		return (
			<div className="space-y-6">
				<div>
					<p className="mb-2 font-medium">No truncation (maxItems=0):</p>
					<SBreadcrumb items={items} {...args} />
				</div>
				<div>
					<p className="mb-2 font-medium">maxItems=3:</p>
					<SBreadcrumb items={items} maxItems={3} />
				</div>
				<div>
					<p className="mb-2 font-medium">maxItems=5:</p>
					<SBreadcrumb items={items} maxItems={5} />
				</div>
				<div>
					<p className="mb-2 font-medium">maxItems=7:</p>
					<SBreadcrumb items={items} maxItems={7} />
				</div>
			</div>
		);
	},
};
