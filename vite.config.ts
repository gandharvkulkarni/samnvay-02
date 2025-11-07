import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

import path from "path"
import tailwindcss from "@tailwindcss/vite"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    proxy: {
      '/sheet-api': {
        target: 'https://script.google.com/macros/s/AKfycbyDH-b3RLRURhxmapUVo-89ieKBHt5lkD2mvG0mkZXQXR6MPCrYHq33VGteVflL5OxC/exec',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/sheet-api/, ''),
      },
    },
  },
});