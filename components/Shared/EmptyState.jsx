'use client';

import React from 'react';
import Link from 'next/link';
import NotFoundImg from '@/assets/gifs/NotFound.gif';

function EmptyState() {
  return (
    <div className='hero min-h-screen'>
      <div className='hero-content text-center'>
        <div className='max-w-md container mx-auto flex flex-col items-center'>
          <img src={NotFoundImg.src} alt='not found' />
          <h1 className='text-3xl font-bold py-4'>Page is not found!</h1>
          <button className='btn bg-main text-white hover:bg-white hover:text-black hover:border-main mr-2'>
            <Link href={`/`} className=''>
              Go to Home
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default EmptyState;
