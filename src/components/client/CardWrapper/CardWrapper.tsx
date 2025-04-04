'use client';
import React from 'react';
import styles from './CardWrapper.module.scss';

interface CardWrapperProps {
  bgColor: string;
  children: React.ReactNode;
}

const CardWrapper = ({ bgColor, children }: CardWrapperProps) => {
  return (
    <div className={styles.cardWrapper} style={{ backgroundColor: bgColor }}>
      {children}
    </div>
  );
};

export default CardWrapper;
