"use server";
import styles from './page.module.scss';
import '@sass/globals.scss';
import React from 'react';
import Footer from '@/components/server/common/Footer/Footer';
import Home from '@/app/(routes)/Home/page';

const Page = () => {
  return (
    <div className={styles.page}>
      <Home />
      <Footer />
    </div>
  );
};

export default Page;
