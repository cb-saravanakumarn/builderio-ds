# Component Name

SPopover

## Description

The SPopover component provides a flexible and accessible popover system built on top of Radix UI's Popover primitive. It displays rich content in a floating panel that appears relative to a trigger element. The component is perfect for displaying additional information, forms, menus, or any interactive content without navigating away from the current page. It features automatic collision detection, customizable positioning, optional arrows, and controlled/uncontrolled usage patterns.

## TypeScript Types

The SPopover component is composed of multiple sub-components, each with their own props.

```typescript
/**
 * Props for the SPopover root component
 */
interface SPopoverProps 
  extends React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Root> {
  /**
   * Padding for the Popover content. Applies to all contents unless overridden.
   * @default "regular"
   */
  padding?: "none" | "regular";
}

/**
 * Props for the SPopover.Trigger component
 */
type SPopoverTriggerProps = React.ComponentPropsWithoutRef<
  typeof PopoverPrimitive.Trigger
>;

/**
 * Props for the SPopover.Content component
 */
interface SPopoverContentProps
  extends React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content> {
  /**
   * The preferred alignment against the trigger
   * @default "center"
   */
  align?: "start" | "center" | "end";

  /**
   * The distance in pixels from the trigger
   * @default 4
   */
  sideOffset?: number;

  /**
   * The preferred side of the trigger to render against
   * @default "bottom"
   */
  side?: "top" | "right" | "bottom" | "left";

  /**
   * When true, overrides the side and align to prevent collisions
   * @default true
   */
  avoidCollisions?: boolean;

  /**
   * Padding for this specific content (overrides root padding)
   */
  padding?: "none" | "regular";
}

/**
 * Props for the SPopover.Anchor component
 */
type SPopoverAnchorProps = React.ComponentPropsWithoutRef<
  typeof PopoverPrimitive.Anchor
>;

/**
 * Props for the SPopover.Arrow component
 */
type SPopoverArrowProps = React.ComponentPropsWithoutRef<
  typeof PopoverPrimitive.Arrow
>;
```

## Example

Here are examples demonstrating how to use the SPopover component:

### Basic Popover

```tsx
import React from "react";
import { SPopover } from "@chargebee/sting-react";
import { SButton } from "@chargebee/sting-react";

const BasicPopoverExample = () => {
  return (
    <SPopover>
      <SPopover.Trigger asChild>
        <SButton variant="primary">Open Popover</SButton>
      </SPopover.Trigger>
      <SPopover.Content>
        <div className="space-y-2">
          <h4 className="font-medium">Popover Title</h4>
          <p className="text-sm text-neutral-600">
            This is a basic popover with some content. You can put any content here.
          </p>
        </div>
      </SPopover.Content>
    </SPopover>
  );
};

export default BasicPopoverExample;
```

### Popover with Form Content

```tsx
import React from "react";
import { SPopover } from "@chargebee/sting-react";
import { SButton } from "@chargebee/sting-react";
import { SInput } from "@chargebee/sting-react";
import { SIcon } from "@chargebee/sting-react";

const FormPopoverExample = () => {
  return (
    <SPopover>
      <SPopover.Trigger asChild>
        <SButton variant="primary-outline">
          Settings <SIcon name="settings" className="ml-2 h-4 w-4" />
        </SButton>
      </SPopover.Trigger>
      <SPopover.Content className="w-80">
        <div className="space-y-4">
          <div className="space-y-2">
            <h4 className="font-medium">Account Settings</h4>
            <p className="text-sm text-neutral-600">
              Update your account preferences below.
            </p>
          </div>
          <div className="grid gap-2">
            <SInput
              label="Display Name"
              placeholder="Enter display name"
            />
            <SInput
              label="Email"
              type="email"
              placeholder="Enter email"
            />
          </div>
          <div className="flex justify-end space-x-2">
            <SButton variant="neutral" size="regular">
              Cancel
            </SButton>
            <SButton variant="primary" size="regular">
              Save
            </SButton>
          </div>
        </div>
      </SPopover.Content>
    </SPopover>
  );
};

export default FormPopoverExample;
```

### Popover with Different Placements

```tsx
import React from "react";
import { SPopover } from "@chargebee/sting-react";
import { SButton } from "@chargebee/sting-react";

const PlacementPopoverExample = () => {
  return (
    <div className="flex items-center justify-center gap-16 p-16">
      {/* Top */}
      <SPopover>
        <SPopover.Trigger asChild>
          <SButton variant="primary">Top</SButton>
        </SPopover.Trigger>
        <SPopover.Content side="top">
          <p className="text-sm">Popover positioned on top</p>
        </SPopover.Content>
      </SPopover>

      {/* Right */}
      <SPopover>
        <SPopover.Trigger asChild>
          <SButton variant="primary">Right</SButton>
        </SPopover.Trigger>
        <SPopover.Content side="right">
          <p className="text-sm">Popover positioned on right</p>
        </SPopover.Content>
      </SPopover>

      {/* Bottom */}
      <SPopover>
        <SPopover.Trigger asChild>
          <SButton variant="primary">Bottom</SButton>
        </SPopover.Trigger>
        <SPopover.Content side="bottom">
          <p className="text-sm">Popover positioned on bottom</p>
        </SPopover.Content>
      </SPopover>

      {/* Left */}
      <SPopover>
        <SPopover.Trigger asChild>
          <SButton variant="primary">Left</SButton>
        </SPopover.Trigger>
        <SPopover.Content side="left">
          <p className="text-sm">Popover positioned on left</p>
        </SPopover.Content>
      </SPopover>
    </div>
  );
};

export default PlacementPopoverExample;
```

### Popover with Different Alignments

```tsx
import React from "react";
import { SPopover } from "@chargebee/sting-react";
import { SButton } from "@chargebee/sting-react";

const AlignmentPopoverExample = () => {
  return (
    <div className="flex items-center justify-center gap-8 p-16">
      {/* Start alignment */}
      <SPopover>
        <SPopover.Trigger asChild>
          <SButton variant="primary-outline">Align Start</SButton>
        </SPopover.Trigger>
        <SPopover.Content align="start">
          <p className="text-sm">Aligned to start of trigger</p>
        </SPopover.Content>
      </SPopover>

      {/* Center alignment */}
      <SPopover>
        <SPopover.Trigger asChild>
          <SButton variant="primary-outline">Align Center</SButton>
        </SPopover.Trigger>
        <SPopover.Content align="center">
          <p className="text-sm">Aligned to center of trigger</p>
        </SPopover.Content>
      </SPopover>

      {/* End alignment */}
      <SPopover>
        <SPopover.Trigger asChild>
          <SButton variant="primary-outline">Align End</SButton>
        </SPopover.Trigger>
        <SPopover.Content align="end">
          <p className="text-sm">Aligned to end of trigger</p>
        </SPopover.Content>
      </SPopover>
    </div>
  );
};

export default AlignmentPopoverExample;
```

### Controlled Popover

```tsx
import React, { useState } from "react";
import { SPopover } from "@chargebee/sting-react";
import { SButton } from "@chargebee/sting-react";

const ControlledPopoverExample = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <SButton
          variant="primary"
          onClick={() => setOpen(true)}
          disabled={open}
        >
          Open Popover
        </SButton>
        <SButton
          variant="neutral"
          onClick={() => setOpen(false)}
          disabled={!open}
        >
          Close Popover
        </SButton>
      </div>

      <div className="rounded-md bg-neutral-50 p-4 text-sm">
        <p>
          Popover state: <strong>{open ? "Open" : "Closed"}</strong>
        </p>
      </div>

      <SPopover open={open} onOpenChange={setOpen}>
        <SPopover.Trigger asChild>
          <SButton variant="primary-outline">Toggle Popover</SButton>
        </SPopover.Trigger>
        <SPopover.Content>
          <div className="space-y-2">
            <h4 className="font-medium">Controlled Popover</h4>
            <p className="text-sm text-neutral-600">
              This popover's open state is controlled by external buttons.
            </p>
            <SButton
              size="regular"
              variant="neutral"
              onClick={() => setOpen(false)}
            >
              Close from inside
            </SButton>
          </div>
        </SPopover.Content>
      </SPopover>
    </div>
  );
};

export default ControlledPopoverExample;
```

### Info Popover with Icons

```tsx
import React from "react";
import { SPopover } from "@chargebee/sting-react";
import { SIcon } from "@chargebee/sting-react";

const InfoPopoverExample = () => {
  return (
    <div className="space-y-4 p-8">
      <div className="flex items-center gap-2">
        <span>User Information</span>
        <SPopover>
          <SPopover.Trigger asChild>
            <button className="rounded-full p-1 hover:bg-neutral-100">
              <SIcon name="info" className="h-4 w-4 text-neutral-500" />
            </button>
          </SPopover.Trigger>
          <SPopover.Content className="w-64">
            <div className="space-y-2">
              <h4 className="text-sm font-medium">About User Information</h4>
              <p className="text-xs text-neutral-600">
                This section contains personal details including name, email,
                and contact preferences. All information is kept secure and
                private according to our privacy policy.
              </p>
            </div>
          </SPopover.Content>
        </SPopover>
      </div>

      <div className="flex items-center gap-2">
        <span>Account Settings</span>
        <SPopover>
          <SPopover.Trigger asChild>
            <button className="rounded-full p-1 hover:bg-neutral-100">
              <SIcon name="info" className="h-4 w-4 text-neutral-500" />
            </button>
          </SPopover.Trigger>
          <SPopover.Content className="w-64">
            <div className="space-y-2">
              <h4 className="text-sm font-medium">Account Settings Help</h4>
              <p className="text-xs text-neutral-600">
                Configure your account preferences, notification settings, and
                security options here.
              </p>
            </div>
          </SPopover.Content>
        </SPopover>
      </div>
    </div>
  );
};

export default InfoPopoverExample;
```

### Popover with Arrow

```tsx
import React from "react";
import { SPopover } from "@chargebee/sting-react";
import { SButton } from "@chargebee/sting-react";

const ArrowPopoverExample = () => {
  return (
    <div className="flex items-center justify-center gap-16 p-16">
      {/* Top with arrow */}
      <SPopover>
        <SPopover.Trigger asChild>
          <SButton variant="primary">Top with Arrow</SButton>
        </SPopover.Trigger>
        <SPopover.Content side="top">
          <SPopover.Arrow />
          <div className="space-y-2">
            <h4 className="text-sm font-medium">Top Popover</h4>
            <p className="text-xs text-neutral-600">
              This popover has an arrow pointing to the trigger.
            </p>
          </div>
        </SPopover.Content>
      </SPopover>

      {/* Bottom with arrow */}
      <SPopover>
        <SPopover.Trigger asChild>
          <SButton variant="primary">Bottom with Arrow</SButton>
        </SPopover.Trigger>
        <SPopover.Content side="bottom">
          <SPopover.Arrow />
          <div className="space-y-2">
            <h4 className="text-sm font-medium">Bottom Popover</h4>
            <p className="text-xs text-neutral-600">
              Arrow points upward to the trigger button.
            </p>
          </div>
        </SPopover.Content>
      </SPopover>
    </div>
  );
};

export default ArrowPopoverExample;
```

### Custom Padding

```tsx
import React from "react";
import { SPopover } from "@chargebee/sting-react";
import { SButton } from "@chargebee/sting-react";

const PaddingPopoverExample = () => {
  return (
    <div className="flex gap-8 p-8">
      {/* Regular padding (default) */}
      <SPopover>
        <SPopover.Trigger asChild>
          <SButton variant="primary">Regular Padding</SButton>
        </SPopover.Trigger>
        <SPopover.Content>
          <div className="bg-neutral-50">
            This popover has <b>regular</b> padding.
          </div>
        </SPopover.Content>
      </SPopover>

      {/* No padding via root */}
      <SPopover padding="none">
        <SPopover.Trigger asChild>
          <SButton variant="primary-outline">No Padding</SButton>
        </SPopover.Trigger>
        <SPopover.Content>
          <div className="bg-neutral-50 p-4">
            This popover has <b>no</b> default padding, but custom padding applied.
          </div>
        </SPopover.Content>
      </SPopover>
    </div>
  );
};

export default PaddingPopoverExample;
```

## Key Features

- **Accessibility**: Built on Radix UI for proper keyboard navigation, screen reader support, and ARIA attributes
- **Compound Component Pattern**: Flexible composition with various sub-components
- **Positioning Control**: Control placement with side, align, and offset options
- **Collision Detection**: Automatic repositioning to stay within viewport bounds
- **Arrow Support**: Optional arrow pointing to the trigger element
- **Controlled/Uncontrolled**: Support for both controlled and uncontrolled usage patterns
- **Custom Anchoring**: Position relative to elements other than the trigger using SPopover.Anchor
- **Padding Control**: Configurable padding at both root and content level
- **Animation**: Smooth open/close animations with scale and fade effects
- **Portal Rendering**: Content is rendered in a portal for proper stacking context
- **Focus Management**: Proper focus handling for keyboard navigation
- **TypeScript Support**: Comprehensive type definitions for better developer experience