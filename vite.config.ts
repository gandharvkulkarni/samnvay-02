import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs'
import path, { resolve } from "path"
import tailwindcss from "@tailwindcss/vite"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(),
    {
      name: 'copy-redirects',
      closeBundle() {
        fs.copyFileSync(resolve(__dirname, '_redirects'), resolve(__dirname, 'dist/_redirects'))
      },
    }
  ],
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