import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";
import { typst } from "astro-typst";

export default defineConfig({
  site: "https://Omochice.github.io/astro-typst",
  base: "/astro-typst",
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
