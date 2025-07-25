import * as React from 'react';
import * as DropdownPrimitive from '@radix-ui/react-dropdown-menu';
import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area';
import { Check, ChevronRight, Circle } from 'lucide-react';
import clsx from 'clsx';
import './SDropdown.css';

const SDropdownRoot = ({
	...props
}: React.ComponentPropsWithoutRef<typeof DropdownPrimitive.Root>) => (
	<DropdownPrimitive.Root {...props} />
);
SDropdownRoot.displayName = 'SDropdown';

const SDropdownTrigger = React.forwardRef<
	React.ElementRef<typeof DropdownPrimitive.Trigger>,
	React.ComponentPropsWithoutRef<typeof DropdownPrimitive.Trigger>
>(({ className, ...props }, ref) => (
	<DropdownPrimitive.Trigger
		ref={ref}
		className={clsx({ 'dropdown-trigger': !props.asChild }, className)}
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

const SDropdownRadioGroup = DropdownPrimitive.RadioGroup;

const SDropdownContent = React.forwardRef<
	React.ElementRef<typeof DropdownPrimitive.Content>,
	React.ComponentPropsWithoutRef<typeof DropdownPrimitive.Content> & {
		position?: {
			side?: 'top' | 'right' | 'bottom' | 'left';
			align?: 'start' | 'center' | 'end';
			sideOffset?: number;
			alignOffset?: number;
		};
	}
>(({ className, sideOffset = 4, position, ...props }, ref) => (
	<DropdownPrimitive.Portal>
		<DropdownPrimitive.Content
			ref={ref}
			sideOffset={position?.sideOffset ?? sideOffset}
			side={position?.side}
			align={position?.align ?? 'start'}
			alignOffset={position?.alignOffset}
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

const SDropdownShortcut = ({
	className,
	...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
	return <span className={clsx('dropdown-shortcut', className)} {...props} />;
};
SDropdownShortcut.displayName = 'SDropdown.Shortcut';

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

// SDropdown object with sub-components
const SDropdown = Object.assign(SDropdownRoot, {
	Trigger: SDropdownTrigger,
	Content: SDropdownContent,
	Item: SDropdownItem,
	CheckboxItem: SDropdownCheckboxItem,
	RadioItem: SDropdownRadioItem,
	Label: SDropdownLabel,
	Separator: SDropdownSeparator,
	Shortcut: SDropdownShortcut,
	Group: SDropdownGroup,
	Portal: SDropdownPortal,
	Sub: SDropdownSub,
	SubContent: SDropdownSubContent,
	SubTrigger: SDropdownSubTrigger,
	RadioGroup: SDropdownRadioGroup,
});

export { SDropdown };
