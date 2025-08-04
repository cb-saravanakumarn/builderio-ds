import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { ComponentPropsWithout, RemovedProps } from '@/helpers/component-props';
import clsx from 'clsx';
import './SBreadcrumb.css';

export interface SBreadcrumbItemProps
	extends ComponentPropsWithout<'li', RemovedProps> {
	/**
	 * The label text to display for the breadcrumb item
	 */
	label: string;
	/**
	 * The URL the breadcrumb item should link to
	 */
	href?: string;
	/**
	 * Whether this item is the current/active page
	 */
	current?: boolean;
	/**
	 * Additional properties to pass to the link component
	 */
	linkProps?: Record<string, any>;
	/**
	 * Custom icon to display instead of the default separator
	 */
	icon?: React.ReactNode;
	/**
	 * Maximum width for breadcrumb item before truncation
	 */
	maxWidth?: number;
	/**
	 * Custom component to use for links
	 */
	linkComponent?: React.ElementType;
}

export type SBreadcrumbItemData = Omit<SBreadcrumbItemProps, 'linkComponent'>;

export interface SBreadcrumbProps
	extends ComponentPropsWithout<'nav', RemovedProps> {
	/**
	 * Add data-test id's for using it in testcases
	 */
	testId?: string;
	/**
	 * Whether to render the breadcrumb as a child component (Radix UI Slot)
	 */
	asChild?: boolean;
	/**
	 * Maximum width for breadcrumb items before truncation
	 * @default 200
	 */
	maxItemWidth?: number;
	/**
	 * Custom component to use for links
	 * Example: linkComponent={NextLink}
	 * This will be passed to all breadcrumb items automatically
	 */
	linkComponent?: React.ElementType;
	/**
	 * Custom separator between breadcrumb items
	 * @default "/"
	 */
	separator?: React.ReactNode;
	/**
	 * Array of breadcrumb items to render
	 * Alternative to using SBreadcrumb.Item children
	 */
	items?: SBreadcrumbItemData[];
	/**
	 * Maximum number of items to display before truncating with ellipsis
	 * When set, shows first (maxItems - 1)/2 items and last (maxItems - 1)/2 items with ellipsis in the middle
	 * Set to 0 to show all items (default)
	 * @default 0
	 */
	maxItems?: number;
	/**
	 * Custom ellipsis node to display when breadcrumb is truncated
	 * @default "..."
	 */
	ellipsis?: React.ReactNode;
}

/**
 * SBreadcrumb.Item is a component that represents an individual item within a breadcrumb navigation.
 */
const BreadcrumbItem = React.forwardRef<HTMLLIElement, SBreadcrumbItemProps>(
	(
		{
			className,
			label,
			href,
			current = false,
			linkProps = {},
			maxWidth = 200,
			linkComponent,
			icon,
			children,
			...props
		},
		ref,
	) => {
		const LinkComponent = href ? linkComponent || 'a' : 'span';

		// Prepare props for the breadcrumb item
		const itemLinkProps = {
			...(href && !linkComponent ? { href } : {}),
			...(href && linkComponent ? { href, ...linkProps } : {}),
			className: clsx(
				's-breadcrumb-item-link',
				current
					? 's-breadcrumb-item-link-current'
					: 's-breadcrumb-item-link-normal',
			),
			style: { maxWidth: `${maxWidth}px` },
			'aria-current': current ? 'page' : undefined,
			title: label,
		};

		return (
			<li ref={ref} className={clsx('s-breadcrumb-item', className)} {...props}>
				<LinkComponent {...itemLinkProps}>
					{icon && <span className="s-breadcrumb-icon">{icon}</span>}
					<span className="s-breadcrumb-item-truncate">{label}</span>
				</LinkComponent>
			</li>
		);
	},
);

BreadcrumbItem.displayName = 'SBreadcrumb.Item';

/**
 * SBreadcrumb is a navigation component that helps users understand
 * their current location within a website's hierarchy.
 */
const SBreadcrumbRoot = React.forwardRef<HTMLElement, SBreadcrumbProps>(
	(
		{
			className,
			children,
			asChild = false,
			testId,
			maxItemWidth = 200,
			linkComponent,
			separator = '/',
			items,
			maxItems = 0,
			ellipsis = '...',
			...props
		},
		ref,
	) => {
		const Comp = asChild ? Slot : 'nav';

		// Clone children to pass down maxItemWidth and linkComponent if not explicitly defined
		const childrenWithProps = React.Children.map(children, (child, index) => {
			if (React.isValidElement(child)) {
				const isLast = index === React.Children.count(children) - 1;
				const childProps = {
					maxWidth: child.props.maxWidth || maxItemWidth,
					linkComponent: child.props.linkComponent || linkComponent,
					current: child.props.current || isLast,
					'data-testid': testId ? `${testId}-item-${index}` : undefined,
				};

				return (
					<>
						{React.cloneElement(child, childProps)}
						{!isLast && (
							<span className="s-breadcrumb-separator" aria-hidden="true">
								{separator}
							</span>
						)}
					</>
				);
			}
			return child;
		});

		// Handle truncation based on maxItems
		if (items && maxItems > 0 && items.length > maxItems) {
			// Calculate how many items to show at start and end
			const startItems = Math.ceil(maxItems / 2);
			const endItems = Math.floor(maxItems / 2);

			const visibleStartItems = items.slice(0, startItems);
			const visibleEndItems = items.slice(-endItems);

			return (
				<Comp
					ref={ref}
					aria-label="Breadcrumb"
					data-testid={testId}
					className={clsx('s-breadcrumb', className)}
					{...props}
				>
					<ol className="s-breadcrumb-list">
						{/* Render start items */}
						{visibleStartItems.map((item, index) => (
							<React.Fragment key={`start-${index}`}>
								<BreadcrumbItem
									{...item}
									current={false}
									maxWidth={item.maxWidth || maxItemWidth}
									linkComponent={linkComponent}
									data-testid={
										testId ? `${testId}-item-${index}` : undefined
									}
								/>
								{index < visibleStartItems.length - 1 && (
									<span className="s-breadcrumb-separator" aria-hidden="true">
										{separator}
									</span>
								)}
							</React.Fragment>
						))}

						{/* Render ellipsis */}
						<span className="s-breadcrumb-ellipsis" aria-hidden="true">
							{ellipsis}
						</span>

						{/* Render end items */}
						{visibleEndItems.map((item, index) => (
							<React.Fragment key={`end-${index}`}>
								{index > 0 || (
									<span className="s-breadcrumb-separator" aria-hidden="true">
										{separator}
									</span>
								)}
								<BreadcrumbItem
									{...item}
									current={index === visibleEndItems.length - 1}
									maxWidth={item.maxWidth || maxItemWidth}
									linkComponent={linkComponent}
									data-testid={
										testId
											? `${testId}-item-${items.length - visibleEndItems.length + index}`
											: undefined
									}
								/>
								{index < visibleEndItems.length - 1 && (
									<span className="s-breadcrumb-separator" aria-hidden="true">
										{separator}
									</span>
								)}
							</React.Fragment>
						))}
					</ol>
				</Comp>
			);
		}

		// If using the items prop with no truncation
		if (items) {
			return (
				<Comp
					ref={ref}
					aria-label="Breadcrumb"
					data-testid={testId}
					className={clsx('s-breadcrumb', className)}
					{...props}
				>
					<ol className="s-breadcrumb-list">
						{items.map((item, index) => (
							<React.Fragment key={`item-${index}`}>
								<BreadcrumbItem
									{...item}
									current={item.current || index === items.length - 1}
									maxWidth={item.maxWidth || maxItemWidth}
									linkComponent={linkComponent}
									data-testid={
										testId ? `${testId}-item-${index}` : undefined
									}
								/>
								{index < items.length - 1 && (
									<span className="s-breadcrumb-separator" aria-hidden="true">
										{separator}
									</span>
								)}
							</React.Fragment>
						))}
					</ol>
				</Comp>
			);
		}

		// Handle the children case (could also be truncated in the future if needed)
		return (
			<Comp
				ref={ref}
				aria-label="Breadcrumb"
				data-testid={testId}
				className={clsx('s-breadcrumb', className)}
				{...props}
			>
				<ol className="s-breadcrumb-list">{childrenWithProps}</ol>
			</Comp>
		);
	},
);

SBreadcrumbRoot.displayName = 'SBreadcrumb';

const SBreadcrumb = Object.assign(SBreadcrumbRoot, {
	Item: BreadcrumbItem,
});

export { SBreadcrumb };
