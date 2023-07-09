'use client';

import React, { Suspense } from 'react';
import { Navbar } from '..';

function MainLayout() {
  return (
    <div className='flex flex-col min-h-screen overflow-x-hidden'>
      <Navbar />
      <Suspense fallback={<></>}>{children}</Suspense>
    </div>
  );
}

export default MainLayout;
