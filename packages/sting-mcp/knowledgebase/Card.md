# Component Name

SCard

## Description

The SCard component is a versatile container element that provides a structured way to display content with various styling options. It's built with a compound component pattern, offering separate sub-components for headers and content areas. The card supports multiple visual variants including different depths, padding sizes, backgrounds, spacing, and border styles. It's designed to be highly customizable while maintaining design system consistency.

## TypeScript Types

The following types represent the props that the SCard component and its sub-components accept.

```typescript
/**
 * Props for the main SCard component
 */
export interface SCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    CardVariants {
  /**
   * The content to be rendered inside the card
   */
  children?: React.ReactNode;
}

/**
 * Card variant types for styling options
 */
export type CardVariants = {
  /**
   * Controls the elevation/shadow of the card
   * @default 'regular'
   */
  depth?: "flat" | "raised" | "regular";

  /**
   * Controls the internal padding of the card
   * @default 'regular'
   */
  padding?: "large" | "small" | "regular" | "none";

  /**
   * Controls the background color of the card
   * @default 'white'
   */
  background?: "transparent" | "white" | "neutral";

  /**
   * Controls the spacing between elements within the card
   * @default 'regular'
   */
  spacey?: "none" | "small" | "regular" | "large" | "xlarge" | "xxlarge";

  /**
   * Controls the border style of the card
   * @default 'none'
   */
  border?: "none" | "dotted";

  /**
   * Controls whether the card has rounded corners
   * @default true
   */
  rounded?: boolean;

  /**
   * Controls the vertical alignment of header items
   * @default 'start'
   */
  alignItems?: "start" | "center" | "end";

  /**
   * Controls the visual style of the header
   * @default 'default'
   */
  headerVariant?: "default" | "hero";
};

/**
 * Props for the SCard.Header component
 */
type SCardHeaderProps = {
  /**
   * The content to be rendered inside the header
   */
  children?: React.ReactNode;

  /**
   * Vertical alignment of header items
   */
  alignItems?: "start" | "center" | "end";

  /**
   * Visual style of the header
   */
  headerVariant?: "default" | "hero";

  /**
   * Optional CSS class name
   */
  className?: string;
} & (
  | {
      /**
       * Primary action element (typically a button)
       */
      primaryAction?: React.ReactNode;

      /**
       * Secondary action element
       */
      secondaryAction?: React.ReactNode;

      /**
       * Tertiary action element
       */
      tertiaryAction?: React.ReactNode;

      /**
       * Custom action element (cannot be used with primary/secondary/tertiary actions)
       */
      actionElement?: never;
    }
  | {
      primaryAction?: never;
      secondaryAction?: never;
      tertiaryAction?: never;
      actionElement?: React.ReactNode;
    }
) &
  (
    | {
        /**
         * Title text for the card
         */
        title?: string;

        /**
         * Description text for the card
         */
        description?: string;

        /**
         * Custom title element (cannot be used with title/description)
         */
        titleElement?: never;
      }
    | {
        title?: never;
        description?: never;
        titleElement?: React.ReactNode;
      }
  );

/**
 * Props for the SCard.Content component
 */
type SCardContentProps = {
  /**
   * The content to be rendered inside the content area
   */
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;
```

## Example

Here are examples demonstrating how to use the SCard component:

### Basic Card Usage

```tsx
import React from "react";
import { SCard, SButton } from "@chargebee/sting-react";

const BasicCardExample = () => {
  return (
    <div className="space-y-6">
      <SCard>
        <SCard.Header
          title="Simple Card"
          description="This is a basic card with default styling"
        />
        <SCard.Content>
          <p>
            This is the main content area of the card. You can place any content
            here.
          </p>
        </SCard.Content>
      </SCard>

      <SCard depth="raised" background="neutral" rounded>
        <SCard.Header
          title="Raised Card with Neutral Background"
          description="This card has a raised elevation and neutral background color"
          primaryAction={
            <SButton variant="primary" size="sm">
              Action
            </SButton>
          }
        />
        <SCard.Content>
          <p>This card demonstrates different visual styling options.</p>
        </SCard.Content>
      </SCard>
    </div>
  );
};

export default BasicCardExample;
```

### Card with Custom Content and Actions

```tsx
import React from "react";
import { SCard, SButton, SBadge } from "@chargebee/sting-react";
import { PlusIcon, TrashIcon, EditIcon } from "lucide-react";

const CustomCardExample = () => {
  return (
    <SCard depth="raised" padding="large" spacey="large">
      <SCard.Header
        titleElement={
          <div className="flex items-center gap-2">
            <h3 className="text-xl font-semibold">Project Dashboard</h3>
            <SBadge variant="success">Active</SBadge>
          </div>
        }
        actionElement={
          <div className="flex gap-2">
            <SButton variant="ghost" size="sm" icon={<EditIcon size={16} />}>
              Edit
            </SButton>
            <SButton
              variant="destructive"
              size="sm"
              icon={<TrashIcon size={16} />}
            >
              Delete
            </SButton>
          </div>
        }
      />

      <SCard.Content>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h4 className="font-medium text-lg mb-2">Project Details</h4>
            <ul className="space-y-1 text-sm">
              <li>
                <strong>Client:</strong> Acme Corporation
              </li>
              <li>
                <strong>Start Date:</strong> January 15, 2023
              </li>
              <li>
                <strong>Status:</strong> In Progress
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-lg mb-2">Team Members</h4>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-blue-200 flex items-center justify-center">
                  JD
                </div>
                <span>John Doe (Lead)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-green-200 flex items-center justify-center">
                  AS
                </div>
                <span>Alice Smith</span>
              </div>
            </div>
          </div>
        </div>
      </SCard.Content>

      <SCard.Content>
        <div className="flex justify-end">
          <SButton variant="primary" size="md" icon={<PlusIcon size={16} />}>
            Add Task
          </SButton>
        </div>
      </SCard.Content>
    </SCard>
  );
};

export default CustomCardExample;
```

### Multiple Cards in a Grid Layout

```tsx
import React from "react";
import { SCard } from "@cb-sting-react";
import { SBadge } from "@cb-sting-react";

const projectData = [
  {
    id: 1,
    title: "Website Redesign",
    description: "Complete overhaul of the company website",
    status: "In Progress",
    badge: "warning",
    progress: 65,
  },
  {
    id: 2,
    title: "Mobile App Development",
    description: "Native app for iOS and Android platforms",
    status: "Completed",
    badge: "success",
    progress: 100,
  },
  {
    id: 3,
    title: "Brand Identity",
    description: "New logo and brand guidelines",
    status: "Planning",
    badge: "info",
    progress: 25,
  },
  {
    id: 4,
    title: "Marketing Campaign",
    description: "Q3 digital marketing initiative",
    status: "Not Started",
    badge: "neutral",
    progress: 0,
  },
];

const CardGridExample = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {projectData.map((project) => (
        <SCard
          key={project.id}
          depth={project.status === "Completed" ? "flat" : "raised"}
          padding="regular"
          border={project.status === "Not Started" ? "dotted" : "none"}
          background={project.status === "Completed" ? "neutral" : "white"}
        >
          <SCard.Header
            title={project.title}
            description={project.description}
            primaryAction={
              <SBadge variant={project.badge}>{project.status}</SBadge>
            }
            alignItems="center"
          />

          <SCard.Content>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className="bg-blue-600 h-2.5 rounded-full"
                style={{ width: `${project.progress}%` }}
              ></div>
            </div>
            <p className="text-right text-sm mt-1">
              {project.progress}% Complete
            </p>
          </SCard.Content>
        </SCard>
      ))}
    </div>
  );
};

export default CardGridExample;
```

### Card with Nested Content and Complex Layout

```tsx
import React from "react";
import { SCard } from "@cb-sting-react";
import { SButton } from "@cb-sting-react";
import { SBadge } from "@cb-sting-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", value: 400 },
  { name: "Feb", value: 300 },
  { name: "Mar", value: 600 },
  { name: "Apr", value: 800 },
  { name: "May", value: 500 },
  { name: "Jun", value: 900 },
];

const AdvancedCardExample = () => {
  return (
    <SCard depth="raised" padding="large" spacey="large">
      <SCard.Header
        headerVariant="hero"
        title="Sales Dashboard"
        description="Monthly performance metrics and KPIs"
        primaryAction={<SButton variant="primary">Export Data</SButton>}
        secondaryAction={<SButton variant="ghost">Settings</SButton>}
      />

      <SCard.Content>
        <div className="grid grid-cols-3 gap-4">
          <SCard depth="flat" background="neutral" padding="regular">
            <SCard.Header
              title="Total Revenue"
              titleElement={
                <div>
                  <p className="text-sm text-gray-500">Total Revenue</p>
                  <h3 className="text-2xl font-bold">$24,568</h3>
                  <div className="flex items-center mt-1">
                    <SBadge variant="success">+12%</SBadge>
                    <span className="text-xs text-gray-500 ml-2">
                      vs last month
                    </span>
                  </div>
                </div>
              }
            />
          </SCard>

          <SCard depth="flat" background="neutral" padding="regular">
            <SCard.Header
              titleElement={
                <div>
                  <p className="text-sm text-gray-500">New Customers</p>
                  <h3 className="text-2xl font-bold">120</h3>
                  <div className="flex items-center mt-1">
                    <SBadge variant="warning">-3%</SBadge>
                    <span className="text-xs text-gray-500 ml-2">
                      vs last month
                    </span>
                  </div>
                </div>
              }
            />
          </SCard>

          <SCard depth="flat" background="neutral" padding="regular">
            <SCard.Header
              titleElement={
                <div>
                  <p className="text-sm text-gray-500">Conversion Rate</p>
                  <h3 className="text-2xl font-bold">8.5%</h3>
                  <div className="flex items-center mt-1">
                    <SBadge variant="success">+2.1%</SBadge>
                    <span className="text-xs text-gray-500 ml-2">
                      vs last month
                    </span>
                  </div>
                </div>
              }
            />
          </SCard>
        </div>
      </SCard.Content>

      <SCard.Content>
        <SCard depth="flat" padding="regular">
          <SCard.Header
            title="Monthly Revenue"
            description="Last 6 months performance"
          />
          <SCard.Content>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="value" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </SCard.Content>
        </SCard>
      </SCard.Content>
    </SCard>
  );
};

export default AdvancedCardExample;
```

## Key Features

- **Compound Component Pattern**: Provides separate components for header and content areas
- **Flexible Styling**: Multiple variants for depth, padding, background, spacing, and borders
- **Header Actions**: Support for up to three action buttons or a custom action element
- **Rich Header Content**: Supports title and description text or a custom title element
- **Responsive Design**: Works well in various layout configurations including grids
- **Composition**: Can be nested to create complex layouts
- **Accessibility**: Semantic HTML structure for better screen reader support
- **Customizable**: Extends with custom CSS classes while maintaining design system consistency
- **TypeScript Support**: Comprehensive type definitions for better developer experience
