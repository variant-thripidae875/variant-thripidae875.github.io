import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// Реальный адрес сайта — репозиторий vit-dotcom.github.io публикуется в корень
const SITE_URL = 'https://vit-dotcom.github.io';
// Корневой user-site — base не нужен
// const BASE = '/repo-name';

export default defineConfig({
  site: SITE_URL,
  // base: BASE,
  integrations: [tailwind(), sitemap()],
  output: 'static',
  trailingSlash: 'never',
});
