import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        border: 'hsl(var(--border))',
        ring: 'hsl(var(--ring))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        /* Resin Anvil brand tokens */
        forge: {
          dark: '#0d1117',
          navy: '#111827',
          mid: '#1e2a3a',
          light: '#2d3e52',
        },
        gold: {
          dim: '#8a6522',
          DEFAULT: '#c9921e',
          bright: '#e8b84b',
          pale: '#f5d98b',
        },
        resin: {
          teal: '#1a4a4a',
          purple: '#2d1b4a',
          crimson: '#4a1a1a',
        },
      },
      fontFamily: {
        heading: ['var(--font-heading)', 'serif'],
        body: ['var(--font-body)', 'sans-serif'],
      },
      fontSize: {
        'display': ['4.5rem', { lineHeight: '1.08', letterSpacing: '-0.025em' }],
        'display-sm': ['3.25rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'h1': ['2.75rem', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        'h2': ['2.1rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'h3': ['1.5rem', { lineHeight: '1.3' }],
        'h4': ['1.2rem', { lineHeight: '1.4' }],
      },
      maxWidth: {
        'content': '1280px',
      },
      spacing: {
        'section': '6rem',
        'section-sm': '3rem',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-in-right': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'slide-out-right': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100%)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease-out',
        'fade-in-up': 'fade-in-up 0.7s ease-out',
        'slide-in-right': 'slide-in-right 0.3s ease-out',
        'slide-out-right': 'slide-out-right 0.3s ease-out',
        'shimmer': 'shimmer 3s linear infinite',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
export default config
