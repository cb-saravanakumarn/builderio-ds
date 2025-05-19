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
  base: "table",
  variants: {
    variant: {
      primary: "table-primary",
      neutral: "table-neutral",
      striped: "table-striped",
    },
    rounded: {
      none: "rounded-none",
      sm: "rounded-sm ",
      md: "rounded-md ",
      lg: "rounded-lg ",
    },
    size: {
      small: "table-small",
      regular: "table-regular",
      large: "table-large",
    },
    mode: {
      light: "table-header",
      dark: "table-header-dark",
    },
    border: {
      full: "border-full",
      horizontal: "border-horizontal",
      rounded: "rounded",
      none: "no-border",
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
    <thead ref={ref} className={clsx("thead", className)} {...props}>
      {children}
    </thead>
  )
);
TableHead.displayName = "TableHead";

const TableBody = React.forwardRef<HTMLTableSectionElement, TableBodyProps>(
  ({ children, className, ...props }, ref) => (
    <tbody ref={ref} className={clsx("tbody", className)} {...props}>
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
        ? "sticky left-0 z-20 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.1)]"
        : sticky === "right"
        ? "sticky right-0 z-20 shadow-[-2px_0_5px_-2px_rgba(0,0,0,0.1)]"
        : "";

    return (
      <th
        ref={ref}
        colSpan={colSpan}
        rowSpan={rowSpan}
        style={{ width }}
        className={clsx(
          "th",
          {
            "text-left": align === "left",
            "text-center": align === "center",
            "text-right": align === "right",
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
        ? "sticky left-0 z-10 bg-white"
        : sticky === "right"
        ? "sticky right-0 z-10 bg-white border"
        : "";
    return (
      <td
        ref={ref}
        colSpan={colSpan}
        rowSpan={rowSpan}
        style={{ width }}
        className={clsx(
          "td",
          {
            "text-left": align === "left",
            "text-center": align === "center",
            "text-right": align === "right",
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
          "tr",
          {
            "row-dark": mode === "dark",
            "row-light": mode === "light",
            "border-full": border === "full",
            "border-horizontal": border === "horizontal",
            "row-selected": selected,
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
        <table
          ref={ref}
          style={{
            whiteSpace: "nowrap",
            width: "100%",
          }}
          className={twMerge(
            TableVariants({ variant, size, mode, border }),
            "mt-0 mb-0 border-t-0",
            className
          )}
          {...props}
        >
          {children}
        </table>
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
