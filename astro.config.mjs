// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  site: 'https://projectbouw010.nl',
  integrations: [
    tailwind(),
    sitemap(),
    icon(),
  ],
  output: 'static',
  adapter: cloudflare(),
});
