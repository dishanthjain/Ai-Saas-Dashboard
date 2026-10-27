/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0f5ff',
          100: '#e0ebff',
          200: '#c3d7fe',
          300: '#97b8fd',
          400: '#648efa',
          500: '#3b62f6',
          600: '#2543eb',
          700: '#1d31d8',
          800: '#1e29af',
          900: '#1e278a',
          950: '#111654',
        },
        surface: {
          light: '#fbfbfd',
          card: '#ffffff',
          dark: '#0f1117',
          'dark-card': '#161922',
          'dark-hover': '#1e222d',
        },
        neutral: {
          850: '#1a1d24',
          900: '#12141a',
          950: '#0a0b0e',
        }
      },
      fontFamily: {
        sans: ['Geist', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Consolas', 'monospace'],
      },
      boxShadow: {
        'subtle': '0 1px 2px 0 rgba(0, 0, 0, 0.03)',
        'card': '0 1px 3px 0 rgba(0, 0, 0, 0.04), 0 1px 2px -1px rgba(0, 0, 0, 0.02)',
        'dropdown': '0 4px 20px -2px rgba(0, 0, 0, 0.08), 0 2px 6px -1px rgba(0, 0, 0, 0.04)',
        'modal': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
};
