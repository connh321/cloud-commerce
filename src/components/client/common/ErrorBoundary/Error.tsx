"use client";
import React from 'react';
import { useRouter } from 'next/navigation';

const Error: React.FC = () => {
  const router = useRouter();

  const handleRefresh = () => {
    router.refresh(); 
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h2>Something went wrong.</h2>
      <button onClick={handleRefresh} style={{ padding: '10px 20px', cursor: 'pointer' }}>
        Try Again
      </button>
    </div>
  );
};

export default Error;
