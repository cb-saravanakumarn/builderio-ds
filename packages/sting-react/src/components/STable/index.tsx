import clsx from 'clsx';
import React from 'react';

export type STableProps = Omit<React.ComponentProps<'table'>, 'border'> & {
	layout?: 'fixed' | 'auto';
	border?: 'outline' | 'horizontal';
};

const STableRoot = React.forwardRef<HTMLTableElement, STableProps>(
	({ children, className, layout = 'auto', border = 'outline', ...props }, ref) => {
		return (
			<div
				className={clsx(
					'relative overflow-auto rounded-md',
					border === 'outline' && 'border border-neutral-100',
					className,
				)}
			>
				<table
					ref={ref}
					className={clsx(
						'w-full',
						layout === 'fixed' ? 'table-fixed' : 'table-auto',
					)}
					{...props}
				>
					{children}
				</table>
			</div>
		);
	},
);
STableRoot.displayName = 'STable';

export type STableHeadProps = React.ComponentProps<'thead'> & {
	sticky?: boolean;
	background?: 'neutral' | 'transparent';
};

const STableHead = React.forwardRef<HTMLTableSectionElement, STableHeadProps>(
	({ children, sticky = false, className, background = 'neutral', ...props }, ref) => {
		return (
			<thead
				ref={ref}
				className={clsx(
					'border-b border-neutral-100',
					sticky && 'sticky top-0 z-10',
					background === 'neutral' ? 'bg-neutral-50' : '',
					background === 'transparent' ? 'bg-transparent' : '',
					className,
				)}
				{...props}
			>
				{children}
			</thead>
		);
	},
);
STableHead.displayName = 'STable.Head';

export type STableBodyProps = React.ComponentProps<'tbody'>;

const STableBody = React.forwardRef<HTMLTableSectionElement, STableBodyProps>(
	({ children, className, ...props }, ref) => {
		return (
			<tbody ref={ref} className={clsx('hover:[&_tr]:bg-neutral-25', className)} {...props}>
				{children}
			</tbody>
		);
	},
);
STableBody.displayName = 'STable.Body';

export type STableFooterProps = React.ComponentProps<'tfoot'>;

const STableFooter = React.forwardRef<
	HTMLTableSectionElement,
	STableFooterProps
>(({ children, ...props }, ref) => {
	return (
		<tfoot ref={ref} className={'border-t border-neutral-100'} {...props}>
			{children}
		</tfoot>
	);
});
STableFooter.displayName = 'STable.Footer';

export type STableRowProps = React.ComponentProps<'tr'>;

const STableRow = React.forwardRef<HTMLTableRowElement, STableRowProps>(
	({ children, ...props }, ref) => {
		return (
			<tr
				ref={ref}
				className={
					'border-b-neutral-100 [&:not(:last-child)]:border-b'
				}
				{...props}
			>
				{children}
			</tr>
		);
	},
);
STableRow.displayName = 'STable.Row';

export type STableCellProps = React.ComponentProps<'td'> & {
	truncate?: boolean;
};

const STableCell = React.forwardRef<HTMLTableCellElement, STableCellProps>(
	({ children, className, truncate = true, ...props }, ref) => {
		return (
			<td
				ref={ref}
				className={clsx(
					'p-mi text-para-regular',
					truncate && 'truncate',
					className,
				)}
				{...props}
			>
				{children}
			</td>
		);
	},
);
STableCell.displayName = 'STable.Cell';

export type STableHeaderCellProps = React.ComponentProps<'th'> & {
	truncate?: boolean;
};

const STableHeaderCell = React.forwardRef<
	HTMLTableCellElement,
	STableHeaderCellProps
>(({ children, className, truncate = true, ...props }, ref) => {
	return (
		<th
			ref={ref}
			className={clsx(
				'p-mi text-left text-para-semibold',
				truncate && 'truncate',
				className,
			)}
			{...props}
		>
			{children}
		</th>
	);
});

STableHeaderCell.displayName = 'STable.HeaderCell';

type STableComponent = typeof STableRoot & {
	Head: typeof STableHead;
	Body: typeof STableBody;
	Footer: typeof STableFooter;
	Row: typeof STableRow;
	Cell: typeof STableCell;
	HeaderCell: typeof STableHeaderCell;
};

const STable = Object.freeze(
	Object.assign(STableRoot, {
		Head: STableHead,
		Body: STableBody,
		Footer: STableFooter,
		Row: STableRow,
		Cell: STableCell,
		HeaderCell: STableHeaderCell,
	}),
) as STableComponent;

export { STable };
