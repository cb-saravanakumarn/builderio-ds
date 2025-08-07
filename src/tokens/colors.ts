// Tailwind-based Design System Color Tokens
// These align with our tailwind.config.js color definitions

export const colors = {
  // Primary brand colors (blue scale)
  primary: {
    50: "#eff6ff",
    100: "#dbeafe",
    200: "#bfdbfe",
    300: "#93c5fd",
    400: "#60a5fa",
    500: "#3b82f6", // Main primary color
    600: "#2563eb",
    700: "#1d4ed8",
    800: "#1e40af",
    900: "#1e3a8a",
    950: "#172554",
  },

  // Secondary/gray colors
  secondary: {
    50: "#f9fafb",
    100: "#f3f4f6",
    200: "#e5e7eb",
    300: "#d1d5db",
    400: "#9ca3af",
    500: "#6b7280",
    600: "#4b5563",
    700: "#374151",
    800: "#1f2937",
    900: "#111827",
    950: "#030712",
  },

  // Semantic colors
  success: {
    50: "#f0fdf4",
    100: "#dcfce7",
    500: "#10b981",
    600: "#059669",
    700: "#047857",
  },

  error: {
    50: "#fef2f2",
    100: "#fee2e2",
    500: "#ef4444",
    600: "#dc2626",
    700: "#b91c1c",
  },

  warning: {
    50: "#fffbeb",
    100: "#fef3c7",
    500: "#f59e0b",
    600: "#d97706",
    700: "#b45309",
  },

  // Utility colors
  white: "#ffffff",
  black: "#000000",
  transparent: "transparent",
} as const;

// Tailwind CSS class mappings for JavaScript usage
export const tailwindColors = {
  // Primary variants
  "primary-50": "bg-primary-50 text-primary-900",
  "primary-100": "bg-primary-100 text-primary-900",
  "primary-500": "bg-primary-500 text-white",
  "primary-600": "bg-primary-600 text-white",
  "primary-700": "bg-primary-700 text-white",

  // Secondary variants
  "secondary-50": "bg-secondary-50 text-secondary-900",
  "secondary-100": "bg-secondary-100 text-secondary-900",
  "secondary-200": "bg-secondary-200 text-secondary-900",
  "secondary-500": "bg-secondary-500 text-white",
  "secondary-600": "bg-secondary-600 text-white",

  // Semantic variants
  "success-50": "bg-success-50 text-success-700",
  "success-500": "bg-success-500 text-white",
  "error-50": "bg-error-50 text-error-700",
  "error-500": "bg-error-500 text-white",
  "warning-50": "bg-warning-50 text-warning-700",
  "warning-500": "bg-warning-500 text-white",
} as const;

// CSS Custom Properties for runtime theming (fallback for non-Tailwind usage)
export const cssVariables = {
  // Primary colors
  "--color-primary-50": colors.primary[50],
  "--color-primary-100": colors.primary[100],
  "--color-primary-500": colors.primary[500],
  "--color-primary-600": colors.primary[600],
  "--color-primary-700": colors.primary[700],

  // Secondary colors
  "--color-secondary-50": colors.secondary[50],
  "--color-secondary-100": colors.secondary[100],
  "--color-secondary-200": colors.secondary[200],
  "--color-secondary-500": colors.secondary[500],
  "--color-secondary-600": colors.secondary[600],
  "--color-secondary-700": colors.secondary[700],
  "--color-secondary-800": colors.secondary[800],
  "--color-secondary-900": colors.secondary[900],

  // Semantic colors
  "--color-success": colors.success[500],
  "--color-error": colors.error[500],
  "--color-warning": colors.warning[500],

  // Utility colors
  "--color-white": colors.white,
  "--color-black": colors.black,
  "--color-transparent": colors.transparent,
} as const;

// Tailwind utility class generator helpers
export const generateColorClasses = (
  colorName: keyof typeof colors,
  shade?: number
) => {
  const baseShade = shade || 500;
  return {
    background: `bg-${colorName}-${baseShade}`,
    text: `text-${colorName}-${baseShade}`,
    border: `border-${colorName}-${baseShade}`,
    ring: `ring-${colorName}-${baseShade}`,
  };
};

// Button-specific color mappings
export const buttonColorMappings = {
  primary: {
    base: "bg-primary-500 text-white border-primary-500",
    hover: "hover:bg-primary-600 hover:border-primary-600",
    active: "active:bg-primary-700 active:border-primary-700",
    focus: "focus:ring-primary-500/50",
    disabled:
      "disabled:bg-secondary-300 disabled:text-secondary-500 disabled:border-secondary-300",
  },
  secondary: {
    base: "bg-secondary-100 text-secondary-900 border-secondary-200",
    hover: "hover:bg-secondary-200 hover:border-secondary-300",
    active: "active:bg-secondary-300 active:border-secondary-400",
    focus: "focus:ring-secondary-500/50",
    disabled:
      "disabled:bg-secondary-50 disabled:text-secondary-400 disabled:border-secondary-200",
  },
  outline: {
    base: "bg-transparent text-primary-600 border-primary-500",
    hover: "hover:bg-primary-500 hover:text-white hover:border-primary-500",
    active: "active:bg-primary-600 active:text-white active:border-primary-600",
    focus: "focus:ring-primary-500/50",
    disabled:
      "disabled:bg-transparent disabled:text-secondary-400 disabled:border-secondary-300",
  },
  ghost: {
    base: "bg-transparent text-primary-600 border-transparent",
    hover: "hover:bg-primary-50 hover:text-primary-700",
    active: "active:bg-primary-100 active:text-primary-800",
    focus: "focus:ring-primary-500/50",
    disabled:
      "disabled:bg-transparent disabled:text-secondary-400 disabled:border-transparent",
  },
} as const;

// Size mappings
export const buttonSizeMappings = {
  small: {
    base: "px-3 py-1.5 text-sm",
    icon: "w-4 h-4",
    gap: "gap-1.5",
  },
  medium: {
    base: "px-4 py-2 text-base",
    icon: "w-5 h-5",
    gap: "gap-2",
  },
  large: {
    base: "px-6 py-3 text-lg",
    icon: "w-6 h-6",
    gap: "gap-2.5",
  },
} as const;

// Common button classes
export const buttonBaseClasses = [
  // Layout and positioning
  "inline-flex",
  "items-center",
  "justify-center",

  // Typography
  "font-medium",
  "text-center",
  "whitespace-nowrap",

  // Borders and appearance
  "border",
  "rounded-md",
  "shadow-button",

  // Interactions
  "cursor-pointer",
  "select-none",

  // Transitions
  "transition-button",
  "duration-button",
  "ease-button",

  // Focus states
  "focus:outline-none",
  "focus:ring-2",
  "focus:ring-offset-2",

  // Disabled states
  "disabled:cursor-not-allowed",
  "disabled:opacity-60",
].join(" ");

export default {
  colors,
  tailwindColors,
  cssVariables,
  generateColorClasses,
  buttonColorMappings,
  buttonSizeMappings,
  buttonBaseClasses,
};
