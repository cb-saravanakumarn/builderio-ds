import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "path";
import dts from "vite-plugin-dts";
import tailwindcss from "tailwindcss";
import { defineConfig as defineVitestConfig } from "vitest/config";

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
      external: ["react", "react-dom", "tailwindcss", "lucide-react"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          tailwindcss: "tailwindcss",
          "lucide-react": "LucideReact",
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
