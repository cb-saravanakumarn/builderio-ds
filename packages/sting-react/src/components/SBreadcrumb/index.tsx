import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { ComponentPropsWithout, RemovedProps } from '@/helpers/component-props';
import clsx from 'clsx';

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
	dataTestId?: string;
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
				'flex items-center',
				current
					? 'font-medium text-primary-600'
					: 'text-neutral-700 hover:text-neutral-900',
			),
			style: { maxWidth: `${maxWidth}px` },
			'aria-current': current ? 'page' : undefined,
			title: label,
		};

		return (
			<li ref={ref} className={clsx('flex items-center', className)} {...props}>
				<LinkComponent {...itemLinkProps}>
					{icon && (
						<span className="mr-1.5 flex items-center text-inherit">
							{icon}
						</span>
					)}
					<span className="truncate">{label}</span>
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
			dataTestId,
			maxItemWidth = 200,
			linkComponent,
			separator = '/',
			items,
			...props
		},
		ref,
	) => {
		const Comp = asChild ? Slot : 'nav';

		// Generate children from items prop if provided
		const breadcrumbItems = items ? (
			<>
				{items.map((item, index) => (
					<BreadcrumbItem
						key={`item-${index}`}
						{...item}
						current={item.current || index === items.length - 1}
						maxWidth={item.maxWidth || maxItemWidth}
						linkComponent={linkComponent}
						data-testid={dataTestId ? `${dataTestId}-item-${index}` : undefined}
					/>
				))}
			</>
		) : null;

		// Clone children to pass down maxItemWidth and linkComponent if not explicitly defined
		const childrenWithProps = React.Children.map(children, (child, index) => {
			if (React.isValidElement(child)) {
				const isLast = index === React.Children.count(children) - 1;
				const childProps = {
					maxWidth: child.props.maxWidth || maxItemWidth,
					linkComponent: child.props.linkComponent || linkComponent,
					current: child.props.current || isLast,
					'data-testid': dataTestId ? `${dataTestId}-item-${index}` : undefined,
				};

				return (
					<>
						{React.cloneElement(child, childProps)}
						{!isLast && (
							<span
								className="mx-2 flex-shrink-0 text-neutral-400"
								aria-hidden="true"
							>
								{separator}
							</span>
						)}
					</>
				);
			}
			return child;
		});

		// Add separators between items when using the items prop
		const itemsWithSeparators = items
			? items.map((_, index) => (
					<React.Fragment key={`fragment-${index}`}>
						{breadcrumbItems?.props.children[index]}
						{index < items.length - 1 && (
							<span
								className="mx-2 flex-shrink-0 text-neutral-400"
								aria-hidden="true"
							>
								{separator}
							</span>
						)}
					</React.Fragment>
				))
			: null;

		return (
			<Comp
				ref={ref}
				aria-label="Breadcrumb"
				data-testid={dataTestId}
				className={clsx('flex items-center text-body', className)}
				{...props}
			>
				<ol className="flex flex-wrap items-center">
					{items ? itemsWithSeparators : childrenWithProps}
				</ol>
			</Comp>
		);
	},
);

SBreadcrumbRoot.displayName = 'SBreadcrumb';

const SBreadcrumb = Object.assign(SBreadcrumbRoot, {
	Item: BreadcrumbItem,
});

export { SBreadcrumb };
