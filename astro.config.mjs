// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import vercel from '@astrojs/vercel';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  output: "server",
  integrations: [tailwind(), react()],

  markdown: {
    shikiConfig: {
      theme: "andromeeda"
    }
  },

  devToolbar: {
    enabled: false
  },

  adapter: vercel()
});