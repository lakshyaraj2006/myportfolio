import { defineCollection, z } from "astro:content";

const blogs = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        tagline: z.string(),
        slug: z.string(),
        author: z.string(),
        created: z.string()
    })
})

const projects = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        tagline: z.string(),
        slug: z.string(),
        author: z.string(),
        created: z.string(),
        githubURL: z.string() || z.null(),
        youtubeURL: z.string() || z.null(),
    })
})

export const collections = { blogs, projects };