import * as React from 'react';
import { VariantProps } from 'tailwind-variants';
import { AlarmIcon, IconMap } from '../Icons';
// import "./SInput.css";
import { inputVariants } from './constants';

const SearchIcon = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		strokeWidth="1.5"
		stroke="currentColor"
	>
		<path
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
		/>
	</svg>
);

const CloseIcon = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		strokeWidth="1.5"
		stroke="currentColor"
	>
		<path
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M6 18L18 6M6 6l12 12"
		/>
	</svg>
);

// Simplified variant system

// Simplified props interface
export interface SInputProps
	extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
	messageText?: string | null;
	labelText?: string;
	iconName?: string;
	size?: VariantProps<typeof inputVariants>['size'];
	labelPosition?: VariantProps<typeof inputVariants>['labelPosition'];
	variant?: VariantProps<typeof inputVariants>['variant'];
	showResetButton?: boolean;
	withIcon?: boolean;
	error?: boolean;
	onChangeValue?: (value: string) => void;
}

// Input component
export const SInput = React.forwardRef<HTMLInputElement, SInputProps>(
	(
		{
			value = '',
			className,
			variant = 'input',
			onChangeValue,
			labelPosition = 'none',
			labelText,
			size = 'regular',
			disabled = false,
			messageText,
			error = false,
			withIcon = false,
			iconName,
			showResetButton = false,
			readOnly,
			onChange,
			...props
		},
		ref,
	) => {
		const [inputValue, setInputValue] = React.useState(value as string);
		const isSearch = variant === 'search';

		// Update local value when prop value changes
		React.useEffect(() => {
			setInputValue(value as string);
		}, [value]);

		// Handle input change
		const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
			setInputValue(e.target.value);
			onChange?.(e);
			onChangeValue?.(e.target.value);
		};

		// Handle reset button click
		const handleReset = (e: React.MouseEvent<HTMLButtonElement>) => {
			e.stopPropagation();
			setInputValue('');
			onChangeValue?.('');
		};

		// Determine state for the variant
		const stateVariant = disabled ? 'disabled' : error ? 'error' : 'default';

		// Resolve icon based on iconName or search variant
		const resolveIcon = () => {
			if (!withIcon) return null;
			if (isSearch) return <SearchIcon />;
			return iconName ? IconMap[iconName] : null;
		};

		return (
			<div
				className={inputVariants({
					variant,
					labelPosition,
					size,
					state: stateVariant,
					withIcon,
					className,
				})}
			>
				<div>
					{labelPosition !== 'none' && labelText && (
						<InputLabel>{labelText}</InputLabel>
					)}

					{withIcon && <span className="icon">{resolveIcon()}</span>}

					<div className="relative">
						<input
							className={inputVariants({ size })}
							value={inputValue}
							onChange={handleChange}
							ref={ref}
							disabled={disabled}
							readOnly={readOnly}
							{...props}
						/>

						{showResetButton && inputValue && (
							<button
								type="button"
								className="reset-icon"
								onClick={handleReset}
							>
								<CloseIcon />
							</button>
						)}
					</div>
				</div>

				{messageText &&
					messageText.length > 0 &&
					(error ? (
						<InputError>{messageText}</InputError>
					) : (
						<InputMessage>{messageText}</InputMessage>
					))}
			</div>
		);
	},
);

SInput.displayName = 'SInput';

// Helper components
export interface InputMessageProps
	extends React.HTMLAttributes<HTMLDivElement> {
	children: React.ReactNode;
}

export const InputMessage = React.forwardRef<
	HTMLSpanElement,
	InputMessageProps
>(({ className, children, ...props }, ref) => (
	<span className="input-message" {...props} ref={ref}>
		{children}
	</span>
));

InputMessage.displayName = 'InputMessage';

export interface InputLabelProps
	extends React.LabelHTMLAttributes<HTMLLabelElement> {
	children: React.ReactNode;
}

export const InputLabel = React.forwardRef<HTMLLabelElement, InputLabelProps>(
	({ children, ...props }, ref) => (
		<span>
			<label className="input-label" {...props} ref={ref}>
				{children}
			</label>
		</span>
	),
);

InputLabel.displayName = 'InputLabel';

export interface InputErrorProps extends React.HTMLAttributes<HTMLDivElement> {
	children: React.ReactNode;
}

export const InputError = React.forwardRef<HTMLDivElement, InputErrorProps>(
	({ children }, ref) => (
		<div className="error-wrapper" ref={ref}>
			<span className="icon error-icon">
				<AlarmIcon height={12} width={12} />
			</span>
			<span className="input-message error-message">{children}</span>
		</div>
	),
);

InputError.displayName = 'InputError';

// Export a search input as a convenience component that uses the SInput component
export const SearchField = React.forwardRef<
	HTMLInputElement,
	Omit<SInputProps, 'variant'>
>((props, ref) => (
	<SInput
		variant="search"
		withIcon={true}
		labelPosition="none"
		ref={ref}
		{...props}
	/>
));

SearchField.displayName = 'SearchField';
