import * as React from 'react';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import { tv, VariantProps } from 'tailwind-variants';
import clsx from 'clsx';
import './STabs.css';

// Define tab variants using tailwind-variants
const tabsVariants = tv({
	base: 'tabs-container',
	variants: {
		variant: {
			default: 'tabs-default',
			underline: 'tabs-underline',
		},
		size: {
			sm: 'tabs-sm',
			md: 'tabs-md',
			lg: 'tabs-lg',
		},
		fullWidth: {
			true: 'tabs-full-width',
		},
	},
	defaultVariants: {
		variant: 'default',
		size: 'md',
	},
});

const tabListVariants = tv({
	base: 'tab-list',
	variants: {
		variant: {
			default: 'tab-list-default',
			underline: 'tab-list-underline',
		},
		fullWidth: {
			true: 'tab-list-full-width',
		},
	},
	defaultVariants: {
		variant: 'default',
	},
});

const tabTriggerVariants = tv({
	base: 'tab-trigger',
	variants: {
		fullWidth: {
			true: 'tab-trigger-full-width',
		},
		variant: {
			underline: 'tab-trigger-underline',
		},
	},
	defaultVariants: {
		variant: 'underline',
	},
});

const tabContentVariants = tv({
	base: 'tab-content',
});

// Props interfaces
export interface STabsRootProps
	extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.Root>,
		VariantProps<typeof tabsVariants> {
	children: React.ReactNode;
}

export interface STabsListProps
	extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>,
		VariantProps<typeof tabListVariants> {
	children: React.ReactNode;
}

export interface STabsTriggerProps
	extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>,
		VariantProps<typeof tabTriggerVariants> {
	children: React.ReactNode;
}

export interface STabsContentProps
	extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content> {
	children: React.ReactNode;
}

// Root component
const STabsRoot = React.forwardRef<
	React.ElementRef<typeof TabsPrimitive.Root>,
	STabsRootProps
>(({ className, variant, size, fullWidth, ...props }, ref) => (
	<TabsPrimitive.Root
		ref={ref}
		className={clsx(tabsVariants({ variant, size, fullWidth, className }))}
		{...props}
	/>
));
STabsRoot.displayName = 'STabs.Root';

// List component
const STabsList = React.forwardRef<
	React.ElementRef<typeof TabsPrimitive.List>,
	STabsListProps
>(({ className, variant, fullWidth, ...props }, ref) => (
	<TabsPrimitive.List
		ref={ref}
		className={clsx(tabListVariants({ variant, fullWidth, className }))}
		{...props}
	/>
));
STabsList.displayName = 'STabs.List';

// Trigger component
const STabsTrigger = React.forwardRef<
	React.ElementRef<typeof TabsPrimitive.Trigger>,
	STabsTriggerProps
>(({ className, fullWidth, variant, ...props }, ref) => (
	<TabsPrimitive.Trigger
		ref={ref}
		className={clsx(tabTriggerVariants({ fullWidth, variant, className }))}
		{...props}
	/>
));
STabsTrigger.displayName = 'STabs.Trigger';

// Content component
const STabsContent = React.forwardRef<
	React.ElementRef<typeof TabsPrimitive.Content>,
	STabsContentProps
>(({ className, ...props }, ref) => (
	<TabsPrimitive.Content
		ref={ref}
		className={clsx(tabContentVariants(), className)}
		{...props}
	/>
));
STabsContent.displayName = 'STabs.Content';

// Export the compound component
const STabs = Object.assign(STabsRoot, {
	List: STabsList,
	Trigger: STabsTrigger,
	Content: STabsContent,
});

export { STabs };
