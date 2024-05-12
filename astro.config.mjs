import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import lottie from "astro-integration-lottie";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";
import react from "@astrojs/react";
import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  site: 'https://ilgiardinodeilimonibeb.com',
  integrations: [tailwind(), sitemap(), lottie(), icon(), react(), robotsTxt(
    {
      policy: [
        {
          userAgent: 'Googlebot',
          allow: '/',
          disallow: ['/search'],
          crawlDelay: 2,
        },
        {
          userAgent: 'OtherBot',
          allow: ['/allow-for-all-bots', '/allow-only-for-other-bot'],
          disallow: ['/admin', '/login'],
          crawlDelay: 2,
        },
        {
          userAgent: '*',
          allow: '/',
          disallow: '/search',
          crawlDelay: 10,
          cleanParam: 'ref /articles/',
        },
      ],
    }
  )]
});