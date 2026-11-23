import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'deep-navy': '#0A192F',
        'cyber-slate': '#1E293B',
        'electric-cyan': '#00F2FE',
        'emerald-teal': '#0D9488',
        white: '#FFFFFF',
        'slate-soft': '#E2E8F0',
        midnight: '#080D17',
        navy: '#111E30',
        cyanElectric: '#38D9F5',
        violetAI: '#7367F0',
        violetTint: '#A59BFF',
        coldWhite: '#F4F7FB',
        techGray: '#8795A8',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['var(--font-jakarta)', 'Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        aiPulse: {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.85' },
          '50%': { transform: 'scale(1.8)', opacity: '0' },
        },
        aiShimmer: {
          '0%': { transform: 'translateX(-120%)' },
          '100%': { transform: 'translateX(220%)' },
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.45s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'ai-pulse': 'aiPulse 2.2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'ai-shimmer': 'aiShimmer 5.5s ease-in-out infinite',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
