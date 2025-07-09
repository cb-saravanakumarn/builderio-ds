import clsx from 'clsx';
import { X } from 'lucide-react';
import * as React from 'react';
import { SLabel } from '../SLabel';
import { InputVariants, inputVariants } from './constants';
import './SInput.css';

export interface SInputProps
	extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'prefix'>,
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
	 * Add a delay in milliseconds for the input to debounce the updates
	 */
	delay?: number;
	/**
	 * Adds a clear button at the end of the input, which can be used to reset the value
	 */
	allowClear?: boolean;
	/**
	 * Whether the input is full width
	 */
	fullWidth?: boolean;
	/**
	 * Input validation status
	 */
	validationStatus?: 'error' | 'success';
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
	 * Additional class name for the input wrapper
	 */
	wrapperClassName?: string;
}

interface SInputContextValue {
	id: string;
	disabled?: boolean;
	validationStatus?: 'error' | 'success';
}

const SInputContext = React.createContext<SInputContextValue | null>(null);

const useInputContext = () => {
	const context = React.useContext(SInputContext);
	if (!context) {
		throw new Error(
			'Input compound components must be used within an SInput component',
		);
	}
	return context;
};

const SInputField = React.forwardRef<
	HTMLInputElement,
	Omit<SInputProps, 'label' | 'labelInfo' | 'description' | 'validationMessage'>
>(
	(
		{
			className,
			disabled,
			testId,
			delay,
			allowClear,
			fullWidth,
			validationStatus,
			value,
			defaultValue,
			onChange,
			onClear,
			...props
		},
		ref,
	) => {
		const inputContext = useInputContext();
		const isControlled = value !== undefined;
		const [inputValue, setInputValue] = React.useState(
			isControlled ? value : defaultValue || '',
		);
		const [debouncedValue, setDebouncedValue] = React.useState(
			isControlled ? value : defaultValue || '',
		);
		const debouncedValueRef = React.useRef(debouncedValue);
		const isDisabled = disabled || inputContext.disabled;
		const inputRef = React.useRef<HTMLInputElement>(null);
		const combinedRef = useCombinedRefs(ref, inputRef);

		// Handle debounced value change
		React.useEffect(() => {
			debouncedValueRef.current = debouncedValue;
		}, [debouncedValue]);

		// Only update internal state if component is controlled
		React.useEffect(() => {
			if (isControlled) {
				setInputValue(value || '');
			}
		}, [isControlled, value]);

		React.useEffect(() => {
			if (!delay) return;

			const timer = setTimeout(() => {
				if (inputValue !== debouncedValueRef.current) {
					setDebouncedValue(inputValue);
					onChange?.({
						target: { value: inputValue },
					} as React.ChangeEvent<HTMLInputElement>);
				}
			}, delay);

			return () => {
				clearTimeout(timer);
			};
		}, [delay, inputValue, onChange]);

		const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
			const newValue = e.target.value;

			// For uncontrolled components, always update internal state
			if (!isControlled) {
				setInputValue(newValue);
			}

			// For controlled components without delay, don't update internal state
			// as the parent will control the value
			if (!delay) {
				onChange?.(e);
			} else if (isControlled) {
				// For controlled components with delay, update internal state
				// to enable debouncing
				setInputValue(newValue);
			}
		};

		return (
			<div className="input-field-wrapper relative">
				<input
					ref={combinedRef}
					className={clsx(
						'input-field',
						inputVariants({
							validationStatus:
								validationStatus || inputContext.validationStatus,
							fullWidth,
							className,
						}),
					)}
					disabled={isDisabled}
					{...(!isControlled ? {} : { value: inputValue })}
					defaultValue={!isControlled ? defaultValue : undefined}
					data-testid={testId}
					onChange={handleChange}
					id={inputContext.id}
					{...props}
				/>
			</div>
		);
	},
);

SInputField.displayName = 'SInput.Field';

const SInputPrefix = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
	const { disabled } = useInputContext();

	return (
		<div
			ref={ref}
			className={clsx('input-prefix', disabled && 'disabled', className)}
			{...props}
		/>
	);
});

SInputPrefix.displayName = 'SInput.Prefix';

const SInputSuffix = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
	const { disabled } = useInputContext();

	return (
		<div
			ref={ref}
			className={clsx('input-suffix', disabled && 'disabled', className)}
			{...props}
		/>
	);
});

SInputSuffix.displayName = 'SInput.Suffix';

const SInputDescription = React.forwardRef<
	HTMLParagraphElement,
	React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => {
	return (
		<p ref={ref} className={clsx('input-description', className)} {...props} />
	);
});

SInputDescription.displayName = 'SInput.Description';

const SInputValidation = React.forwardRef<
	HTMLParagraphElement,
	React.HTMLAttributes<HTMLParagraphElement> & {
		status?: 'error' | 'success';
	}
>(({ className, status = 'error', ...props }, ref) => {
	return (
		<p
			ref={ref}
			className={clsx(
				'input-validation',
				`input-validation-${status}`,
				className,
			)}
			{...props}
		/>
	);
});

SInputValidation.displayName = 'SInput.Validation';

// Create a clear button component that can be used as a suffix
const SInputClearButton = React.forwardRef<
	HTMLButtonElement,
	React.ButtonHTMLAttributes<HTMLButtonElement> & {
		onClear?: () => void;
		inputRef?: React.RefObject<HTMLInputElement>;
		value?: string;
		isControlled?: boolean;
	}
>(({ className, onClear, inputRef, value, isControlled, ...props }, ref) => {
	const { disabled } = useInputContext();
	const [hasUncontrolledValue, setHasUncontrolledValue] = React.useState(false);

	// For uncontrolled inputs, we need to check the current value in an effect
	React.useEffect(() => {
		if (!isControlled && inputRef?.current) {
			const checkValue = () => {
				setHasUncontrolledValue(
					Boolean(inputRef.current && inputRef.current.value !== ''),
				);
			};

			// Check initial value
			checkValue();

			// Add listeners to detect value changes for uncontrolled inputs
			const input = inputRef.current;
			input.addEventListener('input', checkValue);
			input.addEventListener('change', checkValue);

			return () => {
				input.removeEventListener('input', checkValue);
				input.removeEventListener('change', checkValue);
			};
		}
	}, [isControlled, inputRef]);

	// Determine if we should show the clear button
	const shouldShowClearButton = isControlled
		? value !== undefined && value !== ''
		: hasUncontrolledValue;

	if (!shouldShowClearButton) {
		return null;
	}

	const handleClear = () => {
		if (onClear) {
			onClear();
		}

		if (inputRef?.current) {
			inputRef.current.focus();
		}
	};

	return (
		<button
			ref={ref}
			type="button"
			className={clsx('input-clear-button', className)}
			onClick={handleClear}
			disabled={disabled}
			aria-label="Clear input"
			{...props}
		>
			<X className="size-4" />
		</button>
	);
});

SInputClearButton.displayName = 'SInput.ClearButton';

// Define the compound component type
type SInputCompoundComponent = React.ForwardRefExoticComponent<
	React.HTMLAttributes<HTMLDivElement> &
		SInputProps &
		React.RefAttributes<HTMLDivElement>
> & {
	Prefix: typeof SInputPrefix;
	Field: typeof SInputField;
	Suffix: typeof SInputSuffix;
	Description: typeof SInputDescription;
	Validation: typeof SInputValidation;
	ClearButton: typeof SInputClearButton;
};

// Create the SInput component with proper typing
const SInput = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement> & SInputProps
>(
	(
		{
			children,
			className,
			disabled,
			label,
			labelInfo,
			tooltipPlacement,
			description,
			validationStatus,
			validationMessage,
			wrapperClassName,
			allowClear,
			value,
			defaultValue,
			onClear,
			onChange,
			...props
		},
		ref,
	) => {
		const id = React.useId();
		const inputRef = React.useRef<HTMLInputElement>(null);
		const isControlled = value !== undefined;

		// Track input value for uncontrolled inputs with clear button
		const [inputValue, setInputValue] = React.useState(
			isControlled ? value : defaultValue || '',
		);

		// If no children are provided, render a default input field
		const hasChildren = React.Children.count(children) > 0;

		// Handle clear button click
		const handleClear = () => {
			if (!isControlled) {
				setInputValue('');
			}

			if (onClear) {
				onClear();
			} else if (onChange) {
				onChange({
					target: { value: '' },
				} as React.ChangeEvent<HTMLInputElement>);
			}

			inputRef.current?.focus();
		};

		// Handle input change for uncontrolled inputs
		const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
			if (!isControlled) {
				setInputValue(e.target.value);
			}

			if (onChange) {
				onChange(e);
			}
		};

		return (
			<SInputContext.Provider value={{ id, disabled, validationStatus }}>
				<div ref={ref} className={clsx('input-container', className)}>
					{label && (
						<SLabel
							htmlFor={id}
							labelInfo={labelInfo}
							tooltipPlacement={tooltipPlacement}
						>
							{label}
						</SLabel>
					)}

					<div className={clsx('input-wrapper', wrapperClassName)}>
						{hasChildren ? (
							children
						) : (
							<>
								<SInputField
									ref={inputRef}
									disabled={disabled}
									validationStatus={validationStatus}
									value={isControlled ? value : undefined}
									defaultValue={!isControlled ? defaultValue : undefined}
									onChange={handleChange}
									{...props}
								/>
								{allowClear && (
									<SInputSuffix>
										<SInputClearButton
											onClear={handleClear}
											inputRef={inputRef}
											value={isControlled ? value : inputValue}
											isControlled={isControlled}
										/>
									</SInputSuffix>
								)}
							</>
						)}
					</div>

					{description && <SInputDescription>{description}</SInputDescription>}

					{validationStatus === 'error' && validationMessage && (
						<SInputValidation status="error">
							{validationMessage}
						</SInputValidation>
					)}

					{validationStatus === 'success' && validationMessage && (
						<SInputValidation status="success">
							{validationMessage}
						</SInputValidation>
					)}
				</div>
			</SInputContext.Provider>
		);
	},
) as SInputCompoundComponent;

SInput.displayName = 'SInput';

// Utility function to combine refs
function useCombinedRefs<T>(...refs: React.Ref<T>[]) {
	const targetRef = React.useRef<T>(null);

	React.useEffect(() => {
		refs.forEach((ref) => {
			if (!ref) return;

			if (typeof ref === 'function') {
				ref(targetRef.current);
			} else {
				(ref as React.MutableRefObject<T | null>).current = targetRef.current;
			}
		});
	}, [refs]);

	return targetRef;
}

SInput.Prefix = SInputPrefix;
SInput.Field = SInputField;
SInput.Suffix = SInputSuffix;
SInput.Description = SInputDescription;
SInput.Validation = SInputValidation;
SInput.ClearButton = SInputClearButton;

export { SInput };
