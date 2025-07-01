import * as React from 'react';
import { tv, VariantProps } from 'tailwind-variants';
import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';
import './STable.css';

// Table Context
interface TableContextProps {
	border?: string | null;
	mode?: string | null;
}

const TableContext = React.createContext<TableContextProps>({
	border: 'full',
	mode: 'light',
});

const TableVariants = tv({
	base: 'table',
	variants: {
		variant: {
			primary: 'table-primary',
			neutral: 'table-neutral',
			striped: 'table-striped',
		},
		rounded: {
			none: 'rounded-none',
			sm: 'rounded-sm ',
			md: 'rounded-md ',
			lg: 'rounded-lg ',
		},
		size: {
			small: 'table-small',
			regular: 'table-regular',
			large: 'table-large',
		},
		mode: {
			light: 'table-header',
			dark: 'table-header-dark',
		},
		border: {
			full: 'border-full',
			horizontal: 'border-horizontal',
			rounded: 'rounded',
			none: 'no-border',
		},
	},
	defaultVariants: {
		variant: 'neutral',
		size: 'regular',
		mode: 'light',
		border: 'full',
		rounded: 'md',
	},
});

interface STableHeadProps
	extends React.HTMLAttributes<HTMLTableSectionElement> {
	children: React.ReactNode;
	className?: string;
}

interface STableBodyProps
	extends React.HTMLAttributes<HTMLTableSectionElement> {
	children: React.ReactNode;
	className?: string;
}

interface STableHeaderCellProps
	extends React.ThHTMLAttributes<HTMLTableHeaderCellElement> {
	children: React.ReactNode;
	colSpan?: number;
	rowSpan?: number;
	align?: 'left' | 'center' | 'right';
	sticky?: 'left' | 'right';
	width?: string;
	className?: string;
}

interface STableCellProps extends React.TdHTMLAttributes<HTMLTableCellElement> {
	children: React.ReactNode;
	colSpan?: number;
	rowSpan?: number;
	align?: 'left' | 'center' | 'right';
	sticky?: 'left' | 'right';
	width?: string;
	className?: string;
}

interface STableRowProps extends React.HTMLAttributes<HTMLTableRowElement> {
	children: React.ReactNode;
	selected?: boolean;
	className?: string;
}

interface STableProps
	extends React.HTMLAttributes<HTMLTableElement>,
		VariantProps<typeof TableVariants> {
	children: React.ReactNode;
	className?: string;
	maxWidth?: string | number;
	loading?: boolean;
}

// Table Subcomponents
const TableHead = React.forwardRef<HTMLTableSectionElement, STableHeadProps>(
	({ children, className, ...props }, ref) => (
		<thead ref={ref} className={clsx('thead', className)} {...props}>
			{children}
		</thead>
	),
);
TableHead.displayName = 'STable.Head';

const TableBody = React.forwardRef<HTMLTableSectionElement, STableBodyProps>(
	({ children, className, ...props }, ref) => (
		<tbody ref={ref} className={clsx('tbody', className)} {...props}>
			{children}
		</tbody>
	),
);
TableBody.displayName = 'STable.Body';

const TableHeaderCell = React.forwardRef<
	HTMLTableCellElement,
	STableHeaderCellProps
>(
	(
		{
			children,
			colSpan,
			rowSpan,
			align = 'left',
			sticky,
			width,
			className,
			...props
		},
		ref,
	) => {
		const stickyClass =
			sticky === 'left'
				? 'sticky left-0 z-20 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.1)]'
				: sticky === 'right'
					? 'sticky right-0 z-20 shadow-[-2px_0_5px_-2px_rgba(0,0,0,0.1)]'
					: '';

		return (
			<th
				ref={ref}
				colSpan={colSpan}
				rowSpan={rowSpan}
				style={{ width }}
				className={clsx(
					'th',
					{
						'text-left': align === 'left',
						'text-center': align === 'center',
						'text-right': align === 'right',
					},
					stickyClass,
					className,
				)}
				{...props}
			>
				{children}
			</th>
		);
	},
);
TableHeaderCell.displayName = 'STable.HeaderCell';

const TableCell = React.forwardRef<HTMLTableCellElement, STableCellProps>(
	(
		{
			children,
			colSpan,
			rowSpan,
			align = 'left',
			sticky,
			width,
			className,
			...props
		},
		ref,
	) => {
		const stickyClass =
			sticky === 'left'
				? 'sticky left-0 z-10 bg-white'
				: sticky === 'right'
					? 'sticky right-0 z-10 bg-white border'
					: '';
		return (
			<td
				ref={ref}
				colSpan={colSpan}
				rowSpan={rowSpan}
				style={{ width }}
				className={clsx(
					'td',
					{
						'text-left': align === 'left',
						'text-center': align === 'center',
						'text-right': align === 'right',
					},
					stickyClass,
					className,
				)}
				{...props}
			>
				{children}
			</td>
		);
	},
);
TableCell.displayName = 'STable.Cell';

const TableRow = React.forwardRef<HTMLTableRowElement, STableRowProps>(
	({ children, selected, className, ...props }, ref) => {
		const { mode, border } = React.useContext(TableContext);

		return (
			<tr
				ref={ref}
				className={clsx(
					'tr',
					{
						'row-dark': mode === 'dark',
						'row-light': mode === 'light',
						'border-full': border === 'full',
						'border-horizontal': border === 'horizontal',
						'row-selected': selected,
					},
					className,
				)}
				{...props}
			>
				{children}
			</tr>
		);
	},
);
TableRow.displayName = 'STable.Row';

const TableComponent = React.forwardRef<HTMLTableElement, STableProps>(
	(
		{
			children,
			variant,
			rounded,
			size,
			loading = false,
			mode = 'light',
			border = 'full',
			className,
			maxWidth = '100%',
			...props
		},
		ref,
	) => {
		const contextValue = React.useMemo(
			() => ({ border, mode }),
			[border, mode],
		);

		return (
			<TableContext.Provider value={contextValue}>
				<table
					ref={ref}
					style={{
						whiteSpace: 'nowrap',
						width: '100%',
					}}
					className={twMerge(
						TableVariants({ variant, size, mode, border }),
						'mb-0 mt-0 border-t-0',
						className,
					)}
					{...props}
				>
					{children}
				</table>
			</TableContext.Provider>
		);
	},
);
TableComponent.displayName = 'STable';

// Compose Table Component with subcomponents
interface TableComponent extends React.ForwardRefExoticComponent<STableProps> {
	Head: typeof TableHead;
	Body: typeof TableBody;
	HeaderCell: typeof TableHeaderCell;
	Cell: typeof TableCell;
	Row: typeof TableRow;
}

const STable = Object.assign(TableComponent, {
	Head: TableHead,
	Body: TableBody,
	HeaderCell: TableHeaderCell,
	Cell: TableCell,
	Row: TableRow,
});

export { STable };
export type {
	STableProps,
	STableHeadProps,
	STableBodyProps,
	STableHeaderCellProps,
	STableCellProps,
	STableRowProps,
};
