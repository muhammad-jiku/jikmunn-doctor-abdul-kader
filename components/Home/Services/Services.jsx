'use client';

import React from 'react';
import ServicesCard from './ServicesCard';
import diabeteseImg from '../../../assets/images/diabetes.jpg';
import asthmaImg from '../../../assets/images/asthma2.jpg';
import strokeImg from '../../../assets/images/stroke2.jpg';
import skinImg from '../../../assets/images/skin.jpg';
import newbornImg from '../../../assets/images/newborn.jpg';
import emergencyImg from '../../../assets/images/emergency247.jpg';

function Services() {
  const data = [
    {
      id: '01',
      name: 'Medical Treatment',
      description:
        'Management and care of a patient to combat disease or disorder.',
      image: `${diabeteseImg?.src}`,
    },
    {
      id: '02',
      name: 'Emergency Help',
      description:
        'We have special equipment to give emergency help if/when necessary.',
      image: `${asthmaImg?.src}`,
    },
    {
      id: '03',
      name: 'Regular Examination',
      description: 'Make online appointments for regular health examinations.',
      image: `${strokeImg?.src}`,
    },
    // {
    //   id: '04',
    //   name: 'Medical Treatment',
    //   description:
    //     'Management and care of a patient to combat disease or disorder.',
    //   image: `${skinImg?.src}`,
    // },
    // {
    //   id: '05',
    //   name: 'Emergency Help',
    //   description:
    //     'We have special equipment to give emergency help if/when necessary.',
    //   image: `${newbornImg?.src}`,
    // },
    // {
    //   id: '06',
    //   name: 'Regular Examination',
    //   description: 'Make online appointments for regular health examinations.',
    //   image: `${emergencyImg?.src}`,
    // },
  ];

  return (
    <div className='container mx-auto my-10 min-h-screen mb-4 mt-96 sm:mt-72 lg:mt-48 p-3 flex flex-col justify-center items-center'>
      <h2 className='text-3xl lg:text-5xl font-bold font-lobster text-main tracking-wider'>
        Services
      </h2>
      <h2 className='text-lg lg:text-xl font-semibold font-oswald text-gray tracking-widest my-2'>
        ambulant clinic & emergency
      </h2>
      <hr className='w-1/3 lg:w-1/4 mb-2 border-2 border-slate-300' />
      <div className='flex flex-col lg:flex-row justify-center md:justify-around container mx-auto my-6 '>
        {data.map((service, index) => (
          <ServicesCard key={index} service={service} />
        ))}
      </div>
    </div>
  );
}

export default Services;
