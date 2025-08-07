# Builder.io Design System

A React design system with Builder.io compatible components, starting with a professional Button component.

## 🚀 Quick Start

### Installation

```bash
npm install
npm run build
```

### Basic Usage

```jsx
import { Button } from 'builderio-ds';

// Basic button
<Button variant="primary" size="medium">
  Click me
</Button>

// With Builder.io text prop
<Button variant="secondary" text="Get Started" />

// As a link
<Button href="https://example.com" target="_blank">
  Visit Website
</Button>

// Loading state
<Button loading variant="primary">
  Processing...
</Button>
```

## 🎨 Button Component

### Variants

- **Primary**: Main call-to-action styling (default)
- **Secondary**: Less prominent actions
- **Outline**: Border-only styling
- **Ghost**: Text-only styling

### Sizes

- **Small**: Compact size for dense layouts
- **Medium**: Default size (default)
- **Large**: Prominent actions

### Props

| Prop        | Type                                               | Default     | Description                                 |
| ----------- | -------------------------------------------------- | ----------- | ------------------------------------------- |
| `children`  | `ReactNode`                                        | -           | Button content (takes precedence over text) |
| `text`      | `string`                                           | -           | Text for Builder.io compatibility           |
| `variant`   | `'primary' \| 'secondary' \| 'outline' \| 'ghost'` | `'primary'` | Visual style variant                        |
| `size`      | `'small' \| 'medium' \| 'large'`                   | `'medium'`  | Button size                                 |
| `disabled`  | `boolean`                                          | `false`     | Whether button is disabled                  |
| `loading`   | `boolean`                                          | `false`     | Whether button shows loading state          |
| `fullWidth` | `boolean`                                          | `false`     | Whether button takes full width             |
| `href`      | `string`                                           | -           | Renders as link if provided                 |
| `target`    | `string`                                           | `'_self'`   | Link target (when href provided)            |
| `onClick`   | `function`                                         | -           | Click handler                               |
| `startIcon` | `ReactNode`                                        | -           | Icon before text                            |
| `endIcon`   | `ReactNode`                                        | -           | Icon after text                             |
| `className` | `string`                                           | -           | Additional CSS classes                      |
| `ariaLabel` | `string`                                           | -           | Accessibility label                         |

## 🏗️ Builder.io Integration

### Automatic Registration

The Button component includes Builder.io metadata and can be automatically registered:

```jsx
import { registerBuilderComponents } from "builderio-ds";

// Register all components with Builder.io
await registerBuilderComponents();
```

### Manual Registration

```jsx
import { Builder } from "@builder.io/react";
import { Button } from "builderio-ds";

Builder.registerComponent(Button, Button.builderSettings);
```

### Builder.io Usage

In Builder.io's visual editor, the Button component will appear with these configurable options:

- **Text**: Button text content
- **Variant**: Visual style (Primary, Secondary, Outline, Ghost)
- **Size**: Button size (Small, Medium, Large)
- **Disabled**: Toggle disabled state
- **Loading**: Toggle loading state
- **Full Width**: Make button full width
- **Link**: Optional URL to make button a link
- **Target**: Link target (for external links)
- **Aria Label**: Accessibility label

The component supports both:

1. **Text prop**: For simple text buttons
2. **Children**: For complex content (other Builder.io components)

### Example in Builder.io

```jsx
// Simple text button
<Button variant="primary" size="medium" text="Click me" />

// Button with nested components
<Button variant="outline" size="large">
  <Icon name="download" />
  Download Now
</Button>
```

## 🎨 Design Tokens

The design system includes a comprehensive color system:

```jsx
import { colors, cssVariables } from "builderio-ds";

// Use in your CSS
const styles = {
  backgroundColor: colors.primary[500],
  color: colors.white,
};

// Or use CSS custom properties
// CSS variables are automatically available:
// --color-primary, --color-primary-hover, etc.
```

## 🔧 Development

### Project Structure

```
src/
├── components/
│   └── Button/
│       ├── Button.tsx          # Main component
│       ├── Button.types.ts     # TypeScript interfaces
│       ├── Button.styles.css   # Component styles
│       └── index.ts           # Component exports
├── tokens/
│   └── colors.ts              # Design system colors
└── index.ts                   # Main library export
```

### Building

```bash
npm run build
```

### Development

```bash
npm run dev
```

## ♿ Accessibility

The Button component includes:

- Proper ARIA attributes
- Keyboard navigation support
- Screen reader friendly
- High contrast mode support
- Focus management
- Color contrast compliance

## 🎯 Features

- ✅ TypeScript support
- ✅ Builder.io integration
- ✅ Responsive design
- ✅ Accessibility compliant
- ✅ Loading states
- ✅ Icon support
- ✅ Link functionality
- ✅ CSS custom properties for theming
- ✅ Smooth animations
- ✅ Mobile optimized

## 📦 Dependencies

### Peer Dependencies

- `react` >= 16.8.0
- `react-dom` >= 16.8.0

### Optional Dependencies

- `@builder.io/react` (for Builder.io integration)

## 🚀 Next Steps

This Button component is the foundation for a complete design system. Future components will follow the same patterns:

1. Builder.io compatibility
2. Comprehensive TypeScript types
3. Accessibility compliance
4. Design token integration
5. Professional styling
6. Responsive behavior

## 📄 License

MIT License
