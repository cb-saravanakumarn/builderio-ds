import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "path";
import dts from "vite-plugin-dts";
import tailwindcss from "tailwindcss";

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(
        __dirname,
        "packages/react/sting/src/components/ui/index.tsx"
      ),
      name: "ChargebeeUI",
      formats: ["es", "umd", "cjs"],
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom", "tailwindcss"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          tailwindcss: "tailwindcss",
        },
      },
    },
    sourcemap: true,
    emptyOutDir: true,
  },
  plugins: [react(), dts({ rollupTypes: true }), tsconfigPaths()],
  css: {
    postcss: {
      plugins: [tailwindcss],
    },
  },
  // css: {
  //   postcss: './postcss.config.js',
  // },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "packages/react/sting/src"),
    },
  },
  test: {
    globals: true, // Use Vitest global methods (describe, it, expect, etc.)
    environment: "jsdom", // Use jsdom for DOM-like environment
    setupFiles: "./vitest.setup.ts", // Path to setup file (optional)
    css: true, // Allow testing with CSS imports
  },
});
