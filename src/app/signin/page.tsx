'use client';
import React from 'react';
import styles from './page.module.scss';
import AuthClient from '@/components/client/common/AuthClient/AuthClient';

const SignIn = () => {
  return (
    <div className={styles.signIn}>
      <AuthClient />
    </div>
  );
};

export default SignIn;
