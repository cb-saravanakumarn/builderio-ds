/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./example.tsx",
    "./test.html",
    "./test-react.html",
  ],
  theme: {
    extend: {
      colors: {
        // Primary brand colors
        primary: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
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
          500: "#10b981",
          600: "#059669",
          700: "#047857",
        },
        error: {
          50: "#fef2f2",
          500: "#ef4444",
          600: "#dc2626",
          700: "#b91c1c",
        },
        warning: {
          50: "#fffbeb",
          500: "#f59e0b",
          600: "#d97706",
          700: "#b45309",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          '"Noto Sans"',
          "sans-serif",
        ],
      },
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1rem" }],
        sm: ["0.875rem", { lineHeight: "1.25rem" }],
        base: ["1rem", { lineHeight: "1.5rem" }],
        lg: ["1.125rem", { lineHeight: "1.75rem" }],
        xl: ["1.25rem", { lineHeight: "1.75rem" }],
      },
      spacing: {
        18: "4.5rem",
        88: "22rem",
      },
      boxShadow: {
        button: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
        "button-hover": "0 4px 12px 0 rgba(59, 130, 246, 0.15)",
        "button-focus": "0 0 0 3px rgba(59, 130, 246, 0.3)",
      },
      animation: {
        "spin-slow": "spin 1.5s linear infinite",
        "pulse-soft": "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      transitionProperty: {
        button:
          "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform",
      },
      transitionTimingFunction: {
        button: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
      transitionDuration: {
        button: "150ms",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    // Custom plugin for button utilities
    function ({ addUtilities, theme }) {
      const newUtilities = {
        ".btn-focus": {
          outline: "none",
          boxShadow: theme("boxShadow.button-focus"),
        },
        ".btn-disabled": {
          opacity: "0.6",
          cursor: "not-allowed",
          pointerEvents: "none",
        },
        ".btn-loading": {
          cursor: "wait",
          position: "relative",
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
