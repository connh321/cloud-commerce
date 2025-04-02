"use client";
import React from 'react'
import { Amplify } from 'aws-amplify';
import outputs from "../../../../../amplify_outputs.json";
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

Amplify.configure(outputs, {ssr: true});

interface AuthProps {
  children: React.ReactNode;
}
const Auth = ({children}: AuthProps) => {
  return (
    <Authenticator.Provider>{children}</Authenticator.Provider>
  )
}

export default Auth