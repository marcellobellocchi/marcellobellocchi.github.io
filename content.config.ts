import { defineCollection } from "astro:content";
import { z } from "zod";
import { glob } from "astro/loaders";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: ".src/content/progetti" }),
  schema: z.object({
    title: z.string(),
    context: z.string(),
    role: z.string(),
    year: z.number(),
    stack: z.array(z.string()),
    summary: z.string(),
    nda: z.boolean().default(false),
    featured: z.boolean().default(false),
  }),
});

export const collections = { projects };
