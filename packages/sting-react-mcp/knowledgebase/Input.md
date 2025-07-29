# Component Name

SInput

## Description

The SInput component is a versatile and feature-rich input field. It provides a comprehensive set of features including labels, descriptions, validation states, a clear button, prepend/append elements, and leading/trailing icons. The component is designed to be highly customizable while maintaining consistency with the design system.

## TypeScript Types

The following type represents the props that the SInput component accepts.

```typescript
export interface SInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
    InputVariants {
  /**
   * The value of the input
   */
  value?: string;
  /**
   * The default value of the input
   */
  defaultValue?: string;
  /**
   * Whether to disable the input
   */
  disabled?: boolean;
  /**
   * Add a test-id for testing purposes
   */
  testId?: string;
  /**
   * Adds a clear button at the end of the input, which can be used to reset the value
   */
  allowClear?: boolean;
  /**
   * Input validation status
   */
  validationStatus?: "error" | "success";
  /**
   * A message to accompany the validation status
   */
  validationMessage?: React.ReactNode;
  /**
   * Description to explain the purpose of the component
   */
  description?: React.ReactNode;
  /**
   * Adds a label for the input
   */
  label?: React.ReactNode;
  /**
   * Content for the tooltip when hovering over the info icon
   */
  labelInfo?: string;
  /**
   * Placement of the tooltip relative to the info icon
   */
  tooltipPlacement?: "top" | "right" | "bottom" | "left";
  /**
   * Callback when the clear button is clicked
   */
  onClear?: () => void;
  /**
   * Node to prepend before the input field
   */
  prepend?: React.ReactNode;
  /**
   * Node to append after the input field
   */
  append?: React.ReactNode;
  /**
   * Node to prepend before the input field as an icon
   */
  leadingIcon?: React.ReactNode;
  /**
   * Node to append after the input field as an icon
   */
  trailingIcon?: React.ReactNode;
}

export type InputVariants = {
  /**
   * Input validation status
   */
  validationStatus?: "error" | "success";
};
```

## Example

Here are examples demonstrating how to use the SInput component:

### Basic Usage

```tsx
import React, { useState } from "react";
import { SInput } from "@chargebee/sting-react";

const BasicInputExample = () => {
  const [value, setValue] = useState("");

  return (
    <div className="space-y-4">
      <SInput
        label="Username"
        placeholder="Enter your username"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      <SInput
        label="Email"
        type="email"
        placeholder="Enter your email address"
        description="We'll never share your email with anyone else."
      />

      <SInput
        label="Password"
        type="password"
        placeholder="Enter your password"
        disabled
      />
    </div>
  );
};

export default BasicInputExample;
```

### Controlled and Uncontrolled Usage

Here’s how to use the `SInput` component in both controlled and uncontrolled modes.

**Controlled Input**

In a controlled component, the form data is handled by the React component's state. The `value` and `onChange` props are used to manage the input's state.

```tsx
import React, { useState } from "react";
import { SInput, SButton } from "@chargebee/sting-react";

const ControlledInputExample = () => {
  const [name, setName] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleReset = () => {
    setName("");
  };

  return (
    <div className="space-y-4">
      <SInput
        label="Name (Controlled)"
        placeholder="Enter your name"
        value={name}
        onChange={handleChange}
        allowClear
        onClear={handleReset}
      />
      <SButton onClick={handleReset} variant="secondary">
        Reset
      </SButton>
      <p>Current Value: {name}</p>
    </div>
  );
};

export default ControlledInputExample;
```

**Uncontrolled Input**

In an uncontrolled component, the form data is handled by the DOM itself. You can use a `ref` to get the form value when needed. The `defaultValue` prop can be used to set an initial value.

```tsx
import React, { useRef } from "react";
import { SInput, SButton } from "@chargebee/sting-react";

const UncontrolledInputExample = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = () => {
    alert(`Name submitted: ${inputRef.current?.value}`);
  };

  return (
    <div className="space-y-4">
      <SInput
        label="Name (Uncontrolled)"
        placeholder="Enter your name"
        ref={inputRef}
        defaultValue="Default Name"
      />
      <SButton onClick={handleSubmit}>Submit</SButton>
    </div>
  );
};

export default UncontrolledInputExample;
```

### Input with Validation

```tsx
import React, { useState } from "react";
import { SInput, SButton } from "@chargebee/sting-react";

const ValidationInputExample = () => {
  const [email, setEmail] = useState("");
  const [validationStatus, setValidationStatus] = useState<
    "error" | "success" | undefined
  >(undefined);
  const [validationMessage, setValidationMessage] = useState("");

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      setValidationStatus("error");
      setValidationMessage("Email is required");
      return false;
    } else if (!emailRegex.test(email)) {
      setValidationStatus("error");
      setValidationMessage("Please enter a valid email address");
      return false;
    }

    setValidationStatus("success");
    setValidationMessage("Email is valid");
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateEmail()) {
      console.log("Form submitted with email:", email);
      // Process form submission
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
      <SInput
        label="Email Address"
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        onBlur={validateEmail}
        validationStatus={validationStatus}
        validationMessage={validationMessage}
      />

      <SButton type="submit" variant="primary">
        Submit
      </SButton>
    </form>
  );
};

export default ValidationInputExample;
```

### Input with Prepend, Append, and Icons

```tsx
import React from "react";
import { SInput } from "@chargebee/sting-react";
import { Search, User, DollarSign, Calendar } from "lucide-react";

const InputWithAddonsExample = () => {
  return (
    <div className="space-y-6">
      <SInput
        label="Search"
        leadingIcon={<Search className="size-sm text-neutral-400" />}
        placeholder="Search for anything..."
      />

      <SInput
        label="Username"
        leadingIcon={<User className="size-sm text-neutral-400" />}
        placeholder="Enter username"
      />

      <SInput
        label="Price"
        prepend={<DollarSign className="size-sm text-neutral-400" />}
        type="number"
        placeholder="0.00"
      />

      <SInput
        label="Event Date"
        type="date"
        append={<Calendar className="size-sm text-neutral-400" />}
      />
    </div>
  );
};

export default InputWithAddonsExample;
```

### Input with Clear Button and Tooltip

```tsx
import React, { useState } from "react";
import { SInput } from "@chargebee/sting-react";

const AdvancedInputExample = () => {
  const [searchTerm, setSearchTerm] = useState("Initial value");

  return (
    <div className="space-y-6 max-w-md">
      <SInput
        label="Search Query"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        allowClear
        onClear={() => setSearchTerm("")}
        placeholder="Type to search..."
        description="Search results will update as you type"
        labelInfo="This is a tooltip"
        tooltipPlacement="right"
      />
    </div>
  );
};

export default AdvancedInputExample;
```

## Key Features

- **Controlled & Uncontrolled Modes**: Works with both controlled and uncontrolled input patterns
- **Validation States**: Built-in error and success states with custom validation messages
- **Tooltip Support**: Optional tooltip for additional information
- **Clearable Input**: Optional clear button to reset input value
- **Rich Labeling**: Includes label, description, and validation message
- **Prepend and Append**: Support for elements or icons before or after the input
- **Accessibility**: Proper labeling and ARIA attributes for screen readers
- **Customizable**: Extends with custom CSS classes while maintaining design system consistency
