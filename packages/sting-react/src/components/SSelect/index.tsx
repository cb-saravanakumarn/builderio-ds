'use client';

import * as React from 'react';
import * as SelectPrimitive from '@radix-ui/react-select';
import { Check, ChevronDown, ChevronUp } from 'lucide-react';

import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';
import './SSelect.css';

const SSelect = SelectPrimitive.Root;

const SSelectGroup = SelectPrimitive.Group;

const SSelectValue = SelectPrimitive.Value;

const SSelectTrigger = React.forwardRef<
	React.ElementRef<typeof SelectPrimitive.Trigger>,
	React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
	<SelectPrimitive.Trigger
		ref={ref}
		className={twMerge('s-select-trigger', className)}
		{...props}
	>
		{children}
		<SelectPrimitive.Icon asChild>
			<ChevronDown className="h-4 w-4 opacity-50" />
		</SelectPrimitive.Icon>
	</SelectPrimitive.Trigger>
));
SSelectTrigger.displayName = 'SSelect.Trigger';

const SSelectScrollUpButton = React.forwardRef<
	React.ElementRef<typeof SelectPrimitive.ScrollUpButton>,
	React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton>
>(({ className, ...props }, ref) => (
	<SelectPrimitive.ScrollUpButton
		ref={ref}
		className={twMerge('s-select-scroll-button', className)}
		{...props}
	>
		<ChevronUp className="h-4 w-4" />
	</SelectPrimitive.ScrollUpButton>
));
SSelectScrollUpButton.displayName = 'SSelect.ScrollUpButton';

const SSelectScrollDownButton = React.forwardRef<
	React.ElementRef<typeof SelectPrimitive.ScrollDownButton>,
	React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton>
>(({ className, ...props }, ref) => (
	<SelectPrimitive.ScrollDownButton
		ref={ref}
		className={twMerge('s-select-scroll-button', className)}
		{...props}
	>
		<ChevronDown className="h-4 w-4" />
	</SelectPrimitive.ScrollDownButton>
));
SSelectScrollDownButton.displayName = 'SSelect.ScrollDownButton';

const SSelectContent = React.forwardRef<
	React.ElementRef<typeof SelectPrimitive.Content>,
	React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, position = 'popper', ...props }, ref) => (
	<SelectPrimitive.Portal>
		<SelectPrimitive.Content
			ref={ref}
			className={clsx(
				's-select-content',
				position === 'popper' && 's-select-content-popper',
				className,
			)}
			position={position}
			{...props}
		>
			<SSelectScrollUpButton />
			<SelectPrimitive.Viewport
				className={clsx(
					's-select-viewport',
					position === 'popper' && 's-select-viewport-popper',
				)}
			>
				{children}
			</SelectPrimitive.Viewport>
			<SSelectScrollDownButton />
		</SelectPrimitive.Content>
	</SelectPrimitive.Portal>
));
SSelectContent.displayName = 'SSelect.Content';

const SSelectLabel = React.forwardRef<
	React.ElementRef<typeof SelectPrimitive.Label>,
	React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => (
	<SelectPrimitive.Label
		ref={ref}
		className={twMerge('s-select-label', className)}
		{...props}
	/>
));
SSelectLabel.displayName = 'SSelect.Label';

const SSelectItem = React.forwardRef<
	React.ElementRef<typeof SelectPrimitive.Item>,
	React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
	<SelectPrimitive.Item
		ref={ref}
		className={twMerge('s-select-item', className)}
		{...props}
	>
		<span className="s-select-item-indicator">
			<SelectPrimitive.ItemIndicator>
				<Check className="h-4 w-4" />
			</SelectPrimitive.ItemIndicator>
		</span>
		<SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
	</SelectPrimitive.Item>
));
SSelectItem.displayName = 'SSelect.Item';

const SSelectSeparator = React.forwardRef<
	React.ElementRef<typeof SelectPrimitive.Separator>,
	React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => (
	<SelectPrimitive.Separator
		ref={ref}
		className={twMerge('s-select-separator', className)}
		{...props}
	/>
));
SSelectSeparator.displayName = 'SSelect.Separator';

export {
	SSelect,
	SSelectGroup,
	SSelectValue,
	SSelectTrigger,
	SSelectContent,
	SSelectLabel,
	SSelectItem,
	SSelectSeparator,
	SSelectScrollUpButton,
	SSelectScrollDownButton,
};
