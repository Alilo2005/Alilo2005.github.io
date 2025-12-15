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
          metaAuthor: CONFIG.seo.author || CONFIG.github.username,
          metaKeywords: CONFIG.seo.keywords || '',
          metaCanonicalURL: (() => {
            if (CONFIG.seo.canonicalURL) return CONFIG.seo.canonicalURL;
            const base = CONFIG.base === '/' ? '' : (CONFIG.base || '');
            return `https://${CONFIG.github.username}.github.io${base}`;
          })(),
          metaJobTitle: CONFIG.bio || '',
          metaSocialLinks: (() => {
            const socialUrls: Record<string, string> = {
              linkedin: `https://www.linkedin.com/in/${'{handle}'}`,
              instagram: `https://www.instagram.com/${'{handle}'}`,
              email: `mailto:${'{handle}'}`,
              phone: `tel:${'{handle}'}`,
            };
            return JSON.stringify(
              Object.entries(CONFIG.social || {})
                .filter(([_, value]) => value)
                .map(([platform, handle]) => {
                  const template = socialUrls[platform];
                  return template ? template.replace('{handle}', handle as string) : handle;
                })
            );
          })(),
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
              short_name: (() => {
                const title = CONFIG.seo.title;
                if (!title) return 'Portfolio';
                const words = title.split(' ');
                return words.length >= 2 ? words.slice(0, 2).join(' ') : title;
              })(),
              description: CONFIG.seo.description || 'Personal Portfolio',
              theme_color: '#000000',
              background_color: '#ffffff',
              display: 'standalone',
              start_url: CONFIG.base,
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
