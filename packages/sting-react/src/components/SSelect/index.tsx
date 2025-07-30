import * as React from 'react';
import * as PopoverPrimitive from '@radix-ui/react-popover';
import { Command as CommandPrimitive } from 'cmdk';
import { Check, ChevronDown, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import './SSelect.css';
import { SLabel } from '../SLabel';

export interface SelectOption {
	value: string;
	label: string;
	disabled?: boolean;
}

export interface SSelectProps {
	options?: SelectOption[];
	value?: string | string[];
	defaultValue?: string | string[];
	onValueChange?: (value: string | string[]) => void;
	placeholder?: string;
	disabled?: boolean;
	multiple?: boolean;
	searchable?: boolean;
	clearable?: boolean;
	className?: string;
	children?: React.ReactNode;
	open?: boolean;
	onOpenChange?: (open: boolean) => void;
	label?: string;
}

// Context for compound components
interface SSelectContextValue {
	value: string | string[];
	onValueChange: (value: string | string[]) => void;
	multiple: boolean;
	open: boolean;
	onOpenChange: (open: boolean) => void;
	searchable: boolean;
	disabled: boolean;
}

const SSelectContext = React.createContext<SSelectContextValue | null>(null);

const useSSelectContext = () => {
	const context = React.useContext(SSelectContext);
	if (!context) {
		throw new Error('SSelect compound components must be used within SSelect');
	}
	return context;
};

// Root component
const SSelectRoot = React.forwardRef<
	React.ElementRef<typeof PopoverPrimitive.Root>,
	SSelectProps
>(
	(
		{
			options = [],
			value,
			defaultValue,
			onValueChange,
			placeholder = 'Select option...',
			disabled = false,
			multiple = false,
			searchable = true,
			clearable = true,
			className,
			children,
			open: controlledOpen,
			onOpenChange: controlledOnOpenChange,
			label,
			...props
		},
		ref,
	) => {
		const [internalValue, setInternalValue] = React.useState<string | string[]>(
			defaultValue ?? (multiple ? [] : ''),
		);
		const [internalOpen, setInternalOpen] = React.useState(false);

		const isControlled = value !== undefined;
		const currentValue = isControlled ? value : internalValue;
		const currentOpen =
			controlledOpen !== undefined ? controlledOpen : internalOpen;

		const handleValueChange = React.useCallback(
			(newValue: string | string[]) => {
				if (!isControlled) {
					setInternalValue(newValue);
				}
				onValueChange?.(newValue);
			},
			[isControlled, onValueChange],
		);

		const handleOpenChange = React.useCallback(
			(open: boolean) => {
				if (controlledOnOpenChange) {
					controlledOnOpenChange(open);
				} else {
					setInternalOpen(open);
				}
			},
			[controlledOnOpenChange],
		);

		const handleSelect = React.useCallback(
			(optionValue: string) => {
				if (multiple) {
					const currentValues = Array.isArray(currentValue) ? currentValue : [];
					const newValues = currentValues.includes(optionValue)
						? currentValues.filter((v) => v !== optionValue)
						: [...currentValues, optionValue];
					handleValueChange(newValues);
				} else {
					handleValueChange(optionValue);
					handleOpenChange(false);
				}
			},
			[multiple, currentValue, handleValueChange, handleOpenChange],
		);

		const handleClear = React.useCallback(
			(e: React.MouseEvent) => {
				e.stopPropagation();
				handleValueChange(multiple ? [] : '');
			},
			[multiple, handleValueChange],
		);

		const contextValue: SSelectContextValue = {
			value: currentValue,
			onValueChange: handleValueChange,
			multiple,
			open: currentOpen,
			onOpenChange: handleOpenChange,
			searchable,
			disabled,
		};

		// Simple props-based API
		if (options.length > 0 && !children) {
			const selectedOptions = options.filter((option) =>
				multiple
					? Array.isArray(currentValue) && currentValue.includes(option.value)
					: currentValue === option.value,
			);

			const buttonId = React.useId();

			return (
				<div className="flex flex-col gap-y-1.5">
					{label && <SLabel htmlFor={buttonId}>{label}</SLabel>}
					<SSelectContext.Provider value={contextValue}>
						<PopoverPrimitive.Root
							open={currentOpen}
							onOpenChange={handleOpenChange}
						>
							<PopoverPrimitive.Trigger asChild>
								<button
									ref={ref}
									id={buttonId}
									className={cn('s-select-trigger', className)}
									disabled={disabled}
									aria-expanded={currentOpen}
									{...props}
								>
									<div className="s-select-trigger-content">
										{selectedOptions.length > 0 ? (
											multiple ? (
												<div className="s-select-multiple-values">
													{selectedOptions.map((option) => (
														<span
															key={option.value}
															className="s-select-value-chip"
														>
															{option.label}
															{clearable && (
																<button
																	onClick={(e) => {
																		e.stopPropagation();
																		handleSelect(option.value);
																	}}
																	className="s-select-value-chip-remove"
																>
																	<X className="h-3 w-3" />
																</button>
															)}
														</span>
													))}
												</div>
											) : (
												<span className="s-select-single-value">
													{selectedOptions[0].label}
												</span>
											)
										) : (
											<span className="s-select-placeholder">{placeholder}</span>
										)}
									</div>
									<div className="s-select-trigger-icons">
										{clearable && selectedOptions.length > 0 && (
											<button
												onClick={handleClear}
												className="s-select-clear-button"
											>
												<X className="size-4" />
											</button>
										)}
										<ChevronDown className="s-select-chevron" />
									</div>
								</button>
							</PopoverPrimitive.Trigger>
							<PopoverPrimitive.Portal>
								<PopoverPrimitive.Content
									className={cn('s-select-content')}
									align="start"
									sideOffset={4}
								>
									<CommandPrimitive
										className="s-select-command"
										shouldFilter={searchable}
										loop
									>
										{searchable && (
											<div className="s-select-search-wrapper">
												<CommandPrimitive.Input
													placeholder="Search..."
													className="s-select-search-input"
												/>
											</div>
										)}
										<CommandPrimitive.List className="s-select-options-list">
											<CommandPrimitive.Empty className="s-select-empty">
												No options found.
											</CommandPrimitive.Empty>
											{options.map((option) => {
												const isSelected = multiple
													? Array.isArray(currentValue) &&
													currentValue.includes(option.value)
													: currentValue === option.value;

												return (
													<CommandPrimitive.Item
														key={option.value}
														value={option.value}
														keywords={[option.label]}
														onSelect={() => handleSelect(option.value)}
														disabled={option.disabled}
														className={cn(
															's-select-option',
															isSelected && 's-select-option-selected',
															option.disabled && 's-select-option-disabled',
														)}
													>
														<div className="s-select-option-content">
															<span>{option.label}</span>
															{isSelected && (
																<Check className="s-select-option-check" />
															)}
														</div>
													</CommandPrimitive.Item>
												);
											})}
										</CommandPrimitive.List>
									</CommandPrimitive>
								</PopoverPrimitive.Content>
							</PopoverPrimitive.Portal>
						</PopoverPrimitive.Root>
					</SSelectContext.Provider>
				</div>
			);
		}

		// Compound composition API
		return (
			<SSelectContext.Provider value={contextValue}>
				<PopoverPrimitive.Root
					open={currentOpen}
					onOpenChange={handleOpenChange}
				>
					{children}
				</PopoverPrimitive.Root>
			</SSelectContext.Provider>
		);
	},
);
SSelectRoot.displayName = 'SSelect';

// Trigger component
const SSelectTrigger = React.forwardRef<
	React.ElementRef<typeof PopoverPrimitive.Trigger>,
	React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Trigger>
>(({ className, children, ...props }, ref) => {
	const { disabled } = useSSelectContext();

	return (
		<PopoverPrimitive.Trigger
			ref={ref}
			className={cn({ 's-select-trigger': !props.asChild }, className)}
			disabled={disabled}
			{...props}
		>
			{children}
		</PopoverPrimitive.Trigger>
	);
});
SSelectTrigger.displayName = 'SSelect.Trigger';

// Value component for displaying selected values
const SSelectValue = React.forwardRef<
	HTMLSpanElement,
	React.HTMLAttributes<HTMLSpanElement> & {
		placeholder?: string;
	}
>(({ className, placeholder = 'Select option...', ...props }, ref) => {
	const { value, multiple } = useSSelectContext();

	const isEmpty = multiple
		? !Array.isArray(value) || value.length === 0
		: !value;

	return (
		<span
			ref={ref}
			className={cn(isEmpty ? 's-select-placeholder' : 's-select-value', className)}
			{...props}
		>
			{isEmpty
				? placeholder
				: multiple && Array.isArray(value)
					? `${value.length} selected`
					: value}
		</span>
	);
});
SSelectValue.displayName = 'SSelect.Value';

// Content component
const SSelectContent = React.forwardRef<
	React.ElementRef<typeof PopoverPrimitive.Content>,
	React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
>(({ className, children, ...props }, ref) => {
	const { searchable } = useSSelectContext();

	return (
		<PopoverPrimitive.Portal>
			<PopoverPrimitive.Content
				ref={ref}
				className={cn('s-select-content', className)}
				align="start"
				sideOffset={4}
				{...props}
			>
				<CommandPrimitive
					className="s-select-command"
					shouldFilter={searchable}
					loop
				>
					{children}
				</CommandPrimitive>
			</PopoverPrimitive.Content>
		</PopoverPrimitive.Portal>
	);
});
SSelectContent.displayName = 'SSelect.Content';

// Search input component
const SSelectInput = React.forwardRef<
	React.ElementRef<typeof CommandPrimitive.Input>,
	React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input>
>(({ className, ...props }, ref) => {
	const { searchable } = useSSelectContext();

	if (!searchable) return null;

	return (
		<div className="s-select-search-wrapper">
			<CommandPrimitive.Input
				ref={ref}
				className={cn('s-select-search-input', className)}
				{...props}
			/>
		</div>
	);
});
SSelectInput.displayName = 'SSelect.Input';

// List component
const SSelectList = React.forwardRef<
	React.ElementRef<typeof CommandPrimitive.List>,
	React.ComponentPropsWithoutRef<typeof CommandPrimitive.List>
>(({ className, children, ...props }, ref) => (
	<CommandPrimitive.List
		ref={ref}
		className={cn('s-select-options-list', className)}
		{...props}
	>
		{children}
	</CommandPrimitive.List>
));
SSelectList.displayName = 'SSelect.List';

// Empty component
const SSelectEmpty = React.forwardRef<
	React.ElementRef<typeof CommandPrimitive.Empty>,
	React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>
>(({ className, ...props }, ref) => (
	<CommandPrimitive.Empty
		ref={ref}
		className={cn('s-select-empty', className)}
		{...props}
	/>
));
SSelectEmpty.displayName = 'SSelect.Empty';

// Group component
const SSelectGroup = React.forwardRef<
	React.ElementRef<typeof CommandPrimitive.Group>,
	React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group>
>(({ className, ...props }, ref) => (
	<CommandPrimitive.Group
		ref={ref}
		className={cn('s-select-group', className)}
		{...props}
	/>
));
SSelectGroup.displayName = 'SSelect.Group';

// Label component
const SSelectLabel = React.forwardRef<
	React.ElementRef<typeof SLabel>,
	React.ComponentPropsWithoutRef<typeof SLabel>
>(({ ...props }, ref) => (
	<SLabel ref={ref} {...props} />
));
SSelectLabel.displayName = 'SSelect.Label';

// Item component
const SSelectItem = React.forwardRef<
	React.ElementRef<typeof CommandPrimitive.Item>,
	React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item> & {
		value: string;
		children: React.ReactNode;
		keywords?: string[];
	}
>(
	(
		{ className, children, value: itemValue, disabled, keywords, ...props },
		ref,
	) => {
		const { value, onValueChange, multiple, onOpenChange } =
			useSSelectContext();

		const isSelected = multiple
			? Array.isArray(value) && value.includes(itemValue)
			: value === itemValue;

		// Only disable if explicitly disabled at item level
		const isDisabled = disabled === true;

		return (
			<CommandPrimitive.Item
				ref={ref}
				value={itemValue}
				keywords={
					keywords || [typeof children === 'string' ? children : itemValue]
				}
				disabled={isDisabled}
				data-disabled={isDisabled ? true : false}
				onSelect={() => {
					if (isDisabled) return;

					if (multiple) {
						const currentValues = Array.isArray(value) ? value : [];
						const newValues = currentValues.includes(itemValue)
							? currentValues.filter((v) => v !== itemValue)
							: [...currentValues, itemValue];
						onValueChange(newValues);
					} else {
						onValueChange(itemValue);
						onOpenChange(false);
					}
				}}
				className={cn(
					's-select-option',
					isSelected && 's-select-option-selected',
					isDisabled && 's-select-option-disabled',
					className,
				)}
				{...props}
			>
				<div className="s-select-option-content">
					<span>{children}</span>
					{isSelected && <Check className="s-select-option-check" />}
				</div>
			</CommandPrimitive.Item>
		);
	},
);
SSelectItem.displayName = 'SSelect.Item';

// Separator component
const SSelectSeparator = React.forwardRef<
	React.ElementRef<typeof CommandPrimitive.Separator>,
	React.ComponentPropsWithoutRef<typeof CommandPrimitive.Separator>
>(({ className, ...props }, ref) => (
	<CommandPrimitive.Separator
		ref={ref}
		className={cn('s-select-separator', className)}
		{...props}
	/>
));
SSelectSeparator.displayName = 'SSelect.Separator';

// Main SSelect object with sub-components
const SSelect = Object.assign(SSelectRoot, {
	Trigger: SSelectTrigger,
	Value: SSelectValue,
	Content: SSelectContent,
	Input: SSelectInput,
	List: SSelectList,
	Empty: SSelectEmpty,
	Group: SSelectGroup,
	Label: SSelectLabel,
	Item: SSelectItem,
	Separator: SSelectSeparator,
});

export { SSelect };
