# Component Name

SButton

## Description

The SButton component is a versatile and highly composable button element built on top of Radix UI's Slot component. It provides a flexible foundation for creating interactive elements with consistent styling and behavior. The component supports multiple visual variants, sizes, loading states, and icon positioning. Built with accessibility in mind, it handles disabled states appropriately and provides proper ARIA attributes for screen readers.

## TypeScript Types

The following types represent the props that the SButton component accepts. These types ensure type safety and provide clear documentation for all available configuration options.

```typescript
/**
 * Props for the SButton component
 */
export interface SButtonProps
  extends ComponentPropsWithout<'button', RemovedProps>,
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
  iconPosition?: 'left' | 'right';

  /**
   * Optional additional classname for the button
   * Used for custom styling alongside the default styles
   */
  className?: string;

  /**
   * The visual style of the button
   * Determines the button's appearance and color scheme
   */
  variant?: ButtonVariants['variant'];

  /**
   * The size of the button
   * Controls padding, font size, and overall dimensions
   */
  size?: ButtonVariants['size'];

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

/**
 * Button variant types - these would be defined in your constants file
 */
type ButtonVariants = {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'ghost' | 'destructive';
  size?: 'sm' | 'md' | 'lg' | 'xl';
};
```

## Example

Here are comprehensive examples demonstrating various ways to use the SButton component:

### Basic Button Usage with Different Variants and Sizes

This example demonstrates the core functionality of SButton with different variants, sizes, and states.

```tsx
import React, { useState } from 'react';
import { SButton } from '@cb-sting-react';
import { PlusIcon, TrashIcon, DownloadIcon, CheckIcon } from 'lucide-react';

const ButtonShowcase = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleAsyncAction = () => {
    setIsLoading(true);
    // Simulate async operation
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="space-y-6 p-6 max-w-2xl">
      <div>
        <h3 className="text-lg font-semibold mb-4">Button Variants</h3>
        <div className="flex flex-wrap gap-3">
          <SButton variant="primary">Primary Button</SButton>
          <SButton variant="secondary">Secondary Button</SButton>
          <SButton variant="tertiary">Tertiary Button</SButton>
          <SButton variant="ghost">Ghost Button</SButton>
          <SButton variant="destructive">Delete Account</SButton>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Button Sizes</h3>
        <div className="flex items-center gap-3">
          <SButton size="sm">Small</SButton>
          <SButton size="md">Medium</SButton>
          <SButton size="lg">Large</SButton>
          <SButton size="xl">Extra Large</SButton>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Buttons with Icons</h3>
        <div className="flex flex-wrap gap-3">
          <SButton 
            variant="primary" 
            icon={<PlusIcon size={16} />}
            iconPosition="left"
          >
            Add Item
          </SButton>
          
          <SButton 
            variant="secondary" 
            icon={<DownloadIcon size={16} />}
            iconPosition="right"
          >
            Download
          </SButton>
          
          <SButton 
            variant="destructive" 
            icon={<TrashIcon size={16} />}
            iconPosition="left"
          >
            Delete
          </SButton>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Button States</h3>
        <div className="flex flex-wrap gap-3">
          <SButton 
            variant="primary"
            loading={isLoading}
            onClick={handleAsyncAction}
            icon={<CheckIcon size={16} />}
          >
            {isLoading ? 'Processing...' : 'Submit Form'}
          </SButton>
          
          <SButton variant="secondary" disabled>
            Disabled Button
          </SButton>
          
          <SButton 
            variant="primary" 
            fullWidth
            className="mt-3"
          >
            Full Width Button
          </SButton>
        </div>
      </div>
    </div>
  );
};

export default ButtonShowcase;
```

### Advanced Usage with Radix UI Slot (asChild)

This example shows how to use the `asChild` prop to render the button as a different element while maintaining button styling and behavior.

```tsx
import React from 'react';
import { SButton } from '@cb-sting-react';
import { ExternalLinkIcon, ArrowRightIcon } from 'lucide-react';

const AdvancedButtonExample = () => {
  return (
    <div className="space-y-6 p-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">Button as Link</h3>
        <div className="flex gap-3">
          {/* Renders as an anchor tag but with button styling */}
          <SButton 
            asChild 
            variant="primary"
            icon={<ExternalLinkIcon size={16} />}
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
          <SButton asChild variant="secondary">
            <a href="/dashboard">
              Go to Dashboard
            </a>
          </SButton>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Custom Component Composition</h3>
        <SButton 
          asChild 
          variant="tertiary"
          icon={<ArrowRightIcon size={16} />}
          iconPosition="right"
          className="border-2 border-dashed"
        >
          <div className="cursor-pointer">
            <span className="block text-sm font-medium">Custom Container</span>
            <span className="block text-xs text-gray-500">Click to continue</span>
          </div>
        </SButton>
      </div>
    </div>
  );
};

export default AdvancedButtonExample;
```

### Form Integration Example

This example demonstrates SButton usage in a form context with different button types and loading states.

```tsx
import React, { useState } from 'react';
import { SButton } from '@cb-sting-react';
import { SaveIcon, XIcon, RefreshIcon } from 'lucide-react';

const FormExample = () => {
  const [isSaving, setIsSaving] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSaving(false);
      console.log('Form submitted:', formData);
    }, 2000);
  };

  const handleReset = () => {
    setFormData({ name: '', email: '' });
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
            onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
            className="w-full p-2 border rounded"
            required
          />
          
          <input
            type="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
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
          icon={<SaveIcon size={16} />}
          iconPosition="left"
          disabled={!formData.name || !formData.email}
        >
          {isSaving ? 'Saving...' : 'Save Changes'}
        </SButton>

        {/* Reset button */}
        <SButton
          type="button"
          variant="secondary"
          icon={<RefreshIcon size={16} />}
          iconPosition="left"
          onClick={handleReset}
          disabled={isSaving}
        >
          Reset
        </SButton>

        {/* Cancel button */}
        <SButton
          type="button"
          variant="ghost"
          icon={<XIcon size={16} />}
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

- **Radix UI Slot Integration**: Use `asChild` prop for flexible composition with other components
- **Loading States**: Built-in loading spinner with proper state management
- **Icon Positioning**: Flexible icon placement on left or right side
- **Accessibility**: Proper ARIA attributes and keyboard navigation support
- **Full Width Support**: Easy full-width button layouts
- **TypeScript Support**: Comprehensive type definitions for better developer experience
- **Customizable**: Extend with custom CSS classes while maintaining design system consistency