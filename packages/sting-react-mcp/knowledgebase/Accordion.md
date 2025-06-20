# Component Name

SAccordion

## Description

The SAccordion component is a vertically stacked set of interactive headings that each reveal an associated section of content. Built on top of Radix UI's Accordion primitive, it provides excellent accessibility support and composition flexibility. The component supports both single and multiple selection modes, custom icons, and smooth animations for content expansion and collapse. It's ideal for organizing content into collapsible sections, such as FAQs, navigation menus, or detailed information panels.

## TypeScript Types

The following types represent the props that the SAccordion component and its sub-components accept:

```typescript
/**
 * Props for the SAccordion root component
 */
export interface SAccordionProps extends AccordionRootProps {
  /**
   * Type of accordion behavior
   * 'single' - only one item can be open at a time
   * 'multiple' - multiple items can be open simultaneously
   * @default 'single'
   */
  type?: "single" | "multiple";

  /**
   * The controlled value of the accordion (for single type)
   */
  value?: string;

  /**
   * The controlled values of the accordion (for multiple type)
   */
  value?: string[];

  /**
   * The default value for uncontrolled accordion (for single type)
   */
  defaultValue?: string;

  /**
   * The default values for uncontrolled accordion (for multiple type)
   */
  defaultValue?: string[];

  /**
   * Callback fired when the accordion value changes
   */
  onValueChange?: (value: string | string[]) => void;

  /**
   * Whether all items can be closed at once in a single accordion
   * Only applies when type is 'single'
   * @default false
   */
  collapsible?: boolean;

  /**
   * Whether to render as a child component (Radix UI Slot)
   * @default false
   */
  asChild?: boolean;

  /**
   * Additional class name for the accordion root
   */
  className?: string;

  /**
   * Data test ID for testing purposes
   */
  dataTestId?: string;
}

/**
 * Props for the SAccordion.Item component
 */
export interface SAccordionItemProps extends AccordionItemProps {
  /**
   * Unique value for the accordion item (required)
   */
  value: string;

  /**
   * Whether the accordion item is disabled
   * @default false
   */
  disabled?: boolean;

  /**
   * Whether to render as a child component (Radix UI Slot)
   * @default false
   */
  asChild?: boolean;

  /**
   * Additional class name for the accordion item
   */
  className?: string;

  /**
   * Data test ID for testing purposes
   */
  dataTestId?: string;
}

/**
 * Props for the SAccordion.Trigger component
 */
export interface SAccordionTriggerProps extends AccordionTriggerProps {
  /**
   * Whether to render as a child component (Radix UI Slot)
   * @default false
   */
  asChild?: boolean;

  /**
   * Whether to hide the default chevron icon
   * @default false
   */
  hideIcon?: boolean;

  /**
   * Custom icon to replace the default chevron
   */
  icon?: React.ReactNode;

  /**
   * Position of the icon relative to the trigger text
   * @default 'right'
   */
  iconPosition?: "left" | "right";

  /**
   * Additional class name for the accordion trigger
   */
  className?: string;

  /**
   * Data test ID for testing purposes
   */
  dataTestId?: string;
}

/**
 * Props for the SAccordion.Content component
 */
export interface SAccordionContentProps extends AccordionContentProps {
  /**
   * Whether to render as a child component (Radix UI Slot)
   * @default false
   */
  asChild?: boolean;

  /**
   * Whether to force mount the content (even when closed)
   */
  forceMount?: true;

  /**
   * Additional class name for the accordion content
   */
  className?: string;

  /**
   * Data test ID for testing purposes
   */
  dataTestId?: string;
}
```

## Examples

Here are comprehensive examples demonstrating various ways to use the SAccordion component:

### Basic Single Accordion Usage

```tsx
import React from "react";
import { SAccordion } from "@chargebee/sting-react";

const BasicAccordionExample = () => {
  return (
    <SAccordion type="single" collapsible className="w-full max-w-md">
      <SAccordion.Item value="item-1">
        <SAccordion.Trigger>What is your return policy?</SAccordion.Trigger>
        <SAccordion.Content>
          <div className="p-4 text-sm text-gray-600">
            You can return any item within 30 days of purchase. Items must be in
            original condition with tags attached. We offer free return shipping
            for exchanges and store credit.
          </div>
        </SAccordion.Content>
      </SAccordion.Item>

      <SAccordion.Item value="item-2">
        <SAccordion.Trigger>How long does shipping take?</SAccordion.Trigger>
        <SAccordion.Content>
          <div className="p-4 text-sm text-gray-600">
            Standard shipping takes 3-5 business days. Express shipping options
            are available for 1-2 business day delivery. Free shipping is
            available on orders over $50.
          </div>
        </SAccordion.Content>
      </SAccordion.Item>

      <SAccordion.Item value="item-3">
        <SAccordion.Trigger>
          Do you offer international shipping?
        </SAccordion.Trigger>
        <SAccordion.Content>
          <div className="p-4 text-sm text-gray-600">
            Yes, we ship to over 50 countries worldwide. International shipping
            times vary by location but typically take 7-14 business days.
            Additional customs fees may apply.
          </div>
        </SAccordion.Content>
      </SAccordion.Item>
    </SAccordion>
  );
};

export default BasicAccordionExample;
```

### Multiple Selection Accordion

```tsx
import React from "react";
import { SAccordion } from "@chargebee/sting-react";

const MultipleAccordionExample = () => {
  return (
    <div className="w-full max-w-lg space-y-6">
      <h3 className="text-lg font-semibold">Account Settings</h3>

      <SAccordion type="multiple" defaultValue={["personal", "security"]}>
        <SAccordion.Item value="personal">
          <SAccordion.Trigger>Personal Information</SAccordion.Trigger>
          <SAccordion.Content>
            <div className="p-4 space-y-3">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full p-2 border rounded"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  className="w-full p-2 border rounded"
                  placeholder="Enter your email"
                />
              </div>
            </div>
          </SAccordion.Content>
        </SAccordion.Item>

        <SAccordion.Item value="security">
          <SAccordion.Trigger>Security Settings</SAccordion.Trigger>
          <SAccordion.Content>
            <div className="p-4 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm">Two-factor authentication</span>
                <button className="px-3 py-1 bg-blue-500 text-white text-xs rounded">
                  Enable
                </button>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Login notifications</span>
                <input type="checkbox" className="rounded" />
              </div>
            </div>
          </SAccordion.Content>
        </SAccordion.Item>

        <SAccordion.Item value="preferences">
          <SAccordion.Trigger>Notification Preferences</SAccordion.Trigger>
          <SAccordion.Content>
            <div className="p-4 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm">Email notifications</span>
                <input type="checkbox" defaultChecked className="rounded" />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">SMS notifications</span>
                <input type="checkbox" className="rounded" />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Push notifications</span>
                <input type="checkbox" defaultChecked className="rounded" />
              </div>
            </div>
          </SAccordion.Content>
        </SAccordion.Item>
      </SAccordion>
    </div>
  );
};

export default MultipleAccordionExample;
```

### Accordion with Custom Icons

```tsx
import React from "react";
import { SAccordion } from "@chargebee/sting-react";
import {
  User,
  Shield,
  Bell,
  CreditCard,
  Settings,
  ChevronDown,
} from "lucide-react";

const CustomIconAccordionExample = () => {
  return (
    <div className="w-full max-w-md space-y-4">
      <h3 className="text-lg font-semibold">Dashboard Settings</h3>

      <SAccordion type="single" collapsible>
        <SAccordion.Item value="profile">
          <SAccordion.Trigger
            icon={<User className="size-4" />}
            iconPosition="left"
          >
            Profile Settings
          </SAccordion.Trigger>
          <SAccordion.Content>
            <div className="p-4 text-sm text-gray-600">
              Manage your profile information, avatar, and public details.
            </div>
          </SAccordion.Content>
        </SAccordion.Item>

        <SAccordion.Item value="security">
          <SAccordion.Trigger
            icon={<Shield className="size-4" />}
            iconPosition="left"
          >
            Security & Privacy
          </SAccordion.Trigger>
          <SAccordion.Content>
            <div className="p-4 text-sm text-gray-600">
              Configure password, two-factor authentication, and privacy
              settings.
            </div>
          </SAccordion.Content>
        </SAccordion.Item>

        <SAccordion.Item value="notifications">
          <SAccordion.Trigger
            icon={<Bell className="size-4" />}
            iconPosition="left"
          >
            Notifications
          </SAccordion.Trigger>
          <SAccordion.Content>
            <div className="p-4 text-sm text-gray-600">
              Control how and when you receive notifications from our platform.
            </div>
          </SAccordion.Content>
        </SAccordion.Item>

        <SAccordion.Item value="billing">
          <SAccordion.Trigger
            icon={<CreditCard className="size-4" />}
            iconPosition="left"
          >
            Billing & Payments
          </SAccordion.Trigger>
          <SAccordion.Content>
            <div className="p-4 text-sm text-gray-600">
              Manage your subscription, payment methods, and billing history.
            </div>
          </SAccordion.Content>
        </SAccordion.Item>
      </SAccordion>

      {/* Example with custom chevron icon */}
      <div className="mt-8">
        <h4 className="text-md font-medium mb-3">With Custom Chevron</h4>
        <SAccordion type="single" collapsible>
          <SAccordion.Item value="advanced">
            <SAccordion.Trigger
              icon={<Settings className="size-4" />}
              iconPosition="right"
            >
              Advanced Settings
            </SAccordion.Trigger>
            <SAccordion.Content>
              <div className="p-4 text-sm text-gray-600">
                Access advanced configuration options and developer settings.
              </div>
            </SAccordion.Content>
          </SAccordion.Item>
        </SAccordion>
      </div>
    </div>
  );
};

export default CustomIconAccordionExample;
```

### Controlled Accordion Example

```tsx
import React, { useState } from "react";
import { SAccordion } from "@chargebee/sting-react";

const ControlledAccordionExample = () => {
  const [openItem, setOpenItem] = useState<string>("");
  const [multipleOpen, setMultipleOpen] = useState<string[]>(["step-1"]);

  return (
    <div className="space-y-8">
      {/* Controlled Single Accordion */}
      <div>
        <div className="flex items-center gap-4 mb-4">
          <h3 className="text-lg font-semibold">Setup Wizard</h3>
          <div className="text-sm text-gray-500">
            Current step: {openItem || "None"}
          </div>
        </div>

        <SAccordion
          type="single"
          value={openItem}
          onValueChange={setOpenItem}
          collapsible
        >
          <SAccordion.Item value="step-1">
            <SAccordion.Trigger>Step 1: Account Setup</SAccordion.Trigger>
            <SAccordion.Content>
              <div className="p-4">
                <p className="text-sm text-gray-600 mb-3">
                  Create your account and verify your email address.
                </p>
                <button
                  className="px-4 py-2 bg-blue-500 text-white rounded text-sm"
                  onClick={() => setOpenItem("step-2")}
                >
                  Complete & Continue
                </button>
              </div>
            </SAccordion.Content>
          </SAccordion.Item>

          <SAccordion.Item value="step-2">
            <SAccordion.Trigger>Step 2: Profile Information</SAccordion.Trigger>
            <SAccordion.Content>
              <div className="p-4">
                <p className="text-sm text-gray-600 mb-3">
                  Add your profile details and preferences.
                </p>
                <button
                  className="px-4 py-2 bg-blue-500 text-white rounded text-sm"
                  onClick={() => setOpenItem("step-3")}
                >
                  Complete & Continue
                </button>
              </div>
            </SAccordion.Content>
          </SAccordion.Item>

          <SAccordion.Item value="step-3">
            <SAccordion.Trigger>Step 3: Final Configuration</SAccordion.Trigger>
            <SAccordion.Content>
              <div className="p-4">
                <p className="text-sm text-gray-600 mb-3">
                  Review and confirm your settings.
                </p>
                <button
                  className="px-4 py-2 bg-green-500 text-white rounded text-sm"
                  onClick={() => setOpenItem("")}
                >
                  Finish Setup
                </button>
              </div>
            </SAccordion.Content>
          </SAccordion.Item>
        </SAccordion>
      </div>

      {/* Controlled Multiple Accordion */}
      <div>
        <div className="flex items-center gap-4 mb-4">
          <h3 className="text-lg font-semibold">Project Tasks</h3>
          <div className="text-sm text-gray-500">
            Open sections: {multipleOpen.length}
          </div>
        </div>

        <SAccordion
          type="multiple"
          value={multipleOpen}
          onValueChange={setMultipleOpen}
        >
          <SAccordion.Item value="step-1">
            <SAccordion.Trigger>Design Phase</SAccordion.Trigger>
            <SAccordion.Content>
              <div className="p-4 text-sm text-gray-600">
                Create wireframes, mockups, and design specifications.
              </div>
            </SAccordion.Content>
          </SAccordion.Item>

          <SAccordion.Item value="step-2">
            <SAccordion.Trigger>Development Phase</SAccordion.Trigger>
            <SAccordion.Content>
              <div className="p-4 text-sm text-gray-600">
                Implement features, write tests, and prepare for deployment.
              </div>
            </SAccordion.Content>
          </SAccordion.Item>

          <SAccordion.Item value="step-3">
            <SAccordion.Trigger>Testing & Launch</SAccordion.Trigger>
            <SAccordion.Content>
              <div className="p-4 text-sm text-gray-600">
                Quality assurance testing and production deployment.
              </div>
            </SAccordion.Content>
          </SAccordion.Item>
        </SAccordion>
      </div>
    </div>
  );
};

export default ControlledAccordionExample;
```

### Advanced Usage with Complex Content

```tsx
import React from "react";
import { SAccordion } from "@chargebee/sting-react";
import { Badge, Button } from "@chargebee/sting-react";
import { ExternalLink, Download, Eye } from "lucide-react";

const AdvancedAccordionExample = () => {
  const documents = [
    {
      name: "Invoice_2024_001.pdf",
      size: "245 KB",
      date: "2024-01-15",
      status: "paid",
    },
    {
      name: "Contract_Agreement.pdf",
      size: "1.2 MB",
      date: "2024-01-10",
      status: "signed",
    },
  ];

  return (
    <div className="w-full max-w-2xl">
      <h3 className="text-lg font-semibold mb-4">Account Overview</h3>

      <SAccordion type="single" collapsible>
        <SAccordion.Item value="billing">
          <SAccordion.Trigger>
            <div className="flex items-center justify-between w-full">
              <span>Billing Information</span>
              <SBadge variant="success" className="mr-2">
                Current
              </SBadge>
            </div>
          </SAccordion.Trigger>
          <SAccordion.Content>
            <div className="p-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium text-sm text-gray-700">
                    Current Plan
                  </h4>
                  <p className="text-lg font-semibold">Professional</p>
                  <p className="text-sm text-gray-500">$29/month</p>
                </div>
                <div>
                  <h4 className="font-medium text-sm text-gray-700">
                    Next Billing
                  </h4>
                  <p className="text-sm">February 15, 2024</p>
                  <p className="text-sm text-gray-500">Auto-renewal enabled</p>
                </div>
              </div>

              <div className="flex gap-2 pt-2">
                <SButton size="small" variant="primary-outline">
                  Upgrade Plan
                </SButton>
                <SButton size="small" variant="neutral">
                  Billing History
                </SButton>
              </div>
            </div>
          </SAccordion.Content>
        </SAccordion.Item>

        <SAccordion.Item value="documents">
          <SAccordion.Trigger>
            <div className="flex items-center justify-between w-full">
              <span>Documents & Invoices</span>
              <SBadge variant="neutral" className="mr-2">
                {documents.length} files
              </SBadge>
            </div>
          </SAccordion.Trigger>
          <SAccordion.Content>
            <div className="p-6">
              <div className="space-y-3">
                {documents.map((doc, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 border rounded-lg"
                  >
                    <div className="flex-1">
                      <h4 className="font-medium text-sm">{doc.name}</h4>
                      <div className="flex items-center gap-3 text-xs text-gray-500 mt-1">
                        <span>{doc.size}</span>
                        <span>•</span>
                        <span>{doc.date}</span>
                        <SBadge
                          variant={doc.status === "paid" ? "success" : "info"}
                          size="small"
                        >
                          {doc.status}
                        </SBadge>
                      </div>
                    </div>

                    <div className="flex gap-1">
                      <button className="p-1 hover:bg-gray-100 rounded">
                        <Eye className="size-4" />
                      </button>
                      <button className="p-1 hover:bg-gray-100 rounded">
                        <Download className="size-4" />
                      </button>
                      <button className="p-1 hover:bg-gray-100 rounded">
                        <ExternalLink className="size-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-4 border-t">
                <SButton size="small" variant="primary-ghost" fullWidth>
                  View All Documents
                </SButton>
              </div>
            </div>
          </SAccordion.Content>
        </SAccordion.Item>

        <SAccordion.Item value="activity">
          <SAccordion.Trigger>Recent Activity</SAccordion.Trigger>
          <SAccordion.Content>
            <div className="p-6">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <div>
                    <p className="text-sm font-medium">Payment received</p>
                    <p className="text-xs text-gray-500">2 hours ago</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <div>
                    <p className="text-sm font-medium">Profile updated</p>
                    <p className="text-xs text-gray-500">1 day ago</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                  <div>
                    <p className="text-sm font-medium">Plan upgraded</p>
                    <p className="text-xs text-gray-500">3 days ago</p>
                  </div>
                </div>
              </div>
            </div>
          </SAccordion.Content>
        </SAccordion.Item>
      </SAccordion>
    </div>
  );
};

export default AdvancedAccordionExample;
```

## Key Features

- **Single and Multiple Selection**: Support for both single-item and multi-item expansion modes
- **Controlled and Uncontrolled**: Full support for both controlled and uncontrolled usage patterns
- **Custom Icons**: Flexible icon support with configurable positioning (left or right)
- **Accessibility**: Built with Radix UI primitives ensuring full ARIA compliance and keyboard navigation
- **Smooth Animations**: CSS-based animations for content expansion and collapse
- **Collapsible Mode**: Single accordions can allow all items to be closed simultaneously
- **Composition Flexibility**: Use `asChild` prop for advanced component composition
- **TypeScript Support**: Comprehensive type definitions for better developer experience
- **Test Support**: Built-in dataTestId props for QA automation
