'use client';
import React from 'react';
import styles from './ProceedCheckout.module.scss';
import { useCartContext } from '@/context/Cart/cart';

const ProceedCheckout = () => {
  const { getTotalPrice } = useCartContext();

  return (
    <div className={styles.proceedCheckout}>
      <div className={styles.card}>
        <div className={styles.price}>Total Price: ${getTotalPrice().toFixed(2)}</div>
        <div className={styles.proceed}>Proceed To Checkout</div>
      </div>
    </div>
  );
};

export default ProceedCheckout;
