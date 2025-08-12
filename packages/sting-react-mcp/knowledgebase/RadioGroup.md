# Component Name

SRadioGroup

## Description

The SRadioGroup component provides a user interface for selecting a single option from a list of choices. Built on top of Radix UI's RadioGroup primitive, it offers a customizable and accessible way to create radio button groups with rich labeling, descriptions, validation states, and flexible layouts. The component uses a compound component pattern with `SRadioGroup.Root` and `SRadioGroup.Item` for maximum flexibility, while also supporting a simplified API with predefined options.

## TypeScript Types

The following types represent the props that the SRadioGroup component and its sub-components accept.

```typescript
/**
 * Interface for individual radio options
 */
export interface SRadioOption {
  /**
   * The value of the radio option
   */
  value: string;

  /**
   * The label to display next to the radio button
   */
  label: React.ReactNode;

  /**
   * Additional descriptive text to provide more context
   */
  description?: React.ReactNode;

  /**
   * Whether the radio option is disabled
   */
  disabled?: boolean;
}

/**
 * Props for the SRadioGroup.Root component
 */
export interface SRadioGroupProps
  extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root> {
  /**
   * Options to display in the radio group
   */
  options?: SRadioOption[];

  /**
   * Label for the radio group
   */
  label?: React.ReactNode;

  /**
   * Description for the radio group
   */
  description?: React.ReactNode;

  /**
   * Whether the entire radio group is disabled
   */
  disabled?: boolean;

  /**
   * Validation status of the radio group
   */
  validationStatus?: "error" | "success";

  /**
   * Validation message to display when validation status is error
   */
  validationMessage?: React.ReactNode;

  /**
   * Layout direction of the radio group
   */
  orientation?: "horizontal" | "vertical";
}

/**
 * Props for the SRadioGroup.Item component
 */
interface SRadioItemProps
  extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item> {
  /**
   * The label to display next to the radio button
   */
  label?: React.ReactNode;

  /**
   * Additional descriptive text to provide more context
   */
  description?: React.ReactNode;

  /**
   * Whether the radio option is disabled
   */
  disabled?: boolean;
}
```

## Example

Here are examples demonstrating how to use the SRadioGroup component:

### Basic Usage with Options Array

```tsx
import React, { useState } from "react";
import { SRadioGroup } from "@cb-sting-react";
import { SButton } from "@cb-sting-react";

const BasicRadioGroupExample = () => {
  const [selectedPlan, setSelectedPlan] = useState("monthly");

  const planOptions = [
    {
      value: "monthly",
      label: "Monthly Plan",
      description: "$9.99 billed monthly",
    },
    {
      value: "yearly",
      label: "Annual Plan",
      description: "$99.99 billed annually (save 17%)",
    },
    {
      value: "lifetime",
      label: "Lifetime Access",
      description: "One-time payment of $299.99",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Selected plan:", selectedPlan);
    // Handle form submission
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-md">
      <SRadioGroup.Root
        label="Subscription Plan"
        description="Choose the plan that works best for you"
        value={selectedPlan}
        onValueChange={setSelectedPlan}
        options={planOptions}
      />

      <SButton type="submit" variant="primary">
        Continue with{" "}
        {selectedPlan.charAt(0).toUpperCase() + selectedPlan.slice(1)} Plan
      </SButton>
    </form>
  );
};

export default BasicRadioGroupExample;
```

### Radio Group with Validation

```tsx
import React, { useState } from "react";
import { SRadioGroup } from "@cb-sting-react";
import { SButton } from "@cb-sting-react";

const ValidationRadioGroupExample = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [validationStatus, setValidationStatus] = useState<"error" | undefined>(
    undefined,
  );
  const [validationMessage, setValidationMessage] = useState("");

  const options = [
    { value: "yes", label: "Yes" },
    { value: "no", label: "No" },
    { value: "maybe", label: "Maybe" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!selectedOption) {
      setValidationStatus("error");
      setValidationMessage("Please select an option");
      return;
    }

    setValidationStatus(undefined);
    setValidationMessage("");
    console.log("Form submitted with option:", selectedOption);
    // Process form submission
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
      <SRadioGroup.Root
        label="Do you want to receive our newsletter?"
        value={selectedOption}
        onValueChange={(value) => {
          setSelectedOption(value);
          // Clear validation when user makes a selection
          if (validationStatus) {
            setValidationStatus(undefined);
            setValidationMessage("");
          }
        }}
        options={options}
        validationStatus={validationStatus}
        validationMessage={validationMessage}
      />

      <SButton type="submit" variant="primary">
        Submit
      </SButton>
    </form>
  );
};

export default ValidationRadioGroupExample;
```

### Horizontal Radio Group

```tsx
import React, { useState } from "react";
import { SRadioGroup } from "@cb-sting-react";

const HorizontalRadioGroupExample = () => {
  const [selectedRating, setSelectedRating] = useState("");

  const ratingOptions = [
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "3", label: "3" },
    { value: "4", label: "4" },
    { value: "5", label: "5" },
  ];

  return (
    <div className="space-y-4 max-w-md">
      <SRadioGroup.Root
        label="Rate your experience"
        description="1 = Poor, 5 = Excellent"
        value={selectedRating}
        onValueChange={setSelectedRating}
        options={ratingOptions}
        orientation="horizontal"
      />

      {selectedRating && (
        <p className="text-sm">
          You selected: {selectedRating} -
          {selectedRating === "1"
            ? " Poor"
            : selectedRating === "2"
              ? " Below Average"
              : selectedRating === "3"
                ? " Average"
                : selectedRating === "4"
                  ? " Good"
                  : " Excellent"}
        </p>
      )}
    </div>
  );
};

export default HorizontalRadioGroupExample;
```

### Compound Component Pattern Usage

```tsx
import React, { useState } from "react";
import { SRadioGroup } from "@cb-sting-react";
import { SInput } from "@cb-sting-react";
import { SCard } from "@cb-sting-react";

const CompoundRadioGroupExample = () => {
  const [paymentMethod, setPaymentMethod] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [paypalEmail, setPaypalEmail] = useState("");

  return (
    <div className="space-y-6 max-w-md">
      <SRadioGroup.Root
        label="Payment Method"
        description="Select your preferred payment method"
        value={paymentMethod}
        onValueChange={setPaymentMethod}
      >
        <SRadioGroup.Item
          value="credit-card"
          label="Credit Card"
          description="Pay with Visa, Mastercard, or American Express"
        >
          {paymentMethod === "credit-card" && (
            <SCard padding="small" background="neutral" className="mt-2">
              <SInput
                label="Card Number"
                placeholder="XXXX XXXX XXXX XXXX"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
              />
            </SCard>
          )}
        </SRadioGroup.Item>

        <SRadioGroup.Item
          value="paypal"
          label="PayPal"
          description="Fast, secure payment using your PayPal account"
        >
          {paymentMethod === "paypal" && (
            <SCard padding="small" background="neutral" className="mt-2">
              <SInput
                label="PayPal Email"
                type="email"
                placeholder="example@email.com"
                value={paypalEmail}
                onChange={(e) => setPaypalEmail(e.target.value)}
              />
            </SCard>
          )}
        </SRadioGroup.Item>

        <SRadioGroup.Item
          value="bank-transfer"
          label="Bank Transfer"
          description="Pay directly from your bank account"
        />
      </SRadioGroup.Root>
    </div>
  );
};

export default CompoundRadioGroupExample;
```

### Disabled Options Example

```tsx
import React, { useState } from "react";
import { SRadioGroup } from "@cb-sting-react";
import { SBadge } from "@cb-sting-react";

const DisabledRadioOptionsExample = () => {
  const [selectedTier, setSelectedTier] = useState("pro");

  const tierOptions = [
    {
      value: "free",
      label: (
        <div className="flex items-center gap-2">
          <span>Free Tier</span>
          <SBadge variant="neutral">Limited</SBadge>
        </div>
      ),
      description: "Basic features with limited functionality",
    },
    {
      value: "pro",
      label: (
        <div className="flex items-center gap-2">
          <span>Pro Tier</span>
          <SBadge variant="success">Popular</SBadge>
        </div>
      ),
      description: "Advanced features for professionals and teams",
    },
    {
      value: "enterprise",
      label: "Enterprise Tier",
      description: "Custom solutions for large organizations",
      disabled: true,
    },
  ];

  return (
    <div className="space-y-4 max-w-md">
      <SRadioGroup.Root
        label="Select Service Tier"
        description="Enterprise tier requires contacting sales"
        value={selectedTier}
        onValueChange={setSelectedTier}
        options={tierOptions}
      />

      <div className="text-sm">
        {selectedTier === "enterprise" ? (
          <p className="text-blue-600">
            Contact our sales team to discuss enterprise solutions
          </p>
        ) : (
          <p>You've selected the {selectedTier} tier</p>
        )}
      </div>
    </div>
  );
};

export default DisabledRadioOptionsExample;
```

## Key Features

- **Compound Component Pattern**: Uses `SRadioGroup.Root` and `SRadioGroup.Item` for maximum flexibility
- **Accessibility**: Built on Radix UI for proper keyboard navigation and screen reader support
- **Flexible Options**: Support for both simple option array and compound component patterns
- **Rich Labeling**: Includes group labels, option labels, and descriptions at both levels
- **Validation**: Built-in error state with custom validation messages
- **Orientation Control**: Supports both vertical and horizontal layouts
- **Disabled States**: Can disable individual options or the entire group
- **Visual Feedback**: Clear visual indication of selected state
- **Content Expansion**: Supports additional content when an option is selected using children in SRadioGroup.Item
- **Integration**: Works with SInlineError component to display validation messages
- **Context Management**: Uses React Context to share state between Root and Item components
