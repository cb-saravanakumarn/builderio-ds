import * as React from 'react';
import * as DropdownPrimitive from '@radix-ui/react-dropdown-menu';
import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area';
import { Check, ChevronRight, Circle } from 'lucide-react';
import clsx from 'clsx';

// Root Component
const SDropdown = DropdownPrimitive.Root;

// Trigger
const SDropdownTrigger = React.forwardRef<
	React.ElementRef<typeof DropdownPrimitive.Trigger>,
	React.ComponentPropsWithoutRef<typeof DropdownPrimitive.Trigger>
>(({ className, ...props }, ref) => (
	<DropdownPrimitive.Trigger
		ref={ref}
		className={clsx('dropdown-trigger', className)}
		{...props}
	/>
));
SDropdownTrigger.displayName = 'SDropdown.Trigger';

// Portal component to render the dropdown content in a portal
const SDropdownPortal = DropdownPrimitive.Portal;

// Group component for grouping items
const SDropdownGroup = DropdownPrimitive.Group;

// Sub component for nested dropdown menus
const SDropdownSub = DropdownPrimitive.Sub;

// Radio group component
const SDropdownRadioGroup = DropdownPrimitive.RadioGroup;

// Export the dropdown content component
const SDropdownContent = React.forwardRef<
	React.ElementRef<typeof DropdownPrimitive.Content>,
	React.ComponentPropsWithoutRef<typeof DropdownPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
	<DropdownPrimitive.Portal>
		<DropdownPrimitive.Content
			ref={ref}
			sideOffset={sideOffset}
			className={clsx(
				'dropdown-content',
				'dropdown-animation',
				'dropdown-shadow',
				className,
			)}
			{...props}
		>
			<ScrollAreaPrimitive.Root
				className="dropdown-scroll-area-root"
				type="auto"
			>
				<ScrollAreaPrimitive.Viewport className="dropdown-scroll-area-viewport">
					{props.children}
				</ScrollAreaPrimitive.Viewport>
				<ScrollAreaPrimitive.Scrollbar
					className="dropdown-scroll-area-scrollbar"
					orientation="vertical"
				>
					<ScrollAreaPrimitive.Thumb className="dropdown-scroll-area-thumb" />
				</ScrollAreaPrimitive.Scrollbar>
				<ScrollAreaPrimitive.Corner className="dropdown-scroll-area-corner" />
			</ScrollAreaPrimitive.Root>
		</DropdownPrimitive.Content>
	</DropdownPrimitive.Portal>
));
SDropdownContent.displayName = 'SDropdown.Content';

// Export the dropdown item component
const SDropdownItem = React.forwardRef<
	React.ElementRef<typeof DropdownPrimitive.Item>,
	React.ComponentPropsWithoutRef<typeof DropdownPrimitive.Item> & {
		inset?: boolean;
	}
>(({ className, inset, ...props }, ref) => (
	<DropdownPrimitive.Item
		ref={ref}
		className={clsx('dropdown-item', inset && 'dropdown-item-inset', className)}
		{...props}
	/>
));
SDropdownItem.displayName = 'SDropdown.Item';

// Export the dropdown checkbox item component
const SDropdownCheckboxItem = React.forwardRef<
	React.ElementRef<typeof DropdownPrimitive.CheckboxItem>,
	React.ComponentPropsWithoutRef<typeof DropdownPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
	<DropdownPrimitive.CheckboxItem
		ref={ref}
		className={clsx(
			'dropdown-checkbox-item',
			checked && 'dropdown-item-checked',
			className,
		)}
		checked={checked}
		{...props}
	>
		<span className="dropdown-item-indicator">
			<DropdownPrimitive.ItemIndicator>
				<Check className="dropdown-check-icon" />
			</DropdownPrimitive.ItemIndicator>
		</span>
		{children}
	</DropdownPrimitive.CheckboxItem>
));
SDropdownCheckboxItem.displayName = 'SDropdown.CheckboxItem';

// Export the dropdown radio item component
const SDropdownRadioItem = React.forwardRef<
	React.ElementRef<typeof DropdownPrimitive.RadioItem>,
	React.ComponentPropsWithoutRef<typeof DropdownPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
	<DropdownPrimitive.RadioItem
		ref={ref}
		className={clsx('dropdown-radio-item', className)}
		{...props}
	>
		<span className="dropdown-item-indicator">
			<DropdownPrimitive.ItemIndicator>
				<Circle className="dropdown-circle-icon" />
			</DropdownPrimitive.ItemIndicator>
		</span>
		{children}
	</DropdownPrimitive.RadioItem>
));
SDropdownRadioItem.displayName = 'SDropdown.RadioItem';

// Export the dropdown label component
const SDropdownLabel = React.forwardRef<
	React.ElementRef<typeof DropdownPrimitive.Label>,
	React.ComponentPropsWithoutRef<typeof DropdownPrimitive.Label> & {
		inset?: boolean;
	}
>(({ className, inset, ...props }, ref) => (
	<DropdownPrimitive.Label
		ref={ref}
		className={clsx(
			'dropdown-label',
			inset && 'dropdown-label-inset',
			className,
		)}
		{...props}
	/>
));
SDropdownLabel.displayName = 'SDropdown.Label';

// Export the dropdown separator component
const SDropdownSeparator = React.forwardRef<
	React.ElementRef<typeof DropdownPrimitive.Separator>,
	React.ComponentPropsWithoutRef<typeof DropdownPrimitive.Separator>
>(({ className, ...props }, ref) => (
	<DropdownPrimitive.Separator
		ref={ref}
		className={clsx('dropdown-separator', className)}
		{...props}
	/>
));
SDropdownSeparator.displayName = 'SDropdown.Separator';

// Export the dropdown shortcut component
const SDropdownShortcut = ({
	className,
	...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
	return <span className={clsx('dropdown-shortcut', className)} {...props} />;
};
SDropdownShortcut.displayName = 'SDropdown.Shortcut';

// Export the sub trigger component
const SDropdownSubTrigger = React.forwardRef<
	React.ElementRef<typeof DropdownPrimitive.SubTrigger>,
	React.ComponentPropsWithoutRef<typeof DropdownPrimitive.SubTrigger> & {
		inset?: boolean;
	}
>(({ className, inset, children, ...props }, ref) => (
	<DropdownPrimitive.SubTrigger
		ref={ref}
		className={clsx(
			'dropdown-sub-trigger',
			inset && 'dropdown-sub-trigger-inset',
			className,
		)}
		{...props}
	>
		{children}
		<ChevronRight className="dropdown-chevron-icon" />
	</DropdownPrimitive.SubTrigger>
));
SDropdownSubTrigger.displayName = 'SDropdown.SubTrigger';

// Export the sub content component
const SDropdownSubContent = React.forwardRef<
	React.ElementRef<typeof DropdownPrimitive.SubContent>,
	React.ComponentPropsWithoutRef<typeof DropdownPrimitive.SubContent>
>(({ className, ...props }, ref) => (
	<DropdownPrimitive.SubContent
		ref={ref}
		className={clsx(
			'dropdown-sub-content',
			'dropdown-animation',
			'dropdown-shadow',
			className,
		)}
		{...props}
	/>
));
SDropdownSubContent.displayName = 'SDropdown.SubContent';

export {
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
	SDropdownPortal,
	SDropdownSub,
	SDropdownSubContent,
	SDropdownSubTrigger,
	SDropdownRadioGroup,
};
