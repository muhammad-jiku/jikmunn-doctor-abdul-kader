'use client';

import React from 'react';
import bgImg from '../../assets/images/bg1.jpeg';
import firstAppointmentImg from '../../assets/images/first-appointment.jpg';
import followUpAppointmentImg from '../../assets/images/follow-up-appointment.jpg';
import weAcceptImg from '../../assets/images/we-accept.jpg';
import { CustomBanner, CustomPriceCard } from '..';

const PricesSection = () => {
  const bannerData = {
    heading: 'Our Prices',
    subHeading1: 'All Prices',
    subHeading2: '',
    image: `${bgImg?.src}`,
  };

  const prices = [
    {
      name: 'First Appointment',
      description: [
        'Medical History',
        'Physical Exam',
        'Diagnosis & Prescription',
      ],
      price: '150',
      image: `${firstAppointmentImg?.src}`,
    },
    {
      name: 'Follow-up Appointment',
      description: [
        'Medical History',
        'Physical Exam',
        'Diagnosis & Prescription',
      ],
      price: '120',
      image: `${followUpAppointmentImg?.src}`,
    },
    {
      name: 'We Accept',
      description: [
        'Medical History',
        'Physical Exam',
        'Diagnosis & Prescription',
      ],
      price: 'Insurance',
      image: `${weAcceptImg?.src}`,
    },
  ];

  return (
    <>
      <CustomBanner data={bannerData} />
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 container mx-auto my-10'>
        {prices.map((price, index) => (
          <CustomPriceCard key={index} price={price} />
        ))}
      </div>
    </>
  );
};

export default PricesSection;
