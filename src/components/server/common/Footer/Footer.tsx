'use server';
import React, { JSX } from 'react';
import styles from './Footer.module.scss';
import Link from 'next/link';

/**
 * Footer component that displays copyright information
 * @returns {JSX.Element} Footer with copyright notice and author link
 */
const Footer = (): JSX.Element => {
  return (
    <div className={styles.footer}>
      <p className={styles.paragraph}>
        &copy; All rights reserved{' '}
        <Link href="https://github.com/connh321" className={styles.link}>
          @Connor Hunter
        </Link>
      </p>
    </div>
  );
};

export default Footer;
