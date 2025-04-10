'use client';
import React, { JSX } from 'react';
import { useRouter } from 'next/navigation';

/**
 * Error component that displays when something goes wrong
 * @returns {JSX.Element} Error message with refresh button
 */
const Error: React.FC = (): JSX.Element => {
  const router = useRouter();

  /**
   * Handles refreshing the page when try again is clicked
   */
  const handleRefresh = () => {
    router.refresh();
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h2>Something went wrong.</h2>
      <button
        onClick={handleRefresh}
        style={{ padding: '10px 20px', cursor: 'pointer' }}
      >
        Try Again
      </button>
    </div>
  );
};

export default Error;
