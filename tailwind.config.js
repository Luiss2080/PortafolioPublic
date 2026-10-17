/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'obsidian-black': '#07090E',
        'obsidian-card': '#0D111A',
        'obsidian-subtle': '#131926',
        'emerald-deep': '#059669',
        'emerald-bright': '#10B981',
        'emerald-light': '#34D399',
        'emerald-glow': 'rgba(16, 185, 129, 0.4)',
        'gold-champagne': '#D4AF37',
        'gold-light': '#E7C873',
        'gold-glow': 'rgba(212, 175, 55, 0.35)',
        'platinum': '#E2E8F0',
        'titanium': '#94A3B8',
        'glass-bg': 'rgba(13, 17, 26, 0.65)',
        'glass-border': 'rgba(255, 255, 255, 0.08)'
      },
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
        inter: ['Inter', 'sans-serif']
      },
      boxShadow: {
        'emerald': '0 0 25px rgba(16, 185, 129, 0.3)',
        'gold': '0 0 25px rgba(212, 175, 55, 0.25)',
        'glass': '0 12px 40px 0 rgba(0, 0, 0, 0.45)',
        'subtle-card': '0 4px 20px -2px rgba(0, 0, 0, 0.5)'
      }
    },
  },
  plugins: [],
}
