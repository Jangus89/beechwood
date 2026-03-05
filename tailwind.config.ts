import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'rgb(6, 9, 6)',
        foreground: 'rgb(255, 255, 255)',
        primary: '#C5E135',
        secondary: 'rgb(50, 50, 50)',
        accent: '#C5E135',
      },
      fontFamily: {
        italiana: 'var(--font-italiana)',
        syne: 'var(--font-syne)',
        display: 'var(--font-italiana)',
        sans: 'var(--font-dm-sans)',
      },
    },
  },
  plugins: [],
}
export default config
