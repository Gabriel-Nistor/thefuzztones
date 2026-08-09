import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
    site: 'https://thefuzztones.net',
    integrations: [sitemap()],
});