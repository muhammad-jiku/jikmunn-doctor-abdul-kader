'use client';

import React from 'react';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import bpCheckingImg from '../../../assets/images/bpCheckinggg.jpg';
import TestimonialsCard from './TestimonialsCard';

function Testimonials() {
  return (
    // <div className={`hero min-h-screen w-full flex flex-col mt-80`}>
    <div className='hero min-h-screen w-full mt-80 p-10 mx-4 mb-4 flex flex-col lg:flex-row justify-center lg:justify-around items-center'>
      <div
        className='min-h-screen w-full bg-cover bg-no-repeat flex flex-col container m-auto p-4 box-border'
        style={{ backgroundImage: `url(${bpCheckingImg?.src})` }}
      >
        {/*  */}
        <div className='flex flex-col justify-start'>
          <h2 className='text-3xl lg:text-5xl text-main font-bold font-lobster my-4 tracking-widest'>
            Testimonials
          </h2>
          <hr className='w-1/2 mb-2 border-2 border-main' />
          <FaQuoteLeft className='text-7xl text-white mt-8 mb-0 mr-0' />
          <div className='mt-8 p-4 drop-shadow-xl glass'>
            <TestimonialsCard />
          </div>
          <FaQuoteRight className='text-7xl text-white my-8 ml-auto mr-0' />
        </div>
      </div>
    </div>
    // </div>
  );
}

export default Testimonials;
