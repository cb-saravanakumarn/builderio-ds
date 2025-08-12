# Component Name

SDropdown

## Description

The SDropdown component provides a flexible and accessible dropdown menu system built on top of Radix UI's Dropdown Menu primitive. It offers a comprehensive set of features for creating contextual menus, including items, checkbox items, radio items, nested submenus, groups, separators, and keyboard shortcuts. The component follows a compound component pattern and is designed to handle complex navigation structures while maintaining proper focus management and keyboard accessibility.

## TypeScript Types

The SDropdown component is composed of multiple sub-components, each with their own props.

```typescript
/**
 * Props for the SDropdown component
 */
type SDropdownProps = React.ComponentPropsWithoutRef<
  typeof DropdownPrimitive.Root
>;

/**
 * Props for the SDropdown.Trigger component
 */
type SDropdownTriggerProps = React.ComponentPropsWithoutRef<
  typeof DropdownPrimitive.Trigger
>;

/**
 * Props for the SDropdown.Content component
 */
interface SDropdownContentProps
  extends React.ComponentPropsWithoutRef<typeof DropdownPrimitive.Content> {
  /**
   * Position configuration for the dropdown
   */
  position?: {
    /**
     * Side of the trigger where the dropdown appears
     */
    side?: "top" | "right" | "bottom" | "left";

    /**
     * Alignment of the dropdown relative to the trigger
     */
    align?: "start" | "center" | "end";

    /**
     * Offset from the side of the trigger (in pixels)
     */
    sideOffset?: number;

    /**
     * Offset from the alignment edge (in pixels)
     */
    alignOffset?: number;
  };
}

/**
 * Props for the SDropdown.Item component
 */
interface SDropdownItemProps
  extends React.ComponentPropsWithoutRef<typeof DropdownPrimitive.Item> {
  /**
   * Whether the item should be inset to align with items that have icons
   */
  inset?: boolean;
}

/**
 * Props for the SDropdown.CheckboxItem component
 */
type SDropdownCheckboxItemProps = React.ComponentPropsWithoutRef<
  typeof DropdownPrimitive.CheckboxItem
>;

/**
 * Props for the SDropdown.RadioItem component
 */
type SDropdownRadioItemProps = React.ComponentPropsWithoutRef<
  typeof DropdownPrimitive.RadioItem
>;

/**
 * Props for the SDropdown.Label component
 */
interface SDropdownLabelProps
  extends React.ComponentPropsWithoutRef<typeof DropdownPrimitive.Label> {
  /**
   * Whether the label should be inset to align with items that have icons
   */
  inset?: boolean;
}

/**
 * Props for the SDropdown.Separator component
 */
type SDropdownSeparatorProps = React.ComponentPropsWithoutRef<
  typeof DropdownPrimitive.Separator
>;

/**
 * Props for the SDropdown.Shortcut component
 */
type SDropdownShortcutProps = React.HTMLAttributes<HTMLSpanElement>;

/**
 * Props for the SDropdown.SubTrigger component
 */
interface SDropdownSubTriggerProps
  extends React.ComponentPropsWithoutRef<typeof DropdownPrimitive.SubTrigger> {
  /**
   * Whether the trigger should be inset to align with items that have icons
   */
  inset?: boolean;
}

/**
 * Props for the SDropdown.SubContent component
 */
type SDropdownSubContentProps = React.ComponentPropsWithoutRef<
  typeof DropdownPrimitive.SubContent
>;
```

## Example

Here are examples demonstrating how to use the SDropdown component:

### Basic Dropdown Menu

```tsx
import React from "react";
import { SDropdown } from "@chargebee/sting-react";
import { SIcon } from "@chargebee/sting-react";

const BasicDropdownExample = () => {
  return (
    <SDropdown>
      <SDropdown.Trigger>
        Options <SIcon name="chevron-down" className="ml-2 h-4 w-4" />
      </SDropdown.Trigger>
      <SDropdown.Content>
        <SDropdown.Item>Profile</SDropdown.Item>
        <SDropdown.Item>Settings</SDropdown.Item>
        <SDropdown.Separator />
        <SDropdown.Item>Logout</SDropdown.Item>
      </SDropdown.Content>
    </SDropdown>
  );
};

export default BasicDropdownExample;
```

### Dropdown with Checkbox and Radio Items

```tsx
import React, { useState } from "react";
import { SDropdown } from "@chargebee/sting-react";
import { SIcon } from "@chargebee/sting-react";

const CheckboxRadioDropdownExample = () => {
  const [showStatusBar, setShowStatusBar] = useState(true);
  const [showActivityBar, setShowActivityBar] = useState(false);
  const [position, setPosition] = useState("bottom");

  return (
    <SDropdown>
      <SDropdown.Trigger>
        Preferences <SIcon name="chevron-down" className="ml-2 h-4 w-4" />
      </SDropdown.Trigger>
      <SDropdown.Content>
        <SDropdown.Label>Appearance</SDropdown.Label>
        <SDropdown.Separator />
        <SDropdown.CheckboxItem
          checked={showStatusBar}
          onCheckedChange={setShowStatusBar}
        >
          Status Bar
        </SDropdown.CheckboxItem>
        <SDropdown.CheckboxItem
          checked={showActivityBar}
          onCheckedChange={setShowActivityBar}
        >
          Activity Bar
        </SDropdown.CheckboxItem>
        <SDropdown.Separator />
        <SDropdown.Label>Panel Position</SDropdown.Label>
        <SDropdown.RadioGroup value={position} onValueChange={setPosition}>
          <SDropdown.RadioItem value="top">Top</SDropdown.RadioItem>
          <SDropdown.RadioItem value="right">Right</SDropdown.RadioItem>
          <SDropdown.RadioItem value="bottom">Bottom</SDropdown.RadioItem>
          <SDropdown.RadioItem value="left">Left</SDropdown.RadioItem>
        </SDropdown.RadioGroup>
      </SDropdown.Content>
    </SDropdown>
  );
};

export default CheckboxRadioDropdownExample;
```

### Dropdown with Icons and Keyboard Shortcuts

```tsx
import React from "react";
import { SDropdown } from "@chargebee/sting-react";
import { SIcon } from "@chargebee/sting-react";

const IconShortcutDropdownExample = () => {
  return (
    <SDropdown>
      <SDropdown.Trigger>
        Account <SIcon name="chevron-down" className="ml-2 h-4 w-4" />
      </SDropdown.Trigger>
      <SDropdown.Content>
        <SDropdown.Item>
          <SIcon name="user" className="mr-2 h-4 w-4" />
          <span>Profile</span>
          <SDropdown.Shortcut>⇧⌘P</SDropdown.Shortcut>
        </SDropdown.Item>
        <SDropdown.Item>
          <SIcon name="settings" className="mr-2 h-4 w-4" />
          <span>Settings</span>
          <SDropdown.Shortcut>⌘S</SDropdown.Shortcut>
        </SDropdown.Item>
        <SDropdown.Separator />
        <SDropdown.Item>
          <SIcon name="credit-card" className="mr-2 h-4 w-4" />
          <span>Billing</span>
          <SDropdown.Shortcut>⌘B</SDropdown.Shortcut>
        </SDropdown.Item>
        <SDropdown.Separator />
        <SDropdown.Item>
          <SIcon name="log-out" className="mr-2 h-4 w-4" />
          <span>Logout</span>
          <SDropdown.Shortcut>⇧⌘Q</SDropdown.Shortcut>
        </SDropdown.Item>
      </SDropdown.Content>
    </SDropdown>
  );
};

export default IconShortcutDropdownExample;
```

### Nested Dropdown Submenus

```tsx
import React from "react";
import { SDropdown } from "@chargebee/sting-react";
import { SIcon } from "@chargebee/sting-react";

const NestedDropdownExample = () => {
  return (
    <SDropdown>
      <SDropdown.Trigger>
        Advanced <SIcon name="chevron-down" className="ml-2 h-4 w-4" />
      </SDropdown.Trigger>
      <SDropdown.Content>
        <SDropdown.Item>Basic Options</SDropdown.Item>
        <SDropdown.Sub>
          <SDropdown.SubTrigger>More Options</SDropdown.SubTrigger>
          <SDropdown.SubContent>
            <SDropdown.Item>Option 1</SDropdown.Item>
            <SDropdown.Item>Option 2</SDropdown.Item>
            <SDropdown.Item>Option 3</SDropdown.Item>
          </SDropdown.SubContent>
        </SDropdown.Sub>
        <SDropdown.Separator />
        <SDropdown.Item>Save</SDropdown.Item>
      </SDropdown.Content>
    </SDropdown>
  );
};

export default NestedDropdownExample;
```

### Dropdown with Custom Positioning

```tsx
import React from "react";
import { SDropdown } from "@chargebee/sting-react";
import { SIcon } from "@chargebee/sting-react";

const PositioningDropdownExample = () => {
  return (
    <div className="flex flex-col gap-4">
      <SDropdown>
        <SDropdown.Trigger>
          Bottom (Default) <SIcon name="chevron-down" className="ml-2 h-4 w-4" />
        </SDropdown.Trigger>
        <SDropdown.Content>
          <SDropdown.Item>Item 1</SDropdown.Item>
          <SDropdown.Item>Item 2</SDropdown.Item>
        </SDropdown.Content>
      </SDropdown>

      <SDropdown>
        <SDropdown.Trigger>
          Top <SIcon name="chevron-down" className="ml-2 h-4 w-4" />
        </SDropdown.Trigger>
        <SDropdown.Content position={{ side: "top" }}>
          <SDropdown.Item>Item 1</SDropdown.Item>
          <SDropdown.Item>Item 2</SDropdown.Item>
        </SDropdown.Content>
      </SDropdown>

      <SDropdown>
        <SDropdown.Trigger>
          Right <SIcon name="chevron-down" className="ml-2 h-4 w-4" />
        </SDropdown.Trigger>
        <SDropdown.Content position={{ side: "right", sideOffset: 15 }}>
          <SDropdown.Item>Item 1</SDropdown.Item>
          <SDropdown.Item>Item 2</SDropdown.Item>
        </SDropdown.Content>
      </SDropdown>
    </div>
  );
};

export default PositioningDropdownExample;
```

## Key Features

- **Accessibility**: Built on Radix UI for proper keyboard navigation, screen reader support, and ARIA attributes
- **Compound Component Pattern**: Flexible composition with various sub-components
- **Nested Menus**: Support for multi-level dropdown menus with submenus
- **Interactive Items**: Includes regular items, checkbox items, and radio items
- **Grouping and Organization**: Group related items and add visual separators
- **Keyboard Shortcuts**: Display keyboard shortcuts for actions
- **Icon Support**: Easily include icons in menu items
- **Custom Positioning**: Control the placement and alignment of dropdown menus
- **Scrollable Content**: Automatically handles overflow with scrolling for long menus
- **Animation**: Smooth open/close animations for better user experience
- **Focus Management**: Proper focus handling for keyboard navigation
- **TypeScript Support**: Comprehensive type definitions for better developer experience
