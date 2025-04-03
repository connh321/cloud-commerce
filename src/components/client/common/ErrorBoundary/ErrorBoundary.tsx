'use client';
import React, { ReactNode } from 'react';
import {
  ErrorBoundary as ReactErrorBoundary,
  FallbackProps,
} from 'react-error-boundary';
import Error from './Error'; // Default error component

interface Props {
  children: ReactNode;
  // Optional custom fallback component which overrides the default.
  FallbackComponent?: React.ComponentType<FallbackProps>;
}

// Default fallback that renders the general Error component
const DefaultErrorFallback: React.FC<FallbackProps> = () => {
  return <Error />;
};

const ErrorBoundary: React.FC<Props> = ({
  children,
  FallbackComponent = DefaultErrorFallback,
}) => {
  return (
    <ReactErrorBoundary
      FallbackComponent={FallbackComponent}
      onError={(error, errorInfo) => {
        console.error('Error caught by ErrorBoundary:', error, errorInfo);
      }}
    >
      {children}
    </ReactErrorBoundary>
  );
};

export default ErrorBoundary;
