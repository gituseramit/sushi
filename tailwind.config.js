/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FDFBF7',
          100: '#FAF6EE',
          200: '#F5EEDC',
          300: '#EFE5CE',
        },
        brand: {
          orange: '#FF5A2A',
          orangeDark: '#E85A2A',
          peach: '#FFEDE5',
        },
        espresso: {
          950: '#120D0C',
          900: '#1C1615',
          800: '#2A2220',
          700: '#3D3432',
        },
        charcoal: {
          900: '#1A1A1A',
          800: '#2C2C2C',
          700: '#404040',
          500: '#737373',
          400: '#A3A3A3',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', '"Cormorant Garamond"', 'Georgia', 'serif'],
        script: ['"Caveat"', 'cursive'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft-card': '0 10px 30px rgba(0, 0, 0, 0.05)',
        'elevated-card': '0 20px 40px rgba(0, 0, 0, 0.09)',
        'orange-glow': '0 12px 30px rgba(255, 90, 42, 0.35)',
        'dark-glow': '0 25px 60px rgba(28, 22, 21, 0.45)',
      },
      animation: {
        'spin-slow': 'spin 22s linear infinite',
        'float-gentle': 'floatGentle 4.5s ease-in-out infinite',
        'float-gentle-reverse': 'floatGentleReverse 5.5s ease-in-out infinite',
        'float-slow': 'floatSlow 6.5s ease-in-out infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
      },
      keyframes: {
        floatGentle: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-12px) rotate(3deg)' },
        },
        floatGentleReverse: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(12px) rotate(-3deg)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px) scale(1)' },
          '50%': { transform: 'translateY(-15px) scale(1.02)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '0.9', transform: 'scale(1.08)' },
        },
      }
    },
  },
  plugins: [],
}
