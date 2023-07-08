'use client';

import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import diabeteseImg from '../../../assets/images/diabetes.jpg';
import asthmaImg from '../../../assets/images/asthma2.jpg';
import strokeImg from '../../../assets/images/stroke2.jpg';
import skinImg from '../../../assets/images/skin.jpg';
import newbornImg from '../../../assets/images/newborn.jpg';
import emergencyImg from '../../../assets/images/emergency247.jpg';
import { CustomServiceCard } from '@/components';

function Services() {
  const services = [
    {
      id: '01',
      name: 'Diabetes Treatment',
      description:
        'We consider all the signs and symptoms of a patient to diagnose diabetes.',
      image: `${diabeteseImg?.src}`,
    },
    {
      id: '02',
      name: 'Asthma Diagnose',
      description:
        'We guarantee our patients the most effective treatment for asthma at the clinic.',
      image: `${asthmaImg?.src}`,
    },
    {
      id: '03',
      name: 'Stroke Therapeutic',
      description:
        'We examine the neccessary brain parts of our patients here at our facility to provide best treatment for stroke.',
      image: `${strokeImg?.src}`,
    },
    // {
    //   id: '04',
    //   name: 'Skin Care',
    //   description:
    //     'For patients’ convenience, we take every step to guarantee our patients the most effective care for skin.',
    //   image: `${skinImg?.src}`,
    // },
    // {
    //   id: '05',
    //   name: 'New Born Care',
    //   description:
    //     'Management and care of a patient to combat disease or disorder.',
    //   image: `${newbornImg?.src}`,
    // },
    // {
    //   id: '06',
    //   name: 'Emergency Services',
    //   description:
    //     'We have special equipment to provide emergency help when it is necessary.',
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
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 container mx-auto my-10'>
        {services.map((service, index) => (
          <CustomServiceCard key={index} service={service} />
        ))}
      </div>{' '}
      <h2 className='text-lg lg:text-xl text-gray font-bold my-2 flex justify-center items-center'>
        <span>View All Services</span>
        <BsArrowRight className='ml-2 font-bold' />
      </h2>
    </div>
  );
}

export default Services;
