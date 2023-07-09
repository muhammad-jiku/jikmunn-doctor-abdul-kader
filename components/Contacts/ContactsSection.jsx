'use client';

import React from 'react';
import bgImg from '../../assets/images/bg3.jpg';
import { CustomBanner, CustomLocation } from '..';

function ContactsSection() {
  const bannerData = {
    heading: 'Contacts',
    subHeading1: 'Contacts',
    subHeading2: '',
    image: `${bgImg?.src}`,
  };

  return (
    <>
      <CustomBanner data={bannerData} />
      <div className='mt-2 min-h-screen'>
        <CustomLocation />
      </div>
    </>
  );
}

export default ContactsSection;
