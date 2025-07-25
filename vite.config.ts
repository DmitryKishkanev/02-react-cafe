import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve('src'),
      components: path.resolve('src/components'),
    },
  },
  build: {
    sourcemap: true,
  },
});
