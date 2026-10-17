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
        'sapphire-blue': '#2563EB',
        'sapphire-light': '#38BDF8',
        'sapphire-glow': 'rgba(37, 99, 235, 0.4)',
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
        'sapphire': '0 0 25px rgba(37, 99, 235, 0.3)',
        'glass': '0 12px 40px 0 rgba(0, 0, 0, 0.45)',
        'subtle-card': '0 4px 20px -2px rgba(0, 0, 0, 0.5)'
      }
    },
  },
  plugins: [],
}
