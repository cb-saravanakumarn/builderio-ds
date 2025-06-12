import * as React from 'react';
import { ComponentPropsWithout, RemovedProps } from '@/helpers/component-props';
import { spinnerVariants, SpinnerVariants } from './constants.ts';

export interface SSpinnerProps
	extends ComponentPropsWithout<'div', RemovedProps>,
		SpinnerVariants {
	/**
	 * The size of the spinner: small, medium, or large
	 */
	size?: SpinnerVariants['size'];
	/**
	 * Optional additional classname for the spinner
	 */
	className?: string;
	/**
	 * Data test id for testing
	 */
	'data-testid'?: string;
}

/**
 * SSpinner is a loading indicator component that shows an animated spinner.
 * It supports multiple sizes to fit different UI contexts.
 */
const SSpinner = React.forwardRef<HTMLDivElement, SSpinnerProps>(
	({ className, size = 'medium', ...props }, ref) => {
		return (
			<div
				ref={ref}
				className={spinnerVariants({ size, className })}
				role="status"
				aria-label="Loading"
				{...props}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					aria-hidden="true"
				>
					<circle
						className="stroke-primary-500/25"
						cx="12"
						cy="12"
						r="10"
						strokeWidth="4"
					></circle>
					<path
						className="fill-primary-500/75"
						d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
					></path>
				</svg>
			</div>
		);
	},
);

SSpinner.displayName = 'SSpinner';

export { SSpinner, spinnerVariants };
