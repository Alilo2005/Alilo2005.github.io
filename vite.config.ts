import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
import CONFIG from './gitprofile.config';
import { createHtmlPlugin } from 'vite-plugin-html';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [
    react(),
    createHtmlPlugin({
      inject: {
        data: {
          metaTitle: CONFIG.seo.title,
          metaDescription: CONFIG.seo.description,
          metaImageURL: CONFIG.seo.imageURL,
          metaUrl: CONFIG.seo.url || 'https://alilo2005.github.io/',
          metaAuthor: CONFIG.seo.author || 'Mahdi Ali',
          metaKeywords: CONFIG.seo.keywords || '',
          metaTwitter: CONFIG.seo.twitter || '',
          metaJobTitle: CONFIG.seo.jobTitle || '',
          metaSocialLinks: JSON.stringify(
            [
              CONFIG.social.linkedin && `https://www.linkedin.com/in/${CONFIG.social.linkedin}`,
              CONFIG.social.instagram && `https://www.instagram.com/${CONFIG.social.instagram}`,
              CONFIG.github.username && `https://github.com/${CONFIG.github.username}`,
            ].filter(Boolean)
          ),
        },
      },
    }),
    ...(CONFIG.enablePWA
      ? [
          VitePWA({
            registerType: 'autoUpdate',
            workbox: {
              navigateFallback: undefined,
            },
            includeAssets: ['logo.png'],
            manifest: {
              name: CONFIG.seo.title || 'Portfolio',
              short_name: CONFIG.seo.author || 'Portfolio',
              description: CONFIG.seo.description || 'Personal Portfolio',
              theme_color: '#ffffff',
              background_color: '#ffffff',
              display: 'standalone',
              start_url: '/',
              scope: '/',
              lang: 'en',
              icons: [
                {
                  src: 'logo.png',
                  sizes: '64x64 32x32 24x24 16x16 192x192 512x512',
                  type: 'image/png',
                  purpose: 'any maskable',
                },
              ],
            },
          }),
        ]
      : []),
  ],
  define: {
    CONFIG: CONFIG,
  },
});
