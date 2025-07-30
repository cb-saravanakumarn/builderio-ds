import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { ComponentPropsWithout, RemovedProps } from '@/helpers/component-props';
import { ButtonVariants, buttonVariants } from './constants';

export interface SButtonProps
	extends ComponentPropsWithout<'button', RemovedProps>,
	ButtonVariants {
	/**
	 * Whether to render the button as a child component (Radix UI Slot)
	 */
	asChild?: boolean;
	/**
	 * Whether the button is in a loading state
	 */
	loading?: boolean;
	/**
	 * Optional icon to display in the button
	 */
	icon?: React.ReactNode;
	/**
	 * Position of the icon relative to the button text
	 */
	iconPosition?: 'left' | 'right';
	/**
	 * Optional additional classname for the button
	 */
	className?: string;
	/**
	 * The visual style of the button. Determines the button's appearance.
	 */
	variant?: ButtonVariants['variant'];
	size?: ButtonVariants['size'];
	/**
	 * Whether the button should take up the full width of its container
	 */
	fullWidth?: boolean;
	/**
	 * Whether the button is disabled
	 */
	disabled?: boolean;
}

/**
 * Loading spinner component used within the button
 */
const LoadingSpinner = () => (
	<svg
		className="size-4 animate-spin"
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		aria-hidden="true"
	>
		<circle
			className="opacity-25"
			cx="12"
			cy="12"
			r="10"
			stroke="currentColor"
			strokeWidth="4"
		></circle>
		<path
			className="opacity-75"
			fill="currentColor"
			d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
		></path>
	</svg>
);

/**
 * SButton is a versatile button component that supports multiple variants, sizes, and states.
 * It's built on top of Radix UI's Slot component for composition flexibility.
 */
const SButton = React.forwardRef<HTMLButtonElement, SButtonProps>(
	(
		{
			className,
			children,
			variant,
			size,
			fullWidth,
			asChild = false,
			disabled,
			loading = false,
			icon,
			iconPosition = 'left',
			type = 'button',
			...props
		},
		ref,
	) => {
		const Comp = asChild ? Slot : 'button';

		// The button should be non-interactive when disabled or loading
		const isNonInteractive = disabled || loading;

		return (
			<Comp
				ref={ref}
				type={type}
				disabled={isNonInteractive}
				className={buttonVariants({
					variant,
					size,
					fullWidth,
					disabled,
					className,
					loading,
				})}
				aria-disabled={isNonInteractive}
				data-state={loading ? 'loading' : undefined}
				{...props}
			>
				<span className="flex items-center gap-mi">
					{/* Show loading spinner only if loading AND icon position is left */}
					{loading && iconPosition === 'left' && <LoadingSpinner />}

					{/* Show left icon only when not loading */}
					{!loading && icon && iconPosition === 'left' && (
						<span className="s-button-icon -order-1" aria-hidden="true">
							{icon}
						</span>
					)}

					{children}

					{/* Always show right icon regardless of loading state */}
					{icon && iconPosition === 'right' && (
						<span className="s-button-icon order-1" aria-hidden="true">
							{icon}
						</span>
					)}
				</span>
			</Comp>
		);
	},
);

SButton.displayName = 'SButton';

export { SButton, buttonVariants };
