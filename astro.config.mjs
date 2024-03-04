import { loadEnv } from 'vite';

import { defineConfig } from 'astro/config';
import { sanityIntegration } from '@sanity/astro';
import tailwind from '@astrojs/tailwind';

const { SANITY_STUDIO_PROJECT_ID, SANITY_STUDIO_DATASET } = loadEnv(
  process.env.NODE_ENV,
  process.cwd(),
  ''
);

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  integrations: [
    sanityIntegration({
      projectId: SANITY_STUDIO_PROJECT_ID,
      dataset: SANITY_STUDIO_DATASET,
      apiVersion: '2024-04-03',
      useCdn: false,
    }),
    tailwind(),
  ],
});
