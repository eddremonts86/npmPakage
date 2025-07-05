import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3001,
    open: true,
  },
  css: {
    postcss: false, // Disable PostCSS to avoid conflicts
  },
  resolve: {
    alias: {
      // Alias para importar desde el src del paquete principal
      '@schilling-widgets': fileURLToPath(new URL('../src', import.meta.url)),
    },
  },
});
