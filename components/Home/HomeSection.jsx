'use client';

import React from 'react';
import Banner from './Banner/Banner';
import Features from './Features/Features';
import About from './About/About';
import Testimonials from './Testimony/Testimonials';

function HomeSection() {
  return (
    <>
      <Banner />
      <Features />
      <About />
      <Testimonials />
    </>
  );
}

export default HomeSection;
