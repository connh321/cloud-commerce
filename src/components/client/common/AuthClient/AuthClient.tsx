'use client';
import React, { JSX } from 'react';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

/**
 * Client-side authentication component that renders the AWS Amplify authenticator
 * @returns {JSX.Element} Authentication UI with sign-in/sign-up forms
 */
const AuthClient = (): JSX.Element => {
  return <Authenticator />;
};

export default AuthClient;
