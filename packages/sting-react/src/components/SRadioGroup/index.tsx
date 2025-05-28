import * as React from 'react';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import { Circle } from 'lucide-react';
import clsx from 'clsx';
import { SInlineError } from '../SInlineError';
import { radioGroupVariants } from './constants';

export interface SRadioOption {
	/**
	 * The value of the radio option
	 */
	value: string;
	/**
	 * The label to display next to the radio button
	 */
	label: React.ReactNode;
	/**
	 * Additional descriptive text to provide more context
	 */
	description?: React.ReactNode;
	/**
	 * Whether the radio option is disabled
	 */
	disabled?: boolean;
}

export interface SRadioGroupProps
	extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root> {
	/**
	 * Options to display in the radio group
	 */
	options?: SRadioOption[];
	/**
	 * Label for the radio group
	 */
	label?: React.ReactNode;
	/**
	 * Description for the radio group
	 */
	description?: React.ReactNode;
	/**
	 * Whether the entire radio group is disabled
	 */
	disabled?: boolean;
	/**
	 * Validation status of the radio group
	 */
	validationStatus?: 'error' | 'success';
	/**
	 * Validation message to display when validation status is error
	 */
	validationMessage?: React.ReactNode;
	/**
	 * Layout direction of the radio group
	 */
	orientation?: 'horizontal' | 'vertical';
}

interface SRadioItemProps
	extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item> {
	/**
	 * The label to display next to the radio button
	 */
	label?: React.ReactNode;
	/**
	 * Additional descriptive text to provide more context
	 */
	description?: React.ReactNode;
	/**
	 * Whether the radio option is disabled
	 */
	disabled?: boolean;
}

const SRadioContext = React.createContext<{
	disabled?: boolean;
	validationStatus?: 'error' | 'success';
	groupId: string;
} | null>(null);

const SRadioGroupRoot = React.forwardRef<
	React.ElementRef<typeof RadioGroupPrimitive.Root>,
	SRadioGroupProps
>(
	(
		{
			className,
			options,
			label,
			description,
			disabled,
			validationStatus,
			validationMessage,
			orientation = 'vertical',
			children,
			...props
		},
		ref,
	) => {
		const groupId = React.useId();

		return (
			<div className="radio-group-container">
				{label && (
					<div className={clsx('radio-group-label', disabled && 'disabled')}>
						{label}
					</div>
				)}

				{description && (
					<div className="radio-group-description">{description}</div>
				)}

				<SRadioContext.Provider
					value={{
						disabled,
						validationStatus,
						groupId,
					}}
				>
					<RadioGroupPrimitive.Root
						ref={ref}
						className={radioGroupVariants({ disabled, orientation, className })}
						{...props}
					>
						{options
							? options.map((option) => {
									const id = `${groupId}-${option.value}`;
									return (
										<div
											key={option.value}
											className={clsx(
												'radio-option-container',
												option.disabled && 'disabled',
											)}
										>
											<div className="radio-option-wrapper">
												<RadioGroupPrimitive.Item
													id={id}
													value={option.value}
													disabled={option.disabled || disabled}
													className="radio-option-item"
													data-validation-status={validationStatus}
												>
													<RadioGroupPrimitive.Indicator className="radio-option-indicator">
														<Circle className="size-2.5" />
													</RadioGroupPrimitive.Indicator>
												</RadioGroupPrimitive.Item>

												{option.label && (
													<label
														htmlFor={id}
														className={clsx(
															'radio-option-label',
															(option.disabled || disabled) && 'disabled',
														)}
													>
														{option.label}
													</label>
												)}
											</div>

											{option.description && (
												<div className="radio-option-description">
													{option.description}
												</div>
											)}
										</div>
									);
								})
							: children}
					</RadioGroupPrimitive.Root>
				</SRadioContext.Provider>

				{validationStatus === 'error' && validationMessage && (
					<div className="mt-ti">
						<SInlineError message={validationMessage} />
					</div>
				)}
			</div>
		);
	},
);

const SRadioItem = React.forwardRef<
	React.ElementRef<typeof RadioGroupPrimitive.Item>,
	SRadioItemProps
>(
	(
		{
			className,
			children,
			label,
			description,
			disabled: itemDisabled,
			...props
		},
		ref,
	) => {
		const context = React.useContext(SRadioContext);

		if (!context) {
			throw new Error('SRadioItem must be used within an SRadioGroup');
		}

		const { disabled: groupDisabled, validationStatus, groupId } = context;
		const disabled = itemDisabled || groupDisabled;
		const id = `${groupId}-${props.value}`;

		return (
			<div className={clsx('radio-option-container', disabled && 'disabled')}>
				<div className="radio-option-wrapper">
					<RadioGroupPrimitive.Item
						ref={ref}
						id={id}
						disabled={disabled}
						className={clsx('radio-option-item', className)}
						data-validation-status={validationStatus}
						{...props}
					>
						<RadioGroupPrimitive.Indicator className="radio-option-indicator">
							<Circle className="size-2.5" />
						</RadioGroupPrimitive.Indicator>
					</RadioGroupPrimitive.Item>

					{label && (
						<label
							htmlFor={id}
							className={clsx('radio-option-label', disabled && 'disabled')}
						>
							{label}
						</label>
					)}
				</div>

				{description && (
					<div className="radio-option-description">{description}</div>
				)}

				{children && <div className="radio-option-content">{children}</div>}
			</div>
		);
	},
);

SRadioGroupRoot.displayName = 'SRadioGroup';
SRadioItem.displayName = 'SRadioItem';

// Export using the compound component pattern with object variants
export const SRadioGroup = {
	Root: SRadioGroupRoot,
	Item: SRadioItem,
};
