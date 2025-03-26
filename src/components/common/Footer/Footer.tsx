import React from 'react';
// import Image from 'next/image';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <div className={styles.footer}>
      {/* <Image className={styles.image} src={logo} alt="Logo" /> */}
      <div className={styles.image}>Logo</div>
      <p className={styles.paragraph}>
        &copy; All rights reserved <span>@Connor Hunter</span>
      </p>
    </div>
  );
};

export default Footer;
