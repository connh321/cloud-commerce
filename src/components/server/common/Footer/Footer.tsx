'use server';
import React from 'react';
// import Image from 'next/image';
import styles from './Footer.module.scss';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className={styles.footer}>
      {/* <Image className={styles.image} src={logo} alt="Logo" /> */}
      <div className={styles.image}>Logo</div>
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
