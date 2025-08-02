import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "path";
import dts from "vite-plugin-dts";
import tailwindcss from "tailwindcss";
import { defineConfig as defineVitestConfig } from "vitest/config";
import { visualizer } from "rollup-plugin-visualizer";
import cssnano from "cssnano";

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(
        __dirname,
        "packages/sting-react/src/components/index.tsx"
      ),
      name: "sting-react",
      formats: ["es", "umd", "cjs"],
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: [
        "react",
        "react-dom",
        "react/jsx-runtime",
        "tailwindcss",
        // Externalize Radix UI to reduce bundle size
        "@radix-ui/react-accordion",
        "@radix-ui/react-checkbox",
        "@radix-ui/react-dialog",
        "@radix-ui/react-dropdown-menu",
        "@radix-ui/react-popover",
        "@radix-ui/react-radio-group",
        "@radix-ui/react-scroll-area",
        "@radix-ui/react-select",
        "@radix-ui/react-slot",
        "@radix-ui/react-tabs",
        "@radix-ui/react-toast",
        "@radix-ui/react-tooltip",
        // Externalize utility libraries
        "clsx",
        "tailwind-merge",
      ],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "react/jsx-runtime": "ReactJSXRuntime",
          tailwindcss: "tailwindcss",
          clsx: "clsx",
          "tailwind-merge": "tailwindMerge",
          // Radix UI globals
          "@radix-ui/react-accordion": "AccordionPrimitive",
          "@radix-ui/react-checkbox": "CheckboxPrimitive",
          "@radix-ui/react-dialog": "DialogPrimitive",
          "@radix-ui/react-dropdown-menu": "DropdownMenuPrimitive",
          "@radix-ui/react-popover": "PopoverPrimitive",
          "@radix-ui/react-radio-group": "RadioGroupPrimitive",
          "@radix-ui/react-scroll-area": "ScrollAreaPrimitive",
          "@radix-ui/react-select": "SelectPrimitive",
          "@radix-ui/react-slot": "SlotPrimitive",
          "@radix-ui/react-tabs": "TabsPrimitive",
          "@radix-ui/react-toast": "ToastPrimitive",
          "@radix-ui/react-tooltip": "TooltipPrimitive",
        },
      },
      plugins: [
        visualizer({
          filename: "analysis/bundle-analysis.html",
          open: false, // Don't auto-open during CI
          gzipSize: true,
          brotliSize: true,
        }),
      ],
    },
    sourcemap: true,
    emptyOutDir: true,
    // Add size warnings
    chunkSizeWarningLimit: 500,
    // Optimize CSS
    cssCodeSplit: true,
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
  plugins: [react(), dts({ rollupTypes: true }), tsconfigPaths()],
  css: {
    postcss: {
      plugins: [
        tailwindcss,
        cssnano({
          preset: [
            "default",
            {
              discardComments: { removeAll: true },
              normalizeWhitespace: true,
              mergeRules: true,
            },
          ],
        }),
      ],
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "packages/sting-react/src"),
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./vitest.setup.ts",
    css: true,
  },
});
