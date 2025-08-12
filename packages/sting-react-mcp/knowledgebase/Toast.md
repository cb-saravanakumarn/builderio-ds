# Component Name

SToast

## Description

The SToast component is a flexible and accessible toast notification system built on top of Radix UI's Toast primitives. It provides a comprehensive solution for displaying temporary notifications, alerts, and messages to users. The component supports multiple variants for different message types (default, destructive, success), includes a powerful programmatic API through the `useToast` hook, and offers proper accessibility features. The system includes a `SToaster` component that manages the display of multiple toasts and handles their lifecycle automatically. The `SToaster` component now supports configurable placement options, allowing you to position toast notifications in different areas of the screen.

## TypeScript Types

The following types represent the props and interfaces that the SToast component and related utilities accept:

```typescript
/**
 * Available placement options for the SToaster component
 */
export type ToasterPlacement =
  | "top-left"
  | "top-center"
  | "top-right"
  | "bottom-left"
  | "bottom-center"
  | "bottom-right";

/**
 * Props for the SToaster component
 */
export interface SToasterProps {
  /**
   * The placement/position of the toast notifications
   * @default 'bottom-right'
   */
  placement?: ToasterPlacement;
}

/**
 * Props for the SToast component
 */
export interface SToastProps
  extends React.ComponentPropsWithoutRef<typeof ToastPrimitives.Root>,
    VariantProps<typeof toastVariants> {
  /**
   * The visual variant of the toast
   * Determines the color scheme and styling
   * @default 'default'
   */
  variant?: "default" | "destructive" | "success";

  /**
   * Additional CSS classes to apply to the toast
   */
  className?: string;
}

/**
 * Type for toast action elements
 */
export type SToastActionElement = React.ReactElement<typeof SToast.Action>;

/**
 * Toast configuration for programmatic usage
 */
export interface ToasterToast extends SToastProps {
  /**
   * Unique identifier for the toast
   */
  id: string;

  /**
   * Title of the toast notification
   */
  title?: React.ReactNode;

  /**
   * Description/body text of the toast
   */
  description?: React.ReactNode;

  /**
   * Action button element to display in the toast
   */
  action?: SToastActionElement;
}

/**
 * Toast function parameters
 */
export type Toast = Omit<ToasterToast, "id">;
```

## Examples

Here are comprehensive examples demonstrating various ways to use the SToast component:

### Basic Toast Setup with SToaster

```tsx
import React from "react";
import { SToaster } from "@chargebee/sting-react";

const App = () => {
  return (
    <div className="App">
      {/* Your app content */}
      <main>
        <h1>My Application</h1>
        {/* Other components */}
      </main>

      {/* Place SToaster at the root level - defaults to bottom-right */}
      <SToaster />
    </div>
  );
};

export default App;
```

### SToaster with Custom Placement

```tsx
import React from "react";
import { SToaster } from "@chargebee/sting-react";

const AppWithCustomPlacement = () => {
  return (
    <div className="App">
      {/* Your app content */}
      <main>
        <h1>My Application</h1>
        {/* Other components */}
      </main>

      {/* Toast notifications will appear at the top-center */}
      <SToaster placement="top-center" />
    </div>
  );
};

export default AppWithCustomPlacement;
```

### Multiple SToasters with Different Placements

```tsx
import React from "react";
import { SToaster, useToast, SButton } from "@chargebee/sting-react";

const MultiPlacementExample = () => {
  // This would typically be in separate components or contexts
  return (
    <div className="App">
      {/* Your app content */}
      <main>
        <ToastControls />
      </main>
      {/* Different toasters for different types of notifications */}
      <SToaster placement="top-right" /> {/* For success messages */}
      <SToaster placement="bottom-left" /> {/* For error messages */}
    </div>
  );
};

const ToastControls = () => {
  const { toast } = useToast();

  return (
    <div className="flex gap-4 p-4">
      <SButton
        onClick={() =>
          toast({
            variant: "success",
            title: "Success!",
            description: "This appears top-right",
          })
        }
      >
        Success Toast
      </SButton>
      <SButton
        onClick={() =>
          toast({
            variant: "destructive",
            title: "Error!",
            description: "This appears bottom-left",
          })
        }
      >
        Error Toast
      </SButton>
    </div>
  );
};

export default MultiPlacementExample;
```

### Toast Placement Showcase

```tsx
import React from "react";
import {
  SToaster,
  useToast,
  SButton,
  type ToasterPlacement,
} from "@chargebee/sting-react";

const PlacementShowcase = () => {
  const { toast } = useToast();

  const placements: ToasterPlacement[] = [
    "top-left",
    "top-center",
    "top-right",
    "bottom-left",
    "bottom-center",
    "bottom-right",
  ];

  const showToastAtPlacement = (placement: ToasterPlacement) => {
    toast({
      title: placement.replace("-", " ").toUpperCase(),
      description: `Toast positioned at ${placement}`,
      variant: "default",
    });
  };

  return (
    <div className="space-y-4 p-8">
      <h3 className="text-lg font-semibold">Toast Placement Options</h3>
      <div className="grid grid-cols-3 gap-4">
        {placements.map((placement) => (
          <SButton
            key={placement}
            variant="primary-outline"
            onClick={() => showToastAtPlacement(placement)}
          >
            {placement.replace("-", " ")}
          </SButton>
        ))}
      </div>

      {/* Note: In a real app, you'd use separate SToaster instances for different placements */}
      <div className="mt-4 text-sm text-neutral-600">
        Note: This demo uses the default placement. For different placements,
        use separate SToaster components with the placement prop.
      </div>

      <SToaster placement="bottom-right" />
    </div>
  );
};

export default PlacementShowcase;
```

### Programmatic Toast Usage with useToast Hook

```tsx
import React from "react";
import { useToast, SButton } from "@chargebee/sting-react";

const ToastDemo = () => {
  const { toast } = useToast();

  const showDefaultToast = () => {
    toast({
      title: "Notification",
      description: "This is a default toast notification.",
    });
  };

  const showSuccessToast = () => {
    toast({
      variant: "success",
      title: "Success!",
      description: "Your action was completed successfully.",
    });
  };

  const showErrorToast = () => {
    toast({
      variant: "destructive",
      title: "Error!",
      description: "Something went wrong. Please try again.",
    });
  };

  return (
    <div className="flex flex-wrap gap-4">
      <SButton onClick={showDefaultToast}>Show Default Toast</SButton>
      <SButton onClick={showSuccessToast}>Show Success Toast</SButton>
      <SButton onClick={showErrorToast}>Show Error Toast</SButton>
    </div>
  );
};

export default ToastDemo;
```

### Toast with Action Button

```tsx
import React from "react";
import { useToast, SToast, SButton } from "@chargebee/sting-react";

const ToastWithActionExample = () => {
  const { toast } = useToast();

  const showToastWithAction = () => {
    toast({
      title: "Action Required",
      description: "Please confirm your email address.",
      action: <SToast.Action altText="Resend email">Resend</SToast.Action>,
    });
  };

  const showUndoToast = () => {
    toast({
      title: "Item deleted",
      description: "The item has been removed from your list.",
      action: <SToast.Action altText="Undo deletion">Undo</SToast.Action>,
    });
  };

  return (
    <div className="flex flex-wrap gap-4">
      <SButton onClick={showToastWithAction}>Toast with Action</SButton>
      <SButton onClick={showUndoToast}>Undo Toast</SButton>
    </div>
  );
};

export default ToastWithActionExample;
```

### Different Toast Content Types

```tsx
import React from "react";
import { useToast, SButton } from "@chargebee/sting-react";

const ToastContentExample = () => {
  const { toast } = useToast();

  const showTitleOnlyToast = () => {
    toast({
      title: "Simple notification",
    });
  };

  const showDescriptionOnlyToast = () => {
    toast({
      description: "This toast only has a description.",
    });
  };

  const showDetailedToast = () => {
    toast({
      title: "File Upload Complete",
      description:
        "document.pdf has been successfully uploaded to your workspace.",
    });
  };

  return (
    <div className="flex flex-wrap gap-4">
      <SButton onClick={showTitleOnlyToast}>Title Only</SButton>
      <SButton onClick={showDescriptionOnlyToast}>Description Only</SButton>
      <SButton onClick={showDetailedToast}>Title + Description</SButton>
    </div>
  );
};

export default ToastContentExample;
```

### Manual Toast Component Usage

```tsx
import React, { useState } from "react";
import { SToast, SButton } from "@chargebee/sting-react";

const ManualToastExample = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="p-4">
      <SButton onClick={() => setIsOpen(true)}>Show Manual Toast</SButton>

      <SToast.Provider>
        <SToast variant="default" open={isOpen} onOpenChange={setIsOpen}>
          <div className="grid gap-1">
            <SToast.Title>Manual Toast</SToast.Title>
            <SToast.Description>
              This toast is controlled manually using state.
            </SToast.Description>
          </div>
          <SToast.Close />
        </SToast>
        <SToast.Viewport />
      </SToast.Provider>
    </div>
  );
};

export default ManualToastExample;
```

### Toast Management with Dismissal

```tsx
import React from "react";
import { useToast, SButton } from "@chargebee/sting-react";

const ToastManagementExample = () => {
  const { toast, dismiss } = useToast();

  const showPersistentToast = () => {
    const { id } = toast({
      title: "Persistent Toast",
      description: "This toast will stay until manually dismissed.",
      // Store the ID for later dismissal
    });

    // You can dismiss it later using the ID
    setTimeout(() => {
      dismiss(id);
    }, 5000);
  };

  const showMultipleToasts = () => {
    toast({
      title: "First Toast",
      description: "This is the first toast.",
    });

    setTimeout(() => {
      toast({
        title: "Second Toast",
        description: "This is the second toast.",
      });
    }, 500);

    setTimeout(() => {
      toast({
        title: "Third Toast",
        description: "This is the third toast.",
      });
    }, 1000);
  };

  const dismissAllToasts = () => {
    dismiss(); // Dismiss all toasts
  };

  return (
    <div className="flex flex-wrap gap-4">
      <SButton onClick={showPersistentToast}>Persistent Toast</SButton>
      <SButton onClick={showMultipleToasts}>Multiple Toasts</SButton>
      <SButton onClick={dismissAllToasts}>Dismiss All</SButton>
    </div>
  );
};

export default ToastManagementExample;
```

### Toast Variants Showcase

```tsx
import React from "react";
import { useToast, SButton } from "@chargebee/sting-react";

const ToastVariantsExample = () => {
  const { toast } = useToast();

  const variants = [
    {
      variant: "default" as const,
      title: "Default Notification",
      description: "This is a default toast notification.",
      buttonText: "Default Toast",
    },
    {
      variant: "success" as const,
      title: "Success!",
      description: "Your action was completed successfully.",
      buttonText: "Success Toast",
    },
    {
      variant: "destructive" as const,
      title: "Error!",
      description: "Something went wrong. Please try again.",
      buttonText: "Error Toast",
    },
  ];

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Toast Variants</h3>
      <div className="flex flex-wrap gap-4">
        {variants.map(({ variant, title, description, buttonText }) => (
          <SButton
            key={variant}
            variant={variant === "destructive" ? "danger" : "primary"}
            onClick={() => toast({ variant, title, description })}
          >
            {buttonText}
          </SButton>
        ))}
      </div>
    </div>
  );
};

export default ToastVariantsExample;
```

### Complete Toast Integration Example

```tsx
import React, { useState } from "react";
import { useToast, SButton, SInput, SToast } from "@chargebee/sting-react";

const CompleteToastExample = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      if (email.includes("@")) {
        toast({
          variant: "success",
          title: "Email Sent!",
          description: `Confirmation email sent to ${email}`,
        });
        setEmail("");
      } else {
        throw new Error("Invalid email");
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Failed to Send Email",
        description: "Please check your email address and try again.",
        action: <SToast.Action altText="Try again">Retry</SToast.Action>,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
      <h3 className="text-lg font-semibold">Email Subscription</h3>
      <SInput
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <SButton type="submit" loading={isLoading} disabled={!email}>
        Subscribe
      </SButton>
    </form>
  );
};

export default CompleteToastExample;
```

## Key Features

- **Multiple Variants**: Supports `default`, `destructive`, and `success` variants for different message types
- **Configurable Placement**: Position toast notifications in 6 different locations (top-left, top-center, top-right, bottom-left, bottom-center, bottom-right)
- **Programmatic API**: Use the `useToast` hook to trigger toasts programmatically
- **Action Support**: Include action buttons in toasts for user interaction
- **Accessibility**: Built on Radix UI primitives with proper ARIA attributes
- **Auto-dismiss**: Toasts automatically dismiss after a set duration
- **Manual Control**: Full control over toast lifecycle with manual dismiss functionality
- **Multiple Toast Management**: Display multiple toasts simultaneously with proper stacking
- **Responsive Design**: Works seamlessly across different screen sizes
- **Variant-Specific Styling**: Close button colors automatically adapt to match toast variants

## Placement Options

The `SToaster` component supports 6 placement options:

- **top-left**: Toasts appear in the top-left corner, stacking vertically downward
- **top-center**: Toasts appear centered at the top, stacking vertically downward
- **top-right**: Toasts appear in the top-right corner, stacking vertically downward
- **bottom-left**: Toasts appear in the bottom-left corner, stacking vertically upward
- **bottom-center**: Toasts appear centered at the bottom, stacking vertically upward
- **bottom-right**: (Default) Toasts appear in the bottom-right corner, stacking vertically upward

## Best Practices

1. **Placement**: Always include the `<SToaster />` component at the root level of your application
2. **Placement Selection**: Choose placement based on your app layout and user flow:
   - Use `bottom-right` (default) for general notifications
   - Use `top-center` for important system-wide messages
   - Use `top-right` for success confirmations
   - Use `bottom-left` for error messages that need attention
3. **Multiple Toasters**: You can use multiple `SToaster` components with different placements for different types of notifications, but ensure each has its own toast context
4. **Variants**: Use appropriate variants - `success` for confirmations, `destructive` for errors, and `default` for general notifications
5. **Content**: Keep toast messages concise and actionable
6. **Actions**: Use action buttons sparingly and only when they provide clear value
7. **Timing**: Allow sufficient time for users to read and act on toast messages
8. **Accessibility**: Ensure toast messages are meaningful and provide alternative ways to access the same information
9. **Screen Real Estate**: Consider your app's layout when choosing placement to avoid covering important UI elements
