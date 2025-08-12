# Component Name

STable

## Description

The STable component is a comprehensive and flexible table system built using a compound component pattern. It provides a collection of sub-components for creating rich, well-structured tables with consistent styling and behavior. The table system includes support for fixed or auto layout, sticky headers, proper semantic structure, and responsive design. Built with accessibility in mind, it provides proper table semantics and styling for data presentation across the application.

## TypeScript Types

The STable component is composed of multiple sub-components, each with their own props:

```typescript
/**
 * Props for the STable Root component
 */
export interface STableProps extends React.ComponentProps<"table"> {
  /**
   * Layout algorithm for the table
   * 'fixed' creates equal-width columns, 'auto' sizes columns based on content
   * @default 'auto'
   */
  layout?: "fixed" | "auto";

  /**
   * Additional CSS classes for the table wrapper
   */
  className?: string;

  /**
   * Table content
   */
  children: React.ReactNode;
}

/**
 * Props for the STable Head component
 */
export interface STableHeadProps extends React.ComponentProps<"thead"> {
  /**
   * Whether the table header should stick to the top when scrolling
   * @default false
   */
  sticky?: boolean;

  /**
   * Additional CSS classes for the table head
   */
  className?: string;

  /**
   * Table head content
   */
  children: React.ReactNode;
}

/**
 * Props for the STable Body component
 */
export interface STableBodyProps extends React.ComponentProps<"tbody"> {
  /**
   * Additional CSS classes for the table body
   */
  className?: string;

  /**
   * Table body content
   */
  children: React.ReactNode;
}

/**
 * Props for the STable Footer component
 */
export interface STableFooterProps extends React.ComponentProps<"tfoot"> {
  /**
   * Table footer content
   */
  children: React.ReactNode;
}

/**
 * Props for the STable Row component
 */
export interface STableRowProps extends React.ComponentProps<"tr"> {
  /**
   * Row content
   */
  children: React.ReactNode;
}

/**
 * Props for the STable Cell component
 */
export interface STableCellProps extends React.ComponentProps<"td"> {
  /**
   * Cell content
   */
  children: React.ReactNode;
}

/**
 * Props for the STable HeaderCell component
 */
export interface STableHeaderCellProps extends React.ComponentProps<"th"> {
  /**
   * Header cell content
   */
  children: React.ReactNode;
}
```

## Examples

Here are comprehensive examples demonstrating various ways to use the STable component:

### Basic Table Usage

```tsx
import React from "react";
import { STable } from "@chargebee/sting-react";

const BasicTableExample = () => {
  const data = [
    { id: 1, name: "John Doe", email: "john@example.com", role: "Admin" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "User" },
    { id: 3, name: "Bob Johnson", email: "bob@example.com", role: "Moderator" },
  ];

  return (
    <STable>
      <STable.Head>
        <STable.Row>
          <STable.HeaderCell>ID</STable.HeaderCell>
          <STable.HeaderCell>Name</STable.HeaderCell>
          <STable.HeaderCell>Email</STable.HeaderCell>
          <STable.HeaderCell>Role</STable.HeaderCell>
        </STable.Row>
      </STable.Head>
      <STable.Body>
        {data.map((user) => (
          <STable.Row key={user.id}>
            <STable.Cell>{user.id}</STable.Cell>
            <STable.Cell>{user.name}</STable.Cell>
            <STable.Cell>{user.email}</STable.Cell>
            <STable.Cell>{user.role}</STable.Cell>
          </STable.Row>
        ))}
      </STable.Body>
    </STable>
  );
};

export default BasicTableExample;
```

### Table with Sticky Header

```tsx
import React from "react";
import { STable } from "@chargebee/sting-react";

const StickyHeaderTableExample = () => {
  const transactions = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    date: new Date(2024, 0, i + 1).toLocaleDateString(),
    amount: `$${(Math.random() * 1000).toFixed(2)}`,
    status: i % 3 === 0 ? "Pending" : i % 2 === 0 ? "Completed" : "Failed",
  }));

  return (
    <STable className="max-h-96">
      <STable.Head sticky>
        <STable.Row>
          <STable.HeaderCell>Transaction ID</STable.HeaderCell>
          <STable.HeaderCell>Date</STable.HeaderCell>
          <STable.HeaderCell>Amount</STable.HeaderCell>
          <STable.HeaderCell>Status</STable.HeaderCell>
        </STable.Row>
      </STable.Head>
      <STable.Body>
        {transactions.map((transaction) => (
          <STable.Row key={transaction.id}>
            <STable.Cell>{transaction.id}</STable.Cell>
            <STable.Cell>{transaction.date}</STable.Cell>
            <STable.Cell>{transaction.amount}</STable.Cell>
            <STable.Cell>{transaction.status}</STable.Cell>
          </STable.Row>
        ))}
      </STable.Body>
    </STable>
  );
};

export default StickyHeaderTableExample;
```

### Table with Fixed Layout

```tsx
import React from "react";
import { STable } from "@chargebee/sting-react";

const FixedLayoutTableExample = () => {
  const products = [
    {
      id: 1,
      name: "Premium Software License with Extended Support and Maintenance",
      description:
        "This is a very long description that would normally cause layout issues in a table without fixed layout. It includes comprehensive details about the product features and benefits.",
      price: "$299.99",
    },
    {
      id: 2,
      name: "Basic Plan",
      description: "Short description",
      price: "$29.99",
    },
  ];

  return (
    <STable layout="fixed">
      <STable.Head>
        <STable.Row>
          <STable.HeaderCell>Product Name</STable.HeaderCell>
          <STable.HeaderCell>Description</STable.HeaderCell>
          <STable.HeaderCell>Price</STable.HeaderCell>
        </STable.Row>
      </STable.Head>
      <STable.Body>
        {products.map((product) => (
          <STable.Row key={product.id}>
            <STable.Cell>{product.name}</STable.Cell>
            <STable.Cell>{product.description}</STable.Cell>
            <STable.Cell>{product.price}</STable.Cell>
          </STable.Row>
        ))}
      </STable.Body>
    </STable>
  );
};

export default FixedLayoutTableExample;
```

### Table with Footer

```tsx
import React from "react";
import { STable } from "@chargebee/sting-react";

const TableWithFooterExample = () => {
  const orders = [
    { id: 1, item: "Laptop", quantity: 2, price: 1200, total: 2400 },
    { id: 2, item: "Mouse", quantity: 5, price: 25, total: 125 },
    { id: 3, item: "Keyboard", quantity: 3, price: 75, total: 225 },
  ];

  const grandTotal = orders.reduce((sum, order) => sum + order.total, 0);

  return (
    <STable>
      <STable.Head>
        <STable.Row>
          <STable.HeaderCell>Item</STable.HeaderCell>
          <STable.HeaderCell>Quantity</STable.HeaderCell>
          <STable.HeaderCell>Unit Price</STable.HeaderCell>
          <STable.HeaderCell>Total</STable.HeaderCell>
        </STable.Row>
      </STable.Head>
      <STable.Body>
        {orders.map((order) => (
          <STable.Row key={order.id}>
            <STable.Cell>{order.item}</STable.Cell>
            <STable.Cell>{order.quantity}</STable.Cell>
            <STable.Cell>${order.price}</STable.Cell>
            <STable.Cell>${order.total}</STable.Cell>
          </STable.Row>
        ))}
      </STable.Body>
      <STable.Footer>
        <STable.Row>
          <STable.Cell colSpan={3} className="text-right font-semibold">
            Grand Total:
          </STable.Cell>
          <STable.Cell className="font-semibold">${grandTotal}</STable.Cell>
        </STable.Row>
      </STable.Footer>
    </STable>
  );
};

export default TableWithFooterExample;
```

## Component Structure

The STable component follows a compound component pattern with the following structure:

- **STable** (Root): The main table wrapper that provides the container and layout
- **STable.Head**: Table header section with optional sticky positioning
- **STable.Body**: Table body section containing the main data rows
- **STable.Footer**: Table footer section for summaries or totals
- **STable.Row**: Individual table row component
- **STable.Cell**: Standard table data cell
- **STable.HeaderCell**: Table header cell with proper styling

## Key Features

- **Responsive Design**: Automatically handles overflow with horizontal scrolling
- **Flexible Layout**: Supports both fixed and auto table layouts
- **Sticky Headers**: Optional sticky positioning for table headers
- **Semantic HTML**: Proper table structure for accessibility
- **Consistent Styling**: Built-in styles that follow the design system
- **Hover Effects**: Row hover states for better user interaction
- **Border Management**: Consistent border styling throughout the table

## Accessibility

The STable component is built with accessibility in mind:

- Uses proper semantic HTML table elements
- Supports screen readers through proper table structure
- Maintains keyboard navigation compatibility
- Provides proper focus states for interactive elements

## Best Practices

1. **Use appropriate headers**: Always include `STable.Head` with `STable.HeaderCell` for data tables
2. **Consider layout**: Use `layout="fixed"` for tables with long content to prevent layout shifts
3. **Sticky headers**: Use sticky headers for long tables to maintain context while scrolling
4. **Responsive design**: Ensure tables work well on different screen sizes
5. **Loading states**: Consider adding loading states for tables with async data
6. **Empty states**: Provide appropriate empty state handling when no data is available
