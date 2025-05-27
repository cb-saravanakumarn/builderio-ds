# Component Name

SCheckbox

## Description

The SCheckbox component is a customizable checkbox input built on top of Radix UI's Checkbox primitive. It provides a rich set of features including labels, descriptions, validation states, and support for indeterminate states. The component is designed with accessibility in mind and follows design system guidelines for consistent styling across the application.

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
```

## Example

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
        description="Receive updates about new features and promotions"
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
          checked={accepted}
          onCheckedChange={setAccepted}
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
  const [parent, setParent] = useState(false);
  const [child1, setChild1] = useState(false);
  const [child2, setChild2] = useState(false);
  const [child3, setChild3] = useState(false);

  // Calculate if parent should be indeterminate or checked
  const allChecked = child1 && child2 && child3;
  const someChecked = (child1 || child2 || child3) && !allChecked;

  // Update parent checkbox
  React.useEffect(() => {
    setParent(allChecked);
  }, [allChecked]);

  // Handle parent checkbox changes
  const handleParentChange = (checked) => {
    setParent(checked);
    setChild1(checked);
    setChild2(checked);
    setChild3(checked);
  };

  return (
    <div className="space-y-4 p-4 border rounded max-w-md">
      <SCheckbox
        label="Select all options"
        checked={parent}
        indeterminate={someChecked}
        onCheckedChange={handleParentChange}
      />

      <div className="pl-6 space-y-2 border-l-2 ml-2">
        <SCheckbox
          label="Option 1"
          checked={child1}
          onCheckedChange={setChild1}
        />

        <SCheckbox
          label="Option 2"
          checked={child2}
          onCheckedChange={setChild2}
        />

        <SCheckbox
          label="Option 3"
          checked={child3}
          onCheckedChange={setChild3}
        />
      </div>
    </div>
  );
};

export default IndeterminateCheckboxExample;
```

### Checkbox Group with Form Integration

```tsx
import React, { useState } from "react";
import { SCheckbox, SButton } from "@chargebee/sting-react";

const CheckboxGroupExample = () => {
  const [preferences, setPreferences] = useState({
    emailNotifications: false,
    smsNotifications: false,
    pushNotifications: false,
    marketingEmails: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (field) => (checked) => {
    setPreferences((prev) => ({
      ...prev,
      [field]: checked,
    }));

    // Clear error when user checks an option
    if (checked && errors[field]) {
      setErrors((prev) => ({
        ...prev,
        [field]: undefined,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    // Validate at least one notification method is selected
    const hasNotification =
      preferences.emailNotifications ||
      preferences.smsNotifications ||
      preferences.pushNotifications;

    if (!hasNotification) {
      newErrors.emailNotifications = "Select at least one notification method";
      newErrors.smsNotifications = true; // Just to mark as error, message shown only once
      newErrors.pushNotifications = true;
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Preferences saved:", preferences);
      // Submit form...
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-md">
      <div>
        <h3 className="text-lg font-medium mb-3">Notification Preferences</h3>

        <div className="space-y-3">
          <SCheckbox
            label="Email Notifications"
            checked={preferences.emailNotifications}
            onCheckedChange={handleChange("emailNotifications")}
            validationStatus={errors.emailNotifications ? "error" : undefined}
            validationMessage={errors.emailNotifications || undefined}
          />

          <SCheckbox
            label="SMS Notifications"
            checked={preferences.smsNotifications}
            onCheckedChange={handleChange("smsNotifications")}
            validationStatus={errors.smsNotifications ? "error" : undefined}
          />

          <SCheckbox
            label="Push Notifications"
            description="Receive notifications in your browser or mobile app"
            checked={preferences.pushNotifications}
            onCheckedChange={handleChange("pushNotifications")}
            validationStatus={errors.pushNotifications ? "error" : undefined}
          />
        </div>
      </div>

      <div className="pt-2 border-t">
        <SCheckbox
          label="I agree to receive marketing emails"
          checked={preferences.marketingEmails}
          onCheckedChange={handleChange("marketingEmails")}
        />
      </div>

      <SButton type="submit" variant="primary">
        Save Preferences
      </SButton>
    </form>
  );
};

export default CheckboxGroupExample;
```

## Key Features

- **Accessibility**: Built on Radix UI for proper keyboard navigation and screen reader support
- **Indeterminate State**: Support for three states - checked, unchecked, and indeterminate
- **Rich Labeling**: Includes both primary label and optional description text
- **Validation**: Built-in error state with custom validation messages
- **Integration**: Works with SInlineError component to display validation messages
- **Customizable**: Styling via CSS classes while maintaining design system consistency
- **React Hooks**: Uses React.useId() for proper accessibility and form association
