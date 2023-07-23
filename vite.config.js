import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  define: {
    JWT_SECRET_KEY: process.env.JWT_SECRET_KEY,
  },
});
