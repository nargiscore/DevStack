import daisyui from 'daisyui'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        ink: '#15121F',
        body: '#6B7280',
        line: '#E7E5EF',
        chip: '#F3F4F6',
        night: '#0A0F1D',
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(95deg, #FF7A45 0%, #FF3D81 52%, #8B5CF6 100%)',
      },
    },
  },
  daisyui: {
    themes: false,
  },
  plugins: [daisyui],
}
