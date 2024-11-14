import compression from "vite-plugin-compression";
import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "index.tsx"),
      name: "SuspenseAfterInitialRender",
      fileName: (format) => `suspense-after-initial-render.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: { globals: { react: "React" } },
    },
  },
  plugins: [
    react(),
    compression({
      algorithm: "brotliCompress",
      threshold: 100,
    }),
  ],
});
