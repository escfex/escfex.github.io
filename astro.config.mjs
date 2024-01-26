import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'EscFe',
      social: {
        github: 'https://github.com/escfex',
      },
      sidebar: [
        {
          label: 'Base',
          items: [
            {
              label: 'Css',
              link: '/css/bfc/',
            },
          ],
        },
      ],
    }),
    react(),
  ],
  site: 'https://escfex.github.io',
  base: '/',
});
