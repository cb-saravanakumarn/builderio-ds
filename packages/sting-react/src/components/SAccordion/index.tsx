import * as React from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { SIcon } from '../SIcon';
import { ComponentPropsWithout, RemovedProps } from '@/helpers/component-props';
import { Slot } from '@radix-ui/react-slot';
import clsx from 'clsx';
import './SAccordion.css';

export interface SAccordionProps
	extends Omit<
		React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Root>,
		'type'
	> {
	/**
	 * Type of accordion behavior
	 * @default "single"
	 */
	type?: 'single' | 'multiple';
	/**
	 * Value for the controlled accordion
	 */
	value?: string;
	/**
	 * Default value for the uncontrolled accordion
	 */
	defaultValue?: string;
	/**
	 * Callback when the value changes
	 */
	onValueChange?: (value: string) => void;
	/**
	 * Whether all items can be closed at once in a single accordion
	 * @default false
	 */
	collapsible?: boolean;
	/**
	 * Whether to render the accordion as a child component (Radix UI Slot)
	 */
	asChild?: boolean;
	/**
	 * Additional class name for the accordion
	 */
	className?: string;
	/**
	 * Data test ID for testing
	 */
	testId?: string;
}

export interface SAccordionItemProps
	extends ComponentPropsWithout<'div', RemovedProps> {
	/**
	 * Unique value for the accordion item
	 */
	value: string;
	/**
	 * Whether to render the accordion item as a child component (Radix UI Slot)
	 */
	asChild?: boolean;
	/**
	 * Whether the accordion item is disabled
	 */
	disabled?: boolean;
	/**
	 * Additional class name for the accordion item
	 */
	className?: string;
	/**
	 * Data test ID for testing
	 */
	testId?: string;
}

export interface SAccordionTriggerProps
	extends ComponentPropsWithout<'button', RemovedProps> {
	/**
	 * Whether to render the accordion trigger as a child component (Radix UI Slot)
	 */
	asChild?: boolean;
	/**
	 * Whether to hide the chevron icon
	 * @default false
	 */
	hideIcon?: boolean;
	/**
	 * Optional icon to replace the default chevron
	 */
	icon?: React.ReactNode;
	/**
	 * Position of the icon within the trigger
	 * @default "right"
	 */
	iconPosition?: 'left' | 'right';
	/**
	 * Additional class name for the accordion trigger
	 */
	className?: string;
	/**
	 * Data test ID for testing
	 */
	testId?: string;
}

export interface SAccordionContentProps
	extends ComponentPropsWithout<'div', RemovedProps> {
	/**
	 * Whether to render the accordion content as a child component (Radix UI Slot)
	 */
	asChild?: boolean;
	/**
	 * Whether to force mount the content (even when closed)
	 */
	forceMount?: true;
	/**
	 * Additional class name for the accordion content
	 */
	className?: string;
	/**
	 * Data test ID for testing
	 */
	testId?: string;
}

/**
 * Root component for the accordion
 */
const SAccordionRoot = React.forwardRef<HTMLDivElement, SAccordionProps>(
	(
		{
			type = 'single',
			collapsible = false,
			className,
			asChild = false,
			testId,
			...props
		},
		ref,
	) => {
		const Comp = asChild ? Slot : AccordionPrimitive.Root;

		return (
			<Comp
				ref={ref}
				type={type as any} // Cast to any to avoid type checking error
				collapsible={type === 'single' ? collapsible : undefined}
				className={clsx('s-accordion-root', className)}
				data-testid={testId}
				{...props}
			/>
		);
	},
);

SAccordionRoot.displayName = 'SAccordion';

/**
 * Item component for the accordion
 */
const SAccordionItem = React.forwardRef<HTMLDivElement, SAccordionItemProps>(
	({ className, asChild = false, disabled, testId, ...props }, ref) => {
		const Comp = asChild ? Slot : AccordionPrimitive.Item;

		return (
			<Comp
				ref={ref}
				className={clsx(
					's-accordion-item',
					disabled && 's-accordion-item-disabled',
					className,
				)}
				disabled={disabled}
				data-testid={testId}
				{...props}
			/>
		);
	},
);

SAccordionItem.displayName = 'SAccordion.Item';

/**
 * Trigger component for the accordion
 */
const SAccordionTrigger = React.forwardRef<
	HTMLButtonElement,
	SAccordionTriggerProps
>(
	(
		{
			className,
			children,
			asChild = false,
			hideIcon = false,
			icon,
			iconPosition = 'right',
			testId,
			...props
		},
		ref,
	) => {
		const Comp = asChild ? Slot : AccordionPrimitive.Trigger;
		const iconElement = !hideIcon && (
			<div className="s-accordion-icon-wrapper">
				{icon || <SIcon name="chevron-down" className="s-accordion-icon" />}
			</div>
		);

		return (
			<Comp
				ref={ref}
				className={clsx(
					's-accordion-trigger',
					`s-accordion-icon-${iconPosition}`,
					className,
				)}
				data-testid={testId}
				{...props}
			>
				{iconPosition === 'left' && iconElement}
				<div className="s-accordion-trigger-content">{children}</div>
				{iconPosition === 'right' && iconElement}
			</Comp>
		);
	},
);

SAccordionTrigger.displayName = 'SAccordion.Trigger';

/**
 * Content component for the accordion
 */
const SAccordionContent = React.forwardRef<
	HTMLDivElement,
	SAccordionContentProps
>(
	(
		{ className, children, asChild = false, forceMount, testId, ...props },
		ref,
	) => {
		const Comp = asChild ? Slot : AccordionPrimitive.Content;

		return (
			<Comp
				ref={ref}
				className={clsx('s-accordion-content', className)}
				forceMount={forceMount === true ? true : undefined}
				data-testid={testId}
				{...props}
			>
				<div className="s-accordion-content-inner">{children}</div>
			</Comp>
		);
	},
);

SAccordionContent.displayName = 'SAccordion.Content';

/**
 * SAccordion is a vertically stacked set of interactive headings that each reveal an associated section of content.
 * It's built using Radix UI's Accordion primitive for accessibility and composition flexibility.
 *
 * @example
 * ```tsx
 * <SAccordion type="single" collapsible>
 *   <SAccordion.Item value="item-1">
 *     <SAccordion.Trigger>Item 1</SAccordion.Trigger>
 *     <SAccordion.Content>Content for Item 1</SAccordion.Content>
 *   </SAccordion.Item>
 * </SAccordion>
 * ```
 */
const SAccordion = Object.assign(SAccordionRoot, {
	Item: SAccordionItem,
	Trigger: SAccordionTrigger,
	Content: SAccordionContent,
});

export { SAccordion };
