'use client';

import React from 'react';
import Banner from './Banner/Banner';
import Features from './Features/Features';
import About from './About/About';
import Services from './Services/Services';
import Testimonials from './Testimony/Testimonials';
import Prices from './Prices/Prices';
import Appointment from './Appoinment/Appointment';

function HomeSection() {
  return (
    <>
      <Banner />
      <Features />
      <About />
      <Services />
      <Testimonials />
      <Prices />
      <Appointment />
    </>
  );
}

export default HomeSection;
