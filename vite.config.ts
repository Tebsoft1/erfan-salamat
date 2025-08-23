import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import { fileURLToPath } from 'url'
import mkcert from 'vite-plugin-mkcert'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default defineConfig({
  plugins: [react(), tailwindcss(), mkcert()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    https: true, // HTTPS را فعال می‌کند (گواهی را mkcert می‌سازد)
    host: true, // قابل دسترس روی شبکه محلی
    port: 5173,
  },
})
