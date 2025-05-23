'use client';
import React, { JSX, useEffect } from 'react';
import styles from './Navigation.module.scss';
import { FaRegUser } from 'react-icons/fa';
import cartIcon from '@images/cart.png';
import Image from 'next/image';
import { IoHomeOutline } from 'react-icons/io5';
import { useCartContext } from '@/context/Cart/cart';
import LoadingComponent from '../LoadingComponent/Loading';
import { useRouter, usePathname } from 'next/navigation';
import { useGlobalContext } from '@/context/Global/GlobalContext';
import { useAuthContext } from '@/context/Auth/auth';
import { Hub } from 'aws-amplify/utils';

/**
 * Navigation tab constants
 */
const TABS = {
  HOME: '/',
  SIGN_IN: '/signin',
  SIGN_OUT: '/signout',
  CART: '/cart',
};

/**
 * Icon mapping for navigation tabs
 */
const TAB_ICONS = {
  [TABS.HOME]: <IoHomeOutline />,
  [TABS.SIGN_IN]: <FaRegUser />,
  [TABS.SIGN_OUT]: <FaRegUser />,
  [TABS.CART]: (
    <Image className={styles.cartIcon} src={cartIcon} alt="cart-icon" />
  ),
};

/**
 * Navigation component that handles routing and displays navigation tabs
 * @returns {JSX.Element} Navigation bar with home, auth, and cart controls
 */
const Navigation = (): JSX.Element => {
  const { activeTab, setActiveTab } = useGlobalContext();
  const { loading, getCartSize } = useCartContext();
  const count = getCartSize();
  const router = useRouter();
  const pathname = usePathname();
  const { email, signedIn } = useAuthContext();

  /**
   * Handles auth state changes via Hub events
   */
  useEffect(() => {
    const hubListener = Hub.listen('auth', async (data) => {
      switch (data.payload.event) {
        case 'signedIn':
          setActiveTab('/');
          break;
        case 'signedOut':
          setActiveTab('/');
          break;
      }
    });

    return () => hubListener();
  }, [router, setActiveTab]);

  /**
   * Handles navigation between tabs
   * @param {string} tab Tab route to navigate to
   */
  const handleNavigation = (tab: string) => {
    tab = tab === '' ? TABS.HOME : tab;
    if (pathname === tab) return;
    setActiveTab(tab);
    router.push(tab);
  };

  /**
   * Renders the sign in button for unauthenticated users
   */
  const signInButton = () => {
    return (
      <div
        className={`${styles.userContainer} ${activeTab === TABS.SIGN_IN ? styles.activeTab : ''}`}
        onClick={() => handleNavigation(TABS.SIGN_IN)}
      >
        <div className={styles.userTextIcon}>
          <span className={styles.userText}>Sign In</span>
          {TAB_ICONS[TABS.SIGN_IN]}
        </div>
      </div>
    );
  };

  /**
   * Renders the sign out button for authenticated users
   */
  const signOutButton = () => {
    return (
      <div
        className={`${styles.userContainer} ${activeTab === TABS.SIGN_OUT ? styles.activeTab : ''}`}
        onClick={() => handleNavigation(TABS.SIGN_OUT)}
      >
        <span className={styles.helloText}>Hello, {email}</span>
        <div className={styles.userTextIcon}>
          <span className={styles.userText}>Sign Out</span>
          {TAB_ICONS[TABS.SIGN_OUT]}
        </div>
      </div>
    );
  };

  /**
   * Renders the cart button with item count
   */
  const cartButton = () => {
    return (
      <div
        className={`${styles.cart} ${activeTab === TABS.CART ? styles.activeTab : ''}`}
        onClick={onCartClick}
      >
        <span className={styles.cartCount}>
          {loading ? (
            <LoadingComponent
              loading={loading}
              style={{ width: '10px', height: '10px' }}
            />
          ) : (
            count
          )}
        </span>
        {TAB_ICONS[TABS.CART]}
      </div>
    );
  };

  /**
   * Handles cart button clicks with auth check
   */
  const onCartClick = () => {
    if (!signedIn) {
      router.push('/signin');
      return;
    }
    handleNavigation(TABS.CART);
  };

  return (
    <div className={styles.navigation}>
      <div
        className={`${styles.mobileHome} ${activeTab === TABS.HOME ? styles.activeTab : ''}`}
        onClick={() => handleNavigation(TABS.HOME)}
      >
        {TAB_ICONS[TABS.HOME]}
      </div>
      {signedIn ? signOutButton() : signInButton()}
      {cartButton()}
    </div>
  );
};

export default Navigation;
