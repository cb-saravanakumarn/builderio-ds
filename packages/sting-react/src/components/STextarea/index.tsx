import * as React from 'react';
import clsx from 'clsx';
import { tv, VariantProps } from 'tailwind-variants';
import { X } from 'lucide-react';
import { STooltip } from '../STooltip';
import { SInlineError } from '../SInlineError';
import './STextarea.css';

// Define textarea variants
export const textareaVariants = tv({
	base: 'textarea-base',
	variants: {
		size: {
			regular: 'textarea-regular',
			large: 'textarea-large',
		},
		disabled: {
			true: 'textarea-disabled',
		},
		validationStatus: {
			error: 'textarea-error',
			success: 'textarea-success',
		},
	},
	defaultVariants: {
		size: 'regular',
	},
});

export interface STextareaProps
	extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'size'>,
		VariantProps<typeof textareaVariants> {
	/**
	 * Adds a label for the textarea
	 */
	label?: React.ReactNode;
	/**
	 * Adds additional info icon beside the label
	 */
	labelInfo?: React.ReactNode;
	/**
	 * Content for the tooltip when hovering over the info icon
	 */
	tooltipContent?: string;
	/**
	 * Placement of the tooltip relative to the info icon
	 */
	tooltipPlacement?: 'top' | 'right' | 'bottom' | 'left';
	/**
	 * Description to explain the purpose of the component
	 */
	description?: React.ReactNode;
	/**
	 * Validation status of the textarea
	 */
	validationStatus?: 'error' | 'success';
	/**
	 * Validation message to display
	 */
	validationMessage?: React.ReactNode;
	/**
	 * Callback when the clear button is clicked
	 */
	onClear?: () => void;
	/**
	 * Whether to allow clearing the textarea with a button
	 */
	allowClear?: boolean;
	/**
	 * Additional class name for the textarea wrapper
	 */
	wrapperClassName?: string;
	/**
	 * Number of rows
	 * @default 4
	 */
	rows?: number;
	/**
	 * Resize behavior
	 */
	resize?: 'none' | 'both' | 'horizontal' | 'vertical';
}

interface STextareaContextValue {
	id: string;
	disabled?: boolean;
	validationStatus?: 'error' | 'success';
}

const STextareaContext = React.createContext<STextareaContextValue | null>(
	null,
);

const useTextareaContext = () => {
	const context = React.useContext(STextareaContext);
	if (!context) {
		throw new Error(
			'Textarea compound components must be used within an STextarea component',
		);
	}
	return context;
};

const STextareaLabel = React.forwardRef<
	HTMLLabelElement,
	React.LabelHTMLAttributes<HTMLLabelElement> & {
		info?: React.ReactNode;
		tooltipContent?: string;
		tooltipPlacement?: 'top' | 'right' | 'bottom' | 'left';
	}
>(
	(
		{
			className,
			children,
			info,
			tooltipContent,
			tooltipPlacement = 'top',
			...props
		},
		ref,
	) => {
		const { id, disabled } = useTextareaContext();

		return (
			<div className="textarea-label-container">
				<label
					ref={ref}
					htmlFor={id}
					className={clsx('textarea-label', disabled && 'disabled', className)}
					{...props}
				>
					{children}
				</label>
				{tooltipContent && info ? (
					<span className="textarea-label-info">
						<STooltip label={tooltipContent} placement={tooltipPlacement}>
							{info}
						</STooltip>
					</span>
				) : info ? (
					<span className="textarea-label-info">{info}</span>
				) : null}
			</div>
		);
	},
);

STextareaLabel.displayName = 'STextarea.Label';

const STextareaDescription = React.forwardRef<
	HTMLParagraphElement,
	React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => {
	return (
		<p
			ref={ref}
			className={clsx('textarea-description', className)}
			{...props}
		/>
	);
});

STextareaDescription.displayName = 'STextarea.Description';

const STextareaClearButton = React.forwardRef<
	HTMLButtonElement,
	React.ButtonHTMLAttributes<HTMLButtonElement> & {
		onClear?: () => void;
		textareaRef?: React.RefObject<HTMLTextAreaElement>;
		value?: string;
		isControlled?: boolean;
	}
>(({ className, onClear, textareaRef, value, isControlled, ...props }, ref) => {
	const { disabled } = useTextareaContext();
	const [hasUncontrolledValue, setHasUncontrolledValue] = React.useState(false);

	// For uncontrolled textareas, we need to check the current value in an effect
	React.useEffect(() => {
		if (!isControlled && textareaRef?.current) {
			const checkValue = () => {
				setHasUncontrolledValue(!!textareaRef.current?.value);
			};

			// Initial check
			checkValue();

			// Set up listeners to monitor value changes
			const textarea = textareaRef.current;
			textarea.addEventListener('input', checkValue);

			return () => {
				textarea.removeEventListener('input', checkValue);
			};
		}
	}, [isControlled, textareaRef]);

	// Don't show the button if there's no value
	if (isControlled && !value) return null;
	if (!isControlled && !hasUncontrolledValue) return null;

	const handleClear = () => {
		if (onClear) {
			onClear();
		}

		if (textareaRef?.current && !isControlled) {
			textareaRef.current.value = '';
			textareaRef.current.dispatchEvent(new Event('input', { bubbles: true }));
			textareaRef.current.focus();
		}
	};

	return (
		<button
			ref={ref}
			type="button"
			className={clsx('textarea-clear-button', className)}
			onClick={handleClear}
			disabled={disabled}
			aria-label="Clear textarea"
			{...props}
		>
			<X className="size-4" />
		</button>
	);
});

STextareaClearButton.displayName = 'STextarea.ClearButton';

// Define the compound component type
type STextareaCompoundComponent = React.ForwardRefExoticComponent<
	React.HTMLAttributes<HTMLDivElement> &
		STextareaProps &
		React.RefAttributes<HTMLDivElement>
> & {
	Label: typeof STextareaLabel;
	Description: typeof STextareaDescription;
	ClearButton: typeof STextareaClearButton;
};

// Create the STextarea component with proper typing
const STextarea = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement> & STextareaProps
>(
	(
		{
			children,
			className,
			wrapperClassName,
			disabled,
			label,
			labelInfo,
			tooltipContent,
			tooltipPlacement,
			description,
			validationStatus,
			validationMessage,
			size,
			resize = 'vertical',
			rows = 4,
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
		const textareaRef = React.useRef<HTMLTextAreaElement>(null);
		const isControlled = value !== undefined;

		// Track textarea value for uncontrolled inputs with clear button
		const [textareaValue, setTextareaValue] = React.useState(
			isControlled ? value : defaultValue || '',
		);

		// Handle clear button click
		const handleClear = () => {
			if (!isControlled) {
				setTextareaValue('');
			}

			if (onClear) {
				onClear();
			} else if (onChange) {
				onChange({
					target: { value: '' },
				} as React.ChangeEvent<HTMLTextAreaElement>);
			}

			// Focus the textarea after clearing
			if (textareaRef.current) {
				textareaRef.current.focus();
			}
		};

		// Handle textarea change
		const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
			if (!isControlled) {
				setTextareaValue(e.target.value);
			}

			if (onChange) {
				onChange(e);
			}
		};

		// Only use auto-sizing when rows is not specified or is set to 0
		const useAutoSizing = rows === undefined || rows === 0;

		return (
			<STextareaContext.Provider
				value={{
					id,
					disabled,
					validationStatus,
				}}
			>
				<div ref={ref} className={clsx('textarea-wrapper', wrapperClassName)}>
					{label && (
						<STextareaLabel
							info={labelInfo}
							tooltipContent={tooltipContent}
							tooltipPlacement={tooltipPlacement}
						>
							{label}
						</STextareaLabel>
					)}

					{description && (
						<STextareaDescription>{description}</STextareaDescription>
					)}

					<div className="textarea-container">
						<textarea
							id={id}
							ref={textareaRef}
							className={clsx(
								textareaVariants({
									size,
									disabled,
									validationStatus,
								}),
								`resize-${resize}`,
								// Only apply auto-sizing when needed
								useAutoSizing && 'field-sizing-content',
								className,
							)}
							rows={useAutoSizing ? undefined : rows}
							disabled={disabled}
							value={isControlled ? value : undefined}
							defaultValue={!isControlled ? defaultValue : undefined}
							onChange={handleChange}
							aria-invalid={validationStatus === 'error'}
							aria-describedby={
								validationStatus === 'error' && validationMessage
									? `${id}-error`
									: description
										? `${id}-description`
										: undefined
							}
							{...props}
						/>

						{allowClear && (
							<div className="textarea-suffix">
								<STextareaClearButton
									onClear={handleClear}
									textareaRef={textareaRef}
									value={
										isControlled ? value?.toString() : textareaValue?.toString()
									}
									isControlled={isControlled}
								/>
							</div>
						)}
					</div>

					{validationStatus === 'error' && validationMessage && (
						<SInlineError id={`${id}-error`} message={validationMessage} />
					)}

					{validationStatus === 'success' && validationMessage && (
						<div className="textarea-validation-success" id={`${id}-success`}>
							{validationMessage}
						</div>
					)}
				</div>
			</STextareaContext.Provider>
		);
	},
) as STextareaCompoundComponent;

STextarea.displayName = 'STextarea';

STextarea.Label = STextareaLabel;
STextarea.Description = STextareaDescription;
STextarea.ClearButton = STextareaClearButton;

export { STextarea };
