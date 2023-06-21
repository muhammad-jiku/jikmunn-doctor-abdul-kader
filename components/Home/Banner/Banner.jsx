'use client';

import React from 'react';
import bgImg1 from '../../../assets/images/bg1.jpeg';

function Banner() {
  return (
    <>
      <div
        className={`hero min-h-[600px] lg:min-h-screen bg-cover bg-no-repeat bg-opacity-80 w-full flex flex-col relative opacity-75`}
        // className="hero min-h-screen bg-cover bg-no-repeat w-full flex flex-col"
        style={{ backgroundImage: `url(${bgImg1?.src})` }}
      >
        <div className='w-5/6 lg:w-2/5 glass md:bg-white my-auto p-10'>
          <div className='p-1 sm:p-8'>
            <h1 className='text-2xl lg:text-5xl font-bold mb-2 font-lobster'>
              <span className='text-main font-lobster'>Dr. </span>Abdul Kader
            </h1>
            <h1 className='text-lg lg:text-xl font-semibold text-gray mb-2 font-oswald tracking-widest'>
              professional care for your health
            </h1>
            <div className='w-2/3 mb-2 divider'></div>
          </div>
          <div className='px-1 sm:px-8'>
            <h1 className='text-md text-justify'>
              One of the most esssential qualities of professional doctor is his
              humanity. At our clinic, we take great care of your health, mental
              and physical.
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
