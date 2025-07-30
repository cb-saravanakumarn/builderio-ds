import * as React from 'react';
import clsx from 'clsx';
import { X } from 'lucide-react';
import { SLabel } from '../SLabel';
import { SInlineError } from '../SInlineError';
import {
	InputVariants,
	inputVariants,
	ValidationStatus,
} from './constants';
import './SInput.css';

export interface SInputProps
	extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
	InputVariants {
	/**
	 * The value of the input
	 */
	value?: string;
	/**
	 * The default value of the input
	 */
	defaultValue?: string;
	/**
	 * Whether to disable the input
	 */
	disabled?: boolean;
	/**
	 * Add a test-id for testing purposes
	 */
	testId?: string;
	/**
	 * Adds a clear button at the end of the input, which can be used to reset the value
	 */
	allowClear?: boolean;
	/**
	 * Input validation status
	 */
	validationStatus?: ValidationStatus;
	/**
	 * A message to accompany the validation status
	 */
	validationMessage?: React.ReactNode;
	/**
	 * Description to explain the purpose of the component
	 */
	description?: React.ReactNode;
	/**
	 * Adds a label for the input
	 */
	label?: React.ReactNode;
	/**
	 * Content for the tooltip when hovering over the info icon
	 */
	labelInfo?: string;
	/**
	 * Placement of the tooltip relative to the info icon
	 */
	tooltipPlacement?: 'top' | 'right' | 'bottom' | 'left';
	/**
	 * Callback when the clear button is clicked
	 */
	onClear?: () => void;
	/**
	 * Node to prepend before the input field
	 */
	prepend?: React.ReactNode;
	/**
	 * Node to append after the input field
	 */
	append?: React.ReactNode;
	/**
	 * Node to prepend before the input field
	 */
	leadingIcon?: React.ReactNode;
	/**
	 * Node to append after the input field
	 */
	trailingIcon?: React.ReactNode;
}

const SInput = React.forwardRef<HTMLInputElement, SInputProps>(
	(
		{
			className,
			disabled,
			testId,
			allowClear,
			validationStatus,
			value,
			defaultValue,
			onChange,
			onClear,
			label,
			labelInfo,
			tooltipPlacement,
			description,
			validationMessage,
			prepend,
			append,
			leadingIcon,
			trailingIcon,
			...props
		},
		ref,
	) => {
		const id = React.useId();

		const handleClear = (e: React.MouseEvent<HTMLButtonElement>) => {
			if (onClear) {
				onClear();
			}
			e.preventDefault();
		};

		return (
			<div className={clsx('s-input-container w-full', className)}>
				{label && (
					<SLabel
						htmlFor={id}
						labelInfo={labelInfo}
						tooltipPlacement={tooltipPlacement}
					>
						{label}
					</SLabel>
				)}

				<div className="s-input-wrapper">
					{leadingIcon && <div className="s-input-prepend">{leadingIcon}</div>}
					{prepend && <div className="s-input-prepend">{prepend}</div>}
					<div className="s-input-field-wrapper relative">
						<input
							ref={ref}
							id={id}
							className={clsx(
								's-input-field',
								inputVariants({ validationStatus }),
							)}
							disabled={disabled}
							value={value}
							defaultValue={defaultValue}
							onChange={onChange}
							data-testid={testId}
							{...props}
						/>
					</div>
					{allowClear && !disabled && value && (
						<button
							type="button"
							className="s-input-clear-button"
							onClick={(e) => handleClear(e)}
							disabled={disabled}
							aria-label="Clear input"
						>
							<X className="size-4" />
						</button>
					)}
					{append && <div className="s-input-append">{append}</div>}
					{trailingIcon && <div className="s-input-append">{trailingIcon}</div>}
				</div>

				{description && (
					<p className="s-input-description">{description}</p>
				)}

				{validationStatus === ValidationStatus.Error && validationMessage && (
					<SInlineError id={`${id}-error`} message={validationMessage} />
				)}

				{validationStatus === ValidationStatus.Success && validationMessage && (
					<p className="s-input-validation s-input-validation-success">
						{validationMessage}
					</p>
				)}
			</div>
		);
	},
);

SInput.displayName = 'SInput';

export { SInput };