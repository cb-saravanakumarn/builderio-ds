## Component Name

Badge

## Description

Badges are small, color-coded UI elements used to display concise metadata, designed to draw user attention to important information. They offer visual categorization through different colors, sizes, and emphasis levels, making them ideal for status indicators, counts, or category labels.

## TypeScript Types

The following types represent the props that the Badge component accepts. These types allow you to properly configure the component according to your needs.

```typescript
 interface BadgeProps
	extends ComponentPropsWithout<'div', RemovedProps>,
		Badge {
	/**
	 * Badge content
	 */
	children?: React.ReactNode;
	/**
	 * Whether to render the badge as a child component (Radix UI Slot)
	 */
	asChild?: boolean;
	/**
	 * Optional icon to display in the badge
	 */
	icon?: React.ReactNode;
	/**
	 * Position of the icon relative to the badge text
	 */
	iconPosition?: 'left' | 'right';
	/**
	 * The mode of the badge, can be light or dark
	 */
	mode?: Badge['mode'];
	/**
	 * The shape of the badge's corners. Determines the badge's border radius.
	 * Can be small or full.
	 */
	rounded?: Badge['rounded'];
	/**
	 * The size of the badge. Can be regular, medium, or large.
	 */
	size?: Badge['size'];
	/**
	 * Add data-test id's for using it in testcases
	 */
	dataTestId?: string;
}
```

## Examples

### Badge Usage

This example demonstrates badges with key properties and styling.

```tsx
import React from 'react';
import { Badge, Box, InfoIcon, CheckCircleIcon } from '@chargebee/cb-sting-dls';

const BadgeExample = () => {
  return (
    <div display="flex" gap="spacing.4">
        <SBadge
        dataTestId="default-badge"
        mode="light"
        size="regular"
        variant="primary"
        >
        Default Badge
        </SBadge>

    
    </div>
  );
};

export default BadgeExample;
```
