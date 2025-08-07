import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import {
  colors,
  buttonColorMappings,
  buttonSizeMappings,
  tailwindColors,
} from "./colors";

/**
 * Design Tokens showcase for the Builder.io Design System.
 * These tokens ensure consistency across all components.
 */
const meta: Meta = {
  title: "Design System/Design Tokens",
  parameters: {
    docs: {
      description: {
        component: `
# Design Tokens

Design tokens are the foundation of our design system. They ensure consistency across all components
and make it easy to maintain and update the visual design.

## Color System

Our color system is built on Tailwind CSS principles with custom semantic colors for our use cases.
Each color has multiple shades from 50 (lightest) to 950 (darkest).

## Usage

\`\`\`typescript
import { colors, buttonColorMappings } from 'builderio-ds';

// Use colors in JavaScript
const primaryColor = colors.primary[500];

// Use predefined button color mappings
const primaryButtonClasses = buttonColorMappings.primary.base;
\`\`\`
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Color palette story
export const ColorPalette: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-4 text-secondary-900">
          Primary Colors
        </h2>
        <div className="grid grid-cols-6 gap-4">
          {Object.entries(colors.primary).map(([shade, color]) => (
            <div key={shade} className="text-center">
              <div
                className="w-20 h-20 rounded-lg mb-2 border"
                style={{ backgroundColor: color }}
              />
              <div className="text-sm font-medium text-secondary-700">
                {shade}
              </div>
              <div className="text-xs text-secondary-500 font-mono">
                {color}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4 text-secondary-900">
          Secondary Colors
        </h2>
        <div className="grid grid-cols-6 gap-4">
          {Object.entries(colors.secondary).map(([shade, color]) => (
            <div key={shade} className="text-center">
              <div
                className="w-20 h-20 rounded-lg mb-2 border"
                style={{ backgroundColor: color }}
              />
              <div className="text-sm font-medium text-secondary-700">
                {shade}
              </div>
              <div className="text-xs text-secondary-500 font-mono">
                {color}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4 text-secondary-900">
          Semantic Colors
        </h2>
        <div className="grid grid-cols-3 gap-8">
          {/* Success colors */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-secondary-800">
              Success
            </h3>
            <div className="space-y-2">
              {Object.entries(colors.success).map(([shade, color]) => (
                <div key={shade} className="flex items-center space-x-3">
                  <div
                    className="w-12 h-12 rounded border"
                    style={{ backgroundColor: color }}
                  />
                  <div>
                    <div className="text-sm font-medium">{shade}</div>
                    <div className="text-xs text-secondary-500 font-mono">
                      {color}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Error colors */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-secondary-800">
              Error
            </h3>
            <div className="space-y-2">
              {Object.entries(colors.error).map(([shade, color]) => (
                <div key={shade} className="flex items-center space-x-3">
                  <div
                    className="w-12 h-12 rounded border"
                    style={{ backgroundColor: color }}
                  />
                  <div>
                    <div className="text-sm font-medium">{shade}</div>
                    <div className="text-xs text-secondary-500 font-mono">
                      {color}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Warning colors */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-secondary-800">
              Warning
            </h3>
            <div className="space-y-2">
              {Object.entries(colors.warning).map(([shade, color]) => (
                <div key={shade} className="flex items-center space-x-3">
                  <div
                    className="w-12 h-12 rounded border"
                    style={{ backgroundColor: color }}
                  />
                  <div>
                    <div className="text-sm font-medium">{shade}</div>
                    <div className="text-xs text-secondary-500 font-mono">
                      {color}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: "padded",
    docs: {
      description: {
        story: "Complete color palette used throughout the design system.",
      },
    },
  },
};

// Button color mappings story
export const ButtonColorMappings: Story = {
  render: () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-secondary-900">
        Button Color Mappings
      </h2>
      <p className="text-secondary-600">
        These are the predefined Tailwind class combinations used for each
        button variant.
      </p>

      {Object.entries(buttonColorMappings).map(([variant, mapping]) => (
        <div
          key={variant}
          className="border border-secondary-200 rounded-lg p-4"
        >
          <h3 className="text-lg font-semibold mb-3 capitalize text-secondary-800">
            {variant}
          </h3>
          <div className="space-y-2">
            {Object.entries(mapping).map(([state, classes]) => (
              <div key={state} className="flex items-start space-x-4">
                <div className="w-20 text-sm font-medium text-secondary-600 capitalize">
                  {state}:
                </div>
                <code className="flex-1 text-xs bg-secondary-100 px-2 py-1 rounded font-mono">
                  {classes}
                </code>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  ),
  parameters: {
    layout: "padded",
    docs: {
      description: {
        story:
          "Tailwind CSS class mappings for different button variants and states.",
      },
    },
  },
};

// Size mappings story
export const SizeMappings: Story = {
  render: () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-secondary-900">Size Mappings</h2>
      <p className="text-secondary-600">
        Predefined size configurations for consistent component sizing.
      </p>

      {Object.entries(buttonSizeMappings).map(([size, mapping]) => (
        <div key={size} className="border border-secondary-200 rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-3 capitalize text-secondary-800">
            {size}
          </h3>
          <div className="space-y-2">
            {Object.entries(mapping).map(([property, classes]) => (
              <div key={property} className="flex items-start space-x-4">
                <div className="w-16 text-sm font-medium text-secondary-600 capitalize">
                  {property}:
                </div>
                <code className="flex-1 text-xs bg-secondary-100 px-2 py-1 rounded font-mono">
                  {classes}
                </code>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  ),
  parameters: {
    layout: "padded",
    docs: {
      description: {
        story:
          "Size-based Tailwind CSS class mappings for consistent component sizing.",
      },
    },
  },
};

// Typography scale story
export const TypographyScale: Story = {
  render: () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-secondary-900">
        Typography Scale
      </h2>
      <p className="text-secondary-600">
        Typography sizes used throughout the design system.
      </p>

      <div className="space-y-4">
        <div className="flex items-center space-x-4">
          <div className="w-20 text-sm font-medium text-secondary-600">xs</div>
          <div className="text-xs">Extra small text (12px)</div>
          <code className="text-xs bg-secondary-100 px-2 py-1 rounded">
            text-xs
          </code>
        </div>
        <div className="flex items-center space-x-4">
          <div className="w-20 text-sm font-medium text-secondary-600">sm</div>
          <div className="text-sm">Small text (14px)</div>
          <code className="text-xs bg-secondary-100 px-2 py-1 rounded">
            text-sm
          </code>
        </div>
        <div className="flex items-center space-x-4">
          <div className="w-20 text-sm font-medium text-secondary-600">
            base
          </div>
          <div className="text-base">Base text (16px)</div>
          <code className="text-xs bg-secondary-100 px-2 py-1 rounded">
            text-base
          </code>
        </div>
        <div className="flex items-center space-x-4">
          <div className="w-20 text-sm font-medium text-secondary-600">lg</div>
          <div className="text-lg">Large text (18px)</div>
          <code className="text-xs bg-secondary-100 px-2 py-1 rounded">
            text-lg
          </code>
        </div>
        <div className="flex items-center space-x-4">
          <div className="w-20 text-sm font-medium text-secondary-600">xl</div>
          <div className="text-xl">Extra large text (20px)</div>
          <code className="text-xs bg-secondary-100 px-2 py-1 rounded">
            text-xl
          </code>
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: "padded",
    docs: {
      description: {
        story:
          "Typography scale used in components for consistent text sizing.",
      },
    },
  },
};

// Spacing scale story
export const SpacingScale: Story = {
  render: () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-secondary-900">Spacing Scale</h2>
      <p className="text-secondary-600">
        Consistent spacing values used for padding, margins, and gaps.
      </p>

      <div className="space-y-3">
        {[1, 2, 3, 4, 6, 8, 12, 16, 20, 24].map((size) => (
          <div key={size} className="flex items-center space-x-4">
            <div className="w-12 text-sm font-medium text-secondary-600">
              {size}
            </div>
            <div
              className="bg-primary-500 h-4"
              style={{ width: `${size * 4}px` }}
            />
            <div className="text-sm text-secondary-600">{size * 4}px</div>
            <code className="text-xs bg-secondary-100 px-2 py-1 rounded">
              p-{size}, m-{size}, gap-{size}
            </code>
          </div>
        ))}
      </div>
    </div>
  ),
  parameters: {
    layout: "padded",
    docs: {
      description: {
        story: "Spacing scale based on 4px increments for consistent layouts.",
      },
    },
  },
};
