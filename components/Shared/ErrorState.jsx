'use client';

import React from 'react';

function ErrorState() {
  return (
    <div className='hero min-h-screen'>
      <div className='hero-content text-center'>
        <div className='max-w-md container mx-auto flex flex-col items-center'>
          <h2 className='text-3xl font-bold py-4'>Something went wrong!</h2>
          <button
            className='btn bg-main text-white hover:bg-white hover:text-black hover:border-main mr-2'
            onClick={(e) => console.log(e)}
          >
            Try Again
          </button>
        </div>
      </div>
    </div>
  );
}

export default ErrorState;
