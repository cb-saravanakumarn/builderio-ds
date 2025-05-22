import { ReactElement, ReactNode } from 'react';
import * as RadixRadioGroup from '@radix-ui/react-radio-group';
import { CheckIcon } from '@heroicons/react/16/solid';
import { Primitive } from '@radix-ui/react-primitive';
import { tv, VariantProps } from 'tailwind-variants';
import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';

const SRadioGroupVariants = tv({
	base: 's-radio-list',
	variants: {
		variant: {
			basic: 's-radio-list-basic',
			contained: 's-radio-list-contained',
		},
		size: {
			small: 's-radio-list-small',
			regular: 's-radio-list-regular',
			large: 's-radio-list-large',
		},
		width: {
			full: 's-radio-list-full-width',
		},
		align: {
			vertical: 's-radio-list-vertical',
			horizontal: 's-radio-list-horizontal',
		},
		disabled: { true: 's-radio-list-disabled' },
		format: { rich: 's-rich-content' },
		position: {
			start: 's-items-start',
			center: 's-items-center',
			end: 's-items-end',
		},
	},
});

export interface RadioButtonProps
	extends RadixRadioGroup.RadioGroupProps,
		VariantProps<typeof SRadioGroupVariants> {
	disabled?: boolean;
	title?: string;
	defaultValue?: string;
	description: string;
	noCheckmark?: boolean;
	onChangeLogic?: (value: string | React.ChangeEvent<HTMLInputElement>) => void;
}

const SRadioGroup = ({
	className,
	variant,
	size,
	align = 'vertical',
	width,
	format,
	title = '',
	description = '',
	noCheckmark,
	children,
	onChangeLogic,
	defaultValue,
	disabled = false,
	...props
}: RadioButtonProps) => {
	return (
		<div className="s-w-full">
			{(title.length > 0 || description.length > 0) && (
				<div className="s-list-title-description">
					{title && <h4 className="s-list-title">{title}</h4>}
					{description && <p>{description}</p>}
				</div>
			)}

			<RadixRadioGroup.Root
				className={clsx(
					's-group',
					SRadioGroupVariants({
						variant,
						size,
						align,
						width,
						disabled,
						className,
					}),
				)}
				onValueChange={(e: string) => onChangeLogic && onChangeLogic(e)}
				defaultValue={defaultValue}
				aria-label="View density"
				disabled={disabled}
				{...props}
			>
				{children}
			</RadixRadioGroup.Root>
		</div>
	);
};

export interface RadioButtonItemProps
	extends RadixRadioGroup.RadioGroupItemProps,
		VariantProps<typeof SRadioGroupVariants> {
	contained?: boolean;
	richContent?: boolean;
	disabled?: boolean;
	noCheckmark?: boolean;
	id: string;
	value: string;
	children: ReactNode;
}

const SRadio = ({
	id,
	value,
	contained,
	position,
	children,
	richContent,
	disabled = false,
	noCheckmark = false,
	...props
}: RadioButtonItemProps) => {
	let mainContent: ReactNode;
	let actionElement: ReactNode | undefined;

	if (Array.isArray(children)) {
		mainContent = children.find(
			(child) => (child as ReactElement).type !== SRadio.Action,
		);
		actionElement = children.find(
			(child) => (child as ReactElement).type === SRadio.Action,
		);
	} else {
		mainContent = children;
	}

	return (
		<Primitive.label
			htmlFor={id}
			className={twMerge(
				's-radio-option',
				richContent && 's-rich-content',
				contained && '[&:has([data-state=checked])]:s-radio-option-selected',
				disabled && '!s-cursor-not-allowed', // Apply disabled styles to the whole label
			)}
		>
			<Primitive.div className="s-radio-button-wrapper">
				<RadixRadioGroup.Item
					className={twMerge(
						's-radio-icon-button',
						noCheckmark && 'sr-only',
						's-peer group-[.s-radio-list-contained]:s-w-4 group-[.s-radio-list-contained]:s-h-4 focus:s-border-neutral-900 data-[state=checked]:s-border-primary-500',
						disabled && '!s-cursor-not-allowed s-opacity-40', // Apply disabled styles to the item
					)}
					value={value}
					id={id}
					disabled={disabled} // Pass the disabled prop here
					{...props}
				>
					<RadixRadioGroup.Indicator
						className={`s-radio-indigator ${
							!contained &&
							"s-relative after:s-content-[''] after:s-block after:s-w-[8px] after:s-h-[8px] after:s-rounded-[50%] after:s-bg-primary-400"
						} `}
					>
						{contained && (
							<CheckIcon className="s-check-contained-icon s-m-auto group-[.s-radio-list-contained]:s-block" />
						)}
					</RadixRadioGroup.Indicator>
				</RadixRadioGroup.Item>
			</Primitive.div>

			<Primitive.div
				className={twMerge(
					's-radio-list-wrapper',
					SRadioGroupVariants({ position }),
				)}
			>
				<Primitive.label
					className={twMerge(
						's-radio-option-label-text',
						'peer-disabled:s-opacity-40 peer-disabled:!s-cursor-not-allowed sm:s-flex-col s-flex-col md:s-flex-row',
						disabled && 's-radio-disabled', // Ensure disabled styles are applied to the text as well
					)}
					htmlFor={id}
				>
					{mainContent}

					{Boolean(actionElement) && (
						<Primitive.div className="s-radio-list-action s-w-full md:s-w-auto">
							{actionElement}
						</Primitive.div>
					)}
				</Primitive.label>
			</Primitive.div>
		</Primitive.label>
	);
};

const SRadioAction = ({ children }: { children: ReactNode }) => {
	return <>{children}</>;
};

SRadioAction.displayName = 'SRadio.Action';
SRadio.Action = SRadioAction;

export { SRadioGroup, SRadio };
