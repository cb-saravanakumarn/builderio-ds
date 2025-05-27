# Component Name

SModal

## Description

The SModal component provides a flexible and accessible modal dialog system built on top of Radix UI's Dialog primitive. It follows a compound component pattern, offering a collection of sub-components for creating rich, customized modal interfaces with proper styling, animations, and accessibility features. The modal supports various sizes, variants, and customization options to fit different use cases across the application.

## TypeScript Types

The SModal component is composed of multiple sub-components, each with their own props.

```typescript
/**
 * Props for the SModal Root component
 */
interface SModalRootProps extends Dialog.DialogProps {
  /**
   * Content of the modal
   */
  children: React.ReactNode;
}

/**
 * Props for the SModal Content component
 */
interface SModalContentProps
  extends React.ComponentPropsWithoutRef<typeof Dialog.Content>,
    VariantProps<typeof modalVariants> {
  /**
   * Whether to show the close button in the top-right corner
   * @default true
   */
  showCloseButton?: boolean;

  /**
   * Callback when the modal is closed
   */
  onClose?: () => void;

  /**
   * Visual variant of the modal
   */
  variant?: "default" | "destructive";

  /**
   * Size of the modal
   */
  size?: "sm" | "md" | "lg" | "xl" | "full";

  /**
   * Height of the modal body
   */
  bodyHeight?: "auto" | "screen";

  /**
   * Padding inside the modal
   */
  padding?: "none" | "sm" | "md" | "lg";

  /**
   * Spacing between elements in the modal
   */
  space?: "none" | "sm" | "md" | "lg";
}

/**
 * Props for the SModal Body component
 */
interface SModalBodyProps extends React.HTMLAttributes<HTMLDivElement> {}

/**
 * Props for the SModal Header component
 */
interface SModalHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Whether to show the close button in the header
   */
  showCloseButton?: boolean;

  /**
   * Content of the header
   */
  children: React.ReactNode;

  /**
   * Whether to show a shadow below the header
   */
  showShadow?: boolean;
}

/**
 * Props for the SModal Title component
 */
interface SModalTitleProps
  extends React.ComponentPropsWithoutRef<typeof Dialog.Title> {
  /**
   * Size of the title text
   */
  textSize?: "xsmall" | "small" | "regular" | "large" | "xlarge" | "xxlarge";
}

/**
 * Props for the SModal Description component
 */
type SModalDescriptionProps = React.ComponentPropsWithoutRef<
  typeof Dialog.Description
>;

/**
 * Props for the SModal Footer component
 */
type SModalFooterProps = React.HTMLAttributes<HTMLDivElement>;
```

## Example

Here are examples demonstrating how to use the SModal component:

### Basic Modal

```tsx
import React, { useState } from "react";
import { SModal, SButton } from "@chargebee/sting-react";

const BasicModalExample = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <SButton onClick={() => setOpen(true)}>Open Modal</SButton>

      <SModal.Root open={open} onOpenChange={setOpen}>
        <SModal.Content>
          <SModal.Header>
            <SModal.Title>Modal Title</SModal.Title>
            <SModal.Description>
              This is a simple modal dialog with a title and description.
            </SModal.Description>
          </SModal.Header>

          <SModal.Body>
            <p className="py-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              pulvinar risus non risus hendrerit venenatis. Pellentesque sit
              amet hendrerit risus, sed porttitor quam.
            </p>
          </SModal.Body>

          <SModal.Footer>
            <SButton variant="ghost" onClick={() => setOpen(false)}>
              Cancel
            </SButton>
            <SButton variant="primary">Continue</SButton>
          </SModal.Footer>
        </SModal.Content>
      </SModal.Root>
    </>
  );
};

export default BasicModalExample;
```

### Modal with Trigger

```tsx
import React from "react";
import { SModal, SButton } from "@chargebee/sting-react";

const ModalWithTriggerExample = () => {
  return (
    <SModal.Root>
      <SModal.Trigger asChild>
        <SButton variant="primary">Open Settings</SButton>
      </SModal.Trigger>

      <SModal.Content size="lg">
        <SModal.Header showShadow>
          <SModal.Title textSize="xlarge">Account Settings</SModal.Title>
          <SModal.Description>
            Manage your account preferences and settings
          </SModal.Description>
        </SModal.Header>

        <SModal.Body>
          <div className="space-y-4 p-4">
            <div className="rounded border p-4">
              <h3 className="text-lg font-medium">Profile Information</h3>
              <p className="text-sm text-neutral-500">
                Update your personal details and how others see you on the
                platform
              </p>
            </div>

            <div className="rounded border p-4">
              <h3 className="text-lg font-medium">Password & Security</h3>
              <p className="text-sm text-neutral-500">
                Manage your password, two-factor authentication and security
                settings
              </p>
            </div>

            <div className="rounded border p-4">
              <h3 className="text-lg font-medium">Notifications</h3>
              <p className="text-sm text-neutral-500">
                Control when and how you receive notifications
              </p>
            </div>
          </div>
        </SModal.Body>

        <SModal.Footer className="border-t p-4">
          <SModal.Close asChild>
            <SButton variant="ghost">Close</SButton>
          </SModal.Close>
          <SButton variant="primary">Save Changes</SButton>
        </SModal.Footer>
      </SModal.Content>
    </SModal.Root>
  );
};

export default ModalWithTriggerExample;
```

### Destructive Confirmation Modal

```tsx
import React, { useState } from "react";
import { SModal, SButton } from "@chargebee/sting-react";
import { AlertTriangle } from "lucide-react";

const DestructiveModalExample = () => {
  const [open, setOpen] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = () => {
    setIsDeleting(true);
    // Simulate API call
    setTimeout(() => {
      setIsDeleting(false);
      setOpen(false);
      // Show success notification or redirect
    }, 1500);
  };

  return (
    <>
      <SButton variant="destructive" onClick={() => setOpen(true)}>
        Delete Account
      </SButton>

      <SModal.Root open={open} onOpenChange={setOpen}>
        <SModal.Content variant="destructive" size="md">
          <SModal.Header>
            <div className="flex items-center gap-2 text-danger-600">
              <AlertTriangle className="size-5" />
              <SModal.Title>Delete Account</SModal.Title>
            </div>
          </SModal.Header>

          <SModal.Body>
            <div className="py-4">
              <p className="mb-4">
                Are you sure you want to delete your account? This action cannot
                be undone.
              </p>
              <p className="font-semibold">
                All your data will be permanently removed, including:
              </p>
              <ul className="ml-5 mt-2 list-disc text-sm">
                <li>Profile information</li>
                <li>Activity history</li>
                <li>Saved preferences</li>
                <li>All content you've created</li>
              </ul>
            </div>
          </SModal.Body>

          <SModal.Footer className="border-t p-4">
            <SButton
              variant="ghost"
              onClick={() => setOpen(false)}
              disabled={isDeleting}
            >
              Cancel
            </SButton>
            <SButton
              variant="destructive"
              onClick={handleDelete}
              loading={isDeleting}
            >
              {isDeleting ? "Deleting..." : "Delete Account"}
            </SButton>
          </SModal.Footer>
        </SModal.Content>
      </SModal.Root>
    </>
  );
};

export default DestructiveModalExample;
```

### Form in Modal

```tsx
import React, { useState } from "react";
import { SModal, SButton, SInput, SCheckbox } from "@chargebee/sting-react";

const FormModalExample = () => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setOpen(false);
  };

  return (
    <>
      <SButton variant="primary" onClick={() => setOpen(true)}>
        Join Newsletter
      </SButton>

      <SModal.Root open={open} onOpenChange={setOpen}>
        <SModal.Content size="md">
          <form onSubmit={handleSubmit}>
            <SModal.Header>
              <SModal.Title>Subscribe to Our Newsletter</SModal.Title>
              <SModal.Description>
                Get the latest updates and news delivered to your inbox
              </SModal.Description>
            </SModal.Header>

            <SModal.Body>
              <div className="space-y-4 p-4">
                <SInput
                  label="Full Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />

                <SInput
                  label="Email Address"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />

                <SCheckbox
                  label="I agree to receive marketing emails"
                  checked={formData.agree}
                  onCheckedChange={(checked) =>
                    setFormData((prev) => ({ ...prev, agree: checked }))
                  }
                />
              </div>
            </SModal.Body>

            <SModal.Footer className="border-t p-4">
              <SButton
                type="button"
                variant="ghost"
                onClick={() => setOpen(false)}
              >
                Cancel
              </SButton>
              <SButton type="submit" variant="primary">
                Subscribe
              </SButton>
            </SModal.Footer>
          </form>
        </SModal.Content>
      </SModal.Root>
    </>
  );
};

export default FormModalExample;
```

## Key Features

- **Accessibility**: Built on Radix UI for proper keyboard navigation, screen reader support, and ARIA attributes
- **Compound Component Pattern**: Flexible composition with various sub-components
- **Multiple Sizes**: Various predefined sizes from small to full-screen
- **Variants**: Support for different visual styles including destructive modals
- **Animated Transitions**: Smooth animations for opening and closing
- **Customizable Layout**: Header, body, and footer sections with flexible styling
- **Responsive Design**: Adapts to different screen sizes
- **Focus Management**: Proper focus trapping within the modal
- **Flexible Integration**: Works with forms, confirmation dialogs, and complex UI patterns
- **TypeScript Support**: Comprehensive type definitions for better developer experience
