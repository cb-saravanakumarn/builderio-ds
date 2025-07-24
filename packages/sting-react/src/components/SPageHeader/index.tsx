import * as React from 'react';
import { ComponentPropsWithout, RemovedProps } from '@/helpers/component-props';
import { SButton } from '../SButton';

export interface SPageHeaderProps
	extends ComponentPropsWithout<'div', RemovedProps | 'title'> {
	/**
	 * Breadcrumb navigation component
	 */
	breadcrumb?: React.ReactNode;
	/**
	 * Page title content
	 */
	title?: React.ReactNode;
	/**
	 * Metadata badges or other meta information
	 */
	metaData?: React.ReactNode;
	/**
	 * Page description text
	 */
	description?: React.ReactNode;
	/**
	 * Action buttons or controls
	 */
	actions?: React.ReactNode;
	/**
	 * Leading action icon (dismiss/back button)
	 */
	leadingAction?: React.ReactNode;
	/**
	 * Callback function when the leading action is clicked
	 */
	onLeadingActionClick?: () => void;
	/**
	 * Additional CSS classes
	 */
	className?: string;
	/**
	 * Add data-test id's for using it in testcases
	 */
	dataTestId?: string;
}

/**
 * SPageHeader is a comprehensive page header component that provides a consistent layout
 * for page titles, breadcrumbs, metadata, descriptions, and actions.
 */
const SPageHeader = React.forwardRef<HTMLDivElement, SPageHeaderProps>(
	(
		{
			breadcrumb,
			title,
			metaData,
			description,
			actions,
			leadingAction,
			onLeadingActionClick,
			className,
			dataTestId,
			...props
		},
		ref,
	) => {
		return (
			<div ref={ref} className={className} data-testid={dataTestId} {...props}>
				<div className="w-full bg-neutral-0 px-7xl">
					{/* Breadcrumb Section */}
					{breadcrumb && <div className="pb-md">{breadcrumb}</div>}

					<div className="flex w-full flex-row items-center justify-between">
						{/* Title Row */}
						<div className="flex min-w-0 flex-1 flex-row items-center gap-sm">
							{/* Leading Action (Dismiss/Back) */}
							{leadingAction && (
								<div className="flex shrink-0 items-center justify-center">
									{onLeadingActionClick ? (
										<SButton
											variant="neutral-ghost"
											onClick={onLeadingActionClick}
											aria-label="Go back or dismiss"
										>
											{leadingAction}
										</SButton>
									) : (
										<div className="flex h-8 w-8 items-center justify-center">
											{leadingAction}
										</div>
									)}
								</div>
							)}

							{/* Title */}
							{title && (
								<div className="min-w-0 flex-1">
									<h1 className="text-heading-xl font-semibold text-neutral-900">
										{title}
									</h1>
								</div>
							)}
						</div>

						{/* Trailing Actions */}
						{actions && (
							<div className="flex shrink-0 flex-row items-center gap-xs">
								{actions}
							</div>
						)}
					</div>

					{/* Metadata Section */}
					{metaData && (
						<div className="flex flex-row flex-wrap items-start gap-xs pt-sm">
							{metaData}
						</div>
					)}

					{/* Description Section */}
					{description && (
						<div className="w-full max-w-[50rem] pt-sm">
							<div className="text-para-regular text-neutral-500">
								{description}
							</div>
						</div>
					)}
				</div>
			</div>
		);
	},
);

SPageHeader.displayName = 'SPageHeader';

export { SPageHeader };
