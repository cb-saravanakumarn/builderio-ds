# Component Name

STooltip

## Description

The STooltip component provides contextual information when users hover over or focus on an element. Built on top of Radix UI's Tooltip primitive, it offers an accessible way to display additional information without requiring a click or disrupting the user's workflow. The tooltip supports various placements, alignments, colors, and content types, making it suitable for providing hints, explanations, or additional context throughout the application.

## TypeScript Types

The following types represent the props that the STooltip component and its sub-components accept.

```typescript
/**
 * Props for the STooltip component
 */
export interface STooltipProps
  extends RadixTooltip.TooltipProps,
    TooltipVariants {
  /**
   * The element that will trigger the tooltip
   */
  children?: React.ReactNode;

  /**
   * Alternative prop for trigger element (for backward compatibility)
   */
  trigger?: React.ReactNode;

  /**
   * Text content of the tooltip
   */
  label?: string;

  /**
   * Optional link to include in the tooltip
   */
  link?: {
    label: string;
    href: string;
  };

  /**
   * Custom content element for the tooltip
   */
  contentElement?: React.ReactNode;

  /**
   * Position of the tooltip relative to the trigger
   * @default 'top'
   */
  placement?: "top" | "right" | "bottom" | "left";

  /**
   * Alignment of the tooltip
   */
  align?: "start" | "center" | "end";

  /**
   * Delay before showing the tooltip (in milliseconds)
   * @default 0
   */
  delayDuration?: number;
}

/**
 * Variants for tooltip styling
 */
export type TooltipVariants = {
  /**
   * Width of the tooltip
   */
  width?: "auto" | "sm" | "md" | "lg";

  /**
   * Color theme of the tooltip
   */
  color?: "default" | "dark" | "light";
};
```

## Example

Here are examples demonstrating how to use the STooltip component:

### Basic Tooltip

```tsx
import React from "react";
import { STooltip } from "@chargebee/sting-react";
import { SButton } from "@chargebee/sting-react";
import { Info } from "lucide-react";

const BasicTooltipExample = () => {
  return (
    <div className="flex items-center space-x-4">
      <STooltip label="This is a simple tooltip">
        <SButton variant="ghost" size="icon">
          <Info className="size-5" />
        </SButton>
      </STooltip>

      <STooltip
        label="Tooltips can have different placements"
        placement="right"
      >
        <span className="underline cursor-help">Hover me</span>
      </STooltip>
    </div>
  );
};

export default BasicTooltipExample;
```

### Tooltip with Different Styles

```tsx
import React from "react";
import { STooltip } from "@chargebee/sting-react";
import { SButton } from "@chargebee/sting-react";

const StyledTooltipExample = () => {
  return (
    <div className="flex flex-wrap gap-4">
      <STooltip label="Default tooltip style" color="default" width="auto">
        <SButton>Default</SButton>
      </STooltip>

      <STooltip label="Dark tooltip with fixed width" color="dark" width="md">
        <SButton variant="secondary">Dark</SButton>
      </STooltip>

      <STooltip label="Light tooltip style" color="light" width="sm">
        <SButton variant="outline">Light</SButton>
      </STooltip>

      <STooltip
        label="Wide tooltip can accommodate more text content"
        color="default"
        width="lg"
      >
        <SButton variant="primary">Wide</SButton>
      </STooltip>
    </div>
  );
};

export default StyledTooltipExample;
```

### Tooltip with Custom Content

```tsx
import React from "react";
import { STooltip } from "@chargebee/sting-react";
import { SBadge } from "@chargebee/sting-react";
import { User, Mail, Phone } from "lucide-react";

const CustomContentTooltipExample = () => {
  return (
    <div className="flex justify-center">
      <STooltip
        contentElement={
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <User className="size-4" />
              <span>John Doe</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="size-4" />
              <span>john.doe@example.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="size-4" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex gap-2 mt-2">
              <SBadge variant="success">Online</SBadge>
              <SBadge variant="neutral">Team Lead</SBadge>
            </div>
          </div>
        }
        width="md"
      >
        <div className="h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center text-white cursor-help">
          JD
        </div>
      </STooltip>
    </div>
  );
};

export default CustomContentTooltipExample;
```

### Tooltip with Link

```tsx
import React from "react";
import { STooltip } from "@chargebee/sting-react";
import { SButton } from "@chargebee/sting-react";
import { HelpCircle } from "lucide-react";

const TooltipWithLinkExample = () => {
  return (
    <div className="p-4 border rounded">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium">API Key Settings</h3>
        <STooltip
          label="Learn more about API keys and security best practices"
          link={{
            label: "View documentation",
            href: "https://example.com/docs/api-keys",
          }}
          placement="left"
        >
          <SButton variant="ghost" size="sm" icon={<HelpCircle size={16} />} />
        </STooltip>
      </div>

      <div className="mt-4">
        <div className="flex items-center gap-2">
          <input
            type="password"
            value="sk_test_51HG78xJhdiuTg"
            readOnly
            className="flex-1 px-3 py-2 border rounded"
          />
          <SButton variant="primary" size="sm">
            Regenerate
          </SButton>
        </div>
        <p className="mt-2 text-sm text-gray-500">
          Your API key grants full access to your account. Keep it confidential.
        </p>
      </div>
    </div>
  );
};

export default TooltipWithLinkExample;
```

### Tooltip with Delay and Positioning

```tsx
import React from "react";
import { STooltip } from "@chargebee/sting-react";

const TooltipPositioningExample = () => {
  return (
    <div className="grid grid-cols-2 gap-8 p-8">
      <STooltip
        label="Appears after a delay"
        delayDuration={500}
        placement="top"
        align="center"
      >
        <div className="p-4 border rounded text-center cursor-help">
          Hover (500ms delay)
        </div>
      </STooltip>

      <STooltip label="Aligned to the start" placement="bottom" align="start">
        <div className="p-4 border rounded text-center cursor-help">
          Bottom Start
        </div>
      </STooltip>

      <STooltip
        label="Positioned on the right"
        placement="right"
        align="center"
      >
        <div className="p-4 border rounded text-center cursor-help">
          Right Center
        </div>
      </STooltip>

      <STooltip label="Aligned to the end" placement="left" align="end">
        <div className="p-4 border rounded text-center cursor-help">
          Left End
        </div>
      </STooltip>
    </div>
  );
};

export default TooltipPositioningExample;
```

### Controlled Tooltip (STooltipWithActions)

```tsx
import React, { useState } from "react";
import {
  STooltipWithActions,
  STooltipTrigger,
  STooltipContent,
} from "@chargebee/sting-react";
import { SButton } from "@chargebee/sting-react";

const ControlledTooltipExample = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col items-center gap-4">
      <SButton variant="secondary" onClick={() => setOpen(!open)}>
        {open ? "Hide Tooltip" : "Show Tooltip"}
      </SButton>

      <STooltipWithActions open={open} onOpenChange={setOpen}>
        <STooltipTrigger>
          <div className="p-4 border rounded">
            This tooltip is controlled programmatically
          </div>
        </STooltipTrigger>
        <STooltipContent>
          <div className="p-1">
            <p>This tooltip is shown or hidden by clicking the button above.</p>
            <p className="mt-2">It doesn't respond to hover events.</p>
          </div>
        </STooltipContent>
      </STooltipWithActions>
    </div>
  );
};

export default ControlledTooltipExample;
```

## Key Features

- **Accessibility**: Built on Radix UI for proper keyboard navigation, focus management, and ARIA attributes
- **Multiple Placements**: Support for top, right, bottom, and left positioning
- **Alignment Options**: Control tooltip alignment relative to the trigger
- **Content Flexibility**: Support for text, links, and custom content elements
- **Width Variants**: Various predefined widths to accommodate different content needs
- **Color Themes**: Different color schemes to match the application design
- **Delay Support**: Configurable delay before showing the tooltip
- **Arrow Indicator**: Visual arrow pointing to the trigger element
- **Controlled Mode**: STooltipWithActions component for programmatic control
- **Compound Component Pattern**: STooltipTrigger and STooltipContent for more complex scenarios
- **TypeScript Support**: Comprehensive type definitions for better developer experience
