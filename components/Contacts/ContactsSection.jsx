'use client';

import React from 'react';
import bgImg from '../../assets/images/bg3.jpg';
import { CustomBanner } from '..';

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
    </>
  );
}

export default ContactsSection;
