import * as React from 'react';
import * as RadixTooltip from '@radix-ui/react-tooltip';
import { tooltipVariants, TooltipVariants } from './constants';
import { twMerge } from 'tailwind-merge';
import './STooltip.css';

export interface STooltipProps
	extends RadixTooltip.TooltipProps,
		TooltipVariants {
	children?: React.ReactNode;
	trigger?: React.ReactNode;
	label?: string;
	link?: { label: string; href: string };
	contentElement?: React.ReactNode;
	placement?: 'top' | 'right' | 'bottom' | 'left';
	align?: 'start' | 'center' | 'end';
	delayDuration?: number;
}

const STooltip = React.forwardRef<HTMLDivElement, STooltipProps>(
	({
		width,
		color,
		placement = 'top',
		align,
		children,
		contentElement,
		open,
		label,
		link,
		delayDuration = 0,
	}) => {
		const { base, arrow, content } = tooltipVariants({ width, color });

		return (
			<RadixTooltip.Provider delayDuration={delayDuration}>
				<RadixTooltip.Root open={open}>
					<RadixTooltip.Trigger asChild>{children}</RadixTooltip.Trigger>
					<RadixTooltip.Portal>
						<RadixTooltip.Content
							className={base()}
							sideOffset={5}
							side={placement}
							align={align}
						>
							<RadixTooltip.Arrow className={arrow()} />
							<div className={content()}>
								{label && <span>{label}</span>}
								{contentElement && <div>{contentElement}</div>}
								{link && (
									<span className="tooltip-link">
										<a
											href={link.href}
											target="_blank"
											rel="noopener noreferrer"
										>
											{link.label}
										</a>
									</span>
								)}
							</div>
						</RadixTooltip.Content>
					</RadixTooltip.Portal>
				</RadixTooltip.Root>
			</RadixTooltip.Provider>
		);
	},
);

const STooltipTrigger = ({ children }: STooltipProps) => {
	return <RadixTooltip.Trigger asChild>{children}</RadixTooltip.Trigger>;
};

const STooltipContent = ({
	children,
	width,
	color,
	placement = 'top',
	align,
	className,
	...props
}: STooltipProps & RadixTooltip.TooltipContentProps) => {
	const { base, arrow, content } = tooltipVariants({ width, color });

	return (
		<RadixTooltip.Portal>
			<RadixTooltip.Content
				className={twMerge(base(), className)}
				sideOffset={5}
				side={placement}
				align={align}
				{...props}
			>
				<RadixTooltip.Arrow className={arrow()} />
				<div className={content()}>{children}</div>
			</RadixTooltip.Content>
		</RadixTooltip.Portal>
	);
};

const STooltipWithActions = ({
	children,
	open,
	onOpenChange,
	delayDuration = 0,
	...props
}: STooltipProps) => {
	return (
		<RadixTooltip.Provider delayDuration={delayDuration} {...props}>
			<RadixTooltip.Root open={open} disableHoverableContent>
				{children}
			</RadixTooltip.Root>
		</RadixTooltip.Provider>
	);
};

STooltip.displayName = 'STooltip';

export { STooltip, STooltipWithActions, STooltipTrigger, STooltipContent };
