'use client'; // Error components must be Client Components

import { ErrorState } from '@/components';
import { useEffect } from 'react';

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <>
      <ErrorState reset={reset} />
    </>
  );
}
