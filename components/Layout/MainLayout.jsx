'use client';

import React, { Suspense } from 'react';
import { Navbar, Footer } from '..';

function MainLayout() {
  return (
    <div className='flex flex-col min-h-screen overflow-x-hidden'>
      <Navbar />
      <Suspense fallback={<></>}>{children}</Suspense>
      <Footer />
    </div>
  );
}

export default MainLayout;
