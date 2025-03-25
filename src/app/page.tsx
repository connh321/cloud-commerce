import Header from '@/components/common/Header/Header';
import styles from './page.module.scss';
import '@sass/globals.scss';

import React from 'react';

const Page = () => {
  return (
    <div className={styles.page}>
      <Header />
    </div>
  );
};

export default Page;
