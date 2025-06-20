# Component Name

SInput

## Description

The SInput component is a versatile and feature-rich input field built using a compound component pattern. It provides a comprehensive set of features including labels, descriptions, validation states, clear button functionality, prefix/suffix elements, and tooltip support. The component is designed to be highly customizable while maintaining consistency with the design system.

## TypeScript Types

The following types represent the props that the SInput component and its sub-components accept.

```typescript
/**
 * Props for the SInput component
 */
export interface SInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size" | "prefix">,
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
   * Add a delay in milliseconds for the input to debounce the updates
   */
  delay?: number;

  /**
   * Adds a clear button at the end of the input, which can be used to reset the value
   */
  allowClear?: boolean;

  /**
   * Whether the input is full width
   */
  fullWidth?: boolean;

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
   * Adds additional info icon beside the label
   */
  labelInfo?: React.ReactNode;

  /**
   * Content for the tooltip when hovering over the info icon
   */
  tooltipContent?: string;

  /**
   * Placement of the tooltip relative to the info icon
   */
  tooltipPlacement?: "top" | "right" | "bottom" | "left";

  /**
   * Callback when the clear button is clicked
   */
  onClear?: () => void;

  /**
   * Additional class name for the input wrapper
   */
  wrapperClassName?: string;
}

/**
 * Input variant types for styling options
 */
export type InputVariants = {
  /**
   * Input validation status
   */
  validationStatus?: "error" | "success";

  /**
   * Whether the input is full width
   */
  fullWidth?: boolean;
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
        fullWidth
      />

      <SButton type="submit" variant="primary">
        Submit
      </SButton>
    </form>
  );
};

export default ValidationInputExample;
```

### Input with Prefix and Suffix

```tsx
import React from "react";
import { SInput } from "@chargebee/sting-react";
import { Search, User, DollarSign, Calendar } from "lucide-react";

const InputWithAddonsExample = () => {
  return (
    <div className="space-y-6">
      <SInput label="Search">
        <SInput.Prefix>
          <Search className="size-sm text-neutral-400" />
        </SInput.Prefix>
        <SInput.Field placeholder="Search for anything..." />
      </SInput>

      <SInput label="Username">
        <SInput.Prefix>
          <User className="size-sm text-neutral-400" />
        </SInput.Prefix>
        <SInput.Field placeholder="Enter username" />
      </SInput>

      <SInput label="Price">
        <SInput.Prefix>
          <DollarSign className="size-sm text-neutral-400" />
        </SInput.Prefix>
        <SInput.Field type="number" placeholder="0.00" />
      </SInput>

      <SInput label="Event Date">
        <SInput.Field type="date" />
        <SInput.Suffix>
          <Calendar className="size-sm text-neutral-400" />
        </SInput.Suffix>
      </SInput>
    </div>
  );
};

export default InputWithAddonsExample;
```

### Input with Clear Button and Tooltip

```tsx
import React, { useState } from "react";
import { SInput } from "@chargebee/sting-react";
import { Info } from "lucide-react";

const AdvancedInputExample = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [email, setEmail] = useState("");

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
      />

      <SInput
        label="Email Address"
        labelInfo={<Info className="size-xs" />}
        tooltipContent="We'll use this email to send order confirmations"
        tooltipPlacement="right"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="example@mail.com"
        allowClear
        fullWidth
      />
    </div>
  );
};

export default AdvancedInputExample;
```

### Debounced Input

```tsx
import React, { useState, useEffect } from "react";
import { SInput } from "@chargebee/sting-react";

const DebouncedInputExample = () => {
  const [inputValue, setInputValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Simulate API call
  useEffect(() => {
    if (!inputValue) {
      setSearchResults([]);
      return;
    }

    // This would be your actual API call
    const mockSearchAPI = () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const results = [
            `Result for "${inputValue}" - Item 1`,
            `Result for "${inputValue}" - Item 2`,
            `Result for "${inputValue}" - Item 3`,
          ];
          resolve(results);
        }, 500);
      });
    };

    setIsLoading(true);
    mockSearchAPI().then((results) => {
      setSearchResults(results as string[]);
      setIsLoading(false);
    });
  }, [inputValue]);

  return (
    <div className="space-y-4 max-w-md">
      <SInput
        label="Search with Debounce"
        placeholder="Type to search..."
        onChange={(e) => setInputValue(e.target.value)}
        delay={300} // 300ms debounce
        description="Results will update 300ms after you stop typing"
        allowClear
      />

      <div className="mt-4">
        {isLoading ? (
          <p>Loading results...</p>
        ) : searchResults.length > 0 ? (
          <ul className="border rounded divide-y">
            {searchResults.map((result, index) => (
              <li key={index} className="p-2">
                {result}
              </li>
            ))}
          </ul>
        ) : inputValue ? (
          <p>No results found</p>
        ) : null}
      </div>
    </div>
  );
};

export default DebouncedInputExample;
```

## Key Features

- **Compound Component Pattern**: Flexible composition with Prefix, Field, Suffix, Label, Description, and Validation components
- **Controlled & Uncontrolled Modes**: Works with both controlled and uncontrolled input patterns
- **Validation States**: Built-in error and success states with custom validation messages
- **Tooltip Support**: Optional tooltip for additional information
- **Clearable Input**: Optional clear button to reset input value
- **Debounce Support**: Optional debouncing for search inputs or other rate-limited operations
- **Rich Labeling**: Includes label, description, and validation message
- **Prefix and Suffix**: Support for icons or other elements before or after the input
- **Accessibility**: Proper labeling and ARIA attributes for screen readers
- **Full Width Option**: Expands to fill the available space
- **Customizable**: Extends with custom CSS classes while maintaining design system consistency
