import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import { fileURLToPath } from 'url'
import mkcert from 'vite-plugin-mkcert'
import { VitePWA } from 'vite-plugin-pwa'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    mkcert(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: [
        'favicon.ico',
        'apple-touch-icon.png',
        'favicon-96x96.png',
      ],
      devOptions: {
        enabled: true,
      },
      manifest: {
        name: 'عرفان سلامت',
        short_name: 'عرفان سلامت',
        description: 'اپلیکیشن عرفان سلامت',
        theme_color: '#ffffff',
        background_color: '#00291d',
        display: 'standalone',
        start_url: '/',
        icons: [
          {
            src: 'PWAicons/icon-48x48.png',
            sizes: '48x48',
            type: 'image/png',
          },
          {
            src: 'PWAicons/icon-72x72.png',
            sizes: '72x72',
            type: 'image/png',
          },
          {
            src: 'PWAicons/icon-96x96.png',
            sizes: '96x96',
            type: 'image/png',
          },
          {
            src: 'PWAicons/icon-128x128.png',
            sizes: '128x128',
            type: 'image/png',
          },
          {
            src: 'PWAicons/icon-144x144.png',
            sizes: '144x144',
            type: 'image/png',
          },
          {
            src: 'PWAicons/icon-152x152.png',
            sizes: '152x152',
            type: 'image/png',
          },
          {
            src: 'PWAicons/icon-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'PWAicons/icon-256x256.png',
            sizes: '256x256',
            type: 'image/png',
          },
          {
            src: 'PWAicons/icon-384x384.png',
            sizes: '384x384',
            type: 'image/png',
          },
          {
            src: 'PWAicons/icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: 'PWAicons/icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
        screenshots: [
          {
            src: 'PWAscreenshots/screenshot-1280x720.png',
            sizes: '1280x720',
            type: 'image/png',
            form_factor: 'wide',
            label: 'Desktop screenshot',
          },
          {
            src: 'PWAscreenshots/screenshot-390x844.png',
            sizes: '390x844',
            type: 'image/png',
            form_factor: 'narrow',
            label: 'Mobile screenshot',
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    https: {},
    host: true,
    port: 5173,
  },
})
