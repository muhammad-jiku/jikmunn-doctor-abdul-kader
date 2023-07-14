'use client';

import { AuthProvider } from '@/context/AuthContext';
import { SessionProvider } from 'next-auth/react';

export function GlobalProvider({ children }) {
  return (
    <>
      <AuthProvider>
        <SessionProvider>{children}</SessionProvider>
      </AuthProvider>
    </>
  );
}
