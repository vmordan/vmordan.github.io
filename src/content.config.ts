import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const publication = defineCollection({
  loader: glob({ base: "./src/content/publication", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
    link: z.string().optional(), // Usually DOI
    order: z.number().int().optional(),
    src: z.string().regex(/\.pdf$/i, "src must be a .pdf path, e.g. /pubs/paper.pdf"),
    videoId: z.string().optional(),
    artifactLink: z.string().optional(),
    authors: z.array(z.string()).default([]),
    hide: z.boolean().optional().default(false),
  }),
});

const talk = defineCollection({
  loader: glob({ base: "./src/content/talk", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
    link: z.string().url().optional(),
    order: z.number().int().optional(),
    venue: z.string().optional(),
    date: z.string().optional(),
    src: z.string().regex(/\.pdf$/i, "src must be a .pdf path, e.g. /talks/slides.pdf"),
    hide: z.boolean().optional().default(false),
  }),
});

const project = defineCollection({
  loader: glob({ base: "./src/content/project", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string(),
    desc: z.string(),
    link: z.string().url(),
    order: z.number().int(),
    role: z.string(),
    status: z.enum(["Active", "Finished", "Archived"]),
    hide: z.boolean().optional().default(false),
  }),
});

export const collections = { publication, talk, project };
