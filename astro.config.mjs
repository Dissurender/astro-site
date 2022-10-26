import { defineConfig } from 'astro/config';
import { SITE } from './src/config.mjs';
import svelte from '@astrojs/svelte';
import solidJs from "@astrojs/solid-js";
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/serverless';


// https://astro.build/config
export default defineConfig({
  integrations: [svelte(), tailwind(), solidJs()],
  site: SITE.origin,
  base: SITE.basePathname,
  output: 'server',
  adapter: vercel()
});