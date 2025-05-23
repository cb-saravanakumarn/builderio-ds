import * as React from 'react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { Check, Minus } from 'lucide-react';
import clsx from 'clsx';
import { checkboxVariants } from './constants';
import { SInlineError } from '../SInlineError';

export interface SCheckboxProps
	extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> {
	/**
	 * The label to display next to the checkbox
	 */
	label?: React.ReactNode;
	/**
	 * Additional descriptive text to provide more context
	 */
	description?: React.ReactNode;
	/**
	 * Whether the checkbox is disabled
	 */
	disabled?: boolean;
	/**
	 * Whether the checkbox is in an indeterminate state
	 */
	indeterminate?: boolean;
	/**
	 * Validation status of the checkbox
	 */
	validationStatus?: 'error' | 'success';
	/**
	 * Validation message to display when validation status is error
	 */
	validationMessage?: React.ReactNode;
}

const SCheckbox = React.forwardRef<
	React.ElementRef<typeof CheckboxPrimitive.Root>,
	SCheckboxProps
>(
	(
		{
			className,
			label,
			description,
			disabled,
			indeterminate,
			validationStatus,
			validationMessage,
			...props
		},
		ref,
	) => {
		const id = React.useId();

		return (
			<div className="checkbox-container">
				<div className={checkboxVariants({ disabled, className })}>
					<CheckboxPrimitive.Root
						ref={ref}
						id={id}
						disabled={disabled}
						className="checkbox-root"
						data-indeterminate={indeterminate ? true : undefined}
						data-validation-status={validationStatus}
						{...props}
					>
						<CheckboxPrimitive.Indicator
							className="checkbox-indicator"
							forceMount={indeterminate as true}
						>
							{indeterminate ? (
								<Minus className="size-2.5" />
							) : (
								<Check className="size-2.5" />
							)}
						</CheckboxPrimitive.Indicator>
					</CheckboxPrimitive.Root>

					{label && (
						<label
							htmlFor={id}
							className={clsx('checkbox-label', disabled && 'disabled')}
						>
							{label}
						</label>
					)}
				</div>

				{description && (
					<div className="checkbox-description">{description}</div>
				)}

				{validationStatus === 'error' && validationMessage && (
					<SInlineError message={validationMessage} />
				)}
			</div>
		);
	},
);

SCheckbox.displayName = 'SCheckbox';

export { SCheckbox };
