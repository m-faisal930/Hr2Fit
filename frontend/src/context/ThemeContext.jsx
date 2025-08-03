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
      // Background colors
      bgPrimary: isDarkMode ? 'bg-[#302c42]' : 'bg-white',
      bgSecondary: isDarkMode ? 'bg-[#211E2E]' : 'bg-gray-50',
      bgTertiary: isDarkMode ? 'bg-[#343045]' : 'bg-gray-100',
      
      // Text colors
      textPrimary: isDarkMode ? 'text-white' : 'text-gray-900',
      textSecondary: isDarkMode ? 'text-gray-300' : 'text-gray-600',
      textMuted: isDarkMode ? 'text-gray-400' : 'text-gray-500',
      
      // Border colors
      borderPrimary: isDarkMode ? 'border-gray-700' : 'border-gray-200',
      borderSecondary: isDarkMode ? 'border-gray-600' : 'border-gray-300',
      
      // Card colors
      cardBg: isDarkMode ? 'bg-[#343045]' : 'bg-white',
      cardBorder: isDarkMode ? 'border-gray-700' : 'border-gray-200',
      
      // Button colors
      btnPrimary: isDarkMode ? 'bg-gradient-to-r from-[#8176AF] to-[#C0B7E8]' : 'bg-gradient-to-r from-[#8176AF] to-[#C0B7E8]',
      btnSecondary: isDarkMode ? 'bg-[#343045] text-white' : 'bg-gray-100 text-gray-900',
      
      // Hover states
      hoverBg: isDarkMode ? 'hover:bg-[#343045]' : 'hover:bg-gray-50',
      hoverText: isDarkMode ? 'hover:text-[#C0B7E8]' : 'hover:text-[#8176AF]',
      
      // Form elements
      inputBg: isDarkMode ? 'bg-[#343045]' : 'bg-white',
      inputBorder: isDarkMode ? 'border-gray-600' : 'border-gray-300',
      inputText: isDarkMode ? 'text-white' : 'text-gray-900',
      
      // Navigation
      navBg: isDarkMode ? 'bg-[#302c42]' : 'bg-white',
      navText: isDarkMode ? 'text-white' : 'text-gray-900',
      
      // Footer
      footerBg: isDarkMode ? 'bg-[#211E2E]' : 'bg-gray-900',
      footerText: isDarkMode ? 'text-gray-300' : 'text-gray-400',
    }
  };

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
}; 