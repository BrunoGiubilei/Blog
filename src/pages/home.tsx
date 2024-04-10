import React, { useState, createContext, ReactNode } from 'react';
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

  const handleClick = () => {
    setIsDarkMode(!isDarkMode);
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
