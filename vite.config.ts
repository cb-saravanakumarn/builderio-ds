
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import path from 'path';
import dts from 'vite-plugin-dts'

// const packageName = process.env.PACKAGE;


// const config = {
//   sting: {
//     lib: {
//       entry: path.resolve(__dirname, 'packages/react/sting/src/components/ui/index.tsx'),
//       name: 'ChargebeeUI',
//       formats: ['es', 'umd', 'cjs'],
//       fileName: (format) => `index.${format}.js`
//     },
//     alias: {
//       '@': path.resolve(__dirname, 'packages/react/sting/src')
//     }
//   },
//   stingCss: {
//     lib: {
//       entry: path.resolve(__dirname, 'packages/stingcss/index.js'),
//       name: 'chargebeeSting',
//       formats: ['es', 'cjs'],
//       fileName: (format) => `index.${format}.js`
//     },
//     alias: {
//       '@': path.resolve(__dirname, 'packages/stingcss/src')
//     }
//   }
// };


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
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          "react-dom": "ReactDOM"
        }
      }
     
    },
    sourcemap: true,
    emptyOutDir: true
  },
  
  plugins: [react(),dts({rollupTypes:true}), tsconfigPaths()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'packages/react/sting/src'),
      
    },
    // alias: config[packageName].alias
  },
})
