import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/fedex-api': {
        target: 'https://apis-sandbox.fedex.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/fedex-api/, ''),
        secure: false,
      },
    },
  },
});
