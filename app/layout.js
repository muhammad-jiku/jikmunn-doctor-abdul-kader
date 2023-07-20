import React, { Suspense } from 'react';
import '../styles/globals.css';
import { GlobalProvider } from '@/provider/GlobalProvider';
import { Navbar, Footer } from '@/components';
import Loading from './loading';

export const metadata = {
  title: 'Dr. Abdul Kader',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className='flex flex-col min-h-screen overflow-x-hidden'>
        <GlobalProvider>
          <Navbar />
          <Suspense
            fallback={
              <>
                <Loading />
              </>
            }
          >
            {children}
          </Suspense>
          <Footer />
        </GlobalProvider>
      </body>
    </html>
  );
}
