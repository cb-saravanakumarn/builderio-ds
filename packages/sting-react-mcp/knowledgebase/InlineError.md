# Component Name

SInlineError

## Description

The SInlineError component displays an error message with a visual indicator, designed to show validation errors or other important notifications to users. It uses the OctagonAlert icon from the Lucide React library to provide a consistent error visualization alongside the text message.

## TypeScript Types

The following types represent the props that the SInlineError component accepts.

```typescript
/**
 * Props for the SInlineError component
 */
interface SInlineErrorProps {
  /**
   * The error message to display
   */
  message: React.ReactNode;
}
```

## Example

Here are examples demonstrating how to use the SInlineError component:

### Basic Usage

```tsx
import React from "react";
import { SInlineError } from "@chargebee/sting-react";

const FormFieldExample = () => {
  return (
    <div className="space-y-2">
      <label htmlFor="email">Email Address</label>
      <input id="email" type="email" className="w-full p-2 border rounded" />
      <SInlineError message="Please enter a valid email address" />
    </div>
  );
};

export default FormFieldExample;
```

### Dynamic Error Handling

```tsx
import React, { useState } from "react";
import { SInlineError, SInput, SButton } from "@chargebee/sting-react";

const FormValidationExample = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      setError("Email is required");
      return false;
    } else if (!emailRegex.test(email)) {
      setError("Please enter a valid email address");
      return false;
    }
    setError("");
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateEmail()) {
      console.log("Form submitted with email:", email);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
      <div className="space-y-2">
        <label htmlFor="email" className="block">
          Email Address
        </label>
        <SInput
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={validateEmail}
        />
        {error && <SInlineError message={error} />}
      </div>

      <SButton type="submit" variant="primary">
        Submit
      </SButton>
    </form>
  );
};

export default FormValidationExample;
```

### Multiple Errors in a Form

```tsx
import React, { useState } from "react";
import { SInlineError, SInput, SButton } from "@chargebee/sting-react";

const MultiFieldFormExample = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { username: "", email: "", password: "" };

    // Username validation
    if (!formData.username) {
      newErrors.username = "Username is required";
      valid = false;
    } else if (formData.username.length < 4) {
      newErrors.username = "Username must be at least 4 characters";
      valid = false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
      valid = false;
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = "Password is required";
      valid = false;
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted:", formData);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
      <div className="space-y-2">
        <label htmlFor="username" className="block">
          Username
        </label>
        <SInput
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
        {errors.username && <SInlineError message={errors.username} />}
      </div>

      <div className="space-y-2">
        <label htmlFor="email" className="block">
          Email Address
        </label>
        <SInput
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <SInlineError message={errors.email} />}
      </div>

      <div className="space-y-2">
        <label htmlFor="password" className="block">
          Password
        </label>
        <SInput
          id="password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
        />
        {errors.password && <SInlineError message={errors.password} />}
      </div>

      <SButton type="submit" variant="primary">
        Create Account
      </SButton>
    </form>
  );
};

export default MultiFieldFormExample;
```

## Key Features

- **Consistent Error Styling**: Provides uniform error presentation across the application
- **Visual Indicator**: Includes the OctagonAlert icon for immediate recognition
- **Flexible Content**: Accepts React nodes as the message, allowing for rich content
- **Accessibility**: Clear visual association between the error icon and message
- **Integration**: Designed to work seamlessly with other form components in the design system
- **Lightweight**: Simple implementation focused on a single responsibility
