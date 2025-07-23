# Component Name

SSelect

## Description

The SSelect component is a highly flexible and accessible select/dropdown component built on top of Radix UI's Popover primitive and cmdk for command functionality. It supports both a simple props-based API and a compound composition API for maximum flexibility. The component provides features like single and multi-selection, search functionality, keyboard navigation, custom styling, and full accessibility support. It's designed to handle both simple use cases with an options array and complex scenarios requiring custom layouts and grouping.

## TypeScript Types

The following types represent the props and interfaces that the SSelect component accepts:

```typescript
/**
 * Represents a single selectable option
 */
export interface SelectOption {
  /**
   * The unique value for the option
   */
  value: string;

  /**
   * The display label for the option
   */
  label: string;

  /**
   * Whether this specific option is disabled
   * @default false
   */
  disabled?: boolean;
}

/**
 * Props for the SSelect root component
 */
export interface SSelectProps {
  /**
   * Array of options for simple props-based API
   * When provided, the component will render automatically
   */
  options?: SelectOption[];

  /**
   * Current selected value(s)
   * For controlled component usage
   */
  value?: string | string[];

  /**
   * Default selected value(s) for uncontrolled usage
   */
  defaultValue?: string | string[];

  /**
   * Callback fired when selection changes
   */
  onValueChange?: (value: string | string[]) => void;

  /**
   * Placeholder text when no option is selected
   * @default "Select option..."
   */
  placeholder?: string;

  /**
   * Whether the entire select is disabled
   * @default false
   */
  disabled?: boolean;

  /**
   * Whether multiple selection is allowed
   * When true, value becomes string[] instead of string
   * @default false
   */
  multiple?: boolean;

  /**
   * Whether to show search input for filtering options
   * @default true
   */
  searchable?: boolean;

  /**
   * Whether to show clear button when options are selected
   * @default true
   */
  clearable?: boolean;

  /**
   * Additional CSS class for the root component
   */
  className?: string;

  /**
   * Child components for compound composition API
   * When provided, options prop is ignored
   */
  children?: React.ReactNode;

  /**
   * Controlled open state of the dropdown
   */
  open?: boolean;

  /**
   * Callback fired when dropdown open state changes
   */
  onOpenChange?: (open: boolean) => void;
}
```

## Component API

### Root Component (SSelect)

The main component that can be used in two ways:

#### 1. Props-based API (Simple)

```typescript
<SSelect
  options={[
    { value: "apple", label: "Apple" },
    { value: "banana", label: "Banana" }
  ]}
  placeholder="Select a fruit..."
  onValueChange={(value) => console.log(value)}
/>
```

#### 2. Compound Composition API (Advanced)

```typescript
<SSelect>
  <SSelect.Trigger>
    <SSelect.Value placeholder="Select option..." />
  </SSelect.Trigger>
  <SSelect.Content>
    <SSelect.Input placeholder="Search..." />
    <SSelect.List>
      <SSelect.Item value="option1">Option 1</SSelect.Item>
      <SSelect.Item value="option2">Option 2</SSelect.Item>
    </SSelect.List>
  </SSelect.Content>
</SSelect>
```

### Sub-components

#### SSelect.Trigger

The clickable element that opens the dropdown.

```typescript
interface SSelectTriggerProps
  extends React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Trigger> {
  className?: string;
  children: React.ReactNode;
}
```

#### SSelect.Value

Displays the currently selected value(s) or placeholder. For multi-select, it shows a count of selected items (e.g., "3 selected").

```typescript
interface SSelectValueProps extends React.HTMLAttributes<HTMLSpanElement> {
  placeholder?: string;
}
```

#### SSelect.Content

The dropdown content container that automatically wraps content in command functionality.

```typescript
interface SSelectContentProps
  extends React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content> {
  className?: string;
  children: React.ReactNode;
}
```

#### SSelect.Command

⚠️ **Internal Component** - This component is handled automatically by `SSelect.Content` and is not exposed in the public API. The command functionality (search and keyboard navigation) is automatically applied to all content within `SSelect.Content`.

```typescript
// This component is not available for direct use
// Command functionality is automatically handled by SSelect.Content
```

#### SSelect.Input

Search input for filtering options. Automatically hidden when `searchable={false}` is set on the root component.

```typescript
interface SSelectInputProps
  extends React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input> {
  className?: string;
  placeholder?: string;
}
```

#### SSelect.List

Container for the list of options.

```typescript
interface SSelectListProps
  extends React.ComponentPropsWithoutRef<typeof CommandPrimitive.List> {
  className?: string;
}
```

#### SSelect.Item

Individual selectable option.

```typescript
interface SSelectItemProps
  extends React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item> {
  value: string;
  children: React.ReactNode;
  disabled?: boolean;
}
```

#### SSelect.Group

Groups related options together.

```typescript
interface SSelectGroupProps
  extends React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group> {
  className?: string;
}
```

#### SSelect.Label

Label for option groups.

```typescript
interface SSelectLabelProps
  extends React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group> {
  className?: string;
}
```

**Note**: Despite the interface extending `CommandPrimitive.Group`, this component functions as a label within groups.

#### SSelect.Empty

Displayed when no options match the search.

```typescript
interface SSelectEmptyProps
  extends React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty> {
  className?: string;
}
```

#### SSelect.Separator

Visual separator between option groups.

```typescript
interface SSelectSeparatorProps
  extends React.ComponentPropsWithoutRef<typeof CommandPrimitive.Separator> {
  className?: string;
}
```

## Usage Examples

### Basic Single Selection

```typescript
import { SSelect } from '@chargebee/sting-react';

const fruits = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'orange', label: 'Orange' },
];

function BasicExample() {
  const [selectedFruit, setSelectedFruit] = useState('');

  return (
    <SSelect
      options={fruits}
      value={selectedFruit}
      onValueChange={setSelectedFruit}
      placeholder="Select a fruit..."
    />
  );
}
```

### Multi-selection

```typescript
function MultiSelectExample() {
  const [selectedFruits, setSelectedFruits] = useState<string[]>([]);

  return (
    <SSelect
      options={fruits}
      value={selectedFruits}
      onValueChange={setSelectedFruits}
      multiple={true}
      placeholder="Select fruits..."
    />
  );
}
```

### Compound Composition with Groups

```typescript
function GroupedExample() {
  return (
    <SSelect>
      <SSelect.Trigger>
        <SSelect.Value placeholder="Select a framework..." />
      </SSelect.Trigger>
      <SSelect.Content>
        <SSelect.Input placeholder="Search framework..." />
        <SSelect.List>
          <SSelect.Empty>No framework found.</SSelect.Empty>
          <SSelect.Group>
            <SSelect.Label>Frontend Frameworks</SSelect.Label>
            <SSelect.Item value="react">React</SSelect.Item>
            <SSelect.Item value="vue">Vue</SSelect.Item>
            <SSelect.Item value="angular">Angular</SSelect.Item>
          </SSelect.Group>
          <SSelect.Separator />
          <SSelect.Group>
            <SSelect.Label>Full-stack Frameworks</SSelect.Label>
            <SSelect.Item value="nextjs">Next.js</SSelect.Item>
            <SSelect.Item value="nuxtjs">Nuxt.js</SSelect.Item>
          </SSelect.Group>
        </SSelect.List>
      </SSelect.Content>
    </SSelect>
  );
}
```

### Disabled Options (Props API)

```typescript
const optionsWithDisabled = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana', disabled: true },
  { value: 'orange', label: 'Orange' },
];

function DisabledOptionsExample() {
  return (
    <SSelect
      options={optionsWithDisabled}
      placeholder="Select a fruit..."
    />
  );
}
```

### Disabled Options (Compound API)

```typescript
function DisabledItemsCompoundExample() {
  return (
    <SSelect>
      <SSelect.Trigger>
        <SSelect.Value placeholder="Select a fruit..." />
      </SSelect.Trigger>
      <SSelect.Content>
        <SSelect.Input placeholder="Search fruits..." />
        <SSelect.List>
          <SSelect.Empty>No fruits found.</SSelect.Empty>
          <SSelect.Item value="apple">Apple</SSelect.Item>
          <SSelect.Item value="banana" disabled>
            Banana (Out of stock)
          </SSelect.Item>
          <SSelect.Item value="orange">Orange</SSelect.Item>
          <SSelect.Item value="grape" disabled>
            Grape (Seasonal)
          </SSelect.Item>
        </SSelect.List>
      </SSelect.Content>
    </SSelect>
  );
}
```

### Multi-selection with Custom Value Display

```typescript
function MultiSelectCustomDisplayExample() {
  return (
    <SSelect multiple>
      <SSelect.Trigger>
        <SSelect.Value placeholder="Select frameworks..." />
      </SSelect.Trigger>
      <SSelect.Content>
        <SSelect.Input placeholder="Search framework..." />
        <SSelect.List>
          <SSelect.Empty>No framework found.</SSelect.Empty>
          {frameworks.map((framework) => (
            <SSelect.Item key={framework.value} value={framework.value}>
              {framework.label}
            </SSelect.Item>
          ))}
        </SSelect.List>
      </SSelect.Content>
    </SSelect>
  );
}
```

**Note**: In compound API with multi-select, `SSelect.Value` displays "X selected" format automatically.

### Props-based vs Compound API Comparison

```typescript
// Props-based API - Simple and quick
<SSelect
  options={fruits}
  multiple={true}
  placeholder="Select fruits..."
  onValueChange={(value) => console.log(value)}
/>

// Compound API - Full control and customization
<SSelect multiple onValueChange={(value) => console.log(value)}>
  <SSelect.Trigger>
    <SSelect.Value placeholder="Select fruits..." />
  </SSelect.Trigger>
  <SSelect.Content>
    <SSelect.Input placeholder="Search fruits..." />
    <SSelect.List>
      <SSelect.Empty>No fruits found.</SSelect.Empty>
      {fruits.map((fruit) => (
        <SSelect.Item key={fruit.value} value={fruit.value}>
          {fruit.label}
        </SSelect.Item>
      ))}
    </SSelect.List>
  </SSelect.Content>
</SSelect>
```

### Controlled Open State

```typescript
function ControlledOpenExample() {
  const [open, setOpen] = useState(false);

  return (
    <SSelect
      open={open}
      onOpenChange={setOpen}
      options={fruits}
      placeholder="Select a fruit..."
    />
  );
}
```

### Non-searchable Select

```typescript
function NonSearchableExample() {
  return (
    <SSelect
      options={fruits}
      searchable={false}
      placeholder="Select a fruit..."
    />
  );
}
```

### Important Implementation Details

- **Auto-filtering**: When using the props-based API, filtering is handled automatically based on the search input
- **Controlled vs Uncontrolled**: The component supports both controlled (`value` + `onValueChange`) and uncontrolled (`defaultValue`) patterns
- **Multi-select behavior**: In multi-select mode, clicking an already selected item will deselect it
- **Search state**: Search input is automatically cleared when the dropdown closes
- **Keyboard navigation**: Full arrow key navigation with Enter to select and Escape to close
- **Focus management**: Focus is properly managed between trigger, search input, and options

## Common Issues and Troubleshooting

### Options not showing in compound API

**Problem**: Using `options` prop with compound children - only the options prop will be used.
**Solution**: Use either the `options` prop OR compound children, not both.

### Search not working

**Problem**: Search functionality not filtering options.
**Solution**:

- Ensure `searchable={true}` (default) or don't set `searchable={false}`
- In compound API, make sure to include `<SSelect.Input />`
- For props API, filtering is automatic

### Styling not applying

**Problem**: Custom CSS classes not taking effect.
**Solution**:

- Import the component's CSS file: `import './SSelect.css'`
- Use higher specificity or `!important` for overrides
- Check that Tailwind classes are properly configured

### Multi-select value not updating

**Problem**: Multi-select value state not updating correctly.
**Solution**:

- Ensure `value` is an array: `useState<string[]>([])`
- Use proper type checking: `Array.isArray(value)`
- Handle both single string and array types in `onValueChange`

### Accessibility warnings

**Problem**: Screen reader or accessibility tools showing warnings.
**Solution**:

- Ensure proper ARIA attributes are not overridden
- Test with actual screen readers
- Don't remove default keyboard event handlers

```

```
