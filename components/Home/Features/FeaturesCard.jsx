'use client';

import React from 'react';
import { BsArrowRight } from 'react-icons/bs';

function FeaturesCard({ feature }) {
  return (
    <div className=' bg-white p-10 drop-shadow-2xl m-4'>
      <div className='flex flex-col items-center'>
        <img
          src={feature?.image}
          alt='Shoes'
          className='rounded-xl h-24 w-24'
        />
        <h2 className='text-xl md:text-2xl text-center my-2'>
          {feature?.name}
        </h2>{' '}
        <hr className='w-1/2 mb-2   border-slate-300' />
        <div className='py-2 box-border'>
          <p className='text-gray text-justify my-2 text-sm md:text-lg'>
            {feature?.description}
          </p>
        </div>
        <button className='btn bg-main text-white hover:bg-white hover:text-black hover:border-main my-2'>
          Learn More <BsArrowRight className='ml-1 font-bold' />
        </button>
      </div>
    </div>
  );
}

export default FeaturesCard;
