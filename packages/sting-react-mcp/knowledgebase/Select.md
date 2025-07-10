# Component Name

SSelect

## Description

The SSelect component is a comprehensive, customizable dropdown select control built on top of Radix UI's Select primitive. It provides a flexible and accessible way to create dropdown menus with support for single-item selection, search functionality, and advanced filtering. The component follows a compound component pattern, offering a collection of sub-components for creating rich, customized select interfaces with proper styling, accessibility features, and search capabilities.

## Key Features

- **Accessibility**: Built on Radix UI for proper keyboard navigation, screen reader support, and ARIA attributes
- **Compound Component Pattern**: Flexible composition with various sub-components
- **Search Functionality**: Built-in search capability with customizable filter functions
- **Searchable Component**: Pre-built searchable select component for quick implementation
- **Dropdown Positioning**: Support for different dropdown positioning strategies
- **Grouped Options**: Ability to organize options into logical groups with labels
- **Custom Styling**: Fully customizable with class names and inline styles using CSS classes
- **Form Integration**: Works well with form libraries and validation patterns
- **Label Support**: Integrated label component with tooltip support for additional information
- **Scrollable Content**: Built-in scroll handling for long option lists with scroll buttons
- **Visual Feedback**: Clear visual indicators for selected, disabled, and focused states
- **Animation**: Smooth open/close animations for better user experience
- **Keyboard Navigation**: Full keyboard support for accessibility, including search input
- **TypeScript Support**: Comprehensive type definitions for better developer experience
- **Controlled & Uncontrolled**: Supports both controlled and uncontrolled usage patterns
- **Custom Filter Functions**: Ability to implement custom search and filter logic
- **No Results Handling**: Customizable messaging when search yields no results
- **Flexible API**: Multiple ways to implement search (manual or automatic with SSelect.Searchable)

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
 * Props for the Select Content component with search functionality
 */
type SSelectContentProps = React.ComponentPropsWithoutRef<
  typeof SelectPrimitive.Content
> & {
  /**
   * Position of the select dropdown
   * @default 'popper'
   */
  position?: "popper" | "item-aligned";
  /**
   * Whether the select content should include search functionality
   */
  searchable?: boolean;
  /**
   * Callback function called when search value changes
   */
  onSearch?: (value: string) => void;
  /**
   * Placeholder text for the search input
   */
  searchPlaceholder?: string;
  /**
   * Controlled search value
   */
  searchValue?: string;
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
 * Props for the Select Group Label component
 */
type SSelectGroupLabelProps = React.ComponentPropsWithoutRef<
  typeof SelectPrimitive.Label
>;

/**
 * Props for the Select Separator component
 */
type SSelectSeparatorProps = React.ComponentPropsWithoutRef<
  typeof SelectPrimitive.Separator
>;

/**
 * Props for the Search Input component
 */
type SSelectSearchInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  /**
   * Callback function called when search value changes
   */
  onSearch?: (value: string) => void;
  /**
   * Controlled search value
   */
  searchValue?: string;
};

/**
 * Props for the Searchable Select component
 */
type SSelectSearchableProps = {
  /**
   * Array of options for the select
   */
  options: Array<{ value: string; label: string; disabled?: boolean }>;
  /**
   * Placeholder text for the select trigger
   */
  placeholder?: string;
  /**
   * Placeholder text for the search input
   */
  searchPlaceholder?: string;
  /**
   * Callback function called when search value changes
   */
  onSearch?: (value: string) => void;
  /**
   * Custom filter function for search
   */
  filterFn?: (
    option: { value: string; label: string },
    searchValue: string
  ) => boolean;
  /**
   * Text shown when no results are found
   */
  noResultsText?: string;
  /**
   * CSS class name for the container
   */
  className?: string;
  /**
   * CSS class name for the trigger
   */
  triggerClassName?: string;
  /**
   * CSS class name for the content
   */
  contentClassName?: string;
  /**
   * Label text displayed above the select
   */
  label?: string;
  /**
   * Additional info displayed next to the label
   */
  labelInfo?: string;
  /**
   * Tooltip placement for label info
   */
  labelTooltipPlacement?: "top" | "right" | "bottom" | "left";
  /**
   * HTML for attribute for the label
   */
  labelHtmlFor?: string;
  /**
   * Controlled value
   */
  value?: string;
  /**
   * Default value for uncontrolled usage
   */
  defaultValue?: string;
  /**
   * Callback fired when value changes
   */
  onValueChange?: (value: string) => void;
  /**
   * Whether the select is disabled
   */
  disabled?: boolean;
  /**
   * Whether the select is required
   */
  required?: boolean;
  /**
   * Name attribute for form submission
   */
  name?: string;
  /**
   * Controlled open state
   */
  open?: boolean;
  /**
   * Default open state for uncontrolled usage
   */
  defaultOpen?: boolean;
  /**
   * Callback fired when open state changes
   */
  onOpenChange?: (open: boolean) => void;
};
```

## Component Structure

The SSelect component is organized as a compound component with the following sub-components:

- **SSelect** - Root component that manages the select state
- **SSelect.Trigger** - The clickable trigger that opens the dropdown
- **SSelect.Value** - Displays the selected value with placeholder support
- **SSelect.Content** - The dropdown content container with optional search functionality
- **SSelect.Item** - Individual selectable items
- **SSelect.Group** - Groups related items together
- **SSelect.GroupLabel** - Labels for groups of items
- **SSelect.Separator** - Visual separator between groups or items
- **SSelect.ScrollUpButton** - Scroll button for long lists (automatic)
- **SSelect.ScrollDownButton** - Scroll button for long lists (automatic)
- **SSelect.SearchInput** - Search input component for manual search implementation
- **SSelect.Searchable** - Pre-built searchable select component

## Example

Here are examples demonstrating how to use the SSelect component:

### Basic Usage

```tsx
import React, { useState } from "react";
import { SSelect } from "@chargebee/sting-react";

const BasicSelectExample = () => {
  const [value, setValue] = useState("apple");

  return (
    <div className="w-[240px]">
      <SSelect value={value} onValueChange={setValue}>
        <SSelect.Trigger>
          <SSelect.Value placeholder="Select a fruit" />
        </SSelect.Trigger>
        <SSelect.Content>
          <SSelect.Item value="apple">Apple</SSelect.Item>
          <SSelect.Item value="banana">Banana</SSelect.Item>
          <SSelect.Item value="orange">Orange</SSelect.Item>
          <SSelect.Item value="grape">Grape</SSelect.Item>
          <SSelect.Item value="strawberry">Strawberry</SSelect.Item>
        </SSelect.Content>
      </SSelect>
    </div>
  );
};

export default BasicSelectExample;
```

### Select with Groups and Labels

```tsx
import React from "react";
import { SSelect } from "@chargebee/sting-react";

const GroupedSelectExample = () => {
  return (
    <div className="w-[240px]">
      <SSelect defaultValue="react">
        <SSelect.Trigger>
          <SSelect.Value placeholder="Select a framework" />
        </SSelect.Trigger>
        <SSelect.Content>
          <SSelect.Group>
            <SSelect.GroupLabel>Frontend</SSelect.GroupLabel>
            <SSelect.Item value="react">React</SSelect.Item>
            <SSelect.Item value="vue">Vue</SSelect.Item>
            <SSelect.Item value="angular">Angular</SSelect.Item>
            <SSelect.Item value="svelte">Svelte</SSelect.Item>
          </SSelect.Group>
          <SSelect.Separator />
          <SSelect.Group>
            <SSelect.GroupLabel>Backend</SSelect.GroupLabel>
            <SSelect.Item value="node">Node.js</SSelect.Item>
            <SSelect.Item value="django">Django</SSelect.Item>
            <SSelect.Item value="laravel">Laravel</SSelect.Item>
            <SSelect.Item value="rails">Ruby on Rails</SSelect.Item>
          </SSelect.Group>
        </SSelect.Content>
      </SSelect>
    </div>
  );
};

export default GroupedSelectExample;
```

### Searchable Select

```tsx
import React, { useState } from "react";
import { SSelect } from "@chargebee/sting-react";

const SearchableSelectExample = () => {
  const countries = [
    { value: "us", label: "United States" },
    { value: "ca", label: "Canada" },
    { value: "uk", label: "United Kingdom" },
    { value: "au", label: "Australia" },
    { value: "de", label: "Germany" },
    { value: "fr", label: "France" },
    { value: "jp", label: "Japan" },
    { value: "in", label: "India" },
    { value: "br", label: "Brazil" },
    { value: "mx", label: "Mexico" },
  ];

  const [value, setValue] = useState("");

  return (
    <div className="w-[240px]">
      <SSelect.Searchable
        options={countries}
        value={value}
        onValueChange={setValue}
        placeholder="Select a country"
        searchPlaceholder="Search countries..."
        noResultsText="No countries found"
        label="Country"
      />
    </div>
  );
};

export default SearchableSelectExample;
```

### Select with Manual Search Implementation

```tsx
import React, { useState } from "react";
import { SSelect } from "@chargebee/sting-react";

const ManualSearchSelectExample = () => {
  const [searchValue, setSearchValue] = useState("");
  const [value, setValue] = useState("");

  const countries = [
    { value: "us", label: "United States" },
    { value: "ca", label: "Canada" },
    { value: "uk", label: "United Kingdom" },
    { value: "au", label: "Australia" },
    { value: "de", label: "Germany" },
    { value: "fr", label: "France" },
    { value: "jp", label: "Japan" },
  ];

  const filteredCountries = countries.filter((country) =>
    country.label.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div className="w-[240px]">
      <SSelect value={value} onValueChange={setValue}>
        <SSelect.Trigger>
          <SSelect.Value placeholder="Select a country" />
        </SSelect.Trigger>
        <SSelect.Content
          searchable
          onSearch={setSearchValue}
          searchValue={searchValue}
          searchPlaceholder="Search countries..."
        >
          {filteredCountries.length > 0 ? (
            filteredCountries.map((country) => (
              <SSelect.Item key={country.value} value={country.value}>
                {country.label}
              </SSelect.Item>
            ))
          ) : (
            <div className="px-2 py-6 text-center text-sm text-neutral-500">
              No countries found
            </div>
          )}
        </SSelect.Content>
      </SSelect>
    </div>
  );
};

export default ManualSearchSelectExample;
```

### Disabled Options and Custom Styling

```tsx
import React from "react";
import { SSelect } from "@chargebee/sting-react";

const CustomSelectExample = () => {
  return (
    <div className="w-[240px]">
      <SSelect defaultValue="medium">
        <SSelect.Trigger className="border-primary-500 bg-primary-50">
          <SSelect.Value placeholder="Select size" />
        </SSelect.Trigger>
        <SSelect.Content>
          <SSelect.Item value="small">Small</SSelect.Item>
          <SSelect.Item value="medium">Medium</SSelect.Item>
          <SSelect.Item value="large">Large</SSelect.Item>
          <SSelect.Item value="xl" disabled>
            Extra Large (Out of Stock)
          </SSelect.Item>
        </SSelect.Content>
      </SSelect>
    </div>
  );
};

export default CustomSelectExample;
```

### Form Integration with Validation

```tsx
import React, { useState } from "react";
import { SSelect, SButton, SInlineError } from "@chargebee/sting-react";

const SelectWithValidationExample = () => {
  const [country, setCountry] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
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
        <SSelect
          value={country}
          onValueChange={(value) => {
            setCountry(value);
            if (error) setError("");
          }}
        >
          <SSelect.Trigger
            id="country-select"
            className={error ? "border-danger-500 ring-1 ring-danger-500" : ""}
          >
            <SSelect.Value placeholder="Select a country" />
          </SSelect.Trigger>
          <SSelect.Content>
            <SSelect.Item value="us">United States</SSelect.Item>
            <SSelect.Item value="ca">Canada</SSelect.Item>
            <SSelect.Item value="uk">United Kingdom</SSelect.Item>
            <SSelect.Item value="au">Australia</SSelect.Item>
            <SSelect.Item value="de">Germany</SSelect.Item>
            <SSelect.Item value="fr">France</SSelect.Item>
            <SSelect.Item value="jp">Japan</SSelect.Item>
          </SSelect.Content>
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
import { SSelect } from "@chargebee/sting-react";

const NestedSelectExample = () => {
  return (
    <div className="w-[240px]">
      <SSelect>
        <SSelect.Trigger>
          <SSelect.Value placeholder="Select a car" />
        </SSelect.Trigger>
        <SSelect.Content>
          <SSelect.Group>
            <SSelect.GroupLabel>Japanese</SSelect.GroupLabel>
            <SSelect.Item value="toyota-camry">Toyota Camry</SSelect.Item>
            <SSelect.Item value="toyota-corolla">Toyota Corolla</SSelect.Item>
            <SSelect.Item value="honda-civic">Honda Civic</SSelect.Item>
            <SSelect.Item value="honda-accord">Honda Accord</SSelect.Item>
          </SSelect.Group>
          <SSelect.Separator />
          <SSelect.Group>
            <SSelect.GroupLabel>American</SSelect.GroupLabel>
            <SSelect.Item value="ford-mustang">Ford Mustang</SSelect.Item>
            <SSelect.Item value="ford-f150">Ford F-150</SSelect.Item>
            <SSelect.Item value="chevy-malibu">Chevy Malibu</SSelect.Item>
          </SSelect.Group>
          <SSelect.Separator />
          <SSelect.Group>
            <SSelect.GroupLabel>European</SSelect.GroupLabel>
            <SSelect.Item value="bmw-3series">BMW 3 Series</SSelect.Item>
            <SSelect.Item value="mercedes-cclass">
              Mercedes C-Class
            </SSelect.Item>
            <SSelect.Item value="audi-a4">Audi A4</SSelect.Item>
            <SSelect.Item value="volvo-s60">Volvo S60</SSelect.Item>
          </SSelect.Group>
        </SSelect.Content>
      </SSelect>
    </div>
  );
};

export default NestedSelectExample;
```

### Advanced Searchable Select with Custom Filter

```tsx
import React, { useState } from "react";
import { SSelect } from "@chargebee/sting-react";

const AdvancedSearchableExample = () => {
  const frameworks = [
    { value: "react", label: "React", category: "Frontend" },
    { value: "vue", label: "Vue.js", category: "Frontend" },
    { value: "angular", label: "Angular", category: "Frontend" },
    { value: "svelte", label: "Svelte", category: "Frontend" },
    { value: "node", label: "Node.js", category: "Backend" },
    { value: "django", label: "Django", category: "Backend" },
    { value: "laravel", label: "Laravel", category: "Backend" },
    { value: "rails", label: "Ruby on Rails", category: "Backend" },
  ];

  // Custom filter function that searches in both label and category
  const customFilter = (
    option: { value: string; label: string },
    searchValue: string
  ) => {
    const framework = frameworks.find((f) => f.value === option.value);
    return (
      option.label.toLowerCase().includes(searchValue.toLowerCase()) ||
      framework?.category.toLowerCase().includes(searchValue.toLowerCase())
    );
  };

  return (
    <div className="w-[280px]">
      <SSelect.Searchable
        options={frameworks}
        placeholder="Select a framework"
        searchPlaceholder="Search by name or category..."
        filterFn={customFilter}
        noResultsText="No frameworks found"
        label="Framework"
        labelInfo="Choose your preferred framework"
      />
    </div>
  );
};

export default AdvancedSearchableExample;
```

## API Reference

### SSelect (Root)

| Prop            | Type                      | Default | Description                               |
| --------------- | ------------------------- | ------- | ----------------------------------------- |
| `value`         | `string`                  | -       | Controlled value of the select            |
| `defaultValue`  | `string`                  | -       | Default value for uncontrolled usage      |
| `onValueChange` | `(value: string) => void` | -       | Callback fired when value changes         |
| `open`          | `boolean`                 | -       | Controlled open state                     |
| `defaultOpen`   | `boolean`                 | -       | Default open state for uncontrolled usage |
| `onOpenChange`  | `(open: boolean) => void` | -       | Callback fired when open state changes    |
| `disabled`      | `boolean`                 | `false` | Whether the select is disabled            |
| `required`      | `boolean`                 | `false` | Whether the select is required            |
| `name`          | `string`                  | -       | Name attribute for form submission        |

### SSelect.Trigger

| Prop        | Type        | Default | Description                             |
| ----------- | ----------- | ------- | --------------------------------------- |
| `className` | `string`    | -       | Additional CSS class name               |
| `children`  | `ReactNode` | -       | Trigger content (usually SSelect.Value) |

### SSelect.Content

| Prop                | Type                         | Default       | Description                              |
| ------------------- | ---------------------------- | ------------- | ---------------------------------------- |
| `position`          | `"popper" \| "item-aligned"` | `"popper"`    | Position strategy for the dropdown       |
| `searchable`        | `boolean`                    | `false`       | Whether to include search functionality  |
| `onSearch`          | `(value: string) => void`    | -             | Callback fired when search value changes |
| `searchPlaceholder` | `string`                     | `"Search..."` | Placeholder text for search input        |
| `searchValue`       | `string`                     | -             | Controlled search value                  |
| `className`         | `string`                     | -             | Additional CSS class name                |

### SSelect.Item

| Prop        | Type        | Default | Description                  |
| ----------- | ----------- | ------- | ---------------------------- |
| `value`     | `string`    | -       | The value of the item        |
| `disabled`  | `boolean`   | `false` | Whether the item is disabled |
| `className` | `string`    | -       | Additional CSS class name    |
| `children`  | `ReactNode` | -       | Item content                 |

### SSelect.Searchable

| Prop                    | Type                                                        | Default               | Description                          |
| ----------------------- | ----------------------------------------------------------- | --------------------- | ------------------------------------ |
| `options`               | `Array<{value: string, label: string, disabled?: boolean}>` | -                     | Array of select options              |
| `placeholder`           | `string`                                                    | `"Select an option"`  | Placeholder for the trigger          |
| `searchPlaceholder`     | `string`                                                    | `"Search options..."` | Placeholder for search input         |
| `onSearch`              | `(value: string) => void`                                   | -                     | Callback for search value changes    |
| `filterFn`              | `(option, searchValue) => boolean`                          | Default filter        | Custom filter function               |
| `noResultsText`         | `string`                                                    | `"No results found"`  | Text shown when no results           |
| `className`             | `string`                                                    | -                     | Container CSS class name             |
| `triggerClassName`      | `string`                                                    | -                     | Trigger CSS class name               |
| `contentClassName`      | `string`                                                    | -                     | Content CSS class name               |
| `label`                 | `string`                                                    | -                     | Label text above the select          |
| `labelInfo`             | `string`                                                    | -                     | Additional info next to label        |
| `labelTooltipPlacement` | `"top" \| "right" \| "bottom" \| "left"`                    | -                     | Tooltip placement for label info     |
| `labelHtmlFor`          | `string`                                                    | -                     | HTML for attribute for label         |
| `value`                 | `string`                                                    | -                     | Controlled value                     |
| `defaultValue`          | `string`                                                    | -                     | Default value for uncontrolled usage |
| `onValueChange`         | `(value: string) => void`                                   | -                     | Callback fired when value changes    |
| `disabled`              | `boolean`                                                   | `false`               | Whether the select is disabled       |
| `required`              | `boolean`                                                   | `false`               | Whether the select is required       |
| `name`                  | `string`                                                    | -                     | Name attribute for forms             |
| `open`                  | `boolean`                                                   | -                     | Controlled open state                |
| `defaultOpen`           | `boolean`                                                   | -                     | Default open state                   |
| `onOpenChange`          | `(open: boolean) => void`                                   | -                     | Callback for open state changes      |

### SSelect.SearchInput

| Prop          | Type                      | Default       | Description                       |
| ------------- | ------------------------- | ------------- | --------------------------------- |
| `onSearch`    | `(value: string) => void` | -             | Callback for search value changes |
| `searchValue` | `string`                  | -             | Controlled search value           |
| `placeholder` | `string`                  | `"Search..."` | Placeholder text                  |
| `className`   | `string`                  | -             | Additional CSS class name         |

### Other Sub-components

- **SSelect.Value**: Displays selected value with placeholder support
- **SSelect.Group**: Groups related items (no specific props beyond Radix UI)
- **SSelect.GroupLabel**: Labels for groups (no specific props beyond Radix UI)
- **SSelect.Separator**: Visual separator (no specific props beyond Radix UI)
- **SSelect.ScrollUpButton**: Automatic scroll button (no specific props)
- **SSelect.ScrollDownButton**: Automatic scroll button (no specific props)

## CSS Classes

The component uses CSS classes for styling that can be customized:

- `.s-select-trigger` - The trigger button
- `.s-select-content` - The dropdown content container
- `.s-select-item` - Individual select items
- `.s-select-search-container` - Search input container
- `.s-select-search-input` - Search input field
- `.s-select-no-results` - No results message container
- `.s-select-label` - Group labels
- `.s-select-separator` - Separators between groups
- `.s-select-scroll-button` - Scroll buttons
- `.s-select-viewport` - Content viewport
- `.s-select-item-indicator` - Selected item indicator
