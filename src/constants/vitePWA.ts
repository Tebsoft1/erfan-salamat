export const vitePWA = {
  registerType: 'autoUpdate',
  includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'favicon-96x96.png'],
  devOptions: {
    enabled: true,
  },
  manifest: {
    name: 'MedX',
    short_name: 'MedX',
    description: 'اپلیکیشن MedX',
    theme_color: '#01203f',
    background_color: '#ffffff',
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
}
