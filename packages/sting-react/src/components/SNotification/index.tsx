import { ComponentPropsWithout, RemovedProps } from '@/helpers/component-props';
import { Slot } from '@radix-ui/react-slot';
import { SIcon } from '../SIcon';
import * as React from 'react';
import { Notification, notificationVariants } from './constants';

export interface SNotificationProps
	extends ComponentPropsWithout<'div', RemovedProps>,
	Notification {
	/**
	 * Custom content to render beside the icon. When provided, this takes precedence over title and description.
	 */
	children?: React.ReactNode;
	/**
	 * Notification title
	 */
	title?: string;
	/**
	 * Notification description/content
	 */
	description?: string;
	/**
	 * Primary action text
	 */
	primaryActionText?: string;
	/**
	 * Secondary action text
	 */
	secondaryActionText?: string;
	/**
	 * Primary action click handler
	 */
	onPrimaryAction?: () => void;
	/**
	 * Secondary action click handler
	 */
	onSecondaryAction?: () => void;
	/**
	 * Whether the notification can be dismissed
	 */
	dismissible?: boolean;
	/**
	 * Callback when notification is dismissed
	 */
	onDismiss?: () => void;
	/**
	 * Custom icon to display (defaults to Info icon)
	 */
	icon?: React.ReactNode;
	/**
	 * Whether to render the notification as a child component (Radix UI Slot)
	 */
	asChild?: boolean;
	/**
	 * The variant of the notification determining its visual style
	 */
	variant?: Notification['variant'];
	/**
	 * Whether to show stroke/border
	 */
	hasBorder?: Notification['hasBorder'];
	/**
	 * Add data-test id's for using it in testcases
	 */
	dataTestId?: string;
}

/**
 * SNotification is a versatile notification component that follows the Figma design system.
 * It supports multiple variants, stroke borders, actions, and dismissible functionality.
 * 
 * Content can be provided in two ways:
 * 1. Using title and description props for structured content
 * 2. Using children prop for custom JSX content (takes precedence over title/description)
 */
const SNotification = React.forwardRef<HTMLDivElement, SNotificationProps>(
	(
		{
			className,
			variant,
			hasBorder = true,
			children,
			title,
			description,
			primaryActionText,
			secondaryActionText,
			onPrimaryAction,
			onSecondaryAction,
			dismissible,
			onDismiss,
			icon,
			asChild,
			dataTestId,
			...props
		},
		ref,
	) => {
		const Comp = asChild ? Slot : 'div';
		const defaultIcon = <SIcon name="info" className="w-st h-st" />;

		// Automatically determine what to show based on provided content
		const hasChildren = Boolean(children);
		const hasTitle = Boolean(title);
		const hasDescription = Boolean(description);
		const hasPrimaryAction = Boolean(primaryActionText);
		const hasSecondaryAction = Boolean(secondaryActionText);
		const hasActions = hasPrimaryAction || hasSecondaryAction;

		return (
			<Comp
				ref={ref}
				className={notificationVariants({ variant, hasBorder, className })}
				data-testid={dataTestId}
				{...props}
			>
				<div className="s-notification-root">
					<div className="s-notification-container">
						{/* Icon */}
						<div className="s-notification-icon">
							{icon || defaultIcon}
						</div>

						{/* Main content */}
						<div className="s-notification-main">
							{/* Content section */}
							<div className="s-notification-content">
								{hasChildren ? (
									children
								) : (
									<>
										{hasTitle && (
											<div className="s-notification-title">
												{title}
											</div>
										)}
										{hasDescription && (
											<div className="s-notification-description">
												{description}
											</div>
										)}
									</>
								)}
							</div>

							{/* Actions section */}
							{hasActions && (
								<div className="s-notification-actions">
									{hasPrimaryAction && (
										<div className="s-notification-action">
											<div className="s-notification-action-content">
												<div
													className="s-notification-action-text"
													onClick={onPrimaryAction}
													role={onPrimaryAction ? "button" : undefined}
													tabIndex={onPrimaryAction ? 0 : undefined}
													onKeyDown={onPrimaryAction ? (e) => {
														if (e.key === 'Enter' || e.key === ' ') {
															e.preventDefault();
															onPrimaryAction();
														}
													} : undefined}
												>
													{primaryActionText}
												</div>
											</div>
										</div>
									)}
									{hasSecondaryAction && (
										<div className="s-notification-action">
											<div className="s-notification-action-content">
												<div
													className="s-notification-action-text"
													onClick={onSecondaryAction}
													role={onSecondaryAction ? "button" : undefined}
													tabIndex={onSecondaryAction ? 0 : undefined}
													onKeyDown={onSecondaryAction ? (e) => {
														if (e.key === 'Enter' || e.key === ' ') {
															e.preventDefault();
															onSecondaryAction();
														}
													} : undefined}
												>
													{secondaryActionText}
												</div>
											</div>
										</div>
									)}
								</div>
							)}
						</div>

						{/* Dismissible close button */}
						{dismissible && (
							<div className="s-notification-close">
								<button
									type="button"
									onClick={onDismiss}
									aria-label="Dismiss notification"
									data-testid={dataTestId ? `${dataTestId}-close` : undefined}
								>
									<SIcon name="x" className="s-notification-close-icon" />
								</button>
							</div>
						)}
					</div>
				</div>
			</Comp>
		);
	},
);

SNotification.displayName = 'SNotification';

export { SNotification };
