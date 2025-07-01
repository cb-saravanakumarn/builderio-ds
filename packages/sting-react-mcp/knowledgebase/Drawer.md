# Component Name

SDrawer

## Description

The SDrawer component provides a sliding panel that enters from the edge of the screen, built on top of Radix UI's Dialog primitive. It's designed for secondary content, forms, or navigation that doesn't need to interrupt the user's current context completely. The drawer supports various placements (top, right, bottom, left), sizes, and customization options, making it suitable for a wide range of use cases such as navigation menus, settings panels, and form submissions.

## TypeScript Types

The SDrawer component is composed of multiple sub-components, each with their own props.

```typescript
/**
 * Props for the SDrawer Root component
 */
interface DrawerProps extends DialogPrimitive.DialogProps {
  /**
   * Content of the drawer
   */
  children: React.ReactNode;
}

/**
 * Props for the SDrawer Content component
 */
interface DrawerContentProps
  extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>,
    VariantProps<typeof drawerVariants> {
  /**
   * Whether to show the close icon
   * @default true
   */
  showCloseIcon?: boolean;

  /**
   * Callback when the drawer is closed
   */
  onClose?: () => void;

  /**
   * Placement of the drawer
   * @default 'top'
   */
  placement?: "top" | "right" | "bottom" | "left";

  /**
   * Size of the drawer (width for left/right, height for top/bottom)
   * @default 'narrow'
   */
  size?: "narrow" | "regular" | "wide";

  /**
   * Height of the drawer (primarily for top/bottom placement)
   * @default 'short'
   */
  height?: "short" | "regular" | "full";
}

/**
 * Props for the SDrawer Header component
 */
interface DrawerHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Whether to show a border at the bottom of the header
   * @default false
   */
  border?: boolean;

  /**
   * Whether to show a shadow below the header
   * @default false
   */
  shadow?: boolean;

  /**
   * Whether to show the close icon in the header
   */
  showCloseIcon?: boolean;
}

/**
 * Props for the SDrawer Footer component
 */
type DrawerFooterProps = React.HTMLAttributes<HTMLDivElement>;

/**
 * Props for the SDrawer Title component
 */
type DrawerTitleProps = React.ComponentPropsWithoutRef<
  typeof DialogPrimitive.Title
>;

/**
 * Props for the SDrawer Description component
 */
type DrawerDescriptionProps = React.ComponentPropsWithoutRef<
  typeof DialogPrimitive.Description
>;
```

## Example

Here are examples demonstrating how to use the SDrawer component:

### Basic Side Drawer

```tsx
import React, { useState } from "react";
import { SDrawer, SButton } from "@chargebee/sting-react";
import { Menu } from "lucide-react";

const BasicDrawerExample = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <SButton variant="ghost" onClick={() => setOpen(true)} icon={<Menu />}>
        Menu
      </SButton>

      <SDrawer.Root open={open} onOpenChange={setOpen}>
        <SDrawer.Content placement="left" size="regular">
          <SDrawer.Header border showCloseIcon>
            <SDrawer.Title>Navigation</SDrawer.Title>
            <SDrawer.Description>Main navigation links</SDrawer.Description>
          </SDrawer.Header>

          <div className="p-4">
            <nav className="space-y-2">
              <a href="#" className="block p-2 hover:bg-gray-100 rounded">
                Home
              </a>
              <a href="#" className="block p-2 hover:bg-gray-100 rounded">
                Products
              </a>
              <a href="#" className="block p-2 hover:bg-gray-100 rounded">
                Services
              </a>
              <a href="#" className="block p-2 hover:bg-gray-100 rounded">
                About Us
              </a>
              <a href="#" className="block p-2 hover:bg-gray-100 rounded">
                Contact
              </a>
            </nav>
          </div>

          <SDrawer.Footer border>
            <SButton variant="ghost" onClick={() => setOpen(false)}>
              Close
            </SButton>
          </SDrawer.Footer>
        </SDrawer.Content>
      </SDrawer.Root>
    </>
  );
};

export default BasicDrawerExample;
```

### Bottom Sheet Drawer

```tsx
import React from "react";
import { SDrawer, SButton } from "@chargebee/sting-react";
import { Settings, User, CreditCard, Bell, LogOut } from "lucide-react";

const BottomSheetExample = () => {
  return (
    <SDrawer.Root>
      <SDrawer.Trigger asChild>
        <SButton variant="primary">Open Settings</SButton>
      </SDrawer.Trigger>

      <SDrawer.Content placement="bottom" height="regular">
        <SDrawer.Header shadow showCloseIcon>
          <SDrawer.Title>Settings</SDrawer.Title>
          <SDrawer.Description>
            Manage your account settings and preferences.
          </SDrawer.Description>
        </SDrawer.Header>

        <div className="p-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col items-center gap-2 rounded-lg border p-4 text-center">
              <User className="size-6" />
              <h3 className="font-medium">Profile</h3>
              <p className="text-sm text-gray-500">
                Manage your profile information
              </p>
            </div>

            <div className="flex flex-col items-center gap-2 rounded-lg border p-4 text-center">
              <CreditCard className="size-6" />
              <h3 className="font-medium">Billing</h3>
              <p className="text-sm text-gray-500">
                Manage your payment methods
              </p>
            </div>

            <div className="flex flex-col items-center gap-2 rounded-lg border p-4 text-center">
              <Bell className="size-6" />
              <h3 className="font-medium">Notifications</h3>
              <p className="text-sm text-gray-500">
                Configure notification settings
              </p>
            </div>

            <div className="flex flex-col items-center gap-2 rounded-lg border p-4 text-center">
              <Settings className="size-6" />
              <h3 className="font-medium">Preferences</h3>
              <p className="text-sm text-gray-500">Set app preferences</p>
            </div>
          </div>
        </div>

        <SDrawer.Footer className="border-t">
          <SButton
            variant="ghost"
            size="sm"
            icon={<LogOut size={16} />}
            iconPosition="left"
          >
            Log Out
          </SButton>

          <SDrawer.Trigger asChild>
            <SButton variant="primary">Done</SButton>
          </SDrawer.Trigger>
        </SDrawer.Footer>
      </SDrawer.Content>
    </SDrawer.Root>
  );
};

export default BottomSheetExample;
```

### Form in Right Drawer

```tsx
import React, { useState } from "react";
import { SDrawer, SButton, SInput, SRadioGroup } from "@chargebee/sting-react";
import { Plus } from "lucide-react";

const FormDrawerExample = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    priority: "medium",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      console.log("Task created:", formData);
      setLoading(false);
      setOpen(false);
      setFormData({
        name: "",
        description: "",
        priority: "medium",
      });
    }, 1000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <SButton
        variant="primary"
        onClick={() => setOpen(true)}
        icon={<Plus size={16} />}
      >
        Add New Task
      </SButton>

      <SDrawer.Root open={open} onOpenChange={setOpen}>
        <SDrawer.Content placement="right" size="regular">
          <form onSubmit={handleSubmit}>
            <SDrawer.Header border showCloseIcon>
              <SDrawer.Title>Create New Task</SDrawer.Title>
              <SDrawer.Description>
                Add a new task to your project.
              </SDrawer.Description>
            </SDrawer.Header>

            <div className="space-y-4 p-4">
              <SInput
                label="Task Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                fullWidth
              />

              <SInput
                label="Description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                fullWidth
                as="textarea"
                rows={4}
              />

              <SRadioGroup
                label="Priority"
                value={formData.priority}
                onValueChange={(value) =>
                  setFormData((prev) => ({ ...prev, priority: value }))
                }
                options={[
                  { value: "low", label: "Low" },
                  { value: "medium", label: "Medium" },
                  { value: "high", label: "High" },
                ]}
                orientation="horizontal"
              />
            </div>

            <SDrawer.Footer className="border-t p-4">
              <SButton
                type="button"
                variant="ghost"
                onClick={() => setOpen(false)}
                disabled={loading}
              >
                Cancel
              </SButton>
              <SButton type="submit" variant="primary" loading={loading}>
                {loading ? "Creating..." : "Create Task"}
              </SButton>
            </SDrawer.Footer>
          </form>
        </SDrawer.Content>
      </SDrawer.Root>
    </>
  );
};

export default FormDrawerExample;
```

### Top Drawer for Filters

```tsx
import React, { useState } from "react";
import { SDrawer, SButton, SInput, SCheckbox } from "@chargebee/sting-react";
import { Filter, Search } from "lucide-react";

const FilterDrawerExample = () => {
  const [open, setOpen] = useState(false);
  const [filters, setFilters] = useState({
    status: {
      active: true,
      completed: false,
      archived: false,
    },
    dateRange: {
      from: "",
      to: "",
    },
  });

  const handleStatusChange = (key) => (checked) => {
    setFilters((prev) => ({
      ...prev,
      status: {
        ...prev.status,
        [key]: checked,
      },
    }));
  };

  const handleDateChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      dateRange: {
        ...prev.dateRange,
        [name]: value,
      },
    }));
  };

  const applyFilters = () => {
    console.log("Applied filters:", filters);
    setOpen(false);
  };

  const resetFilters = () => {
    setFilters({
      status: {
        active: true,
        completed: false,
        archived: false,
      },
      dateRange: {
        from: "",
        to: "",
      },
    });
  };

  return (
    <>
      <div className="flex items-center gap-2">
        <SInput
          placeholder="Search..."
          prefix={<Search className="size-4 text-gray-400" />}
          allowClear
        />
        <SButton
          variant="secondary"
          onClick={() => setOpen(true)}
          icon={<Filter size={16} />}
        >
          Filters
        </SButton>
      </div>

      <SDrawer.Root open={open} onOpenChange={setOpen}>
        <SDrawer.Content placement="top" height="regular">
          <SDrawer.Header border showCloseIcon>
            <SDrawer.Title>Filter Results</SDrawer.Title>
            <SDrawer.Description>
              Narrow down your search results
            </SDrawer.Description>
          </SDrawer.Header>

          <div className="grid grid-cols-1 gap-6 p-4 md:grid-cols-2">
            <div>
              <h3 className="mb-2 font-medium">Status</h3>
              <div className="space-y-2">
                <SCheckbox
                  label="Active"
                  checked={filters.status.active}
                  onCheckedChange={handleStatusChange("active")}
                />
                <SCheckbox
                  label="Completed"
                  checked={filters.status.completed}
                  onCheckedChange={handleStatusChange("completed")}
                />
                <SCheckbox
                  label="Archived"
                  checked={filters.status.archived}
                  onCheckedChange={handleStatusChange("archived")}
                />
              </div>
            </div>

            <div>
              <h3 className="mb-2 font-medium">Date Range</h3>
              <div className="space-y-3">
                <SInput
                  label="From"
                  type="date"
                  name="from"
                  value={filters.dateRange.from}
                  onChange={handleDateChange}
                />
                <SInput
                  label="To"
                  type="date"
                  name="to"
                  value={filters.dateRange.to}
                  onChange={handleDateChange}
                />
              </div>
            </div>
          </div>

          <SDrawer.Footer className="border-t">
            <SButton variant="ghost" onClick={resetFilters}>
              Reset
            </SButton>
            <SButton variant="primary" onClick={applyFilters}>
              Apply Filters
            </SButton>
          </SDrawer.Footer>
        </SDrawer.Content>
      </SDrawer.Root>
    </>
  );
};

export default FilterDrawerExample;
```

## Key Features

- **Multiple Placements**: Support for entering from top, right, bottom, or left sides of the screen
- **Responsive Sizing**: Various width and height options to fit different content needs
- **Accessibility**: Built on Radix UI for proper keyboard navigation, screen reader support, and ARIA attributes
- **Compound Component Pattern**: Flexible composition with various sub-components
- **Animated Transitions**: Smooth animations for opening and closing
- **Customizable Header and Footer**: Options for borders, shadows, and close buttons
- **Focus Management**: Proper focus trapping within the drawer
- **Overlay Backdrop**: Semi-transparent overlay to focus attention on the drawer content
- **TypeScript Support**: Comprehensive type definitions for better developer experience
- **Form Integration**: Works well with forms and other input components
