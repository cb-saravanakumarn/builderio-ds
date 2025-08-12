# Component Name

SBreadcrumb

## Description

The SBreadcrumb component is a navigation component that helps users understand their current location within a website's hierarchy. Built on top of Radix UI's Slot component, it provides flexible breadcrumb navigation with support for truncation, custom separators, icons, and custom link components. The component offers two usage patterns: a children-based approach using `SBreadcrumb.Item` components, or a data-driven approach using the `items` prop. It's designed with accessibility in mind, providing proper ARIA attributes and semantic navigation structure.

## TypeScript Types

The following types represent the props that the SBreadcrumb and SBreadcrumb.Item components accept:

```typescript
/**
 * Props for individual breadcrumb items
 */
export interface SBreadcrumbItemProps
  extends ComponentPropsWithout<"li", RemovedProps> {
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

/**
 * Data type for items when using the items prop
 */
export type SBreadcrumbItemData = Omit<SBreadcrumbItemProps, "linkComponent">;

/**
 * Props for the main SBreadcrumb component
 */
export interface SBreadcrumbProps
  extends ComponentPropsWithout<"nav", RemovedProps> {
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
```

## Examples

Here are comprehensive examples demonstrating various ways to use the SBreadcrumb component:

### Basic Breadcrumb Usage

```tsx
import React from "react";
import { SBreadcrumb } from "@chargebee/sting-react";

const BasicBreadcrumbExample = () => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">Simple Breadcrumb</h3>
        <SBreadcrumb>
          <SBreadcrumb.Item label="Home" href="/" />
          <SBreadcrumb.Item label="Products" href="/products" />
          <SBreadcrumb.Item label="Category" href="/products/category" />
          <SBreadcrumb.Item label="Current Page" />
        </SBreadcrumb>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Using Items Prop</h3>
        <SBreadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Products", href: "/products" },
            { label: "Electronics", href: "/products/electronics" },
            { label: "Current Page" },
          ]}
        />
      </div>
    </div>
  );
};

export default BasicBreadcrumbExample;
```

### Custom Separators

```tsx
import React from "react";
import { SBreadcrumb } from "@chargebee/sting-react";
import { ChevronRight } from "lucide-react";

const CustomSeparatorExample = () => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">Text Separator</h3>
        <SBreadcrumb separator=">">
          <SBreadcrumb.Item label="Home" href="/" />
          <SBreadcrumb.Item label="Products" href="/products" />
          <SBreadcrumb.Item label="Current Page" />
        </SBreadcrumb>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Icon Separator</h3>
        <SBreadcrumb
          separator={<ChevronRight size={16} className="text-gray-400" />}
          items={[
            { label: "Dashboard", href: "/dashboard" },
            { label: "Settings", href: "/dashboard/settings" },
            { label: "Profile", href: "/dashboard/settings/profile" },
            { label: "Current Page" },
          ]}
        />
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Custom SVG Separator</h3>
        <SBreadcrumb
          separator={
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 12L10 8L6 4"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          }
        >
          <SBreadcrumb.Item label="Home" href="/" />
          <SBreadcrumb.Item label="Products" href="/products" />
          <SBreadcrumb.Item label="Current Page" />
        </SBreadcrumb>
      </div>
    </div>
  );
};

export default CustomSeparatorExample;
```

### Breadcrumbs with Icons

```tsx
import React from "react";
import { SBreadcrumb } from "@chargebee/sting-react";
import { Home, ShoppingCart, Package, Settings } from "lucide-react";

const BreadcrumbWithIconsExample = () => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">Individual Item Icons</h3>
        <SBreadcrumb>
          <SBreadcrumb.Item label="Home" href="/" icon={<Home size={16} />} />
          <SBreadcrumb.Item
            label="Products"
            href="/products"
            icon={<ShoppingCart size={16} />}
          />
          <SBreadcrumb.Item
            label="Electronics"
            href="/products/electronics"
            icon={<Package size={16} />}
          />
          <SBreadcrumb.Item label="Current Page" />
        </SBreadcrumb>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">
          Mixed Icons and Plain Text
        </h3>
        <SBreadcrumb
          items={[
            {
              label: "Dashboard",
              href: "/dashboard",
              icon: <Home size={16} />,
            },
            {
              label: "Settings",
              href: "/dashboard/settings",
              icon: <Settings size={16} />,
            },
            { label: "User Management", href: "/dashboard/settings/users" },
            { label: "Current Page" },
          ]}
        />
      </div>
    </div>
  );
};

export default BreadcrumbWithIconsExample;
```

### Truncation and Ellipsis

```tsx
import React from "react";
import { SBreadcrumb } from "@chargebee/sting-react";

const TruncationExample = () => {
  const longBreadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: "Electronics", href: "/products/electronics" },
    { label: "Computers", href: "/products/electronics/computers" },
    { label: "Laptops", href: "/products/electronics/computers/laptops" },
    {
      label: "Gaming Laptops",
      href: "/products/electronics/computers/laptops/gaming",
    },
    {
      label: "ASUS",
      href: "/products/electronics/computers/laptops/gaming/asus",
    },
    {
      label: "ROG Series",
      href: "/products/electronics/computers/laptops/gaming/asus/rog",
    },
    { label: "Zephyrus G14" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">No Truncation (Default)</h3>
        <SBreadcrumb items={longBreadcrumbItems} />
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Truncated to 5 Items</h3>
        <SBreadcrumb items={longBreadcrumbItems} maxItems={5} />
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Truncated to 3 Items</h3>
        <SBreadcrumb items={longBreadcrumbItems} maxItems={3} />
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Custom Ellipsis</h3>
        <SBreadcrumb items={longBreadcrumbItems} maxItems={4} ellipsis="•••" />
      </div>
    </div>
  );
};

export default TruncationExample;
```

### Item Width Truncation

```tsx
import React from "react";
import { SBreadcrumb } from "@chargebee/sting-react";

const ItemTruncationExample = () => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">Default Item Width</h3>
        <SBreadcrumb>
          <SBreadcrumb.Item label="Home" href="/" />
          <SBreadcrumb.Item
            label="Products with a Very Long Name"
            href="/products"
          />
          <SBreadcrumb.Item
            label="Another Extremely Long Category Name That Should Truncate"
            href="/category"
          />
          <SBreadcrumb.Item label="Final Destination with Extra Text for Demonstration" />
        </SBreadcrumb>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">
          Custom Max Item Width (100px)
        </h3>
        <SBreadcrumb maxItemWidth={100}>
          <SBreadcrumb.Item label="Home" href="/" />
          <SBreadcrumb.Item
            label="Products with a Very Long Name"
            href="/products"
          />
          <SBreadcrumb.Item
            label="Another Extremely Long Category Name That Should Truncate"
            href="/category"
          />
          <SBreadcrumb.Item label="Final Destination with Extra Text for Demonstration" />
        </SBreadcrumb>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">
          Individual Item Width Override
        </h3>
        <SBreadcrumb>
          <SBreadcrumb.Item label="Home" href="/" />
          <SBreadcrumb.Item
            label="Products with a Very Long Name"
            href="/products"
            maxWidth={150}
          />
          <SBreadcrumb.Item label="Short Category" href="/category" />
          <SBreadcrumb.Item
            label="Final Destination with Extra Text for Demonstration"
            maxWidth={80}
          />
        </SBreadcrumb>
      </div>
    </div>
  );
};

export default ItemTruncationExample;
```

### Custom Link Components

```tsx
import React from "react";
import { SBreadcrumb } from "@chargebee/sting-react";

// Mock Next.js Link component for demonstration
const NextLink = ({ href, children, className, ...props }) => {
  const handleClick = (e) => {
    e.preventDefault();
    console.log(`Navigate to: ${href}`);
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={`${className} next-link`}
      {...props}
    >
      {children}
    </a>
  );
};

// Mock React Router Link component for demonstration
const RouterLink = ({ to, children, className, ...props }) => {
  const handleClick = (e) => {
    e.preventDefault();
    console.log(`Router navigate to: ${to}`);
  };

  return (
    <a
      href={to}
      onClick={handleClick}
      className={`${className} router-link`}
      {...props}
    >
      {children}
    </a>
  );
};

const CustomLinkExample = () => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">Next.js Link Integration</h3>
        <SBreadcrumb linkComponent={NextLink}>
          <SBreadcrumb.Item label="Home" href="/" />
          <SBreadcrumb.Item label="Products" href="/products" />
          <SBreadcrumb.Item label="Electronics" href="/products/electronics" />
          <SBreadcrumb.Item label="Current Page" />
        </SBreadcrumb>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">
          React Router Link Integration
        </h3>
        <SBreadcrumb>
          <SBreadcrumb.Item
            label="Dashboard"
            href="/dashboard"
            linkComponent={RouterLink}
            linkProps={{ to: "/dashboard" }}
          />
          <SBreadcrumb.Item
            label="Settings"
            href="/dashboard/settings"
            linkComponent={RouterLink}
            linkProps={{ to: "/dashboard/settings" }}
          />
          <SBreadcrumb.Item label="Current Page" />
        </SBreadcrumb>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Mixed Link Components</h3>
        <SBreadcrumb>
          <SBreadcrumb.Item label="Home" href="/" />
          <SBreadcrumb.Item
            label="External Link"
            href="https://example.com"
            linkComponent="a"
            linkProps={{
              target: "_blank",
              rel: "noopener noreferrer",
            }}
          />
          <SBreadcrumb.Item
            label="Internal Page"
            href="/page"
            linkComponent={NextLink}
          />
          <SBreadcrumb.Item label="Current Page" />
        </SBreadcrumb>
      </div>
    </div>
  );
};

export default CustomLinkExample;
```

### Advanced Usage with Radix UI Slot

```tsx
import React from "react";
import { SBreadcrumb } from "@chargebee/sting-react";

const AdvancedUsageExample = () => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">
          Custom Navigation Container
        </h3>
        <SBreadcrumb asChild>
          <nav
            className="bg-gray-50 p-4 rounded-lg border"
            aria-label="Custom breadcrumb navigation"
          >
            <SBreadcrumb.Item label="Home" href="/" />
            <SBreadcrumb.Item label="Products" href="/products" />
            <SBreadcrumb.Item label="Current Page" />
          </nav>
        </SBreadcrumb>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">With Test IDs</h3>
        <SBreadcrumb testId="main-breadcrumb">
          <SBreadcrumb.Item label="Home" href="/" />
          <SBreadcrumb.Item label="Dashboard" href="/dashboard" />
          <SBreadcrumb.Item label="Settings" href="/dashboard/settings" />
          <SBreadcrumb.Item label="Current Page" />
        </SBreadcrumb>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">
          Programmatically Generated
        </h3>
        {(() => {
          const pathSegments = [
            { name: "Home", path: "/" },
            { name: "Users", path: "/users" },
            { name: "Profile", path: "/users/profile" },
            { name: "Edit Profile", path: null },
          ];

          return (
            <SBreadcrumb>
              {pathSegments.map((segment, index) => (
                <SBreadcrumb.Item
                  key={index}
                  label={segment.name}
                  href={segment.path}
                  current={index === pathSegments.length - 1}
                />
              ))}
            </SBreadcrumb>
          );
        })()}
      </div>
    </div>
  );
};

export default AdvancedUsageExample;
```

### Real-world E-commerce Example

```tsx
import React from "react";
import { SBreadcrumb } from "@chargebee/sting-react";
import { Home, ShoppingBag, Package } from "lucide-react";

const EcommerceExample = () => {
  // Simulated product category data
  const productPath = {
    category: "Electronics",
    subcategory: "Computers",
    brand: "Apple",
    product: "MacBook Pro 16-inch",
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">Product Page Breadcrumb</h3>
        <SBreadcrumb separator="›" maxItemWidth={150}>
          <SBreadcrumb.Item label="Home" href="/" icon={<Home size={16} />} />
          <SBreadcrumb.Item
            label="Shop"
            href="/shop"
            icon={<ShoppingBag size={16} />}
          />
          <SBreadcrumb.Item
            label={productPath.category}
            href={`/shop/${productPath.category.toLowerCase()}`}
          />
          <SBreadcrumb.Item
            label={productPath.subcategory}
            href={`/shop/${productPath.category.toLowerCase()}/${productPath.subcategory.toLowerCase()}`}
          />
          <SBreadcrumb.Item
            label={productPath.brand}
            href={`/shop/${productPath.category.toLowerCase()}/${productPath.subcategory.toLowerCase()}/${productPath.brand.toLowerCase()}`}
          />
          <SBreadcrumb.Item
            label={productPath.product}
            icon={<Package size={16} />}
          />
        </SBreadcrumb>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">
          With Truncation for Long Paths
        </h3>
        <SBreadcrumb
          maxItems={4}
          ellipsis="..."
          items={[
            { label: "Home", href: "/", icon: <Home size={16} /> },
            { label: "Electronics", href: "/electronics" },
            { label: "Computers & Laptops", href: "/electronics/computers" },
            { label: "Gaming Laptops", href: "/electronics/computers/gaming" },
            {
              label: "High-Performance Gaming",
              href: "/electronics/computers/gaming/high-performance",
            },
            {
              label: "ASUS ROG Series",
              href: "/electronics/computers/gaming/high-performance/asus-rog",
            },
            { label: "Zephyrus G14 (2024)" },
          ]}
        />
      </div>
    </div>
  );
};

export default EcommerceExample;
```

## Key Features

- **Flexible Usage Patterns**: Supports both children-based (`SBreadcrumb.Item`) and data-driven (`items` prop) approaches
- **Custom Separators**: Use text, icons, or custom React components as separators between items
- **Smart Truncation**: Automatically truncate long breadcrumb trails with configurable `maxItems` and custom ellipsis
- **Item Width Control**: Set maximum width for individual items with automatic text truncation and tooltips
- **Icon Support**: Add icons to individual breadcrumb items for better visual hierarchy
- **Custom Link Components**: Integrate with routing libraries like Next.js Link or React Router
- **Accessibility**: Proper ARIA labels, semantic navigation structure, and keyboard navigation support
- **Radix UI Slot Integration**: Use `asChild` prop for flexible composition with custom containers
- **Test-Friendly**: Built-in support for test IDs with automatic item indexing
- **TypeScript Support**: Comprehensive type definitions for better developer experience
- **Responsive Design**: Handles text overflow gracefully with CSS truncation and tooltips
- **Current Page Indication**: Automatically marks the last item as current page with proper ARIA attributes
