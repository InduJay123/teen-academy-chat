import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api/chat': {
        target: 'https://64.227.141.161:5678',
        changeOrigin: true,
        rewrite: (path) =>
          path.replace(/^\/api\/chat/, '/webhook/teen-academy-chat'),
      },
    },
  },
})