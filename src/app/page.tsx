import Header from '@/components/common/Header/Header';
import styles from './page.module.scss';
import '@sass/globals.scss';

import React from 'react';
import HeaderBottom from '@/components/common/HeaderBottom/HeaderBottom';
import Footer from '@/components/common/Footer/Footer';


const Page = () => {
  return (
    <div className={styles.page}>
      <Header />
      <HeaderBottom />
      <div className={styles.pageContent}></div>
      <Footer/>
    </div>
  );
};

export default Page;
