# Component Name

SButton

## Description

The SButton component is a versatile and highly composable button element built on top of Radix UI's Slot component. It provides a flexible foundation for creating interactive elements with consistent styling and behavior. The component supports multiple visual variants, sizes, loading states, and icon positioning. Built with accessibility in mind, it handles disabled states appropriately and provides proper ARIA attributes for screen readers.

## TypeScript Types

The following types represent the props that the SButton component accepts:

```typescript
/**
 * Props for the SButton component
 */
export interface SButtonProps
  extends ComponentPropsWithout<"button", RemovedProps>,
    ButtonVariants {
  /**
   * Whether to render the button as a child component (Radix UI Slot)
   * When true, the button will merge its props with its immediate child
   * @default false
   */
  asChild?: boolean;

  /**
   * Whether the button is in a loading state
   * Shows a loading spinner and disables interactions
   * @default false
   */
  loading?: boolean;

  /**
   * Optional icon to display in the button
   * Accepts any React node (typically an icon component)
   */
  icon?: React.ReactNode;

  /**
   * Position of the icon relative to the button text
   * @default 'left'
   */
  iconPosition?: "left" | "right";

  /**
   * Optional additional classname for the button
   * Used for custom styling alongside the default styles
   */
  className?: string;

  /**
   * The visual style of the button
   * Determines the button's appearance and color scheme
   * @default 'primary'
   */
  variant?:
    | "primary"
    | "primary-outline"
    | "primary-ghost"
    | "neutral"
    | "neutral-ghost"
    | "danger"
    | "danger-outline"
    | "danger-ghost";

  /**
   * The size of the button
   * Controls padding, font size, and overall dimensions
   * @default 'regular'
   */
  size?: "regular" | "large";

  /**
   * Whether the button should take up the full width of its container
   * @default false
   */
  fullWidth?: boolean;

  /**
   * Whether the button is disabled
   * Prevents user interaction and applies disabled styling
   * @default false
   */
  disabled?: boolean;
}
```

## Examples

Here are comprehensive examples demonstrating various ways to use the SButton component:

### Basic Button Usage with Different Variants

```tsx
import React from "react";
import { SButton } from "@chargebee/sting-react";

const ButtonVariantsExample = () => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">Primary Variants</h3>
        <div className="flex flex-wrap gap-3">
          <SButton variant="primary">Primary</SButton>
          <SButton variant="primary-outline">Primary Outline</SButton>
          <SButton variant="primary-ghost">Primary Ghost</SButton>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Neutral Variants</h3>
        <div className="flex flex-wrap gap-3">
          <SButton variant="neutral">Neutral</SButton>
          <SButton variant="neutral-ghost">Neutral Ghost</SButton>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Danger Variants</h3>
        <div className="flex flex-wrap gap-3">
          <SButton variant="danger">Danger</SButton>
          <SButton variant="danger-outline">Danger Outline</SButton>
          <SButton variant="danger-ghost">Danger Ghost</SButton>
        </div>
      </div>
    </div>
  );
};

export default ButtonVariantsExample;
```

### Button Sizes and Full Width

```tsx
import React from "react";
import { SButton } from "@chargebee/sting-react";

const ButtonSizesExample = () => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">Button Sizes</h3>
        <div className="flex items-center gap-3">
          <SButton size="regular">Regular</SButton>
          <SButton size="large">Large</SButton>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Full Width Button</h3>
        <SButton fullWidth variant="primary">
          Full Width Button
        </SButton>
      </div>
    </div>
  );
};

export default ButtonSizesExample;
```

### Buttons with Icons

```tsx
import React from "react";
import { SButton } from "@chargebee/sting-react";
import { Plus, Download, Trash, ArrowRight, Settings } from "lucide-react";

const ButtonWithIconsExample = () => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">Left Icon Buttons</h3>
        <div className="flex flex-wrap gap-3">
          <SButton
            variant="primary"
            icon={<Plus size={16} />}
            iconPosition="left"
          >
            Add Item
          </SButton>

          <SButton
            variant="primary-outline"
            icon={<Download size={16} />}
            iconPosition="left"
          >
            Download
          </SButton>

          <SButton
            variant="danger"
            icon={<Trash size={16} />}
            iconPosition="left"
          >
            Delete
          </SButton>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Right Icon Buttons</h3>
        <div className="flex flex-wrap gap-3">
          <SButton
            variant="primary"
            icon={<ArrowRight size={16} />}
            iconPosition="right"
          >
            Next Step
          </SButton>

          <SButton
            variant="neutral"
            icon={<Settings size={16} />}
            iconPosition="right"
          >
            Settings
          </SButton>
        </div>
      </div>
    </div>
  );
};

export default ButtonWithIconsExample;
```

### Button States - Loading and Disabled

```tsx
import React, { useState } from "react";
import { SButton } from "@chargebee/sting-react";
import { Save, RefreshCw } from "lucide-react";

const ButtonStatesExample = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = () => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">Loading State</h3>
        <div className="flex flex-wrap gap-3">
          <SButton
            variant="primary"
            loading={isLoading}
            onClick={handleSubmit}
            icon={<Save size={16} />}
          >
            {isLoading ? "Saving..." : "Save Changes"}
          </SButton>

          <SButton
            variant="primary-outline"
            loading
            icon={<RefreshCw size={16} />}
          >
            Loading...
          </SButton>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Disabled State</h3>
        <div className="flex flex-wrap gap-3">
          <SButton variant="primary" disabled>
            Disabled Primary
          </SButton>

          <SButton variant="danger" disabled>
            Disabled Danger
          </SButton>

          <SButton variant="primary-outline" disabled icon={<Save size={16} />}>
            Disabled with Icon
          </SButton>
        </div>
      </div>
    </div>
  );
};

export default ButtonStatesExample;
```

### Advanced Usage with Radix UI Slot (asChild)

```tsx
import React from "react";
import { SButton } from "@chargebee/sting-react";
import { ExternalLink, ArrowRight } from "lucide-react";

const AdvancedButtonExample = () => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">Button as Link</h3>
        <div className="flex gap-3">
          {/* Renders as an anchor tag but with button styling */}
          <SButton
            asChild
            variant="primary"
            icon={<ExternalLink size={16} />}
            iconPosition="right"
          >
            <a
              href="https://example.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Website
            </a>
          </SButton>

          {/* Internal navigation link */}
          <SButton asChild variant="primary-ghost">
            <a href="/dashboard">Go to Dashboard</a>
          </SButton>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">
          Custom Component Composition
        </h3>
        <SButton
          asChild
          variant="neutral"
          icon={<ArrowRight size={16} />}
          iconPosition="right"
        >
          <div className="cursor-pointer">
            <span className="block text-sm font-medium">Custom Container</span>
            <span className="block text-xs text-gray-500">
              Click to continue
            </span>
          </div>
        </SButton>
      </div>
    </div>
  );
};

export default AdvancedButtonExample;
```

### Form Integration Example

```tsx
import React, { useState } from "react";
import { SButton } from "@chargebee/sting-react";
import { Save, X, RefreshCw } from "lucide-react";

const FormExample = () => {
  const [isSaving, setIsSaving] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSaving(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSaving(false);
      console.log("Form submitted:", formData);
    }, 2000);
  };

  const handleReset = () => {
    setFormData({ name: "", email: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md p-6 space-y-4">
      <div>
        <h3 className="text-lg font-semibold mb-4">User Information Form</h3>

        <div className="space-y-3">
          <input
            type="text"
            placeholder="Full Name"
            value={formData.name}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, name: e.target.value }))
            }
            className="w-full p-2 border rounded"
            required
          />

          <input
            type="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, email: e.target.value }))
            }
            className="w-full p-2 border rounded"
            required
          />
        </div>
      </div>

      <div className="flex gap-3 pt-4">
        {/* Submit button with loading state */}
        <SButton
          type="submit"
          variant="primary"
          loading={isSaving}
          icon={<Save size={16} />}
          iconPosition="left"
          disabled={!formData.name || !formData.email}
        >
          {isSaving ? "Saving..." : "Save Changes"}
        </SButton>

        {/* Reset button */}
        <SButton
          type="button"
          variant="neutral"
          icon={<RefreshCw size={16} />}
          iconPosition="left"
          onClick={handleReset}
          disabled={isSaving}
        >
          Reset
        </SButton>

        {/* Cancel button */}
        <SButton
          type="button"
          variant="primary-ghost"
          icon={<X size={16} />}
          iconPosition="left"
          disabled={isSaving}
        >
          Cancel
        </SButton>
      </div>
    </form>
  );
};

export default FormExample;
```

## Key Features

- **Multiple Variants**: Eight button variants including primary, outline, ghost, neutral, and danger styles
- **Size Options**: Regular and large sizes to fit various contexts
- **Loading State**: Built-in loading spinner with proper state management
- **Icon Support**: Flexible icon placement on left or right side
- **Full Width Option**: Easily create buttons that span the entire container width
- **Radix UI Slot Integration**: Use `asChild` prop for flexible composition with other components
- **Accessibility**: Proper ARIA attributes and keyboard navigation support
- **Disabled State**: Visual indication and interaction prevention for disabled buttons
- **TypeScript Support**: Comprehensive type definitions for better developer experience
