'use client';
import { usePathname } from 'next/navigation';
import { createContext, ReactNode, useContext, useState } from 'react';

/**
 * Global context interface for app-wide state
 */
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

/**
 * Hook to access global context
 * @returns {GlobalContextType} Global context values and setters
 * @throws {Error} If used outside of GlobalProvider
 */
export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (context === undefined) {
    throw new Error('useGlobalContext must be used within a GlobalProvider');
  }
  return context;
};

/**
 * Props for GlobalProvider component
 */
interface GlobalProviderProps {
  children: ReactNode;
}

/**
 * Global context provider that manages app-wide state
 * @param {GlobalProviderProps} props Component props
 * @returns {JSX.Element} Provider with global context
 */
export const GlobalProvider = ({ children }: GlobalProviderProps) => {
  const [primaryColor, setPrimaryColor] = useState<string>('#32D573'); // spring green
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [hidePrimaryColor, setHidePrimaryColor] = useState(false);
  const [activeTab, setActiveTab] = useState(usePathname());

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
