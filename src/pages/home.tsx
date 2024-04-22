import React, { useState, useEffect, createContext, ReactNode } from 'react';
import MainPage from '../components/page';

interface Props {
  children: ReactNode;
}

// Main Context
export const AppContext = createContext({
  isDarkMode: false,
  handleClick: () => {},
});

// Methods Provider
const AppProvider: React.FC<Props> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const darkMode = localStorage.getItem('BlogIsDarkMode');
    if (darkMode !== null) 
      setIsDarkMode(darkMode === 'true');
  }, []);

  const handleClick = () => {
    const newIsDarkMode = !isDarkMode;
    setIsDarkMode(newIsDarkMode);
    localStorage.setItem('BlogIsDarkMode', String(newIsDarkMode));    
  };

  return (
    <AppContext.Provider value={{ isDarkMode, handleClick }}>
      {children}
    </AppContext.Provider>
  );
};

const HomePage = () => (
  <AppProvider>
    <MainPage />
  </AppProvider>
);
export default HomePage;
