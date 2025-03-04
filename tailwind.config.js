/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'cream': '#f4f1de',
        'sage': '#81b29a',
        'terracotta': '#e07a5f',
        'navy': '#3d405b',
        'gold': '#f2cc8f',
        'accent-yellow': '#deec13',
        'background-dark': '#252637',
        'background-medium': '#313349',
      },
      borderColor: {
        'accent': 'var(--color-accent-yellow)',
        'cream': 'var(--color-cream)',
        'sage': 'var(--color-sage)',
        'terracotta': 'var(--color-terracotta)',
        'navy': 'var(--color-navy)',
        'gold': 'var(--color-gold)',
      },
    },
  },
  darkMode: 'media',
  plugins: [],
}
