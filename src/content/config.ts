import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const typCollection = defineCollection({
  loader: glob({ pattern: "blog/*.typ", base: "./src/content" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    pubDate: z.coerce.date(),
  }),
});

export const collections = {
  typ: typCollection,
};
