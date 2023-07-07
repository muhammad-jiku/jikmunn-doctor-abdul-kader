'use client';

import React from 'react';
import bgImg from '../../assets/images/bg2.jpg';
import diabeteseImg from '../../assets/images/diabetes.jpg';
import asthmaImg from '../../assets/images/asthma2.jpg';
import strokeImg from '../../assets/images/stroke2.jpg';
import skinImg from '../../assets/images/skin.jpg';
import newbornImg from '../../assets/images/newborn.jpg';
import emergencyImg from '../../assets/images/emergency247.jpg';
import { CustomBanner } from '..';
import ServicesCard from '../Home/Services/ServicesCard';

function ServicesSection() {
  const bannerData = {
    heading: 'Our Services',
    subHeading1: 'All Services',
    subHeading2: '',
    image: `${bgImg?.src}`,
  };

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
    {
      id: '04',
      name: 'Skin Care',
      description:
        'For patients’ convenience, we take every step to guarantee our patients the most effective care for skin.',
      image: `${skinImg?.src}`,
    },
    {
      id: '05',
      name: 'New Born Care',
      description:
        'Management and care of a patient to combat disease or disorder.',
      image: `${newbornImg?.src}`,
    },
    {
      id: '06',
      name: 'Emergency Services',
      description:
        'We have special equipment to provide emergency help when it is necessary.',
      image: `${emergencyImg?.src}`,
    },
  ];

  return (
    <>
      <CustomBanner data={bannerData} />
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 container mx-auto my-10'>
        {services.map((service, index) => (
          <ServicesCard key={index} service={service} />
        ))}
      </div>
    </>
  );
}

export default ServicesSection;
