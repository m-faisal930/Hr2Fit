import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check localStorage for saved preference
    const saved = localStorage.getItem('theme');
    if (saved) {
      return saved === 'dark';
    }
    // Check system preference
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    // Save to localStorage
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    
    // Apply theme to document
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const theme = {
    isDarkMode,
    toggleTheme,
    colors: {
      // Background colors - Based on new color scheme
      bgPrimary: isDarkMode ? 'bg-[#0f0f0f]' : 'bg-white',
      bgSecondary: isDarkMode ? 'bg-[#1a1a1a]' : 'bg-gray-50',
      bgTertiary: isDarkMode ? 'bg-[#2e2d2f]' : 'bg-[#f8f9fa]',
      
      // Text colors - Using logo colors with better contrast
      textPrimary: isDarkMode ? 'text-white' : 'text-[#414042]',
      textSecondary: isDarkMode ? 'text-gray-300' : 'text-gray-600',
      textMuted: isDarkMode ? 'text-gray-400' : 'text-gray-500',
      
      // Brand colors from logo - with proper contrast variations
      primary: '#123456', // Primary blue
      primaryLight: '#1e4d70', // Lighter version for dark mode
      primaryDark: '#0d2338', // Darker version for light mode
      secondary: '#DC203B', // Secondary red
      secondaryLight: '#e54560', // Lighter version for dark mode
      secondaryDark: '#b81c32', // Darker version for light mode
      tertiary: '#414042', // Tertiary gray
      tertiaryLight: '#5a575a', // Lighter version for dark mode
      tertiaryDark: '#2d2b2e', // Darker version for light mode
      
      // Icon colors with proper contrast
      iconPrimary: isDarkMode ? 'text-[#4a8bc2]' : 'text-[#123456]',
      iconSecondary: isDarkMode ? 'text-[#e54560]' : 'text-[#DC203B]',
      iconTertiary: isDarkMode ? 'text-gray-300' : 'text-[#414042]',
      iconSuccess: isDarkMode ? 'text-green-400' : 'text-green-600',
      
      // Border colors
      borderPrimary: isDarkMode ? 'border-[#414042]' : 'border-gray-200',
      borderSecondary: isDarkMode ? 'border-[#5a575a]' : 'border-gray-300',
      
      // Card colors
      cardBg: isDarkMode ? 'bg-[#2e2d2f]' : 'bg-white',
      cardBorder: isDarkMode ? 'border-[#414042]' : 'border-gray-200',
      
      // Button colors - Using new color scheme
      btnPrimary: isDarkMode 
        ? 'bg-gradient-to-r from-[#123456] to-[#1e4d70]' 
        : 'bg-gradient-to-r from-[#123456] to-[#1e4d70]',
      btnSecondary: isDarkMode 
        ? 'bg-[#DC203B] text-white' 
        : 'bg-[#DC203B] text-white',
      btnTertiary: isDarkMode 
        ? 'bg-[#414042] text-white' 
        : 'bg-[#414042] text-white',
      
      // Hover states
      hoverBg: isDarkMode ? 'hover:bg-[#2e2d2f]' : 'hover:bg-gray-50',
      hoverText: isDarkMode ? 'hover:text-[#DC203B]' : 'hover:text-[#123456]',
      
      // Form elements
      inputBg: isDarkMode ? 'bg-[#2e2d2f]' : 'bg-white',
      inputBorder: isDarkMode ? 'border-[#414042]' : 'border-gray-300',
      inputText: isDarkMode ? 'text-white' : 'text-[#414042]',
      
      // Navigation
      navBg: isDarkMode ? 'bg-[#0f0f0f]' : 'bg-white',
      navText: isDarkMode ? 'text-white' : 'text-[#414042]',
      
      // Footer
      footerBg: isDarkMode ? 'bg-[#1a1a1a]' : 'bg-[#414042]',
      footerText: isDarkMode ? 'text-[#e5e5e5]' : 'text-gray-300',

      // Gradients using new color scheme
      gradientPrimary: 'bg-gradient-to-r from-[#123456] via-[#1e4d70] to-[#123456]',
      gradientSecondary: 'bg-gradient-to-r from-[#DC203B] to-[#e54560]',
      gradientTertiary: 'bg-gradient-to-r from-[#414042] to-[#5a575a]',
      gradientCombined: 'bg-gradient-to-r from-[#123456] via-[#DC203B] to-[#414042]',
    }
  };

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
}; 