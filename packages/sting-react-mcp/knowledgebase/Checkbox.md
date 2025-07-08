# Component Name

SCheckbox

## Description

The SCheckbox component is a customizable checkbox input built on top of Radix UI's Checkbox primitive. It provides a rich set of features including labels, descriptions, validation states, and support for indeterminate states. The component is designed with accessibility in mind and follows design system guidelines for consistent styling across the application.

The SCheckbox also supports a compound component pattern with `SCheckbox.Group` and `SCheckbox.Item` for managing groups of related checkboxes with shared state.

## TypeScript Types

The following types represent the props that the SCheckbox component accepts.

```typescript
/**
 * Props for the SCheckbox component
 */
export interface SCheckboxProps
  extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> {
  /**
   * The label to display next to the checkbox
   */
  label?: React.ReactNode;

  /**
   * Additional descriptive text to provide more context
   */
  description?: React.ReactNode;

  /**
   * Whether the checkbox is disabled
   */
  disabled?: boolean;

  /**
   * Whether the checkbox is in an indeterminate state
   */
  indeterminate?: boolean;

  /**
   * Validation status of the checkbox
   */
  validationStatus?: "error" | "success";

  /**
   * Validation message to display when validation status is error
   */
  validationMessage?: React.ReactNode;
}

/**
 * Properties for the checkbox group component
 */
export interface SCheckboxGroupProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  /**
   * Selected values in the checkbox group
   */
  values?: string[];
  /**
   * Callback when selection changes
   */
  onValuesChange?: (values: string[]) => void;
  /**
   * Label for the group
   */
  label?: React.ReactNode;
  /**
   * Description for the group
   */
  description?: React.ReactNode;
  /**
   * Whether the entire group is disabled
   */
  disabled?: boolean;
  /**
   * Layout orientation of the checkbox group
   */
  orientation?: "horizontal" | "vertical";
  /**
   * Validation status of the checkbox group
   */
  validationStatus?: "error" | "success";
  /**
   * Validation message to display when validation status is error
   */
  validationMessage?: React.ReactNode;
}

/**
 * Properties for the checkbox item component
 */
export interface SCheckboxItemProps
  extends Omit<SCheckboxProps, "checked" | "onCheckedChange"> {
  /**
   * Value of the checkbox item
   */
  value: string;
  /**
   * Whether the checkbox is checked - used when outside of a group context
   */
  checked?: boolean;
  /**
   * Callback when the checkbox is checked or unchecked - used when outside of a group context
   */
  onCheckedChange?: (checked: boolean | "indeterminate") => void;
}
```

## Examples

Here are examples demonstrating how to use the SCheckbox component:

### Basic Usage

```tsx
import React from "react";
import { SCheckbox } from "@chargebee/sting-react";

const BasicCheckboxExample = () => {
  return (
    <div className="space-y-4">
      <SCheckbox label="Accept terms and conditions" />

      <SCheckbox
        label="Subscribe to newsletter"
        description="Receive weekly updates about new products and features"
      />

      <SCheckbox label="Disabled checkbox" disabled />
    </div>
  );
};

export default BasicCheckboxExample;
```

### Controlled Checkbox with Validation

```tsx
import React, { useState } from "react";
import { SCheckbox, SButton } from "@chargebee/sting-react";

const ControlledCheckboxExample = () => {
  const [accepted, setAccepted] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
      <div>
        <p className="font-medium mb-4">
          Please review our terms before continuing:
        </p>

        <SCheckbox
          label="I accept the terms and conditions"
          description="By checking this box, you agree to our Terms of Service and Privacy Policy"
          checked={accepted}
          onCheckedChange={(checked) => setAccepted(checked === true)}
          validationStatus={submitted && !accepted ? "error" : undefined}
          validationMessage={
            submitted && !accepted
              ? "You must accept the terms to continue"
              : undefined
          }
        />
      </div>

      <SButton type="submit" variant="primary">
        Continue
      </SButton>
    </form>
  );
};

export default ControlledCheckboxExample;
```

### Indeterminate State Example

```tsx
import React, { useState } from "react";
import { SCheckbox } from "@chargebee/sting-react";

const IndeterminateCheckboxExample = () => {
  const [checkedItems, setCheckedItems] = useState({
    option1: false,
    option2: false,
    option3: false,
  });

  // Calculate the state of the parent checkbox
  const allChecked = Object.values(checkedItems).every(Boolean);
  const someChecked = Object.values(checkedItems).some(Boolean);
  const isIndeterminate = someChecked && !allChecked;

  const handleParentChange = (checked) => {
    setCheckedItems({
      option1: checked,
      option2: checked,
      option3: checked,
    });
  };

  const handleChildChange = (key) => (checked) => {
    setCheckedItems({
      ...checkedItems,
      [key]: checked,
    });
  };

  return (
    <div className="space-y-4 p-4 border rounded max-w-md">
      <SCheckbox
        label="Select all options"
        description="This checkbox will be indeterminate when some but not all options are selected"
        checked={allChecked}
        indeterminate={isIndeterminate}
        onCheckedChange={handleParentChange}
      />

      <div className="pl-6 space-y-2 border-l-2 border-neutral-200 ml-2">
        <SCheckbox
          label="Option 1"
          checked={checkedItems.option1}
          onCheckedChange={handleChildChange("option1")}
        />

        <SCheckbox
          label="Option 2"
          checked={checkedItems.option2}
          onCheckedChange={handleChildChange("option2")}
        />

        <SCheckbox
          label="Option 3"
          checked={checkedItems.option3}
          onCheckedChange={handleChildChange("option3")}
        />
      </div>
    </div>
  );
};

export default IndeterminateCheckboxExample;
```

### Checkbox Group with Compound Components

```tsx
import React, { useState } from "react";
import { SCheckbox, SButton } from "@chargebee/sting-react";

const CheckboxGroupExample = () => {
  const [selectedValues, setSelectedValues] = useState(["email"]);

  return (
    <div className="space-y-6 max-w-md">
      <SCheckbox.Group
        values={selectedValues}
        onValuesChange={setSelectedValues}
        label="Notification Preferences"
        description="Choose how you want to receive updates"
      >
        <SCheckbox.Item
          value="email"
          label="Email notifications"
          description="Receive updates via email"
        />
        <SCheckbox.Item
          value="sms"
          label="SMS notifications"
          description="Receive updates via text message"
        />
        <SCheckbox.Item
          value="push"
          label="Push notifications"
          description="Receive updates via mobile app"
        />
        <SCheckbox.Item
          value="premium"
          label="Premium features"
          description="Requires subscription"
          disabled
        />
      </SCheckbox.Group>

      <div className="rounded-md bg-neutral-50 p-3 text-sm">
        Selected:{" "}
        <span className="font-medium">{selectedValues.join(", ")}</span>
      </div>
    </div>
  );
};

export default CheckboxGroupExample;
```

### Horizontal Checkbox Group

```tsx
import React, { useState } from "react";
import { SCheckbox } from "@chargebee/sting-react";

const HorizontalCheckboxGroupExample = () => {
  const [selectedValues, setSelectedValues] = useState(["medium"]);

  return (
    <div className="space-y-4">
      <SCheckbox.Group
        values={selectedValues}
        onValuesChange={setSelectedValues}
        label="Display options"
        orientation="horizontal"
      >
        <SCheckbox.Item value="small" label="Small" />
        <SCheckbox.Item value="medium" label="Medium" />
        <SCheckbox.Item value="large" label="Large" />
      </SCheckbox.Group>

      <div className="text-sm">
        Selected size:{" "}
        <span className="font-medium">{selectedValues.join(", ")}</span>
      </div>
    </div>
  );
};

export default HorizontalCheckboxGroupExample;
```

### Checkbox Group with Form Validation

```tsx
import React, { useState } from "react";
import { SCheckbox, SButton } from "@chargebee/sting-react";

const CheckboxGroupValidationExample = () => {
  const [selectedValues, setSelectedValues] = useState([]);
  const [hasError, setHasError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setHasError(selectedValues.length === 0);

    if (selectedValues.length > 0) {
      console.log("Form submitted with:", selectedValues);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
      <SCheckbox.Group
        values={selectedValues}
        onValuesChange={(values) => {
          setSelectedValues(values);
          if (values.length > 0) setHasError(false);
        }}
        label="Required selections"
        description="Please select at least one option"
        validationStatus={hasError ? "error" : undefined}
        validationMessage={
          hasError ? "At least one option must be selected" : undefined
        }
      >
        <SCheckbox.Item value="option1" label="Option 1" />
        <SCheckbox.Item value="option2" label="Option 2" />
        <SCheckbox.Item value="option3" label="Option 3" />
      </SCheckbox.Group>

      <SButton type="submit" variant="primary">
        Submit
      </SButton>
    </form>
  );
};

export default CheckboxGroupValidationExample;
```

## Key Features

- **Accessibility**: Built on Radix UI for proper keyboard navigation and screen reader support
- **Indeterminate State**: Support for three states - checked, unchecked, and indeterminate
- **Rich Labeling**: Includes both primary label and optional description text
- **Validation**: Built-in error state with custom validation messages
- **Integration**: Works with SInlineError component to display validation messages
- **Compound Components**: SCheckbox.Group and SCheckbox.Item for managing grouped checkboxes
- **Flexible Layout**: Support for both vertical and horizontal orientations in groups
- **Controlled/Uncontrolled**: Works in both controlled and uncontrolled modes
- **Individual Control**: Items within groups can be individually disabled
- **Customizable**: Styling via CSS classes while maintaining design system consistency
- **React Hooks**: Uses React.useId() for proper accessibility and form association

## API Reference

### SCheckbox

The main checkbox component.

**Props:** All props from `SCheckboxProps` interface.

### SCheckbox.Group

Container component for managing multiple related checkboxes.

**Props:** All props from `SCheckboxGroupProps` interface.

**Key Features:**

- Manages shared state for all child checkboxes
- Supports both controlled and uncontrolled modes
- Can be oriented horizontally or vertically
- Supports group-level validation

### SCheckbox.Item

Individual checkbox within a group context.

**Props:** All props from `SCheckboxItemProps` interface.

**Key Features:**

- Automatically integrates with parent SCheckbox.Group
- Can be used standalone if not within a group context
- Supports individual disabled state while respecting group disabled state
- Individual validation status that inherits from group if not specified
