import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import lottie from "astro-integration-lottie";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";
import react from "@astrojs/react";


export default defineConfig({
  site: 'https://ilgiardino.netlify.app',
  integrations: [tailwind(), sitemap(), lottie(), icon(), react()]
});