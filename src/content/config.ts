import { defineCollection, z } from 'astro:content';

const objects = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      industry: z.string(),
      price: z.number(),
      city: z.string().default('Краснодар'),
      sold: z.boolean().default(false),
      cover: image(),
      videoUrl: z.string(),
      summary: z.string(),
      order: z.number().default(0),
      publishDate: z.date().default(() => new Date()),
    }),
});

const faq = defineCollection({
  type: 'content',
  schema: z.object({
    question: z.string(),
    order: z.number().default(0),
  }),
});

const videos = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      role: z.enum(['about', 'buyers', 'sellers', 'other']).default('other'),
      url: z.string(),
      poster: image().optional(),
      order: z.number().default(0),
    }),
});

const settings = defineCollection({
  type: 'data',
  schema: ({ image }) =>
    z.object({
      heroPhoto: image(),
      heroTitle: z.string(),
      heroSubtitle: z.string(),
      aboutPhoto: image(),
      aboutText: z.string(),
      phone: z.string(),
      whatsapp: z.string(),
      telegram: z.string(),
      trustCards: z
        .array(
          z.object({
            title: z.string(),
            text: z.string(),
          })
        )
        .default([]),
    }),
});

const reviews = defineCollection({
  type: 'content',
  schema: z.object({
    author: z.string(),
    dealType: z.string(),
    order: z.number().default(0),
  }),
});

export const collections = { objects, faq, videos, settings, reviews };
