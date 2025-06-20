# Component Name

SBadge

## Description

The SBadge component is a versatile and customizable badge element used to display concise metadata, status indicators, or categorical information. Built on top of Radix UI's Slot component for composition flexibility, it offers various visual variants, sizes, and display modes to effectively convey information at a glance. The component supports icons, different corner radii, and various color schemes to match your application's design system.

## TypeScript Types

The following types represent the props that the SBadge component accepts:

```typescript
/**
 * Props for the SBadge component
 */
export interface BadgeProps
  extends ComponentPropsWithout<"div", RemovedProps>,
    Badge {
  /**
   * Badge content
   */
  children?: React.ReactNode;

  /**
   * Whether to render the badge as a child component (Radix UI Slot)
   * @default false
   */
  asChild?: boolean;

  /**
   * Optional icon to display in the badge
   */
  icon?: React.ReactNode;

  /**
   * Position of the icon relative to the badge text
   * @default 'left'
   */
  iconPosition?: "left" | "right";

  /**
   * The mode of the badge
   * @default 'light'
   */
  mode?: "light" | "dark" | "outline";

  /**
   * The shape of the badge's corners
   * @default false
   */
  rounded?: boolean;

  /**
   * The size of the badge
   * @default 'regular'
   */
  size?: "regular" | "medium" | "large";

  /**
   * The color variant of the badge
   * @default 'primary'
   */
  variant?:
    | "primary"
    | "neutral"
    | "danger"
    | "warning"
    | "success"
    | "info"
    | "brand";

  /**
   * Add data-test id for using in test cases
   */
  dataTestId?: string;
}
```

## Examples

Here are comprehensive examples demonstrating various ways to use the SBadge component:

### Basic Badge Usage with Different Variants

```tsx
import React from "react";
import { SBadge } from "@chargebee/sting-react";

const BadgeVariantsExample = () => {
  return (
    <div className="flex flex-wrap gap-3">
      <SBadge variant="primary">Primary</SBadge>
      <SBadge variant="neutral">Neutral</SBadge>
      <SBadge variant="danger">Danger</SBadge>
      <SBadge variant="warning">Warning</SBadge>
      <SBadge variant="success">Success</SBadge>
      <SBadge variant="info">Info</SBadge>
      <SBadge variant="brand">Brand</SBadge>
    </div>
  );
};

export default BadgeVariantsExample;
```

### Badge Modes - Light, Dark, and Outline

```tsx
import React from "react";
import { SBadge } from "@chargebee/sting-react";

const BadgeModesExample = () => {
  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-sm font-medium mb-2">Light Mode (Default)</h3>
        <div className="flex flex-wrap gap-2">
          <SBadge variant="primary" mode="light">
            Primary
          </SBadge>
          <SBadge variant="success" mode="light">
            Success
          </SBadge>
          <SBadge variant="danger" mode="light">
            Danger
          </SBadge>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-medium mb-2">Dark Mode</h3>
        <div className="flex flex-wrap gap-2">
          <SBadge variant="primary" mode="dark">
            Primary
          </SBadge>
          <SBadge variant="success" mode="dark">
            Success
          </SBadge>
          <SBadge variant="danger" mode="dark">
            Danger
          </SBadge>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-medium mb-2">Outline Mode</h3>
        <div className="flex flex-wrap gap-2">
          <SBadge variant="primary" mode="outline">
            Primary
          </SBadge>
          <SBadge variant="success" mode="outline">
            Success
          </SBadge>
          <SBadge variant="danger" mode="outline">
            Danger
          </SBadge>
        </div>
      </div>
    </div>
  );
};

export default BadgeModesExample;
```

### Badge Sizes and Shapes

```tsx
import React from "react";
import { SBadge } from "@chargebee/sting-react";

const BadgeSizesAndShapesExample = () => {
  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-sm font-medium mb-2">Badge Sizes</h3>
        <div className="flex items-center gap-3">
          <SBadge variant="primary" size="regular">
            Regular
          </SBadge>
          <SBadge variant="primary" size="medium">
            Medium
          </SBadge>
          <SBadge variant="primary" size="large">
            Large
          </SBadge>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-medium mb-2">Badge Corners</h3>
        <div className="flex items-center gap-3">
          <SBadge variant="primary" rounded={false}>
            Small Radius
          </SBadge>
          <SBadge variant="primary" rounded={true}>
            Full Radius
          </SBadge>
        </div>
      </div>
    </div>
  );
};

export default BadgeSizesAndShapesExample;
```

### Badges with Icons

```tsx
import React from "react";
import { SBadge } from "@chargebee/sting-react";
import {
  CheckCircle,
  AlertCircle,
  Info,
  Clock,
  ArrowRight,
} from "lucide-react";

const BadgeWithIconsExample = () => {
  return (
    <div className="flex flex-wrap gap-3">
      <SBadge
        variant="success"
        icon={<CheckCircle className="size-3.5" />}
        iconPosition="left"
      >
        Completed
      </SBadge>

      <SBadge
        variant="danger"
        icon={<AlertCircle className="size-3.5" />}
        iconPosition="left"
      >
        Error
      </SBadge>

      <SBadge
        variant="info"
        icon={<Info className="size-3.5" />}
        iconPosition="left"
      >
        Information
      </SBadge>

      <SBadge
        variant="warning"
        icon={<Clock className="size-3.5" />}
        iconPosition="left"
      >
        Pending
      </SBadge>

      <SBadge
        variant="primary"
        icon={<ArrowRight className="size-3.5" />}
        iconPosition="right"
      >
        View more
      </SBadge>
    </div>
  );
};

export default BadgeWithIconsExample;
```

### Advanced Usage with asChild

```tsx
import React from "react";
import { SBadge } from "@chargebee/sting-react";
import { Mail } from "lucide-react";

const AdvancedBadgeExample = () => {
  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-sm font-medium mb-2">Badge as Link</h3>
        <SBadge variant="primary" asChild icon={<Mail className="size-3.5" />}>
          <a href="mailto:contact@example.com">Contact Us</a>
        </SBadge>
      </div>

      <div>
        <h3 className="text-sm font-medium mb-2">Badge with Counter</h3>
        <div className="relative inline-block">
          <button className="p-2 rounded-full bg-gray-100">
            <Mail className="size-5" />
          </button>
          <SBadge
            variant="danger"
            size="small"
            rounded={true}
            className="absolute -top-1 -right-1 min-w-5 h-5 flex items-center justify-center"
          >
            3
          </SBadge>
        </div>
      </div>
    </div>
  );
};

export default AdvancedBadgeExample;
```

### Status Badges in a List

```tsx
import React from "react";
import { SBadge } from "@chargebee/sting-react";

const StatusBadgeExample = () => {
  const items = [
    { id: 1, name: "Payment Processing", status: "pending" },
    { id: 2, name: "Order Shipping", status: "processing" },
    { id: 3, name: "Customer Support", status: "completed" },
    { id: 4, name: "Refund Request", status: "failed" },
  ];

  const getStatusBadge = (status) => {
    switch (status) {
      case "pending":
        return <SBadge variant="warning">Pending</SBadge>;
      case "processing":
        return <SBadge variant="info">Processing</SBadge>;
      case "completed":
        return <SBadge variant="success">Completed</SBadge>;
      case "failed":
        return <SBadge variant="danger">Failed</SBadge>;
      default:
        return <SBadge variant="neutral">Unknown</SBadge>;
    }
  };

  return (
    <div className="space-y-2">
      {items.map((item) => (
        <div
          key={item.id}
          className="flex items-center justify-between p-3 border rounded"
        >
          <span>{item.name}</span>
          {getStatusBadge(item.status)}
        </div>
      ))}
    </div>
  );
};

export default StatusBadgeExample;
```

## Key Features

- **Multiple Variants**: Seven color variants for different semantic meanings
- **Three Display Modes**: Light (default), dark, and outline modes for different emphasis levels
- **Size Options**: Regular, medium, and large sizes to fit various contexts
- **Corner Radius Control**: Choose between small radius or fully rounded corners
- **Icon Support**: Include icons on either side of the badge text
- **Composition Flexibility**: Use the `asChild` prop for complex badge integrations
- **Accessibility**: Proper semantic structure for screen readers
- **Test Support**: Built-in dataTestId prop for QA automation
