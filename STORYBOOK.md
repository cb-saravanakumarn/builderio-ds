# 📚 Storybook Documentation

Welcome to the Builder.io Design System Storybook! This is your comprehensive guide to developing, testing, and documenting components.

## 🚀 Getting Started

### Running Storybook

```bash
# Start Storybook development server
npm run storybook

# Build Storybook for production
npm run build-storybook
```

Storybook will be available at http://localhost:6006

### What's Included

- **Component Stories**: Interactive examples of all component variants
- **Documentation**: Comprehensive component usage guidelines
- **Design Tokens**: Visual showcase of colors, typography, and spacing
- **Accessibility Testing**: Built-in a11y addon for accessibility validation
- **Interactive Testing**: Automated interaction tests for component behavior
- **Responsive Testing**: Viewport controls for mobile/tablet/desktop testing

## 📖 Story Structure

### Button Component Stories

The Button component includes these comprehensive stories:

#### **Variants**

- `Primary` - Main call-to-action buttons
- `Secondary` - Secondary action buttons
- `Outline` - Alternative styling with borders
- `Ghost` - Subtle, text-only appearance

#### **Sizes**

- `Small` - Compact for dense layouts
- `Medium` - Default size for most use cases
- `Large` - Prominent for important actions

#### **States**

- `Disabled` - Non-interactive state
- `Loading` - Async operation state with spinner
- `Full Width` - Container-spanning layout

#### **Features**

- `With Start Icon` - Icons before text
- `With End Icon` - Icons after text
- `With Both Icons` - Icons before and after text
- `As Link` - Button rendered as anchor tag
- `Builder.io Compatible` - Text prop for visual editing

#### **Testing**

- `Interactive Test` - Automated interaction validation
- `All Variants` - Complete showcase in one view
- `All Sizes` - Size comparison view

### Design Tokens Stories

Comprehensive documentation of the design system foundations:

#### **Color Palette**

- Primary colors (blue scale)
- Secondary colors (gray scale)
- Semantic colors (success, error, warning)
- Interactive color swatches with hex values

#### **Button Color Mappings**

- Tailwind CSS class combinations
- State-based styling (base, hover, active, focus, disabled)
- Copy-paste ready class strings

#### **Size Mappings**

- Consistent sizing configurations
- Padding, typography, and icon size mappings
- Reusable size patterns

#### **Typography Scale**

- Font size hierarchy
- Line height specifications
- Tailwind class references

#### **Spacing Scale**

- 4px-based spacing system
- Visual spacing examples
- Padding, margin, and gap utilities

## 🎛️ Storybook Features

### Controls Panel

Every story includes interactive controls to:

- Modify component props in real-time
- Test different combinations of properties
- Understand prop impact on component behavior
- Generate code snippets for implementation

### Actions Panel

Track component interactions:

- Click events
- Focus/blur events
- Custom event handlers
- Event payload inspection

### Accessibility Panel

Built-in accessibility testing:

- WCAG compliance checking
- Color contrast validation
- Screen reader simulation
- Keyboard navigation testing

### Viewport Controls

Test responsive behavior:

- Mobile (375px)
- Tablet (768px)
- Desktop (1024px)
- Large Desktop (1440px)
- Custom viewport sizes

### Background Controls

Test component appearance:

- Light background (default)
- Dark background
- Gray background
- Custom background colors

### Theme Toggle

Switch between themes:

- Light theme
- Dark theme
- Automatic theme adaptation

## 📝 Documentation Features

### Component Documentation

Each component includes:

#### **Description**

- Component purpose and use cases
- Feature overview
- Integration guidelines

#### **Props Table**

- Comprehensive prop documentation
- Type information
- Default values
- Usage examples

#### **Usage Guidelines**

- When to use each variant
- Accessibility considerations
- Best practices
- Common patterns

#### **Code Examples**

- Copy-paste ready code snippets
- TypeScript examples
- Builder.io integration examples

### Auto-Generated Documentation

Storybook automatically generates:

- Props tables from TypeScript interfaces
- Component source code display
- Interactive prop controls
- Type definitions

## 🧪 Testing with Storybook

### Interactive Testing

Stories include automated tests that:

- Verify component rendering
- Test user interactions
- Validate accessibility
- Check responsive behavior

```typescript
// Example interaction test
export const InteractiveTest: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button");

    await expect(button).toBeInTheDocument();
    await expect(button).toBeEnabled();
    await userEvent.click(button);
  },
};
```

### Accessibility Testing

The a11y addon automatically:

- Checks WCAG compliance
- Validates color contrast
- Tests keyboard navigation
- Reports accessibility violations

### Visual Regression Testing

Use Storybook stories for:

- Visual regression testing with Chromatic
- Cross-browser compatibility testing
- Component snapshot testing

## 🏗️ Builder.io Integration

### Builder.io Compatibility Stories

Special stories demonstrate:

- Text prop usage for visual editing
- Component registration examples
- Builder.io-specific features
- Visual editor compatibility

### Testing Builder.io Features

Verify Builder.io integration:

- Component registration
- Prop configuration in visual editor
- Text prop functionality
- Children vs. text prop behavior

## 📚 Adding New Stories

### Creating Component Stories

1. **Create story file**: `ComponentName.stories.tsx`
2. **Define meta configuration**:

   ```typescript
   const meta: Meta<typeof Component> = {
     title: "Components/ComponentName",
     component: Component,
     parameters: { layout: "centered" },
     argTypes: {
       /* prop configurations */
     },
   };
   ```

3. **Create story variants**:

   ```typescript
   export const Default: Story = {
     args: {
       /* default props */
     },
   };

   export const Variant: Story = {
     args: {
       /* variant props */
     },
     parameters: {
       docs: {
         description: {
           story: "Description of this variant",
         },
       },
     },
   };
   ```

### Documentation Best Practices

1. **Comprehensive Coverage**: Include all variants and states
2. **Clear Descriptions**: Explain when and how to use each variant
3. **Interactive Examples**: Make stories interactive and educational
4. **Accessibility**: Include accessibility considerations
5. **Code Examples**: Provide copy-paste ready code
6. **Visual Examples**: Show components in realistic contexts

### Story Organization

```
stories/
├── Introduction.stories.mdx          # Design system overview
├── components/                       # Component stories
│   ├── Button.stories.tsx           # Button component stories
│   └── [Future components]/         # Additional component stories
└── design-system/                   # Design system documentation
    ├── DesignTokens.stories.tsx     # Color, typography, spacing tokens
    └── [Future design docs]/        # Additional design documentation
```

## 🎨 Design System Documentation

### Color System

- **Primary**: Brand colors for main actions
- **Secondary**: Neutral colors for secondary elements
- **Semantic**: Success, error, warning colors
- **Usage**: When to use each color family

### Typography

- **Scale**: Consistent font size hierarchy
- **Weights**: Font weight specifications
- **Line Heights**: Optimal line height ratios
- **Usage**: Typography pairing guidelines

### Spacing

- **Scale**: 4px-based consistent spacing
- **Patterns**: Common spacing patterns
- **Layout**: Grid and layout specifications
- **Usage**: When to use each spacing value

## 📱 Responsive Design

### Viewport Testing

Test components across:

- Mobile devices (320px - 768px)
- Tablets (768px - 1024px)
- Desktop (1024px+)
- Large displays (1440px+)

### Responsive Patterns

Document how components:

- Adapt to different screen sizes
- Handle text overflow
- Maintain usability
- Preserve accessibility

## ⚡ Performance

### Story Performance

Optimize stories for:

- Fast loading times
- Efficient rendering
- Minimal bundle size
- Quick navigation

### Component Performance

Document:

- Rendering performance
- Memory usage
- Bundle size impact
- Optimization techniques

## 🔧 Configuration

### Storybook Configuration

- **main.ts**: Framework and addon configuration
- **preview.tsx**: Global decorators and parameters
- **Addons**: Essential addons for development

### Build Configuration

- **Tailwind CSS**: Automatic CSS building
- **TypeScript**: Full TypeScript support
- **Vite**: Fast development builds

## 🚀 Deployment

### Building for Production

```bash
npm run build-storybook
```

### Hosting Options

- **Netlify**: Automatic deployment from Git
- **Vercel**: Zero-configuration deployment
- **GitHub Pages**: Free hosting for open source
- **Chromatic**: Visual testing and review

## 📈 Best Practices

### Story Development

1. **Start Simple**: Begin with basic variants
2. **Add Complexity**: Build up to complex examples
3. **Document Everything**: Include comprehensive descriptions
4. **Test Thoroughly**: Include interaction tests
5. **Keep Updated**: Maintain stories with component changes

### Documentation Writing

1. **User-Focused**: Write for component users
2. **Example-Rich**: Show, don't just tell
3. **Accessible**: Include accessibility guidance
4. **Practical**: Provide actionable information

Your Storybook is now ready for professional component development! 🎉

Visit http://localhost:6006 to explore your components and documentation.
