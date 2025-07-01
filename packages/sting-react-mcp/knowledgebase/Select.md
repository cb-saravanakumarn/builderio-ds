# Component Name

SSelect

## Description

The SSelect component is a customizable dropdown select control built on top of Radix UI's Select primitive. It provides a flexible and accessible way to create dropdown menus with support for single-item selection. The component follows a compound component pattern, offering a collection of sub-components for creating rich, customized select interfaces with proper styling and accessibility features.

## TypeScript Types

The SSelect component is composed of multiple sub-components, each with their own props that extend from Radix UI's Select primitive components.

```typescript
/**
 * Root component that manages the select state
 */
const SSelect = SelectPrimitive.Root;

/**
 * Props for the Select Root component
 */
type SSelectProps = React.ComponentPropsWithoutRef<typeof SelectPrimitive.Root>;

/**
 * Props for the Select Trigger component
 */
type SSelectTriggerProps = React.ComponentPropsWithoutRef<
  typeof SelectPrimitive.Trigger
>;

/**
 * Props for the Select Content component
 */
type SSelectContentProps = React.ComponentPropsWithoutRef<
  typeof SelectPrimitive.Content
> & {
  /**
   * Position of the select dropdown
   * @default 'popper'
   */
  position?: "popper" | "item-aligned";
};

/**
 * Props for the Select Item component
 */
type SSelectItemProps = React.ComponentPropsWithoutRef<
  typeof SelectPrimitive.Item
>;

/**
 * Props for the Select Group component
 */
type SSelectGroupProps = React.ComponentPropsWithoutRef<
  typeof SelectPrimitive.Group
>;

/**
 * Props for the Select Label component
 */
type SSelectLabelProps = React.ComponentPropsWithoutRef<
  typeof SelectPrimitive.Label
>;

/**
 * Props for the Select Separator component
 */
type SSelectSeparatorProps = React.ComponentPropsWithoutRef<
  typeof SelectPrimitive.Separator
>;
```

## Example

Here are examples demonstrating how to use the SSelect component:

### Basic Usage

```tsx
import React, { useState } from "react";
import {
  SSelect,
  SSelectTrigger,
  SSelectValue,
  SSelectContent,
  SSelectItem,
} from "@chargebee/sting-react";

const BasicSelectExample = () => {
  const [value, setValue] = useState("apple");

  return (
    <div className="w-[240px]">
      <SSelect value={value} onValueChange={setValue}>
        <SSelectTrigger>
          <SSelectValue placeholder="Select a fruit" />
        </SSelectTrigger>
        <SSelectContent>
          <SSelectItem value="apple">Apple</SSelectItem>
          <SSelectItem value="banana">Banana</SSelectItem>
          <SSelectItem value="orange">Orange</SSelectItem>
          <SSelectItem value="grape">Grape</SSelectItem>
          <SSelectItem value="strawberry">Strawberry</SSelectItem>
        </SSelectContent>
      </SSelect>
    </div>
  );
};

export default BasicSelectExample;
```

### Select with Groups and Labels

```tsx
import React from "react";
import {
  SSelect,
  SSelectTrigger,
  SSelectValue,
  SSelectContent,
  SSelectGroup,
  SSelectLabel,
  SSelectItem,
  SSelectSeparator,
} from "@chargebee/sting-react";

const GroupedSelectExample = () => {
  return (
    <div className="w-[240px]">
      <SSelect defaultValue="react">
        <SSelectTrigger>
          <SSelectValue placeholder="Select a framework" />
        </SSelectTrigger>
        <SSelectContent>
          <SSelectGroup>
            <SSelectLabel>Frontend</SSelectLabel>
            <SSelectItem value="react">React</SSelectItem>
            <SSelectItem value="vue">Vue</SSelectItem>
            <SSelectItem value="angular">Angular</SSelectItem>
            <SSelectItem value="svelte">Svelte</SSelectItem>
          </SSelectGroup>
          <SSelectSeparator />
          <SSelectGroup>
            <SSelectLabel>Backend</SSelectLabel>
            <SSelectItem value="node">Node.js</SSelectItem>
            <SSelectItem value="django">Django</SSelectItem>
            <SSelectItem value="laravel">Laravel</SSelectItem>
            <SSelectItem value="rails">Ruby on Rails</SSelectItem>
          </SSelectGroup>
        </SSelectContent>
      </SSelect>
    </div>
  );
};

export default GroupedSelectExample;
```

### Disabled Options and Custom Styling

```tsx
import React from "react";
import {
  SSelect,
  SSelectTrigger,
  SSelectValue,
  SSelectContent,
  SSelectItem,
} from "@chargebee/sting-react";

const CustomSelectExample = () => {
  return (
    <div className="w-[240px]">
      <SSelect defaultValue="medium">
        <SSelectTrigger className="border-primary-500 bg-primary-50">
          <SSelectValue placeholder="Select size" />
        </SSelectTrigger>
        <SSelectContent>
          <SSelectItem value="small">Small</SSelectItem>
          <SSelectItem value="medium">Medium</SSelectItem>
          <SSelectItem value="large">Large</SSelectItem>
          <SSelectItem value="xl" disabled>
            Extra Large (Out of Stock)
          </SSelectItem>
        </SSelectContent>
      </SSelect>
    </div>
  );
};

export default CustomSelectExample;
```

### Form Integration with Validation

```tsx
import React, { useState } from "react";
import {
  SSelect,
  SSelectTrigger,
  SSelectValue,
  SSelectContent,
  SSelectItem,
} from "@chargebee/sting-react";
import { SButton } from "@chargebee/sting-react";
import { SInlineError } from "@chargebee/sting-react";

const SelectWithValidationExample = () => {
  const [country, setCountry] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!country) {
      setError("Please select a country");
      return;
    }

    setError("");
    console.log("Form submitted with country:", country);
    // Process form submission
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
      <div className="space-y-2">
        <label htmlFor="country-select" className="text-sm font-medium">
          Country
        </label>

        <SSelect
          value={country}
          onValueChange={(value) => {
            setCountry(value);
            if (error) setError("");
          }}
        >
          <SSelectTrigger
            id="country-select"
            className={error ? "border-danger-500 ring-1 ring-danger-500" : ""}
          >
            <SSelectValue placeholder="Select a country" />
          </SSelectTrigger>
          <SSelectContent>
            <SSelectItem value="us">United States</SSelectItem>
            <SSelectItem value="ca">Canada</SSelectItem>
            <SSelectItem value="uk">United Kingdom</SSelectItem>
            <SSelectItem value="au">Australia</SSelectItem>
            <SSelectItem value="de">Germany</SSelectItem>
            <SSelectItem value="fr">France</SSelectItem>
            <SSelectItem value="jp">Japan</SSelectItem>
          </SSelectContent>
        </SSelect>

        {error && <SInlineError message={error} />}
      </div>

      <SButton type="submit" variant="primary">
        Submit
      </SButton>
    </form>
  );
};

export default SelectWithValidationExample;
```

### Multi-layer Nested Options

```tsx
import React from "react";
import {
  SSelect,
  SSelectTrigger,
  SSelectValue,
  SSelectContent,
  SSelectGroup,
  SSelectLabel,
  SSelectItem,
  SSelectSeparator,
} from "@chargebee/sting-react";

const NestedSelectExample = () => {
  return (
    <div className="w-[240px]">
      <SSelect>
        <SSelectTrigger>
          <SSelectValue placeholder="Select a car" />
        </SSelectTrigger>
        <SSelectContent>
          <SSelectGroup>
            <SSelectLabel>Japanese</SSelectLabel>
            <SSelectItem value="toyota-camry">Toyota Camry</SSelectItem>
            <SSelectItem value="toyota-corolla">Toyota Corolla</SSelectItem>
            <SSelectItem value="honda-civic">Honda Civic</SSelectItem>
            <SSelectItem value="honda-accord">Honda Accord</SSelectItem>
          </SSelectGroup>
          <SSelectSeparator />
          <SSelectGroup>
            <SSelectLabel>American</SSelectLabel>
            <SSelectItem value="ford-mustang">Ford Mustang</SSelectItem>
            <SSelectItem value="ford-f150">Ford F-150</SSelectItem>
            <SSelectItem value="chevy-malibu">Chevy Malibu</SSelectItem>
          </SSelectGroup>
          <SSelectSeparator />
          <SSelectGroup>
            <SSelectLabel>European</SSelectLabel>
            <SSelectItem value="bmw-3series">BMW 3 Series</SSelectItem>
            <SSelectItem value="mercedes-cclass">Mercedes C-Class</SSelectItem>
            <SSelectItem value="audi-a4">Audi A4</SSelectItem>
            <SSelectItem value="volvo-s60">Volvo S60</SSelectItem>
          </SSelectGroup>
        </SSelectContent>
      </SSelect>
    </div>
  );
};

export default NestedSelectExample;
```

## Key Features

- **Accessibility**: Built on Radix UI for proper keyboard navigation, screen reader support, and ARIA attributes
- **Compound Component Pattern**: Flexible composition with various sub-components
- **Dropdown Positioning**: Support for different dropdown positioning strategies
- **Grouped Options**: Ability to organize options into logical groups with labels
- **Custom Styling**: Fully customizable with class names and inline styles
- **Form Integration**: Works well with form libraries and validation patterns
- **Scrollable Content**: Built-in scroll handling for long option lists
- **Visual Feedback**: Clear visual indicators for selected, disabled, and focused states
- **Animation**: Smooth open/close animations for better user experience
- **Keyboard Navigation**: Full keyboard support for accessibility
- **TypeScript Support**: Comprehensive type definitions for better developer experience
