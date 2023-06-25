'use client';

import React from 'react';
import bgImg from '../../assets/images/bg2.jpg';
import { CustomBanner } from '..';

function ServicesSection() {
  const bannerData = {
    heading: 'Our Services',
    subHeading1: 'All Services',
    subHeading2: '',
    image: `${bgImg?.src}`,
  };
  return (
    <>
      <CustomBanner data={bannerData} />
      ServicesSection
    </>
  );
}

export default ServicesSection;
