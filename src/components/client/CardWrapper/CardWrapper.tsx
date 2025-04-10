'use client';
import React, { JSX } from 'react';
import styles from './CardWrapper.module.scss';

/**
 * Props interface for the CardWrapper component
 */
interface CardWrapperProps {
  bgColor: string;
  children: React.ReactNode;
}

/**
 * Wrapper component that adds a background color to its children
 * @param {CardWrapperProps} props - Component props
 * @returns {JSX.Element} Wrapped content with background color
 */
const CardWrapper = ({ bgColor, children }: CardWrapperProps): JSX.Element => {
  return (
    <div className={styles.cardWrapper} style={{ backgroundColor: bgColor }}>
      {children}
    </div>
  );
};

export default CardWrapper;
