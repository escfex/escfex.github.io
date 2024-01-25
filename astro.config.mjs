import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [starlight({

    title: 'EscFeX',
    /**https://starlight.astro.build/zh-cn/guides/i18n/ */
      defaultLocale: 'zh-cn',
      locales: {
        // 英文文档在 `src/content/docs/en/` 中。
        en: {
          label: 'English',
          lang: 'en',
        },
        // 简体中文文档在 `src/content/docs/zh-cn/` 中。
        'zh-cn': {
          label: '简体中文',
          lang: 'zh-CN',
        },
      },
    social: {
      github: 'https://github.com/escfex'
    },
    sidebar: [
      {
      label: 'Guides',
      items: [
      // Each item here is one entry in the navigation menu.
      {
        label: 'About Me',
        link: '/about/me/'
      }]
    },
     {
      label: 'Reference',
      autogenerate: {
        directory: 'reference'
      }
    }]
  }), react()],
  site: 'https://escfex.github.io',
  base: '/'
});