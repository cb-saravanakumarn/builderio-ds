"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cssVariables = exports.colors = void 0;
// Design System Color Tokens
exports.colors = {
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
};
// CSS Custom Properties for runtime theming
exports.cssVariables = {
    "--color-primary": exports.colors.primary[500],
    "--color-primary-hover": exports.colors.primary[600],
    "--color-primary-active": exports.colors.primary[700],
    "--color-secondary": exports.colors.gray[100],
    "--color-secondary-hover": exports.colors.gray[200],
    "--color-secondary-active": exports.colors.gray[300],
    "--color-text-primary": exports.colors.gray[900],
    "--color-text-secondary": exports.colors.gray[600],
    "--color-text-disabled": exports.colors.gray[400],
    "--color-border": exports.colors.gray[300],
    "--color-border-hover": exports.colors.gray[400],
    "--color-white": exports.colors.white,
    "--color-transparent": exports.colors.transparent,
};
