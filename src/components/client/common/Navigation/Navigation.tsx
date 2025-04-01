"use client";
import React, { useEffect } from 'react';
import styles from './Navigation.module.scss';
import { FaRegUser } from 'react-icons/fa';
import cartIcon from '@images/cart.png';
import Image from 'next/image';
import { IoHomeOutline } from 'react-icons/io5';
import { useCartContext } from '@/context/Cart/cart';
import LoadingComponent from '../LoadingComponent/Loading';
import { useRouter, usePathname } from 'next/navigation';
import { useGlobalContext } from '@/context/Global/GlobalContext';
import Link from 'next/link';

const TABS = {
  HOME: '',
  USER: 'user',
  CART: 'cart',
};

const TAB_ICONS = {
  [TABS.HOME]: <IoHomeOutline />,
  [TABS.USER]: <FaRegUser />,
  [TABS.CART]: <Image className={styles.cartIcon} src={cartIcon} alt="cart-icon" />,
};

const Navigation = () => {
  const {activeTab, setActiveTab} = useGlobalContext();
  const {loading, getCartSize} = useCartContext();
  const count = getCartSize();
  const router = useRouter();
  const pathname = usePathname();

const handleNavigation = (tab: string) => {
  const currentPath = pathname === '' ? '/' : pathname.substring(1);
  if (currentPath === tab) {
    console.log('No navigation needed, already on tab:', tab);
    return;
  }
  
  const path = tab === '' ? '/' : `/${tab}`;
  setActiveTab(tab);
  router.push(path);
};

  return (
    <div className={styles.navigation}>
      <div
        className={`${styles.mobileHome} ${activeTab === TABS.HOME ? styles.activeTab : ''}`} 
        onClick={() => handleNavigation(TABS.HOME)}>
        {TAB_ICONS[TABS.HOME]}
      </div>
      <div className={`${styles.userContainer} ${activeTab === TABS.USER ? styles.activeTab : ''}`}>
        <span className={styles.helloText}>Hello, Temp</span>
        <div className={styles.userTextIcon} onClick={() => handleNavigation(TABS.USER)}>
          <span className={styles.userText}>Sign In</span>
          {TAB_ICONS[TABS.USER]}
        </div>
      </div>
      <div className={`${styles.cart} ${activeTab === TABS.CART ? styles.activeTab : ''}`} 
           onClick={() => handleNavigation(TABS.CART)}>
        <span className={styles.cartCount}>
          {loading ? <LoadingComponent loading={loading} style={{width: '10px', height: '10px'}} /> : count}
        </span>
        {TAB_ICONS[TABS.CART]}
      </div>
    </div>
  );
};

export default Navigation;