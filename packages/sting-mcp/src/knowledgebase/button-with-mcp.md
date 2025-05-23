# Using SButton with Model Context Protocol (MCP)

This guide demonstrates how to use the Chargebee Sting UI Button component (`SButton`) with the Model Context Protocol (MCP) to create dynamic, data-driven interfaces.

## Basic Integration

The MCP context allows your buttons to trigger actions that interact with your API in a standardized way.

```tsx
import { SButton } from '@chargebee/sting-react';
import { useMCP, MCPFetch } from '@chargebee/sting-mcp';

function SubmitButton() {
  const { fetchData } = useMCP();
  
  const handleSubmit = async () => {
    try {
      const response = await fetchData('/api/items', {
        method: 'POST',
        body: {
          data: {
            type: 'items',
            attributes: {
              name: 'New Item'
            }
          }
        }
      });
      console.log('Item created:', response);
    } catch (error) {
      console.error('Failed to create item:', error);
    }
  };
  
  return (
    <SButton onClick={handleSubmit} variant="primary">
      Create Item
    </SButton>
  );
}
```

## Loading States

One of the key benefits of integrating SButton with MCP is automatic loading state management:

```tsx
import { useState } from 'react';
import { SButton } from '@chargebee/sting-react';
import { useMCP } from '@chargebee/sting-mcp';

function ActionButton() {
  const { fetchData } = useMCP();
  const [isLoading, setIsLoading] = useState(false);
  
  const handleAction = async () => {
    setIsLoading(true);
    try {
      await fetchData('/api/actions', {
        method: 'POST',
        body: {
          data: {
            type: 'actions',
            attributes: {
              actionType: 'process'
            }
          }
        }
      });
    } catch (error) {
      console.error('Action failed:', error);
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <SButton 
      onClick={handleAction} 
      loading={isLoading}
      variant="primary"
    >
      Process Data
    </SButton>
  );
}
```

## Dynamic Buttons Based on MCP Data

You can create buttons that dynamically adjust based on data from your MCP API:

```tsx
import { SButton } from '@chargebee/sting-react';
import { MCPFetch } from '@chargebee/sting-mcp';

function DynamicActionButton({ itemId }) {
  return (
    <MCPFetch endpoint={`/api/items/${itemId}`}>
      {(response) => {
        const item = response.data;
        const status = item.attributes.status;
        
        // Determine button properties based on item status
        let buttonProps = {
          variant: 'primary',
          children: 'Process Item',
          onClick: () => console.log('Processing item:', itemId)
        };
        
        if (status === 'processing') {
          buttonProps = {
            variant: 'neutral',
            children: 'Cancel Processing',
            onClick: () => console.log('Canceling processing for item:', itemId)
          };
        } else if (status === 'completed') {
          buttonProps = {
            variant: 'primary-ghost',
            children: 'View Details',
            onClick: () => console.log('Viewing details for item:', itemId)
          };
        } else if (status === 'failed') {
          buttonProps = {
            variant: 'danger',
            children: 'Retry Processing',
            onClick: () => console.log('Retrying item:', itemId)
          };
        }
        
        return <SButton {...buttonProps} />;
      }}
    </MCPFetch>
  );
}
```

## Advanced: Action Buttons with Relationship Data

Handle actions that require related data from multiple resources:

```tsx
import { SButton } from '@chargebee/sting-react';
import { MCPResource, useMCP } from '@chargebee/sting-mcp';
import { useState } from 'react';

function RelatedActionButton({ orderId }) {
  const { fetchData, getModel } = useMCP();
  const [isLoading, setIsLoading] = useState(false);
  
  const handleAction = async (order) => {
    setIsLoading(true);
    
    try {
      // Get customer data from relationship
      const customerId = order.relationships.customer.data.id;
      const customer = getModel('customers', customerId);
      
      // Perform action with both order and customer data
      await fetchData('/api/notifications', {
        method: 'POST',
        body: {
          data: {
            type: 'notifications',
            attributes: {
              message: `Order #${order.id} status update`,
              recipient: customer.attributes.email,
              orderStatus: order.attributes.status
            }
          }
        }
      });
      
      console.log('Notification sent');
    } catch (error) {
      console.error('Failed to send notification:', error);
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <MCPResource 
      type="orders" 
      id={orderId}
      endpoint={`/api/orders/${orderId}?include=customer`}
    >
      {(order) => (
        <SButton
          variant="primary"
          loading={isLoading}
          onClick={() => handleAction(order)}
          icon={<EmailIcon className="size-4" />}
          iconPosition="left"
        >
          Send Order Update
        </SButton>
      )}
    </MCPResource>
  );
}
```

## Button Size and Variant Reference

For a complete reference of available button sizes and variants, refer to the following options:

### Variants:
- `primary` - Main call to action
- `neutral` - Secondary actions
- `danger` - Destructive actions
- `primary-outline` - Less prominent primary actions
- `neutral-outline` - Less prominent secondary actions
- `danger-outline` - Less prominent destructive actions
- `primary-ghost` - Minimal prominence primary actions
- `neutral-ghost` - Minimal prominence secondary actions
- `danger-ghost` - Minimal prominence destructive actions

### Sizes:
- `regular` - Standard size for most interfaces
- `large` - Increased prominence for important actions

## Best Practices

1. **Use appropriate variants for actions**:
   - `primary` for the main action
   - `neutral` for secondary actions
   - `danger` for destructive actions

2. **Handle loading states**:
   - Always show loading state during API operations
   - Disable the button during loading to prevent multiple submissions

3. **Error handling**:
   - Provide clear feedback when actions fail
   - Consider using toast notifications alongside button state management

4. **Consistent icon usage**:
   - Use icons consistently to reinforce action meaning
   - Position action icons on the left and directional icons on the right

5. **Accessibility**:
   - Ensure buttons have descriptive text
   - Use `aria-label` for icon-only buttons