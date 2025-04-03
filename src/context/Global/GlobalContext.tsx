'use client';
import { createContext, ReactNode, useContext, useState } from 'react';

interface GlobalContextType {
  primaryColor: string;
  setPrimaryColor: (color: string) => void;
  hidePrimaryColor: boolean;
  setHidePrimaryColor: (hide: boolean) => void;
  isSearchActive: boolean;
  setIsSearchActive: (isActive: boolean) => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const GlobalContext = createContext<GlobalContextType | undefined>(
  undefined,
);

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (context === undefined) {
    throw new Error('useGlobalContext must be used within a GlobalProvider');
  }
  return context;
};

interface GlobalProviderProps {
  children: ReactNode;
}

export const GlobalProvider = ({ children }: GlobalProviderProps) => {
  const [primaryColor, setPrimaryColor] = useState<string>('#32D573'); // spring green
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [hidePrimaryColor, setHidePrimaryColor] = useState(false);
  const [activeTab, setActiveTab] = useState('/');

  return (
    <GlobalContext.Provider
      value={{
        primaryColor,
        setPrimaryColor,
        hidePrimaryColor,
        setHidePrimaryColor,
        isSearchActive,
        setIsSearchActive,
        activeTab,
        setActiveTab,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
