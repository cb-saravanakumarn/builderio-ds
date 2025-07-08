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

/**
 * Properties for the checkbox group component
 */
export interface SCheckboxGroupProps
	extends Omit<React.HTMLAttributes<HTMLDivElement>, 'label'> {
	/**
	 * Selected values in the checkbox group
	 */
	values?: string[];
	/**
	 * Callback when selection changes
	 */
	onValuesChange?: (values: string[]) => void;
	/**
	 * Label for the group
	 */
	label?: React.ReactNode;
	/**
	 * Description for the group
	 */
	description?: React.ReactNode;
	/**
	 * Whether the entire group is disabled
	 */
	disabled?: boolean;
	/**
	 * Layout orientation of the checkbox group
	 */
	orientation?: 'horizontal' | 'vertical';
	/**
	 * Validation status of the checkbox group
	 */
	validationStatus?: 'error' | 'success';
	/**
	 * Validation message to display when validation status is error
	 */
	validationMessage?: React.ReactNode;
}

/**
 * Properties for the checkbox item component
 */
export interface SCheckboxItemProps
	extends Omit<SCheckboxProps, 'checked' | 'onCheckedChange'> {
	/**
	 * Value of the checkbox item
	 */
	value: string;
	/**
	 * Whether the checkbox is checked - used when outside of a group context
	 */
	checked?: boolean;
	/**
	 * Callback when the checkbox is checked or unchecked - used when outside of a group context
	 */
	onCheckedChange?: (checked: boolean | 'indeterminate') => void;
}

// Context for sharing state between group and items
const SCheckboxContext = React.createContext<{
	values: string[];
	onValueChange: (value: string, checked: boolean) => void;
	disabled?: boolean;
	validationStatus?: 'error' | 'success';
} | null>(null);

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
							forceMount={indeterminate ? true : undefined}
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

// Checkbox group component
const SCheckboxGroup = React.forwardRef<HTMLDivElement, SCheckboxGroupProps>(
	(
		{
			children,
			className,
			values = [],
			onValuesChange,
			label,
			description,
			disabled,
			orientation = 'vertical',
			validationStatus,
			validationMessage,
			...props
		},
		ref,
	) => {
		// Internal state if no external state is provided
		const [internalValues, setInternalValues] =
			React.useState<string[]>(values);

		// Use either the controlled or uncontrolled values
		const currentValues = onValuesChange ? values : internalValues;

		// Handle value changes
		const handleValueChange = React.useCallback(
			(value: string, checked: boolean) => {
				const newValues = checked
					? [...currentValues, value]
					: currentValues.filter((v) => v !== value);

				if (onValuesChange) {
					onValuesChange(newValues);
				} else {
					setInternalValues(newValues);
				}
			},
			[currentValues, onValuesChange],
		);

		// Update internal state when external values change
		React.useEffect(() => {
			if (onValuesChange) {
				setInternalValues(values);
			}
		}, [values, onValuesChange]);

		return (
			<div
				ref={ref}
				className={clsx(
					'checkbox-group-container',
					disabled && 'checkbox-group-disabled',
					className,
				)}
				{...props}
			>
				{label && (
					<div
						className={clsx(
							'checkbox-group-title',
							disabled && 'checkbox-group-title-disabled',
						)}
					>
						{label}
					</div>
				)}

				{description && (
					<div className="checkbox-group-description">{description}</div>
				)}

				<SCheckboxContext.Provider
					value={{
						values: currentValues,
						onValueChange: handleValueChange,
						disabled,
						validationStatus,
					}}
				>
					<div
						className={clsx(
							'checkbox-group',
							orientation === 'horizontal'
								? 'checkbox-group-horizontal'
								: 'checkbox-group-vertical',
						)}
					>
						{children}
					</div>
				</SCheckboxContext.Provider>

				{validationStatus === 'error' && validationMessage && (
					<SInlineError message={validationMessage} />
				)}
			</div>
		);
	},
);

// Checkbox item component for use within checkbox group
const SCheckboxItem = React.forwardRef<
	React.ElementRef<typeof CheckboxPrimitive.Root>,
	SCheckboxItemProps
>(
	(
		{
			className,
			label,
			description,
			disabled: itemDisabled,
			value,
			checked,
			onCheckedChange,
			validationStatus: itemValidationStatus,
			validationMessage,
			children,
			...props
		},
		ref,
	) => {
		const context = React.useContext(SCheckboxContext);

		// If no group context is found, render as a standalone checkbox
		if (!context) {
			return (
				<SCheckbox
					ref={ref}
					className={className}
					label={label || children}
					description={description}
					disabled={itemDisabled}
					checked={checked}
					onCheckedChange={onCheckedChange}
					validationStatus={itemValidationStatus}
					validationMessage={validationMessage}
					value={value}
					{...props}
				/>
			);
		}

		// Otherwise, use the group context for state management
		const {
			values,
			onValueChange,
			disabled: groupDisabled,
			validationStatus: groupValidationStatus,
		} = context;

		const isChecked = values.includes(value);
		const disabled = itemDisabled || groupDisabled;
		const validationStatus = itemValidationStatus || groupValidationStatus;

		return (
			<SCheckbox
				ref={ref}
				className={className}
				label={label || children}
				description={description}
				disabled={disabled}
				checked={isChecked}
				onCheckedChange={(checked) => onValueChange(value, checked === true)}
				validationStatus={validationStatus}
				validationMessage={validationMessage}
				{...props}
			/>
		);
	},
);

SCheckbox.displayName = 'SCheckbox';
SCheckboxGroup.displayName = 'SCheckbox.Group';
SCheckboxItem.displayName = 'SCheckbox.Item';

// Define type for the compound component
type SCheckboxComponent = React.ForwardRefExoticComponent<
	SCheckboxProps & React.RefAttributes<HTMLButtonElement>
> & {
	Group: typeof SCheckboxGroup;
	Item: typeof SCheckboxItem;
};

// Apply the correct type to SCheckbox and export with the correct type
const SCheckboxWithComponents = SCheckbox as SCheckboxComponent;
SCheckboxWithComponents.Group = SCheckboxGroup;
SCheckboxWithComponents.Item = SCheckboxItem;

export { SCheckboxWithComponents as SCheckbox };
