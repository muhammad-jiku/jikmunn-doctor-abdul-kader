'use client';

import React from 'react';
import loaderImg from '../../assets/gifs/loadin.gif';

function Loader() {
  return (
    <div className='hero min-h-screen'>
      <div className='hero-content text-center'>
        <div className='max-w-md container mx-auto flex flex-col items-center'>
          <img src={loaderImg.src} alt='loader' />
        </div>
      </div>
    </div>
  );
}

export default Loader;
