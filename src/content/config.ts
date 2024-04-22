import { z, defineCollection, reference } from 'astro:content';


const camereCollection = defineCollection({ 
    type: 'content',
    schema: z.object({
      title: z.string(),
      description: z.string(),
      tipologia: z.string(),
      commento: z.string(),
      image: z.object({
        src: z.string(),
        alt: z.string(),
      }),
      image1: z.object({
        src: z.string(),
        alt: z.string(),
      }),
      image2: z.object({
        src: z.string(),
        alt: z.string(),
      }),
      image3: z.object({
        src: z.string(),
        alt: z.string(),
      }),
      background: z.object({
        src: z.string(),
        alt: z.string(),
      }),
     
    })
   });



   export const collections = {
    'camere': camereCollection

  };