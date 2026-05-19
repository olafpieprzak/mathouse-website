/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // === KOLORY BRANDU MATHOUSE ===
        navy: {
          DEFAULT: '#050A24',    // główne tło
          deep: '#020516',       // ciemniejsze (stopki, akcenty)
          light: '#0a1438',      // jaśniejsze (karty na hero)
        },
        yellow: {
          DEFAULT: '#FFDE59',    // główny CTA, akcenty
          warm: '#FFB800',       // hover, cieplejszy
        },
        teal: {
          DEFAULT: '#3FCECF',    // akcent drugorzędny
          deep: '#2B9899',       // hover
        },
        lavender: '#EBEEFF',     // tekst, jasne tła
      },
      fontFamily: {
        // === FONTY ===
        sans: ['Montserrat', 'system-ui', 'sans-serif'],
        serif: ['Instrument Serif', 'Georgia', 'serif'],
      },
      fontSize: {
        // Dodatkowe rozmiary dla nagłówków
        'hero': ['3.5rem', { lineHeight: '1.05', letterSpacing: '-1.8px' }],
        'h1': ['2.5rem', { lineHeight: '1.1', letterSpacing: '-1px' }],
      },
      maxWidth: {
        'content': '1280px',     // główny kontener treści
      },
      animation: {
        'fade-in': 'fadeIn 0.4s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
