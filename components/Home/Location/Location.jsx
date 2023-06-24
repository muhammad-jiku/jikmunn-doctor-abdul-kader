'use client';

import React from 'react';

function Location() {
  return (
    <div className='mt-2 min-h-screen relative'>
      <iframe
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.422656571529!2d91.39424141496751!3d23.00824858496032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375368305397cec9%3A0xa41cb54e877078f3!2sNew%20Popular%20Diagnostic%20Center%2CFeni!5e0!3m2!1sen!2sbd!4v1687616572566!5m2!1sen!2sbd'
        className='w-full'
        height='600'
        style={{ border: 0 }}
        allowfullscreen={true}
        loading='lazy'
        referrerpolicy='no-referrer-when-downgrade'
      ></iframe>
      <div className='flex justify-center lg:justify-start p-2 container mx-auto lg:mx-0'>
        <div className='p-10 absolute top-64 sm:top-72 lg:top-[150px] bg-white drop-shadow-2xl w-full lg:w-1/2 z-50'>
          <h3 className='text-3xl lg:text-5xl text-main font-bolder font-lobster tracking-wider my-2'>
            Waiting for you
          </h3>
          <h3 className='text-xl lg:text-3xl text-gray font-bolder font-oswald tracking-widest mb-4'>
            310 Razzak Complex, SSK Road, Feni
          </h3>
          <hr className='w-1/3 lg:w-1/4 mb-2 border-2 border-slate-300' />
          <h3 className='text-sm lg:text-lg text-black font-bold tracking-widest mt-4'>
            Sunday - Thursday: 8.00 am - 6.00 pm
          </h3>
          <h3 className='text-sm lg:text-lg text-black font-bold tracking-widest my-2'>
            Saturday: 10.00 am - 3.00 pm
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Location;
