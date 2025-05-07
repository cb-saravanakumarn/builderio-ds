import * as React from "react";
import { tv, VariantProps } from "tailwind-variants";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";

// Table Context
interface TableContextProps {
  border?: string | null;
  mode?: string | null;
}

const TableContext = React.createContext<TableContextProps>({
  border: "full",
  mode: "light",
});

const TableVariants = tv({
  base: "s-table",
  variants: {
    variant: {
      primary: "s-table-primary",
      neutral: "s-table-neutral",
      striped: "s-table-striped",
    },
    rounded: {
      none: "s-rounded-none",
      sm: "s-rounded-sm ",
      md: "s-rounded-md ",
      lg: "s-rounded-lg ",
    },
    size: {
      small: "s-table-small",
      regular: "s-table-regular",
      large: "s-table-large",
    },
    mode: {
      light: "s-table-header",
      dark: "s-table-header-dark",
    },
    border: {
      full: "s-border-full",
      horizontal: "s-border-horizontal",
      rounded: "s-rounded",
      none: "s-no-border",
    },
  },
  defaultVariants: {
    variant: "neutral",
    size: "regular",
    mode: "light",
    border: "full",
    rounded: "md",
  },
});

// Table Subcomponents Props
interface TableHeadProps extends React.HTMLAttributes<HTMLTableSectionElement> {
  children: React.ReactNode;
  className?: string;
}

interface TableBodyProps extends React.HTMLAttributes<HTMLTableSectionElement> {
  children: React.ReactNode;
  className?: string;
}

interface TableHeaderCellProps
  extends React.ThHTMLAttributes<HTMLTableHeaderCellElement> {
  children: React.ReactNode;
  colSpan?: number;
  rowSpan?: number;
  align?: "left" | "center" | "right";
  sticky?: "left" | "right";
  width?: string;
  className?: string;
}

interface TableCellProps extends React.TdHTMLAttributes<HTMLTableCellElement> {
  children: React.ReactNode;
  colSpan?: number;
  rowSpan?: number;
  align?: "left" | "center" | "right";
  sticky?: "left" | "right";
  width?: string;
  className?: string;
}

interface TableRowProps extends React.HTMLAttributes<HTMLTableRowElement> {
  children: React.ReactNode;
  selected?: boolean;
  className?: string;
}

interface TableProps
  extends React.HTMLAttributes<HTMLTableElement>,
    VariantProps<typeof TableVariants> {
  children: React.ReactNode;
  className?: string;
  maxWidth?: string | number;
  loading?: boolean;
}

// Table Subcomponents
const TableHead = React.forwardRef<HTMLTableSectionElement, TableHeadProps>(
  ({ children, className, ...props }, ref) => (
    <thead ref={ref} className={clsx("s-thead", className)} {...props}>
      {children}
    </thead>
  )
);
TableHead.displayName = "TableHead";

const TableBody = React.forwardRef<HTMLTableSectionElement, TableBodyProps>(
  ({ children, className, ...props }, ref) => (
    <tbody ref={ref} className={clsx("s-tbody", className)} {...props}>
      {children}
    </tbody>
  )
);
TableBody.displayName = "TableBody";

const TableHeaderCell = React.forwardRef<
  HTMLTableCellElement,
  TableHeaderCellProps
>(
  (
    {
      children,
      colSpan,
      rowSpan,
      align = "left",
      sticky,
      width,
      className,
      ...props
    },
    ref
  ) => {
    const stickyClass =
      sticky === "left"
        ? "s-sticky s-left-0 s-z-20 s-shadow-[2px_0_5px_-2px_rgba(0,0,0,0.1)]"
        : sticky === "right"
        ? "s-sticky s-right-0 s-z-20 s-shadow-[-2px_0_5px_-2px_rgba(0,0,0,0.1)]"
        : "";

    return (
      <th
        ref={ref}
        colSpan={colSpan}
        rowSpan={rowSpan}
        style={{ width }}
        className={clsx(
          "s-th",
          {
            "s-text-left": align === "left",
            "s-text-center": align === "center",
            "s-text-right": align === "right",
          },
          stickyClass,
          className
        )}
        {...props}
      >
        {children}
      </th>
    );
  }
);
TableHeaderCell.displayName = "TableHeaderCell";

const TableCell = React.forwardRef<HTMLTableCellElement, TableCellProps>(
  (
    {
      children,
      colSpan,
      rowSpan,
      align = "left",
      sticky,
      width,
      className,
      ...props
    },
    ref
  ) => {
    const stickyClass =
      sticky === "left"
        ? "s-sticky s-left-0 s-z-10 s-bg-white"
        : sticky === "right"
        ? "s-sticky s-right-0 s-z-10 s-bg-white s-border"
        : "";
    return (
      <td
        ref={ref}
        colSpan={colSpan}
        rowSpan={rowSpan}
        style={{ width }}
        className={clsx(
          "s-td",
          {
            "s-text-left": align === "left",
            "s-text-center": align === "center",
            "s-text-right": align === "right",
          },
          stickyClass,
          className
        )}
        {...props}
      >
        {children}
      </td>
    );
  }
);
TableCell.displayName = "TableCell";

const TableRow = React.forwardRef<HTMLTableRowElement, TableRowProps>(
  ({ children, selected, className, ...props }, ref) => {
    const { mode, border } = React.useContext(TableContext);

    return (
      <tr
        ref={ref}
        className={clsx(
          "s-tr",
          {
            "s-row-dark": mode === "dark",
            "s-row-light": mode === "light",
            "s-border-full": border === "full",
            "s-border-horizontal": border === "horizontal",
            "s-row-selected": selected,
          },
          className
        )}
        {...props}
      >
        {children}
      </tr>
    );
  }
);
TableRow.displayName = "TableRow";

const TableComponent = React.forwardRef<HTMLTableElement, TableProps>(
  (
    {
      children,
      variant,
      rounded,
      size,
      loading = false,
      mode = "light",
      border = "full",
      className,
      maxWidth = "100%",
      ...props
    },
    ref
  ) => {
    const contextValue = React.useMemo(
      () => ({ border, mode }),
      [border, mode]
    );

    return (
      <TableContext.Provider value={contextValue}>
        <div
          className={clsx(
            "s-table-container",
            { "s-table-loading": loading },
            {
              "s-border-full": border === "full",
              "s-border-horizontal": border === "horizontal",
              "s-no-border": border === "none",
              "s-rounded s-border-full": border === "rounded",
            }
          )}
          style={{
            maxWidth,
            position: "relative",
            overflowX: "auto",
            border:
              border === "full"
                ? "1px solid #e2e8f0"
                : border === "horizontal"
                ? "1px solid #e2e8f0"
                : "none",
            borderRadius:
              rounded === "sm"
                ? "0.125rem"
                : rounded === "md"
                ? "0.375rem"
                : rounded === "lg"
                ? "0.5rem"
                : "0",
          }}
        >
          <table
            ref={ref}
            style={{
              whiteSpace: "nowrap",
              width: "100%",
            }}
            className={twMerge(
              TableVariants({ variant, size, mode, border }),
              "s-mt-0 s-mb-0 s-border-t-0 !important",
              className
            )}
            {...props}
          >
            {children}
          </table>
        </div>
      </TableContext.Provider>
    );
  }
);
TableComponent.displayName = "Table";

// Compose Table Component with subcomponents
interface TableComponent extends React.ForwardRefExoticComponent<TableProps> {
  Head: typeof TableHead;
  Body: typeof TableBody;
  HeaderCell: typeof TableHeaderCell;
  Cell: typeof TableCell;
  Row: typeof TableRow;
}

const STable = TableComponent as TableComponent;
STable.Head = TableHead;
STable.Body = TableBody;
STable.HeaderCell = TableHeaderCell;
STable.Cell = TableCell;
STable.Row = TableRow;

export { STable, TableVariants as STableVariants };
export type {
  TableProps as STableProps,
  TableHeadProps as STableHeadProps,
  TableBodyProps as STableBodyProps,
  TableHeaderCellProps as STableHeaderCellProps,
  TableCellProps as STableCellProps,
  TableRowProps as STableRowProps,
};
