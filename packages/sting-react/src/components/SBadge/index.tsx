import * as React from 'react';
import { Slot, Slottable } from '@radix-ui/react-slot';
import { ComponentPropsWithout, RemovedProps } from '@/helpers/component-props';
import clsx from 'clsx';
import { Badge, badgeVariants } from './constants';

export interface BadgeProps
	extends ComponentPropsWithout<'div', RemovedProps>,
	Badge {
	/**
	 * Badge content
	 */
	children?: React.ReactNode;
	/**
	 * Whether to render the badge as a child component (Radix UI Slot)
	 */
	asChild?: boolean;
	/**
	 * Optional icon to display in the badge
	 */
	icon?: React.ReactNode;
	/**
	 * Position of the icon relative to the badge text
	 */
	iconPosition?: 'left' | 'right';
	/**
	 * The mode of the badge, can be light or dark
	 */
	mode?: Badge['mode'];
	/**
	 * The size of the badge. Can be regular, medium, or large.
	 */
	size?: Badge['size'];
	/**
	 * Add data-test id's for using it in testcases
	 */
	testId?: string;
}

/**
 * SBadge is a versatile badge component that supports multiple variants, sizes, and modes.
 * It's built on top of Radix UI's Slot component for composition flexibility.
 */
const SBadge = React.forwardRef<HTMLDivElement, BadgeProps>(
	(
		{
			className,
			variant,
			children,
			size,
			mode,
			asChild = false,
			icon,
			iconPosition = 'left',
			testId,
			...props
		},
		ref,
	) => {
		const Comp = asChild ? Slot : 'div';

		return (
			<Comp
				className={clsx(badgeVariants({ variant, size, mode }), className, "leading-none")}
				ref={ref}
				data-testid={testId}
				{...props}
			>
				{icon && (
					<span
						className={clsx(
							"size-3.5",
							iconPosition === 'right' && "order-1"
						)}
						role="presentation"
						data-testid={testId ? `${testId}-icon` : undefined}
					>
						{icon}
					</span>
				)}
				{asChild ? <Slottable>{children}</Slottable> : children}
			</Comp>
		);
	},
);

SBadge.displayName = 'SBadge';

export { SBadge };
