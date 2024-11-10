/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    colors: {
      '-color-primary': '#101010',
      '-color-secondary': '#F0F0F0',
      '-color-tertiary': '#5ce1e6'
    },
    extend: {}
  },
  plugins: []
}
