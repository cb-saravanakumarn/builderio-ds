# Component Name

SPageHeader

## Description

The SPageHeader component is a comprehensive page header component that provides a consistent layout for page titles, breadcrumbs, metadata, descriptions, and actions. It serves as the primary navigation and information header for pages in your application, offering flexible composition of various UI elements including breadcrumb navigation, page titles, metadata badges, descriptive text, and action buttons. The component is designed with accessibility in mind and provides a clean, structured layout that adapts to different content combinations.

## TypeScript Types

The following types represent the props that the SPageHeader component accepts:

```typescript
/**
 * Props for the SPageHeader component
 */
export interface SPageHeaderProps
  extends ComponentPropsWithout<"div", RemovedProps | "title"> {
  /**
   * Breadcrumb navigation component
   * Typically an SBreadcrumb component for navigation hierarchy
   */
  breadcrumb?: React.ReactElement<typeof SBreadcrumb>;

  /**
   * Page title content
   * Can be a string or any React node for custom title styling
   */
  title?: React.ReactNode;

  /**
   * Metadata badges or other meta information
   * Used for displaying status badges, tags, or other contextual info
   */
  metaData?: React.ReactNode;

  /**
   * Page description text
   * Provides additional context or explanation about the page content
   */
  description?: React.ReactNode;

  /**
   * Action buttons or controls
   * Primary actions like create, edit, or other page-level operations
   */
  actions?: React.ReactNode;

  /**
   * Leading action icon (dismiss/back button)
   * Typically used for back navigation or dismissing the current view
   */
  leadingAction?: React.ReactNode;

  /**
   * Callback function when the leading action is clicked
   * If provided, the leading action will be wrapped in a clickable button
   */
  onLeadingActionClick?: () => void;

  /**
   * Additional CSS classes
   * Used for custom styling alongside the default styles
   */
  className?: string;

  /**
   * Add data-test id's for using it in testcases
   * Useful for automated testing and element identification
   */
  dataTestId?: string;
}
```

## Examples

Here are comprehensive examples demonstrating various ways to use the SPageHeader component:

### Basic Page Header with Title

```tsx
import React from "react";
import { SPageHeader } from "@chargebee/sting-react";

const BasicPageHeaderExample = () => {
  return (
    <div className="space-y-6">
      <SPageHeader
        title="Dashboard"
        description="Overview of your account and recent activity"
      />

      <SPageHeader
        title="User Management"
        description="Manage user accounts, permissions, and access controls for your organization"
      />
    </div>
  );
};

export default BasicPageHeaderExample;
```

### Page Header with Breadcrumbs

```tsx
import React from "react";
import { SPageHeader, SBreadcrumb } from "@chargebee/sting-react";

const PageHeaderWithBreadcrumbsExample = () => {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects" },
    { label: "Project Alpha", href: "/projects/alpha" },
    { label: "Settings", isCurrent: true },
  ];

  return (
    <SPageHeader
      breadcrumb={<SBreadcrumb items={breadcrumbItems} />}
      title="Project Settings"
      description="Configure your project settings, integrations, and team access"
    />
  );
};

export default PageHeaderWithBreadcrumbsExample;
```

### Page Header with Actions

```tsx
import React from "react";
import { SPageHeader, SButton } from "@chargebee/sting-react";
import { Plus, Settings, MoreHorizontal } from "lucide-react";

const PageHeaderWithActionsExample = () => {
  return (
    <div className="space-y-6">
      <SPageHeader
        title="Customers"
        description="Manage your customer database and relationships"
        actions={
          <>
            <SButton variant="neutral" icon={<Settings size={16} />}>
              Settings
            </SButton>
            <SButton variant="primary" icon={<Plus size={16} />}>
              Add Customer
            </SButton>
          </>
        }
      />

      <SPageHeader
        title="Invoices"
        description="View and manage all your invoices and billing information"
        actions={
          <>
            <SButton
              variant="neutral-ghost"
              icon={<MoreHorizontal size={16} />}
            >
              More
            </SButton>
            <SButton variant="primary-outline">Export</SButton>
            <SButton variant="primary" icon={<Plus size={16} />}>
              Create Invoice
            </SButton>
          </>
        }
      />
    </div>
  );
};

export default PageHeaderWithActionsExample;
```

### Page Header with Metadata

```tsx
import React from "react";
import { SPageHeader, SBadge } from "@chargebee/sting-react";

const PageHeaderWithMetadataExample = () => {
  return (
    <div className="space-y-6">
      <SPageHeader
        title="Project Alpha"
        description="Advanced AI-powered analytics platform for enterprise customers"
        metaData={
          <>
            <SBadge variant="success">Active</SBadge>
            <SBadge variant="neutral">v2.1.0</SBadge>
            <SBadge variant="warning">Beta</SBadge>
          </>
        }
      />

      <SPageHeader
        title="Customer Support Ticket #12345"
        description="High priority issue regarding billing discrepancies"
        metaData={
          <>
            <SBadge variant="danger">High Priority</SBadge>
            <SBadge variant="neutral">Billing</SBadge>
            <span className="text-sm text-neutral-500">
              Created 2 hours ago
            </span>
          </>
        }
      />
    </div>
  );
};

export default PageHeaderWithMetadataExample;
```

### Page Header with Leading Action

```tsx
import React from "react";
import { SPageHeader, SBreadcrumb, SButton } from "@chargebee/sting-react";
import { ArrowLeft, X, Save } from "lucide-react";

const PageHeaderWithLeadingActionExample = () => {
  const handleBack = () => {
    console.log("Going back to previous page");
    // Navigation logic here
  };

  const handleClose = () => {
    console.log("Closing modal or overlay");
    // Close logic here
  };

  return (
    <div className="space-y-6">
      {/* Back button example */}
      <SPageHeader
        leadingAction={<ArrowLeft size={20} />}
        onLeadingActionClick={handleBack}
        title="Edit Customer Details"
        description="Update customer information and account settings"
        actions={
          <>
            <SButton variant="neutral">Cancel</SButton>
            <SButton variant="primary" icon={<Save size={16} />}>
              Save Changes
            </SButton>
          </>
        }
      />

      {/* Close button example */}
      <SPageHeader
        leadingAction={<X size={20} />}
        onLeadingActionClick={handleClose}
        title="Invoice Details"
        description="View detailed information about this invoice"
      />

      {/* Non-clickable leading icon */}
      <SPageHeader
        leadingAction={<ArrowLeft size={20} />}
        title="Read-only View"
        description="This is a read-only view with a decorative back icon"
      />
    </div>
  );
};

export default PageHeaderWithLeadingActionExample;
```

### Complete Page Header Example

```tsx
import React from "react";
import {
  SPageHeader,
  SBreadcrumb,
  SButton,
  SBadge,
} from "@chargebee/sting-react";
import { ArrowLeft, Settings, Share, MoreHorizontal } from "lucide-react";

const CompletePageHeaderExample = () => {
  const breadcrumbItems = [
    { label: "Projects", href: "/projects" },
    { label: "Enterprise Solutions", href: "/projects/enterprise" },
    { label: "Customer Portal", isCurrent: true },
  ];

  const handleBack = () => {
    console.log("Navigating back to projects list");
  };

  const handleShare = () => {
    console.log("Opening share dialog");
  };

  const handleSettings = () => {
    console.log("Opening project settings");
  };

  return (
    <SPageHeader
      breadcrumb={<SBreadcrumb items={breadcrumbItems} />}
      leadingAction={<ArrowLeft size={20} />}
      onLeadingActionClick={handleBack}
      title="Customer Portal v3.0"
      metaData={
        <>
          <SBadge variant="success">Production</SBadge>
          <SBadge variant="neutral">React</SBadge>
          <SBadge variant="info">Enterprise</SBadge>
          <span className="text-sm text-neutral-500">
            Last updated 3 days ago
          </span>
        </>
      }
      description="Self-service customer portal with advanced analytics, billing management, and support ticket integration. Built with React and TypeScript for optimal performance and scalability."
      actions={
        <>
          <SButton variant="neutral-ghost" icon={<MoreHorizontal size={16} />}>
            More
          </SButton>
          <SButton
            variant="neutral"
            icon={<Share size={16} />}
            onClick={handleShare}
          >
            Share
          </SButton>
          <SButton
            variant="primary"
            icon={<Settings size={16} />}
            onClick={handleSettings}
          >
            Settings
          </SButton>
        </>
      }
      dataTestId="customer-portal-header"
    />
  );
};

export default CompletePageHeaderExample;
```

### Responsive Page Header Layout

```tsx
import React, { useState } from "react";
import { SPageHeader, SButton } from "@chargebee/sting-react";
import { Menu, Plus, Filter, Search } from "lucide-react";

const ResponsivePageHeaderExample = () => {
  const [showMobileActions, setShowMobileActions] = useState(false);

  return (
    <div className="space-y-6">
      {/* Desktop layout */}
      <div className="hidden md:block">
        <SPageHeader
          title="Analytics Dashboard"
          description="Real-time insights and performance metrics for your business"
          actions={
            <>
              <SButton variant="neutral" icon={<Filter size={16} />}>
                Filter
              </SButton>
              <SButton variant="neutral" icon={<Search size={16} />}>
                Search
              </SButton>
              <SButton variant="primary" icon={<Plus size={16} />}>
                New Report
              </SButton>
            </>
          }
        />
      </div>

      {/* Mobile layout */}
      <div className="md:hidden">
        <SPageHeader
          title="Analytics Dashboard"
          description="Real-time insights and performance metrics"
          actions={
            <>
              <SButton
                variant="neutral-ghost"
                icon={<Menu size={16} />}
                onClick={() => setShowMobileActions(!showMobileActions)}
              >
                Menu
              </SButton>
              <SButton variant="primary" icon={<Plus size={16} />}>
                New
              </SButton>
            </>
          }
        />

        {/* Mobile actions dropdown */}
        {showMobileActions && (
          <div className="mt-4 p-4 bg-neutral-50 rounded-lg space-y-2">
            <SButton variant="neutral" fullWidth icon={<Filter size={16} />}>
              Filter Results
            </SButton>
            <SButton variant="neutral" fullWidth icon={<Search size={16} />}>
              Search Data
            </SButton>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResponsivePageHeaderExample;
```

## Key Features

- **Flexible Layout**: Supports various combinations of breadcrumbs, titles, metadata, descriptions, and actions
- **Leading Action Support**: Optional back/dismiss button with customizable icon and click handler
- **Breadcrumb Integration**: Seamless integration with SBreadcrumb component for navigation hierarchy
- **Metadata Display**: Flexible metadata section for badges, tags, and other contextual information
- **Action Controls**: Dedicated area for primary page actions and controls
- **Responsive Design**: Built with responsive design principles and mobile-friendly layouts
- **Accessibility**: Proper semantic HTML structure with ARIA attributes for screen readers
- **TypeScript Support**: Comprehensive type definitions for better developer experience
- **Consistent Styling**: Uses design system tokens for consistent spacing, typography, and colors
- **Test-Friendly**: Built-in data-testid support for automated testing
- **Flexible Content**: All content areas accept React nodes for maximum customization flexibility
