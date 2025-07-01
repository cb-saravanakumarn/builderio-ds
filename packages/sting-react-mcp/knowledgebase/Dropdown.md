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
import {
  SDropdown,
  SDropdownTrigger,
  SDropdownContent,
  SDropdownItem,
  SDropdownSeparator,
} from "@chargebee/sting-react";
import { SButton } from "@chargebee/sting-react";
import { ChevronDown } from "lucide-react";

const BasicDropdownExample = () => {
  return (
    <SDropdown>
      <SDropdownTrigger asChild>
        <SButton
          variant="secondary"
          icon={<ChevronDown />}
          iconPosition="right"
        >
          Menu
        </SButton>
      </SDropdownTrigger>
      <SDropdownContent>
        <SDropdownItem>New File</SDropdownItem>
        <SDropdownItem>New Folder</SDropdownItem>
        <SDropdownSeparator />
        <SDropdownItem>Settings</SDropdownItem>
        <SDropdownItem>Help</SDropdownItem>
      </SDropdownContent>
    </SDropdown>
  );
};

export default BasicDropdownExample;
```

### Dropdown with Checkbox and Radio Items

```tsx
import React, { useState } from "react";
import {
  SDropdown,
  SDropdownTrigger,
  SDropdownContent,
  SDropdownItem,
  SDropdownCheckboxItem,
  SDropdownRadioGroup,
  SDropdownRadioItem,
  SDropdownLabel,
  SDropdownSeparator,
} from "@chargebee/sting-react";
import { SButton } from "@chargebee/sting-react";
import { Settings } from "lucide-react";

const CheckboxRadioDropdownExample = () => {
  const [showStatusBar, setShowStatusBar] = useState(true);
  const [showActivityBar, setShowActivityBar] = useState(false);
  const [position, setPosition] = useState("bottom");

  return (
    <SDropdown>
      <SDropdownTrigger asChild>
        <SButton variant="ghost" icon={<Settings />}>
          Preferences
        </SButton>
      </SDropdownTrigger>
      <SDropdownContent className="w-56">
        <SDropdownLabel>Appearance</SDropdownLabel>
        <SDropdownSeparator />

        <SDropdownCheckboxItem
          checked={showStatusBar}
          onCheckedChange={setShowStatusBar}
        >
          Status Bar
        </SDropdownCheckboxItem>

        <SDropdownCheckboxItem
          checked={showActivityBar}
          onCheckedChange={setShowActivityBar}
        >
          Activity Bar
        </SDropdownCheckboxItem>

        <SDropdownSeparator />
        <SDropdownLabel>Panel Position</SDropdownLabel>

        <SDropdownRadioGroup value={position} onValueChange={setPosition}>
          <SDropdownRadioItem value="top">Top</SDropdownRadioItem>
          <SDropdownRadioItem value="right">Right</SDropdownRadioItem>
          <SDropdownRadioItem value="bottom">Bottom</SDropdownRadioItem>
          <SDropdownRadioItem value="left">Left</SDropdownRadioItem>
        </SDropdownRadioGroup>
      </SDropdownContent>
    </SDropdown>
  );
};

export default CheckboxRadioDropdownExample;
```

### Dropdown with Icons and Keyboard Shortcuts

```tsx
import React from "react";
import {
  SDropdown,
  SDropdownTrigger,
  SDropdownContent,
  SDropdownItem,
  SDropdownShortcut,
  SDropdownSeparator,
} from "@chargebee/sting-react";
import { SButton } from "@chargebee/sting-react";
import {
  Copy,
  Scissors,
  Clipboard,
  Download,
  Trash,
  MoreVertical,
} from "lucide-react";

const IconShortcutDropdownExample = () => {
  return (
    <SDropdown>
      <SDropdownTrigger asChild>
        <SButton variant="ghost" size="icon">
          <MoreVertical className="size-4" />
          <span className="sr-only">Actions</span>
        </SButton>
      </SDropdownTrigger>
      <SDropdownContent className="w-56">
        <SDropdownItem>
          <Copy className="mr-2 size-4" />
          <span>Copy</span>
          <SDropdownShortcut>⌘C</SDropdownShortcut>
        </SDropdownItem>

        <SDropdownItem>
          <Scissors className="mr-2 size-4" />
          <span>Cut</span>
          <SDropdownShortcut>⌘X</SDropdownShortcut>
        </SDropdownItem>

        <SDropdownItem>
          <Clipboard className="mr-2 size-4" />
          <span>Paste</span>
          <SDropdownShortcut>⌘V</SDropdownShortcut>
        </SDropdownItem>

        <SDropdownSeparator />

        <SDropdownItem>
          <Download className="mr-2 size-4" />
          <span>Download</span>
          <SDropdownShortcut>⌘D</SDropdownShortcut>
        </SDropdownItem>

        <SDropdownSeparator />

        <SDropdownItem className="text-danger-500 focus:text-danger-500">
          <Trash className="mr-2 size-4" />
          <span>Delete</span>
          <SDropdownShortcut>⌫</SDropdownShortcut>
        </SDropdownItem>
      </SDropdownContent>
    </SDropdown>
  );
};

export default IconShortcutDropdownExample;
```

### Nested Dropdown Submenus

```tsx
import React from "react";
import {
  SDropdown,
  SDropdownTrigger,
  SDropdownContent,
  SDropdownItem,
  SDropdownGroup,
  SDropdownLabel,
  SDropdownSeparator,
  SDropdownSub,
  SDropdownSubTrigger,
  SDropdownSubContent,
} from "@chargebee/sting-react";
import { SButton } from "@chargebee/sting-react";
import {
  Plus,
  Users,
  LayoutGrid,
  User,
  Building,
  FileText,
} from "lucide-react";

const NestedDropdownExample = () => {
  return (
    <SDropdown>
      <SDropdownTrigger asChild>
        <SButton variant="primary" icon={<Plus />}>
          Create New
        </SButton>
      </SDropdownTrigger>

      <SDropdownContent className="w-56">
        <SDropdownGroup>
          <SDropdownLabel>Create New</SDropdownLabel>

          <SDropdownSeparator />

          <SDropdownItem>
            <FileText className="mr-2 size-4" />
            <span>Document</span>
          </SDropdownItem>

          <SDropdownSub>
            <SDropdownSubTrigger>
              <Users className="mr-2 size-4" />
              <span>Team</span>
            </SDropdownSubTrigger>
            <SDropdownSubContent>
              <SDropdownItem>
                <User className="mr-2 size-4" />
                <span>Personal Team</span>
              </SDropdownItem>
              <SDropdownItem>
                <Building className="mr-2 size-4" />
                <span>Company Team</span>
              </SDropdownItem>
              <SDropdownSeparator />
              <SDropdownItem>
                <Plus className="mr-2 size-4" />
                <span>New Team Type</span>
              </SDropdownItem>
            </SDropdownSubContent>
          </SDropdownSub>

          <SDropdownSub>
            <SDropdownSubTrigger>
              <LayoutGrid className="mr-2 size-4" />
              <span>Project</span>
            </SDropdownSubTrigger>
            <SDropdownSubContent>
              <SDropdownItem>Website</SDropdownItem>
              <SDropdownItem>Mobile App</SDropdownItem>
              <SDropdownItem>Desktop App</SDropdownItem>
              <SDropdownSeparator />
              <SDropdownItem>Custom Project</SDropdownItem>
            </SDropdownSubContent>
          </SDropdownSub>
        </SDropdownGroup>
      </SDropdownContent>
    </SDropdown>
  );
};

export default NestedDropdownExample;
```

### Dropdown with Custom Positioning

```tsx
import React from "react";
import {
  SDropdown,
  SDropdownTrigger,
  SDropdownContent,
  SDropdownItem,
} from "@chargebee/sting-react";
import { SButton } from "@chargebee/sting-react";

const PositioningDropdownExample = () => {
  return (
    <div className="flex flex-col gap-4">
      <SDropdown>
        <SDropdownTrigger asChild>
          <SButton variant="outline">Bottom Right</SButton>
        </SDropdownTrigger>
        <SDropdownContent
          position={{
            side: "bottom",
            align: "end",
            sideOffset: 8,
          }}
        >
          <SDropdownItem>Option 1</SDropdownItem>
          <SDropdownItem>Option 2</SDropdownItem>
          <SDropdownItem>Option 3</SDropdownItem>
        </SDropdownContent>
      </SDropdown>

      <SDropdown>
        <SDropdownTrigger asChild>
          <SButton variant="outline">Top Center</SButton>
        </SDropdownTrigger>
        <SDropdownContent
          position={{
            side: "top",
            align: "center",
            sideOffset: 8,
          }}
        >
          <SDropdownItem>Option 1</SDropdownItem>
          <SDropdownItem>Option 2</SDropdownItem>
          <SDropdownItem>Option 3</SDropdownItem>
        </SDropdownContent>
      </SDropdown>

      <SDropdown>
        <SDropdownTrigger asChild>
          <SButton variant="outline">Right Start</SButton>
        </SDropdownTrigger>
        <SDropdownContent
          position={{
            side: "right",
            align: "start",
            sideOffset: 8,
          }}
        >
          <SDropdownItem>Option 1</SDropdownItem>
          <SDropdownItem>Option 2</SDropdownItem>
          <SDropdownItem>Option 3</SDropdownItem>
        </SDropdownContent>
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
