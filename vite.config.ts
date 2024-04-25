
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import path from 'path';
import dts from 'vite-plugin-dts'
import tailwindcss from "tailwindcss";

// https://vitejs.dev/config/
export default defineConfig({
 
  build:{
    lib:{
      entry: path.resolve(__dirname, 'packages/react/sting/src/components/ui/index.tsx'),
      name: "ChargebeeUI",
      formats: ['es', 'umd', 'cjs'],
      // fileName: "chargebee-ui"
      fileName: (format) => `index.${format}.js`
    },
    

    // ...config[packageName].lib,
    rollupOptions: {
      external: ['react', 'react-dom','tailwindcss'],
      output: {
        globals: {
          react: 'React',
          "react-dom": "ReactDOM",
          tailwindcss: "tailwindcss",
        }
      },
      
    
     
    },
    sourcemap: true,
    emptyOutDir: true
  },
  
  plugins: [
    react(),
    dts({ rollupTypes: true }),

    tsconfigPaths(),
   
   
  ],
  css: {
    postcss: {
      plugins: [tailwindcss],
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'packages/react/sting/src'),
      
    },
    // alias: config[packageName].alias
  },
  
})
