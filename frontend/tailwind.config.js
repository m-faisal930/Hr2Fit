/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Primary Colors (Blue Gradient)
        'hr-primary': '#0F172A',       // Dark Blue (Background)
        'hr-gradient-from': '#1E40AF', // Gradient Start
        'hr-gradient-to': '#3B82F6',  // Gradient End
        
        // Secondary Colors
        'hr-dark': '#0F1A2E',         // Dark Section Background
        'hr-darker': '#1E293B',       // Darker Elements
        'hr-mid': '#334155',          // Mid Blue
        
        // Neutral Colors
        'hr-light': '#FFFFFF',         // White Text
        'hr-gray': '#E5E5E5',         // Light Gray (if needed)
        
        // Blue Shades
        'blue-50': '#EFF6FF',
        'blue-100': '#DBEAFE',
        'blue-200': '#BFDBFE',
        'blue-300': '#93C5FD',
        'blue-400': '#60A5FA',
        'blue-500': '#3B82F6',
        'blue-600': '#2563EB',
        'blue-700': '#1D4ED8',
        'blue-800': '#1E40AF',
        'blue-900': '#1E3A8A',
      },
      fontFamily: {
        'palo': ['Palo', 'Poppins', 'sans-serif'],
        'vastago': ['Vastago Grotesk', 'Inter', 'sans-serif'],
        'stevie': ['Stevie Sans', 'Roboto', 'sans-serif'],
        work: ['"Work Sans"', 'sans-serif'],
        sans: ['Inter', 'sans-serif'], // Default font
        heading: ['Palo', 'Poppins', 'sans-serif'], // For titles
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 2s infinite',
        'spin-slow': 'spin 3s linear infinite',
        'gradient': 'gradient 8s ease infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
    },
  },
  plugins: [ 
    require("flowbite/plugin"),
    require("tailwind-scrollbar"),],
};
