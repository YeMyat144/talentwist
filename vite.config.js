import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/macros': {
        target: 'https://short-story-quiz.p.rapidapi.com',
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
