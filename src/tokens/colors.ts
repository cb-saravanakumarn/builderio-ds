// Design System Color Tokens
export const colors = {
  // Primary colors
  primary: {
    50: "#eff6ff",
    100: "#dbeafe",
    500: "#3b82f6",
    600: "#2563eb",
    700: "#1d4ed8",
    900: "#1e3a8a",
  },

  // Secondary/Gray colors
  gray: {
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
  },

  // Semantic colors
  white: "#ffffff",
  black: "#000000",
  transparent: "transparent",

  // Status colors
  success: "#10b981",
  error: "#ef4444",
  warning: "#f59e0b",
  info: "#3b82f6",
} as const;

// CSS Custom Properties for runtime theming
export const cssVariables = {
  "--color-primary": colors.primary[500],
  "--color-primary-hover": colors.primary[600],
  "--color-primary-active": colors.primary[700],
  "--color-secondary": colors.gray[100],
  "--color-secondary-hover": colors.gray[200],
  "--color-secondary-active": colors.gray[300],
  "--color-text-primary": colors.gray[900],
  "--color-text-secondary": colors.gray[600],
  "--color-text-disabled": colors.gray[400],
  "--color-border": colors.gray[300],
  "--color-border-hover": colors.gray[400],
  "--color-white": colors.white,
  "--color-transparent": colors.transparent,
} as const;
