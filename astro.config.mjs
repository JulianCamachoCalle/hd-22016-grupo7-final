// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [
      tailwindcss()]},

  integrations: [icon()],
  site: "https://juliancamachocalle.github.io",
  base: "hd-22016-grupo7-final",
});