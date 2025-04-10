'use client';
import React, { JSX } from 'react';
import styles from './page.module.scss';
import AuthClient from '@/components/client/common/AuthClient/AuthClient';

/**
 * SignIn page component that renders the authentication form
 * @returns {JSX.Element} Authentication page with sign-in form
 */
const SignIn = (): JSX.Element => {
  return (
    <div className={styles.signIn}>
      <AuthClient />
    </div>
  );
};

export default SignIn;
