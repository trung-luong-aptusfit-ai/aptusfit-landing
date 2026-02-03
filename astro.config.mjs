import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// Set this to your final domain so sitemap + canonical URLs are correct.
// You can override it in CI via PUBLIC_SITE.
export default defineConfig({
  site: process.env.PUBLIC_SITE ?? "https://www.aptusfit.ai",
  alias: {
    "@": "./src",
  },
  build: {
    inlineStylesheets: 'auto'
  },
  vite: {
    build: {
      cssCodeSplit: true,
      rollupOptions: {
        output: {
          manualChunks: {
            'framer': ['framer-motion']
          }
        }
      }
    }
  },
  integrations: [sitemap(), tailwind(), react()],
});
