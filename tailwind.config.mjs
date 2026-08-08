import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0A0B0D', // основной фон
          soft: '#0F1114',
        },
        surface: {
          DEFAULT: '#15181C',
          raised: '#1C2025',
        },
        paper: '#F5F3EE', // тёплый белый — основной текст
        muted: '#9298A2', // второстепенный текст
        line: 'rgba(245,243,238,0.09)', // тонкие разделители
        brass: {
          DEFAULT: '#B08D57', // бронза/латунь — фирменный акцент
          light: '#D4B483',
          dim: '#8A6F44',
        },
        seal: '#8C3230', // приглушённый сургучный красный — только для печати "ПРОДАНО"
      },
      fontFamily: {
        display: ['"Fraunces"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        'display-xl': ['clamp(2.75rem, 6vw, 6rem)', { lineHeight: '0.98', letterSpacing: '-0.02em' }],
        'display-lg': ['clamp(2.25rem, 4.2vw, 3.75rem)', { lineHeight: '1.02', letterSpacing: '-0.02em' }],
        'display-md': ['clamp(1.75rem, 2.6vw, 2.5rem)', { lineHeight: '1.08', letterSpacing: '-0.01em' }],
      },
      maxWidth: {
        content: '1240px',
      },
      boxShadow: {
        card: '0 1px 0 rgba(245,243,238,0.06) inset, 0 20px 40px -24px rgba(0,0,0,0.6)',
      },
      backgroundImage: {
        grain: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E\")",
      },
      keyframes: {
        rise: {
          '0%': { opacity: '0', transform: 'translateY(14px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        stamp: {
          '0%': { opacity: '0', transform: 'scale(1.4) rotate(-12deg)' },
          '60%': { opacity: '1', transform: 'scale(0.96) rotate(-12deg)' },
          '100%': { opacity: '1', transform: 'scale(1) rotate(-12deg)' },
        },
      },
      animation: {
        rise: 'rise 0.7s cubic-bezier(0.16,1,0.3,1) both',
        stamp: 'stamp 0.5s cubic-bezier(0.16,1,0.3,1) both',
      },
    },
  },
  plugins: [typography],
};
