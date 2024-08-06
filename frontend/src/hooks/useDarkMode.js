// src/hooks/useDarkMode.js
import { useState, useEffect } from 'react';

const useDarkMode = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const currentTheme = localStorage.getItem('theme') || 'light';
    setTheme(currentTheme);
    document.documentElement.setAttribute('data-theme', currentTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return { theme, toggleTheme };
};

export default useDarkMode;
