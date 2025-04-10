'use client';
import React, { ReactNode } from 'react';
import {
  ErrorBoundary as ReactErrorBoundary,
  FallbackProps,
} from 'react-error-boundary';
import Error from './Error'; // Default error component

/**
 * Props interface for ErrorBoundary component
 */
interface Props {
  children: ReactNode;
  // Optional custom fallback component which overrides the default.
  FallbackComponent?: React.ComponentType<FallbackProps>;
}

/**
 * Default fallback component that renders the Error component
 */
const DefaultErrorFallback: React.FC<FallbackProps> = () => {
  return <Error />;
};

/**
 * Error boundary wrapper that catches and handles React component errors
 * @param {Props} props Component props
 * @returns {JSX.Element} Wrapped content with error handling
 */
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
