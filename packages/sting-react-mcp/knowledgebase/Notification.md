# Component Name

SNotification

## Description

The SNotification component is a versatile notification element that follows the Figma design system. It provides a flexible foundation for displaying important information, alerts, and status updates to users. The component supports multiple visual variants, stroke borders, custom content, action buttons, and dismissible functionality. Built with accessibility in mind, it handles keyboard navigation properly and provides semantic structure for screen readers. Content can be provided through structured props (title/description) or custom JSX content for maximum flexibility.

## TypeScript Types

The following types represent the props that the SNotification component accepts:

```typescript
/**
 * Props for the SNotification component
 */
export interface SNotificationProps
  extends ComponentPropsWithout<"div", RemovedProps>,
    Notification {
  /**
   * Custom content to render beside the icon. When provided, this takes precedence over title and description.
   */
  children?: React.ReactNode;

  /**
   * Notification title
   */
  title?: string;

  /**
   * Notification description/content
   */
  description?: string;

  /**
   * Primary action text
   */
  primaryActionText?: string;

  /**
   * Secondary action text
   */
  secondaryActionText?: string;

  /**
   * Primary action click handler
   */
  onPrimaryAction?: () => void;

  /**
   * Secondary action click handler
   */
  onSecondaryAction?: () => void;

  /**
   * Whether the notification can be dismissed
   */
  dismissible?: boolean;

  /**
   * Callback when notification is dismissed
   */
  onDismiss?: () => void;

  /**
   * Custom icon to display (defaults to Info icon)
   */
  icon?: React.ReactNode;

  /**
   * Whether to render the notification as a child component (Radix UI Slot)
   */
  asChild?: boolean;

  /**
   * The variant of the notification determining its visual style
   * @default 'info'
   */
  variant?: "info" | "primary" | "danger" | "warning" | "success" | "neutral";

  /**
   * Whether to show stroke/border
   * @default true
   */
  hasStroke?: boolean;

  /**
   * Add data-test id's for using it in testcases
   */
  dataTestId?: string;
}
```

## Examples

Here are comprehensive examples demonstrating various ways to use the SNotification component:

### Basic Notification Usage with Different Variants

```tsx
import React from "react";
import { SNotification } from "@chargebee/sting-react";

const NotificationVariantsExample = () => {
  return (
    <div className="space-y-4">
      <SNotification
        variant="info"
        title="Information"
        description="This is an informational notification to help guide users."
      />

      <SNotification
        variant="primary"
        title="Primary Notification"
        description="Important information that requires user attention."
      />

      <SNotification
        variant="success"
        title="Success!"
        description="Your action was completed successfully."
      />

      <SNotification
        variant="warning"
        title="Warning"
        description="Please review this information before proceeding."
      />

      <SNotification
        variant="danger"
        title="Error"
        description="Something went wrong. Please try again."
      />

      <SNotification
        variant="neutral"
        title="Neutral Notification"
        description="General information without specific semantic meaning."
      />
    </div>
  );
};

export default NotificationVariantsExample;
```

### Notifications with Actions

```tsx
import React from "react";
import { SNotification } from "@chargebee/sting-react";

const NotificationWithActionsExample = () => {
  const handlePrimaryAction = () => {
    console.log("Primary action clicked");
  };

  const handleSecondaryAction = () => {
    console.log("Secondary action clicked");
  };

  return (
    <div className="space-y-4">
      <SNotification
        variant="warning"
        title="Update Available"
        description="A new version of the application is available."
        primaryActionText="Update Now"
        secondaryActionText="Remind Me Later"
        onPrimaryAction={handlePrimaryAction}
        onSecondaryAction={handleSecondaryAction}
      />

      <SNotification
        variant="danger"
        title="Session Expired"
        description="Your session has expired. Please log in again to continue."
        primaryActionText="Log In"
        onPrimaryAction={() => console.log("Redirect to login")}
      />

      <SNotification
        variant="success"
        title="Changes Saved"
        description="Your changes have been saved successfully."
        primaryActionText="View Details"
        onPrimaryAction={() => console.log("Show details")}
      />
    </div>
  );
};

export default NotificationWithActionsExample;
```

### Dismissible Notifications

```tsx
import React, { useState } from "react";
import { SNotification } from "@chargebee/sting-react";

const DismissibleNotificationExample = () => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      variant: "info",
      title: "New Features",
      description: "Check out the latest features we've added to the platform.",
    },
    {
      id: 2,
      variant: "warning",
      title: "Maintenance Window",
      description: "Scheduled maintenance will occur tomorrow at 2 AM UTC.",
    },
  ]);

  const handleDismiss = (id) => {
    setNotifications((prev) => prev.filter((notif) => notif.id !== id));
  };

  return (
    <div className="space-y-4">
      {notifications.map((notification) => (
        <SNotification
          key={notification.id}
          variant={notification.variant}
          title={notification.title}
          description={notification.description}
          dismissible
          onDismiss={() => handleDismiss(notification.id)}
          dataTestId={`notification-${notification.id}`}
        />
      ))}

      {notifications.length === 0 && (
        <p className="text-gray-500 text-center">
          All notifications have been dismissed.
        </p>
      )}
    </div>
  );
};

export default DismissibleNotificationExample;
```

### Custom Content with Children

```tsx
import React from "react";
import { SNotification } from "@chargebee/sting-react";
import { Star, Clock, User } from "lucide-react";

const CustomContentNotificationExample = () => {
  return (
    <div className="space-y-4">
      <SNotification variant="primary" icon={<Star className="w-5 h-5" />}>
        <div>
          <div className="font-semibold">Premium Feature Unlocked!</div>
          <div className="text-sm text-gray-600 mt-1">
            You now have access to advanced analytics and reporting tools.
          </div>
          <div className="mt-2">
            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-blue-100 text-blue-800">
              New
            </span>
          </div>
        </div>
      </SNotification>

      <SNotification variant="info" icon={<Clock className="w-5 h-5" />}>
        <div className="flex items-start justify-between">
          <div>
            <div className="font-semibold">Meeting Reminder</div>
            <div className="text-sm text-gray-600">
              Team standup in 15 minutes
            </div>
          </div>
          <div className="text-xs text-gray-500 ml-4">3:45 PM</div>
        </div>
      </SNotification>

      <SNotification variant="success" icon={<User className="w-5 h-5" />}>
        <div>
          <div className="font-semibold">Welcome aboard!</div>
          <div className="text-sm text-gray-600 mt-1">
            Complete your profile to get the most out of the platform:
          </div>
          <ul className="text-sm text-gray-600 mt-2 space-y-1">
            <li className="flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              Add profile photo
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-gray-300 rounded-full mr-2"></span>
              Set up notifications
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-gray-300 rounded-full mr-2"></span>
              Connect integrations
            </li>
          </ul>
        </div>
      </SNotification>
    </div>
  );
};

export default CustomContentNotificationExample;
```

### Notifications with Stroke and Without Stroke

```tsx
import React from "react";
import { SNotification } from "@chargebee/sting-react";

const NotificationStrokeExample = () => {
  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-lg font-semibold mb-3">With Stroke (Default)</h3>
        <div className="space-y-3">
          <SNotification
            variant="info"
            title="Information with Stroke"
            description="This notification has a visible border."
            hasStroke={true}
          />

          <SNotification
            variant="warning"
            title="Warning with Stroke"
            description="Border helps define the notification boundaries."
            hasStroke={true}
          />
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3">Without Stroke</h3>
        <div className="space-y-3">
          <SNotification
            variant="info"
            title="Information without Stroke"
            description="This notification has no visible border."
            hasStroke={false}
          />

          <SNotification
            variant="warning"
            title="Warning without Stroke"
            description="Clean look without border boundaries."
            hasStroke={false}
          />
        </div>
      </div>
    </div>
  );
};

export default NotificationStrokeExample;
```

### Advanced Usage with Custom Icons

```tsx
import React from "react";
import { SNotification } from "@chargebee/sting-react";
import {
  Shield,
  Download,
  Upload,
  Wifi,
  Battery,
  Settings,
} from "lucide-react";

const CustomIconNotificationExample = () => {
  return (
    <div className="space-y-4">
      <SNotification
        variant="success"
        icon={<Shield className="w-5 h-5 text-green-600" />}
        title="Security Update Applied"
        description="Your account security has been enhanced with the latest updates."
        dismissible
        onDismiss={() => console.log("Security notification dismissed")}
      />

      <SNotification
        variant="info"
        icon={<Download className="w-5 h-5 text-blue-600" />}
        title="Download Complete"
        description="Your file has been downloaded successfully to your device."
        primaryActionText="Open File"
        onPrimaryAction={() => console.log("Open downloaded file")}
      />

      <SNotification
        variant="warning"
        icon={<Upload className="w-5 h-5 text-yellow-600" />}
        title="Upload in Progress"
        description="Please don't close this window while your files are uploading."
      />

      <SNotification
        variant="danger"
        icon={<Wifi className="w-5 h-5 text-red-600" />}
        title="Connection Lost"
        description="Unable to connect to the server. Check your internet connection."
        primaryActionText="Retry"
        secondaryActionText="Work Offline"
        onPrimaryAction={() => console.log("Retry connection")}
        onSecondaryAction={() => console.log("Switch to offline mode")}
      />

      <SNotification
        variant="neutral"
        icon={<Settings className="w-5 h-5 text-gray-600" />}
        title="Settings Updated"
        description="Your preferences have been saved and will take effect immediately."
      />
    </div>
  );
};

export default CustomIconNotificationExample;
```

### Notification System Example

```tsx
import React, { useState } from "react";
import { SNotification } from "@chargebee/sting-react";

const NotificationSystemExample = () => {
  const [notifications, setNotifications] = useState([]);

  const addNotification = (type, title, description) => {
    const newNotification = {
      id: Date.now(),
      variant: type,
      title,
      description,
    };

    setNotifications((prev) => [...prev, newNotification]);

    // Auto-dismiss after 5 seconds for non-error notifications
    if (type !== "danger") {
      setTimeout(() => {
        setNotifications((prev) =>
          prev.filter((notif) => notif.id !== newNotification.id)
        );
      }, 5000);
    }
  };

  const dismissNotification = (id) => {
    setNotifications((prev) => prev.filter((notif) => notif.id !== id));
  };

  return (
    <div>
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-4">Notification Controls</h3>
        <div className="flex gap-2 flex-wrap">
          <button
            onClick={() =>
              addNotification(
                "success",
                "Success!",
                "Operation completed successfully."
              )
            }
            className="px-3 py-1 bg-green-600 text-white rounded text-sm"
          >
            Add Success
          </button>

          <button
            onClick={() =>
              addNotification(
                "warning",
                "Warning",
                "Please review this information."
              )
            }
            className="px-3 py-1 bg-yellow-600 text-white rounded text-sm"
          >
            Add Warning
          </button>

          <button
            onClick={() =>
              addNotification(
                "danger",
                "Error",
                "Something went wrong. Please try again."
              )
            }
            className="px-3 py-1 bg-red-600 text-white rounded text-sm"
          >
            Add Error
          </button>

          <button
            onClick={() =>
              addNotification(
                "info",
                "Information",
                "Here's some helpful information."
              )
            }
            className="px-3 py-1 bg-blue-600 text-white rounded text-sm"
          >
            Add Info
          </button>
        </div>
      </div>

      <div className="space-y-3">
        {notifications.map((notification) => (
          <SNotification
            key={notification.id}
            variant={notification.variant}
            title={notification.title}
            description={notification.description}
            dismissible
            onDismiss={() => dismissNotification(notification.id)}
            dataTestId={`notification-${notification.id}`}
          />
        ))}

        {notifications.length === 0 && (
          <div className="text-center text-gray-500 py-8">
            No notifications to display. Use the buttons above to add some!
          </div>
        )}
      </div>
    </div>
  );
};

export default NotificationSystemExample;
```

## Key Features

- **Multiple Variants**: Six notification variants (info, primary, success, warning, danger, neutral) for different semantic meanings
- **Flexible Content**: Support for structured content via title/description props or custom JSX via children
- **Action Support**: Primary and secondary action buttons with click handlers
- **Dismissible**: Optional close button with dismiss callback functionality
- **Custom Icons**: Replace the default info icon with any React node
- **Stroke Control**: Toggle border visibility with hasStroke prop
- **Radix UI Slot Integration**: Use `asChild` prop for flexible composition with other components
- **Accessibility**: Proper ARIA attributes, keyboard navigation support, and semantic structure
- **Test Support**: Built-in dataTestId prop for QA automation and testing
- **Auto-sizing**: Content automatically adjusts to accommodate various content lengths and structures
- **Responsive Design**: Adapts to different screen sizes while maintaining readability
