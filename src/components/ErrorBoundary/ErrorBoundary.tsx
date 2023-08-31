import React, { useState, useEffect } from 'react';

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

const ErrorBoundary = ({ children }: ErrorBoundaryProps) => {
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const handleGlobalError = (event: ErrorEvent) => {
      setError(event.error);
    };

    window.addEventListener('error', (e) => {
      handleGlobalError(e);
    });

    return () => {
      window.removeEventListener('error', handleGlobalError);
    };
  }, []);

  if (error) {
    return <div>😵‍💫에러가 발생했습니다.😵</div>;
  }

  return <>{children}</>;
};

export default ErrorBoundary;
