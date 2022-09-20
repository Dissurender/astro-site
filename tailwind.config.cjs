/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    colors: ({ colors }) => ({
      lighter: '',
      light: '',
      bg: '',
      dark: '',
      darker: '',
      fuchsia: colors.fuchsia,
      cyan: colors.cyan,
      emerald: colors.emerald,
    }),
    extend: {},
  },
  darkMode: 'class',
  plugins: [require('daisyui')],
  // daisyUI config
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: '',
    darkTheme: 'dark',
  },
};
