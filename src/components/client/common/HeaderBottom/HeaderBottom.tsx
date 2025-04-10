'use client';
import { usePathname } from 'next/navigation';
import styles from './HeaderBottom.module.scss';
import { JSX, useEffect } from 'react';

/**
 * Menu items array for bottom header navigation
 */
const menuItems = [
  { text: 'Big Sale' },
  { text: 'Medical Care' },
  { text: 'Best Sellers' },
  { text: 'Music' },
  { text: 'Basics' },
  { text: 'New Releases' },
  { text: 'Electronics' },
  { text: 'Home & Kitchen' },
  { text: 'Customer Service' },
];

/**
 * Bottom header component that displays category navigation
 * Only visible on home and products pages on mobile
 * @returns {JSX.Element} Bottom header navigation
 */
const HeaderBottom = (): JSX.Element => {
  const pathname = usePathname();
  useEffect(() => {}, [pathname]);
  return (
    <div
      className={`${styles.headerBottom} ${pathname === '/' || pathname === '/products' || pathname === '/home' ? '' : styles.hideHeaderBottomMobile}`}
    >
      {menuItems.map((item, index) => (
        <li key={index} className={styles.menuItem}>
          {item.text}
        </li>
      ))}
    </div>
  );
};

export default HeaderBottom;
