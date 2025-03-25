import React from 'react';
import styles from './Navigation.module.scss';
import { FaRegUser } from 'react-icons/fa';
import cartIcon from '@images/cart.png';
import Image from 'next/image';
import { IoHomeOutline } from 'react-icons/io5';
import { PiPackageDuotone } from 'react-icons/pi';


const Navigation = () => {
  return (
    <div className={styles.navigation}>
      <div className={styles.mobileHome}>
        <IoHomeOutline />
      </div>
      <div className={styles.signIn}>
        <span className={styles.helloText}>Hello, Temp</span>
        <div className={styles.signInUser}>
          <span className={styles.signInText}>Sign In</span>
          <span className={styles.user}>
            <FaRegUser />
          </span>
        </div>
      </div>
      <div className={styles.returnsOrders}>
        <span className={styles.mobileOrders}>
          <PiPackageDuotone />
        </span>
        <span className={styles.returnsText}>Returns</span>
        <span className={styles.ordersText}>& Orders</span>
      </div>
      <div className={styles.cart}>
        <span className={styles.cartCount}>99</span>
        <Image className={styles.cartIcon} src={cartIcon} alt="cart-icon" />
      </div>
    </div>
  );
};

export default Navigation;
