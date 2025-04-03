'use client';
import React from 'react';
import styles from './ProceedCheckout.module.scss';

const ProceedCheckout = () => {
  return (
    <div className={styles.proceedCheckout}>
      <div className={styles.card}>
        <div className={styles.price}>Total Price: ${10}</div>
        <div className={styles.proceed}>Proceed To Checkout</div>
      </div>
    </div>
  );
};

export default ProceedCheckout;
