// Astro 4 - content collection (stara składnia, bez glob loader)
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    category: z.enum(['matma-biznes', 'inwestowanie', 'rozwoj-osobisty', 'matma-praktyczna', 'matura', 'inne']).default('inne'),
    cover: z.string().optional(),
    coverEmoji: z.string().optional().default('📐'),
    author: z.string().default('Olaf Pieprzak'),
    readTime: z.number().optional(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
