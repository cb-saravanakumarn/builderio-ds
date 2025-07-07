'use client';

import * as React from 'react';
import * as SelectPrimitive from '@radix-ui/react-select';
import { Check, ChevronDown, ChevronUp, Search } from 'lucide-react';

import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';
import { STooltip } from '../STooltip';
import './SSelect.css';

const SSelectRoot = SelectPrimitive.Root;

const SSelectGroup = SelectPrimitive.Group;

const SSelectValue = SelectPrimitive.Value;

const SSelectTrigger = React.forwardRef<
	React.ElementRef<typeof SelectPrimitive.Trigger>,
	React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
	<SelectPrimitive.Trigger
		ref={ref}
		className={twMerge('s-select-trigger', className)}
		{...props}
	>
		{children}
		<SelectPrimitive.Icon asChild>
			<ChevronDown className="h-4 w-4 opacity-50" />
		</SelectPrimitive.Icon>
	</SelectPrimitive.Trigger>
));
SSelectTrigger.displayName = 'SSelect.Trigger';

const SSelectScrollUpButton = React.forwardRef<
	React.ElementRef<typeof SelectPrimitive.ScrollUpButton>,
	React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton>
>(({ className, ...props }, ref) => (
	<SelectPrimitive.ScrollUpButton
		ref={ref}
		className={twMerge('s-select-scroll-button', className)}
		{...props}
	>
		<ChevronUp className="h-4 w-4" />
	</SelectPrimitive.ScrollUpButton>
));
SSelectScrollUpButton.displayName = 'SSelect.ScrollUpButton';

const SSelectScrollDownButton = React.forwardRef<
	React.ElementRef<typeof SelectPrimitive.ScrollDownButton>,
	React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton>
>(({ className, ...props }, ref) => (
	<SelectPrimitive.ScrollDownButton
		ref={ref}
		className={twMerge('s-select-scroll-button', className)}
		{...props}
	>
		<ChevronDown className="h-4 w-4" />
	</SelectPrimitive.ScrollDownButton>
));
SSelectScrollDownButton.displayName = 'SSelect.ScrollDownButton';

// Search input component for searchable select
const SSelectSearchInput = React.forwardRef<
	HTMLInputElement,
	React.InputHTMLAttributes<HTMLInputElement> & {
		onSearch?: (value: string) => void;
		searchValue?: string;
	}
>(
	(
		{ className, onSearch, searchValue: externalSearchValue, ...props },
		ref,
	) => {
		const [internalSearchValue, setInternalSearchValue] = React.useState('');

		// Use external search value if provided, otherwise use internal state
		const searchValue =
			externalSearchValue !== undefined
				? externalSearchValue
				: internalSearchValue;

		const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
			const value = e.target.value;
			if (externalSearchValue === undefined) {
				setInternalSearchValue(value);
			}
			onSearch?.(value);
		};

		// Reset internal state when external value changes to empty
		React.useEffect(() => {
			if (externalSearchValue === '') {
				setInternalSearchValue('');
			}
		}, [externalSearchValue]);

		return (
			<div className="s-select-search-container">
				<div className="s-select-search-wrapper">
					<Search className="s-select-search-icon" />
					<input
						ref={ref}
						className={twMerge('s-select-search-input', className)}
						value={searchValue}
						onChange={handleChange}
						placeholder="Search..."
						onKeyDown={(e) => {
							// Prevent select from closing when typing
							e.stopPropagation();
						}}
						{...props}
					/>
				</div>
			</div>
		);
	},
);
SSelectSearchInput.displayName = 'SSelect.SearchInput';

const SSelectContent = React.forwardRef<
	React.ElementRef<typeof SelectPrimitive.Content>,
	React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content> & {
		searchable?: boolean;
		onSearch?: (value: string) => void;
		searchPlaceholder?: string;
		searchValue?: string;
	}
>(
	(
		{
			className,
			children,
			position = 'popper',
			searchable,
			onSearch,
			searchPlaceholder,
			searchValue,
			...props
		},
		ref,
	) => (
		<SelectPrimitive.Portal>
			<SelectPrimitive.Content
				ref={ref}
				className={clsx(
					's-select-content',
					position === 'popper' && 's-select-content-popper',
					className,
				)}
				position={position}
				{...props}
			>
				{searchable && (
					<SSelectSearchInput
						onSearch={onSearch}
						placeholder={searchPlaceholder}
						searchValue={searchValue}
					/>
				)}
				<SSelectScrollUpButton />
				<SelectPrimitive.Viewport
					className={clsx(
						's-select-viewport',
						position === 'popper' && 's-select-viewport-popper',
					)}
				>
					{children}
				</SelectPrimitive.Viewport>
				<SSelectScrollDownButton />
			</SelectPrimitive.Content>
		</SelectPrimitive.Portal>
	),
);
SSelectContent.displayName = 'SSelect.Content';

const SSelectGroupLabel = React.forwardRef<
	React.ElementRef<typeof SelectPrimitive.Label>,
	React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => (
	<SelectPrimitive.Label
		ref={ref}
		className={twMerge('s-select-label', className)}
		{...props}
	/>
));
SSelectGroupLabel.displayName = 'SSelect.GroupLabel';

// Field label component for labels above the select
const SSelectLabel = React.forwardRef<
	HTMLLabelElement,
	React.LabelHTMLAttributes<HTMLLabelElement> & {
		required?: boolean;
		disabled?: boolean;
		info?: React.ReactNode;
		tooltipContent?: string;
		tooltipPlacement?: 'top' | 'right' | 'bottom' | 'left';
	}
>(
	(
		{
			className,
			required,
			disabled,
			children,
			info,
			tooltipContent,
			tooltipPlacement = 'top',
			...props
		},
		ref,
	) => (
		<div className="s-select-label-container">
			<label
				ref={ref}
				className={twMerge(
					's-select-field-label',
					required && 'required',
					disabled && 'disabled',
					className,
				)}
				{...props}
			>
				{children}
			</label>
			{tooltipContent && info ? (
				<span className="s-select-label-info">
					<STooltip label={tooltipContent} placement={tooltipPlacement}>
						{info}
					</STooltip>
				</span>
			) : info ? (
				<span className="s-select-label-info">{info}</span>
			) : null}
		</div>
	),
);
SSelectLabel.displayName = 'SSelect.Label';

const SSelectItem = React.forwardRef<
	React.ElementRef<typeof SelectPrimitive.Item>,
	React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
	<SelectPrimitive.Item
		ref={ref}
		className={twMerge('s-select-item', className)}
		{...props}
	>
		<span className="s-select-item-indicator">
			<SelectPrimitive.ItemIndicator>
				<Check className="h-4 w-4" />
			</SelectPrimitive.ItemIndicator>
		</span>
		<SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
	</SelectPrimitive.Item>
));
SSelectItem.displayName = 'SSelect.Item';

const SSelectSeparator = React.forwardRef<
	React.ElementRef<typeof SelectPrimitive.Separator>,
	React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => (
	<SelectPrimitive.Separator
		ref={ref}
		className={twMerge('s-select-separator', className)}
		{...props}
	/>
));
SSelectSeparator.displayName = 'SSelect.Separator';

// Enhanced SSelect with search functionality
const SSelectSearchable = React.forwardRef<
	HTMLDivElement,
	{
		options: Array<{ value: string; label: string; disabled?: boolean }>;
		placeholder?: string;
		searchPlaceholder?: string;
		onSearch?: (value: string) => void;
		filterFn?: (
			option: { value: string; label: string },
			searchValue: string,
		) => boolean;
		noResultsText?: string;
		className?: string;
		triggerClassName?: string;
		contentClassName?: string;
		label?: string;
		labelRequired?: boolean;
		labelDisabled?: boolean;
		labelInfo?: React.ReactNode;
		labelTooltipContent?: string;
		labelTooltipPlacement?: 'top' | 'right' | 'bottom' | 'left';
		labelHtmlFor?: string;
		value?: string;
		defaultValue?: string;
		onValueChange?: (value: string) => void;
		disabled?: boolean;
		required?: boolean;
		name?: string;
		open?: boolean;
		defaultOpen?: boolean;
		onOpenChange?: (open: boolean) => void;
	}
>(
	(
		{
			options,
			placeholder = 'Select an option',
			searchPlaceholder = 'Search options...',
			onSearch,
			filterFn,
			noResultsText = 'No results found',
			className,
			triggerClassName,
			contentClassName,
			label,
			labelRequired,
			labelDisabled,
			labelInfo,
			labelTooltipContent,
			labelTooltipPlacement,
			labelHtmlFor,
			value,
			defaultValue,
			onValueChange,
			disabled,
			required,
			name,
			open,
			defaultOpen,
			onOpenChange,
		},
		ref,
	) => {
		const [searchValue, setSearchValue] = React.useState('');
		const id = React.useId();

		// Use provided htmlFor or generate one
		const selectId = labelHtmlFor || `searchable-select-${id}`;

		// Reset search value when select closes
		const handleOpenChange = (isOpen: boolean) => {
			if (!isOpen) {
				setSearchValue('');
			}
			onOpenChange?.(isOpen);
		};

		// Default filter function
		const defaultFilterFn = (
			option: { value: string; label: string },
			searchValue: string,
		) => {
			return option.label.toLowerCase().includes(searchValue.toLowerCase());
		};

		const filterFunction = filterFn || defaultFilterFn;

		// Filter options based on search value
		const filteredOptions = React.useMemo(() => {
			if (!searchValue) return options;
			return options.filter((option) => filterFunction(option, searchValue));
		}, [options, searchValue, filterFunction]);

		const handleSearch = (value: string) => {
			setSearchValue(value);
			onSearch?.(value);
		};

		return (
			<div ref={ref} className={className}>
				{label && (
					<SSelectLabel
						htmlFor={selectId}
						required={labelRequired}
						disabled={labelDisabled || disabled}
						info={labelInfo}
						tooltipContent={labelTooltipContent}
						tooltipPlacement={labelTooltipPlacement}
					>
						{label}
					</SSelectLabel>
				)}
				<SelectPrimitive.Root
					value={value}
					defaultValue={defaultValue}
					onValueChange={onValueChange}
					disabled={disabled}
					required={required}
					name={name}
					open={open}
					defaultOpen={defaultOpen}
					onOpenChange={handleOpenChange}
				>
					<SSelectTrigger className={triggerClassName} id={selectId}>
						<SSelectValue placeholder={placeholder} />
					</SSelectTrigger>
					<SSelectContent
						searchable
						onSearch={handleSearch}
						searchPlaceholder={searchPlaceholder}
						searchValue={searchValue}
						className={contentClassName}
					>
						{filteredOptions.length > 0 ? (
							filteredOptions.map((option) => (
								<SSelectItem
									key={option.value}
									value={option.value}
									disabled={option.disabled}
								>
									{option.label}
								</SSelectItem>
							))
						) : (
							<div className="s-select-no-results">{noResultsText}</div>
						)}
					</SSelectContent>
				</SelectPrimitive.Root>
			</div>
		);
	},
);
SSelectSearchable.displayName = 'SSelect.Searchable';

// Create a compound component type definition
interface SSelectCompoundComponent
	extends React.ForwardRefExoticComponent<
		React.ComponentPropsWithoutRef<typeof SSelectRoot> &
			React.RefAttributes<React.ElementRef<typeof SSelectRoot>>
	> {
	Group: typeof SSelectGroup;
	Value: typeof SSelectValue;
	Trigger: typeof SSelectTrigger;
	Content: typeof SSelectContent;
	GroupLabel: typeof SSelectGroupLabel;
	Label: typeof SSelectLabel;
	Item: typeof SSelectItem;
	Separator: typeof SSelectSeparator;
	ScrollUpButton: typeof SSelectScrollUpButton;
	ScrollDownButton: typeof SSelectScrollDownButton;
	SearchInput: typeof SSelectSearchInput;
	Searchable: typeof SSelectSearchable;
}

// SSelect object with sub-components
const SSelect = SSelectRoot as SSelectCompoundComponent;

// SSelect sub-components
SSelect.Group = SSelectGroup;
SSelect.Value = SSelectValue;
SSelect.Trigger = SSelectTrigger;
SSelect.Content = SSelectContent;
SSelect.GroupLabel = SSelectGroupLabel;
SSelect.Label = SSelectLabel;
SSelect.Item = SSelectItem;
SSelect.Separator = SSelectSeparator;
SSelect.ScrollUpButton = SSelectScrollUpButton;
SSelect.ScrollDownButton = SSelectScrollDownButton;
SSelect.SearchInput = SSelectSearchInput;
SSelect.Searchable = SSelectSearchable;

// Type definitions
type SSelectProps = React.ComponentPropsWithoutRef<typeof SSelectRoot>;

export { SSelect, type SSelectProps };
