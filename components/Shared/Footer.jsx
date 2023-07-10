'use client';

import React from 'react';
import bgImg from '../../assets/images/bg3.jpg';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <div
      className={`hero min-h-[600px] lg:min-h-screen bg-cover bg-no-repeat bg-opacity-80 w-full flex flex-col relative opacity-75`}
      style={{ backgroundImage: `url(${bgImg?.src})` }}
    >
      <div className='container mx-auto my-10 p-4 flex flex-col items-center'>
        <h2 className='text-lg lg:text-xl font-semibold font-oswald text-gray tracking-widest my-2'>
          Subscribe to My Newsletter
        </h2>
        <div className='join my-6'>
          <input
            className='input input-bordered join-item'
            placeholder='Email'
          />
          <button className='btn join-item bg-main text-white border-1 hover:bg-white hover:text-main hover:border-main'>
            Subscribe
          </button>
        </div>
        <hr className='w-1/3 lg:w-1/4 mb-2 border-2 border-slate-300' />
        <p className='text-sm lg:text-lg font-semibold font-oswald text-gray tracking-widest my-2'>
          Copyright © {year} by jikmunn. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
