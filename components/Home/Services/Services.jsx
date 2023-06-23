'use client';

import React from 'react';
import ServicesCard from './ServicesCard';
import medicalTreatmentImg from '../../../assets/images/treatment.png';
import emergencyHelpImg from '../../../assets/images/emergency.png';
import regularExaminationImg from '../../../assets/images/examination.png';

function Services() {
  const data = [
    {
      name: 'Medical Treatment',
      description:
        'Management and care of a patient to combat disease or disorder.',
      image: `${medicalTreatmentImg?.src}`,
    },
    {
      name: 'Emergency Help',
      description:
        'We have special equipment to give emergency help if/when necessary.',
      image: `${emergencyHelpImg?.src}`,
    },
    {
      name: 'Regular Examination',
      description: 'Make online appointments for regular health examinations.',
      image: `${regularExaminationImg?.src}`,
    },
  ];

  return (
    <div className='hero min-h-screen mb-4 mt-96 sm:mt-72 lg:mt-48 p-3 flex flex-col justify-center items-center'>
      <h2 className='text-3xl lg:text-5xl font-bold font-lobster text-main tracking-wider'>
        Services
      </h2>
      <h2 className='text-lg lg:text-xl font-semibold font-oswald text-gray tracking-widest my-2'>
        ambulant clinic & emergency
      </h2>
      <hr className='w-1/3 lg:w-1/4 mb-2 border-2 border-slate-300' />
      <div className='flex flex-col container mx-auto my-6 md:flex-row justify-center md:justify-around'>
        {data.map((service, index) => (
          <ServicesCard key={index} service={service} />
        ))}
      </div>
    </div>
  );
}

export default Services;
