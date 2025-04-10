'use client';
import React, { JSX } from 'react';
import styles from './ProceedCheckout.module.scss';
import { useCartContext } from '@/context/Cart/cart';

/**
 * Displays checkout card with total price and checkout button
 * @returns {JSX.Element} Checkout component with total price
 */
const ProceedCheckout = (): JSX.Element => {
  const { getTotalPrice } = useCartContext();

  return (
    <div className={styles.proceedCheckout}>
      <div className={styles.card}>
        <div className={styles.price}>
          Total Price: ${getTotalPrice().toFixed(2)}
        </div>
        <div className={styles.proceed}>Proceed To Checkout</div>
      </div>
    </div>
  );
};

export default ProceedCheckout;
