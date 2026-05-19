import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
// sitemap włączymy gdy będzie kilka podstron (potrzebuje min. 2 strony)
// import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://mathouse.pl',
  integrations: [
    tailwind({
      // Pozwalamy używać klas Tailwind w plikach .astro
      applyBaseStyles: true,
    }),
    // sitemap(),  ← włączymy w etapie 5
  ],
  // Wszystkie strony budowane są jako statyczne HTML
  output: 'static',
  build: {
    // Skompresuj HTML dla maksymalnej szybkości
    inlineStylesheets: 'auto',
  },
  // Optymalizacja obrazów
  image: {
    domains: ['mathouse.pl'],
  },
});
