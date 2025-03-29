"use client";
import React, { useEffect, useState } from 'react';
import { useGlobalContext } from '../../../../context/Global/GlobalContext';
import Header from '../Header/Header';
import HeaderBottom from '../HeaderBottom/HeaderBottom';
import Navigation from '../Navigation/Navigation';
import styles from './GradientBackground.module.scss';

interface GradientBackgroundProps {
  children: React.ReactNode
}

const GradientBackground = ({children} : GradientBackgroundProps) => {
  const { primaryColor, isSearchActive, hidePrimaryColor} = useGlobalContext();
  const [hideColor, setHideColor] = useState(hidePrimaryColor);
  const [currentColor, setCurrentColor] = useState(primaryColor);
  console.log(currentColor);

  useEffect(() => {
    setCurrentColor(primaryColor);
    setHideColor(hidePrimaryColor);
  }, [primaryColor, hidePrimaryColor]);

  // Convert hex to RGB for rgba functionality
  const hexToRgb = (hex: string) => {
    // Remove the hash at the beginning if it's there
    hex = hex.replace(/^#/, '');
    
    // Parse the hex color
    const bigint = parseInt(hex, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;

    return `${r}, ${g}, ${b}`;
  };

  return (
    <div 
      style={{
        margin: 0,
        padding: 0,
        minHeight: '100vh',
        zIndex: -1,
        background: hideColor || currentColor === '' ? '' : `linear-gradient(
          to bottom, 
          ${currentColor} 0%, 
          ${currentColor} 5%, 
          rgba(${hexToRgb(currentColor)}, 0.9) 10%, 
          rgba(${hexToRgb(currentColor)}, 0.8) 15%, 
          rgba(${hexToRgb(currentColor)}, 0.7) 20%, 
          rgba(${hexToRgb(currentColor)}, 0.6) 25%, 
          rgba(${hexToRgb(currentColor)}, 0.5) 30%, 
          rgba(${hexToRgb(currentColor)}, 0.4) 35%, 
          rgba(${hexToRgb(currentColor)}, 0.3) 40%, 
          rgba(${hexToRgb(currentColor)}, 0.2) 45%, 
          rgba(${hexToRgb(currentColor)}, 0.1) 50%, 
          rgba(${hexToRgb(currentColor)}, 0.05) 55%, 
          rgba(${hexToRgb(currentColor)}, 0.025) 60%, 
          rgba(${hexToRgb(currentColor)}, 0.01) 65%, 
        rgba(255, 255, 255, 0.5) 70%, 
        rgba(255, 255, 255, 0.7) 75%, 
        rgba(255, 255, 255, 0.8) 80%, 
        rgba(255, 255, 255, 0.9) 85%, 
          white 90%, 
          white 100%
        )`,
      }}
    >
    <>
    <Header />
    {/** Hide the page except for the search button when the search bar is active on mobile only */}
    <div className={isSearchActive ? styles.hidden : ''}>
      <HeaderBottom />
      {children}
      <div className={styles.nav}><Navigation/></div>
    </div>
    </>
    </div>
  );
};

export default GradientBackground;