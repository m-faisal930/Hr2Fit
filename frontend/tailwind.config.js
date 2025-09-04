/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Primary Colors (Blue) - Based on logo #123456
        'hr-primary': '#123456', // Primary Blue from logo
        'hr-primary-light': '#1e4d70', // Lighter variant
        'hr-primary-dark': '#0f2a45', // Darker variant
        'hr-gradient-from': '#123456', // Gradient Start
        'hr-gradient-to': '#1e4d70', // Gradient End

        // Secondary Colors (Red) - Based on logo #DC203B
        'hr-secondary': '#DC203B', // Secondary Red from logo
        'hr-secondary-light': '#e54560', // Lighter variant
        'hr-secondary-dark': '#b11a2f', // Darker variant

        // Tertiary Colors (Gray) - Based on logo #414042
        'hr-tertiary': '#414042', // Tertiary Gray from logo
        'hr-tertiary-light': '#5a575a', // Lighter variant
        'hr-tertiary-dark': '#2e2d2f', // Darker variant

        // Background Colors
        'hr-bg-light': '#FFFFFF', // Light mode background
        'hr-bg-dark': '#0f0f0f', // Dark mode background
        'hr-bg-gray-light': '#f8f9fa', // Light gray background
        'hr-bg-gray-dark': '#1a1a1a', // Dark gray background

        // Text Colors
        'hr-text-primary-light': '#414042', // Primary text in light mode
        'hr-text-primary-dark': '#FFFFFF', // Primary text in dark mode
        'hr-text-secondary-light': '#5a575a', // Secondary text in light mode
        'hr-text-secondary-dark': '#e5e5e5', // Secondary text in dark mode

        // Accent Colors derived from main scheme
        'hr-accent-blue': '#123456',
        'hr-accent-red': '#DC203B',
        'hr-accent-gray': '#414042',

        // Blue Shades (Updated to match primary)
        'blue-50': '#f0f4f8',
        'blue-100': '#d9e7f0',
        'blue-200': '#b3cfe1',
        'blue-300': '#8db7d2',
        'blue-400': '#679fc3',
        'blue-500': '#4187b4',
        'blue-600': '#366f94',
        'blue-700': '#2b5774',
        'blue-800': '#203f54',
        'blue-900': '#152734',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        palo: ['Montserrat', 'sans-serif'],
        vastago: ['Montserrat', 'sans-serif'],
        stevie: ['Montserrat', 'sans-serif'],
        work: ['Montserrat', 'sans-serif'],
        sans: ['Montserrat', 'sans-serif'], // Default font
        heading: ['Montserrat', 'sans-serif'], // For titles
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 2s infinite',
        'spin-slow': 'spin 3s linear infinite',
        gradient: 'gradient 8s ease infinite',
        shimmer: 'shimmer 2s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
    },
  },
  plugins: [require('flowbite/plugin'), require('tailwind-scrollbar')],
};
