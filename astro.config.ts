import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { typst } from 'astro-typst';

export default defineConfig({
  site: 'https://example.com',
  integrations: [
    mdx(),
    sitemap(),
    typst({
      options: {
        remPx: 14,
      },
      target: "html",
    }),
  ],
});

