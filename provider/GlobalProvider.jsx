'use client';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthProvider } from '@/context/AuthContext';
import { SessionProvider } from 'next-auth/react';

export function GlobalProvider({ children }) {
  return (
    <>
      <ToastContainer position='bottom-right' />
      <AuthProvider>
        <SessionProvider>{children}</SessionProvider>
      </AuthProvider>
    </>
  );
}
