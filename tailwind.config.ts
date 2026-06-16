import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0F172A',
        secondary: '#1E3A8A',
        accent: '#2563EB',
        background: '#FFFFFF',
        highlight: '#F8FAFC',
        'dark-blue': '#0F172A',
        'light-blue': '#1E3A8A',
        'bright-blue': '#2563EB',
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#1F2937',
            'h1, h2, h3': {
              color: '#0F172A',
            },
          },
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'pulse-soft': 'pulseSoft 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
      },
      boxShadow: {
        'premium': '0 20px 25px -5px rgba(15, 23, 42, 0.1), 0 10px 10px -5px rgba(15, 23, 42, 0.04)',
        'premium-lg': '0 25px 50px -12px rgba(15, 23, 42, 0.15)',
        'premium-hover': '0 25px 50px -12px rgba(37, 99, 235, 0.15)',
      },
    },
  },
  plugins: [],
}
export default config
