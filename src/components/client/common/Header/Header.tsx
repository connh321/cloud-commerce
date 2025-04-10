'use client';
import React, { useEffect, useState } from 'react';
import styles from './Header.module.scss';
import { HiOutlineSearch } from 'react-icons/hi';
import { IoArrowBackOutline } from 'react-icons/io5';
import Navigation from '@/components/client/common/Navigation/Navigation';
import { useGlobalContext } from '@/context/Global/GlobalContext';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';

/**
 * Header component that provides navigation, search, and responsive logo
 * @returns {JSX.Element} Application header with search and navigation
 */
const Header = () => {
  const { setIsSearchActive, setHidePrimaryColor } = useGlobalContext();
  const router = useRouter();
  const pathname = usePathname();
  const [windowWidth, setWindowWidth] = useState(768);

  /**
   * Handles window resize events and updates width state
   */
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    handleResize(); // Set initial width
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  useEffect(() => {}, []);

  /**
   * Activates search mode on mobile devices
   */
  const focus = (): void => {
    if (window.innerWidth < 768) {
      setIsSearchActive(true);
      setHidePrimaryColor(true);
    }
  };

  /**
   * Deactivates search mode
   */
  const unfocus = (): void => {
    setIsSearchActive(false);
    setHidePrimaryColor(false);
  };

  /**
   * Handles search input submission on enter key
   * @param {React.KeyboardEvent<HTMLInputElement>} e Keyboard event
   */
  const keyDown = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const inputTarget = e.target as HTMLInputElement;
      router.push(`/products?search=${inputTarget.value}`);
    }
  };

  return (
    <div className={`${styles.header} `}>
      <div className={styles.headerContainer}>
        <div
          className={`${styles.logo} ${pathname === '/' || pathname === '/products' || pathname === '/home' ? styles.hideLogoMobile : ''}`}
        >
          <Link href="/" className={styles.link}>
            <Image
              src={
                windowWidth < 768
                  ? '/images/cc_black_logo.png'
                  : '/images/cc_logo.png'
              }
              alt={'logo'}
              className={styles.image}
              style={{ objectFit: 'contain' }}
              width={115}
              height={45}
              priority
              unoptimized
            />
          </Link>
        </div>
        <div
          className={`${styles.search} ${pathname === '/' || pathname === '/products' || pathname === '/home' ? '' : styles.hideSearchMobile}`}
          onFocus={focus}
          onBlur={unfocus}
        >
          <div className={styles.backIcon}>
            <IoArrowBackOutline />
          </div>
          <div className={styles.inputIcon}>
            <input
              className={styles.searchInput}
              type="text"
              placeholder="Search Cloud Commerce"
              onKeyDown={keyDown}
            />
            <div className={styles.searchIcon}>
              <HiOutlineSearch />
            </div>
          </div>
        </div>
        <div className={styles.nav}>
          <Navigation />
        </div>
      </div>
    </div>
  );
};

export default Header;
