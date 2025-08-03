/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Primary Colors (Purple Gradient)
        'hr-primary': '#302C42',       // Dark Purple (Background)
        'hr-gradient-from': '#8176AF', // Gradient Start
        'hr-gradient-to': '#C0B7E8',  // Gradient End
        
        // Secondary Colors
        'hr-dark': '#211E2E',         // Dark Section Background
        'hr-darker': '#343045',       // Darker Elements
        'hr-mid': '#3A3456',          // Mid Purple
        
        // Neutral Colors
        'hr-light': '#FFFFFF',         // White Text
        'hr-gray': '#E5E5E5',         // Light Gray (if needed)
      },
      fontFamily: {
        work: ['"Work Sans"', 'sans-serif'],
        sans: ['Montserrat', 'sans-serif'], // Default font
        heading: ['Montserrat', 'sans-serif'], // For titles
      },

    },
  },
  plugins: [ 
    require("flowbite/plugin"),
    require("tailwind-scrollbar"),],
};
