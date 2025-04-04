'use client';

import React, { useState } from 'react';
import styles from './page.module.scss';
import { signOut } from 'aws-amplify/auth';
import { useRouter } from 'next/navigation';
import LoadingComponent from '@/components/client/common/LoadingComponent/Loading';

const SignOutPage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleSignOut = async () => {
    setLoading(true);
    try {
      await signOut();
      router.push('/'); // Redirect after signing out
    } catch (error) {
      console.error('Error signing out:', error);
      setLoading(false); // Stop loading if there's an error
    }
  };

  return (
    <div className={styles.signOut}>
      <div className={styles.signOutContainer}>
        {!loading && (
          <span className={styles.confirm}>
            Are you sure you want to sign out?
          </span>
        )}
        <button
          className={styles.signOutButton}
          onClick={handleSignOut}
          disabled={loading}>
          {loading ? 'Signing Out' : 'Sign Out'}
        </button>
      </div>
      {loading && (
        <LoadingComponent
          loading={true}
          size={14}
          style={{ marginLeft: 'auto', marginRight: 'auto' }}
        />
      )}
    </div>
  );
};

export default SignOutPage;
