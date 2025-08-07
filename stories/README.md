# Stories Organization

This folder contains all Storybook stories for the Builder.io Design System, organized for easy navigation and maintenance.

## 📁 Folder Structure

```
stories/
├── Introduction.stories.mdx          # Design system overview
├── components/                       # Component stories
│   ├── Button.stories.tsx           # Button component stories
│   └── [Future components]          # Additional component stories
└── design-system/                   # Design system documentation
    ├── DesignTokens.stories.tsx     # Color, typography, spacing tokens
    └── [Future design docs]         # Additional design documentation
```

## 🎯 Organization Principles

### Components (`/components/`)

- One story file per component
- Comprehensive coverage of all variants, sizes, and states
- Interactive examples and documentation
- Accessibility testing integration

### Design System (`/design-system/`)

- Foundational design elements
- Design tokens (colors, typography, spacing)
- Usage guidelines and best practices
- Visual documentation of design principles

## 📝 Story Naming Convention

### Component Stories

- **File**: `ComponentName.stories.tsx`
- **Title**: `Components/ComponentName`
- **Stories**: Descriptive names (e.g., `Primary`, `WithIcon`, `Loading`)

### Design System Stories

- **File**: `DesignElement.stories.tsx`
- **Title**: `Design System/DesignElement`
- **Stories**: Functional names (e.g., `ColorPalette`, `TypographyScale`)

## 🧩 Story Structure

Each component story includes:

### Meta Configuration

```typescript
const meta: Meta<typeof Component> = {
  title: "Components/ComponentName",
  component: Component,
  parameters: { layout: "centered" },
  argTypes: {
    /* comprehensive prop documentation */
  },
};
```

### Story Variants

- **Default**: Basic usage example
- **Variants**: All visual variants (Primary, Secondary, etc.)
- **Sizes**: All size options (Small, Medium, Large)
- **States**: Different component states (Disabled, Loading, etc.)
- **Features**: Special features (Icons, Links, etc.)
- **Testing**: Interactive and accessibility tests
- **Showcases**: Combined examples (All Variants, All Sizes)

### Documentation

- Component description and purpose
- Usage guidelines and best practices
- Accessibility considerations
- Code examples and integration guides

## 🔧 Adding New Stories

### For New Components

1. Create `ComponentName.stories.tsx` in `/components/`
2. Follow the established story structure
3. Include comprehensive prop documentation
4. Add interactive examples and testing
5. Document accessibility features

### For Design System Elements

1. Create `ElementName.stories.tsx` in `/design-system/`
2. Focus on visual documentation
3. Include usage guidelines
4. Provide code examples
5. Show design token relationships

## 📚 Story Content Guidelines

### Component Stories Should Include:

- **Purpose**: What the component is for
- **Usage**: When and how to use it
- **Variants**: All available visual styles
- **Props**: Complete prop documentation
- **Examples**: Real-world usage scenarios
- **Testing**: Interactive and accessibility tests

### Design System Stories Should Include:

- **Overview**: Purpose and scope
- **Visual Examples**: Color swatches, typography samples, etc.
- **Usage Guidelines**: When and how to use tokens
- **Code Examples**: Implementation snippets
- **Relationships**: How tokens work together

## 🎨 Visual Standards

### Screenshots and Examples

- Use consistent spacing and layout
- Show components in realistic contexts
- Include dark/light theme variations
- Demonstrate responsive behavior

### Code Examples

- Provide copy-paste ready code
- Include TypeScript types
- Show Builder.io integration examples
- Include import statements

## 🧪 Testing Integration

### Interactive Tests

```typescript
export const InteractiveTest: Story = {
  play: async ({ canvasElement }) => {
    // User interaction simulation
    // Accessibility validation
    // Behavior verification
  },
};
```

### Accessibility Tests

- Built-in a11y addon validation
- Keyboard navigation testing
- Screen reader compatibility
- Color contrast verification

## 📱 Responsive Testing

All stories should be tested across:

- **Mobile**: 375px viewport
- **Tablet**: 768px viewport
- **Desktop**: 1024px viewport
- **Large**: 1440px viewport

## 🏗️ Builder.io Integration

### Builder.io Specific Stories

- Demonstrate text prop usage
- Show visual editor compatibility
- Include registration examples
- Test prop configuration

### Documentation Requirements

- Builder.io setup instructions
- Component registration examples
- Visual editor usage guidelines
- Integration best practices

## 📈 Maintenance

### Regular Updates

- Keep stories synchronized with component changes
- Update documentation when features change
- Maintain accessibility test coverage
- Review and update examples

### Quality Checks

- Ensure all stories load without errors
- Verify interactive tests pass
- Check accessibility compliance
- Validate responsive behavior

---

This organization ensures our Storybook remains maintainable, comprehensive, and useful for both development and documentation purposes.
