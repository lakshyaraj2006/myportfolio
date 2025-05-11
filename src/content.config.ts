import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const blogs = defineCollection({
    loader: glob({pattern: "**/*.md", base: "./src/content/blogs"}),
    schema: z.object({
        title: z.string(),
        tagline: z.string(),
        slug: z.string(),
        tags: z.string(),
        thumbnail: z.optional(z.string()),
        created: z.string(),
        author: z.string(),
    })
})

const projects = defineCollection({
    loader: glob({pattern: "**/*.md", base: "./src/content/projects"}),
    schema: z.object({
        title: z.string(),
        tagline: z.string(),
        tags: z.string(),
        thumbnail: z.optional(z.string()),
        slug: z.string(),
        author: z.string(),
        created: z.string(),
        githubURL: z.string() || z.null(),
        youtubeURL: z.string() || z.null(),
    })
})

export const collections = { blogs, projects };