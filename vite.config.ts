import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import compression from 'vite-plugin-compression'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.tsx'),
      name: 'SuspenseAfterInitialRender',
      fileName: (format) => `suspense-after-initial-render.${format}.js`
    },
    rollupOptions: {
      // externalize deps that shouldn't be bundled
      // into your library
      external: ['react', 'react-dom'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          react: 'React'
        }
      }
    }
  },
  plugins: [
    react(),
    compression({
      algorithm: "brotliCompress",
      threshold: 100
    })
  ]
})
