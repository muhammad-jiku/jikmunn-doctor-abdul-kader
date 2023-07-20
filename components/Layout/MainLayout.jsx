'use client';

import React, { Suspense } from 'react';
import { Navbar, Footer, Loader } from '..';
import { GlobalProvider } from '@/provider/GlobalProvider';

function MainLayout() {
  return (
    <div className='flex flex-col min-h-screen overflow-x-hidden'>
      <GlobalProvider>
        <Navbar />
        <Suspense
          fallback={
            <>
              <Loader />
            </>
          }
        >
          {children}
        </Suspense>
        <Footer />
      </GlobalProvider>
    </div>
  );
}

export default MainLayout;
