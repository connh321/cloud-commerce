"use client";
import React, { useState } from 'react';
import styles from './Navigation.module.scss';
import { FaRegUser } from 'react-icons/fa';
import cartIcon from '@images/cart.png';
import Image from 'next/image';
import { IoHomeOutline } from 'react-icons/io5';
import { PiPackageDuotone } from 'react-icons/pi';

const TABS = {
  HOME: 'home',
  USER: 'user',
  ORDERS: 'orders',
  CART: 'cart',
};

const TAB_ICONS = {
  [TABS.HOME]: <IoHomeOutline />,
  [TABS.USER]: <FaRegUser />,
  [TABS.ORDERS]: <PiPackageDuotone />,
  [TABS.CART]: <Image className={styles.cartIcon} src={cartIcon} alt="cart-icon" />,
};

const Navigation = () => {
  const [activeTab, setActiveTab] = useState(TABS.HOME);

  const updateActiveTab = (tab: string) => {
    console.log(tab);
    setActiveTab(tab);
  }

  return (
    <div className={styles.navigation}>
      <div
        className={`${styles.mobileHome} ${activeTab === TABS.HOME ? styles.activeTab : ''}`} onClick={() => updateActiveTab(TABS.HOME)}>
        {TAB_ICONS[TABS.HOME]}
      </div>
      <div className={`${styles.userContainer} ${activeTab === TABS.USER ? styles.activeTab : ''}`}>
        <span className={styles.helloText}>Hello, Temp</span>
        <div className={styles.userTextIcon} onClick={() => updateActiveTab(TABS.USER)}>
          <span className={styles.userText} >Sign In</span>
          {TAB_ICONS[TABS.USER]}
        </div>
      </div>
      <div className={styles.orders} onClick={() => updateActiveTab(TABS.ORDERS)}>
        <span className={`${styles.mobileOrders} ${activeTab === TABS.ORDERS ? styles.activeTab : ''}`}>
          {TAB_ICONS[TABS.ORDERS]}
        </span>
        <span className={styles.ordersText}>Orders</span>
      </div>
      <div className={`${styles.cart} ${activeTab === TABS.CART ? styles.activeTab : ''}`} onClick={() => updateActiveTab(TABS.CART)}>
        <span className={styles.cartCount}>99</span>
        {TAB_ICONS[TABS.CART]}
      </div>
    </div>
  );
};

export default Navigation;