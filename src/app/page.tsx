'use server';
import styles from './page.module.scss';
import '@sass/globals.scss';
import React, { JSX } from 'react';
import Footer from '@/components/server/common/Footer/Footer';
import Home from '@/app/home/page';

/**
 * Root page component that renders the home page and footer
 * @returns {JSX.Element} Main application layout
 */
const Page = (): JSX.Element => {
  return (
    <div className={styles.page}>
      <Home />
      <Footer />
    </div>
  );
};

export default Page;
