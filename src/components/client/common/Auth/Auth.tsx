'use client';
import React, { JSX } from 'react';
import { Amplify } from 'aws-amplify';
import outputs from '../../../../../amplify_outputs.json';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

Amplify.configure(outputs, { ssr: true });

interface AuthProps {
  children: React.ReactNode;
}

/**
 * Authentication provider wrapper component
 * @param {AuthProps} props Component props
 * @returns {JSX.Element} Wrapped content with authentication context
 */
const Auth = ({ children }: AuthProps): JSX.Element => {
  return <Authenticator.Provider>{children}</Authenticator.Provider>;
};

export default Auth;
