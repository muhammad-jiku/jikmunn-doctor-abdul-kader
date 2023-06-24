'use client';

import React from 'react';
import healthyImg from '../../../assets/images/healthy-icon.png';
import researchImg from '../../../assets/images/research-icon.png';
import dentalImg from '../../../assets/images/dental-icon.png';
import insuranceImg from '../../../assets/images/umbrella-icon.png';
import labImg from '../../../assets/images/lab-icon.png';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import '../../../styles/globals.css';

// import required modules
import { Autoplay, Pagination } from 'swiper';

function PartnersCard() {
  const data = [
    {
      name: 'United Healthcare',
      image: `${healthyImg?.src}`,
    },
    {
      name: 'Research Lab',
      image: `${researchImg?.src}`,
    },
    {
      name: 'First Dental',
      image: `${dentalImg?.src}`,
    },
    {
      name: 'Umbrella Insurance',
      image: `${insuranceImg?.src}`,
    },
    {
      name: 'Quick Lab',
      image: `${labImg?.src}`,
    },
  ];

  return (
    <div className='p-4'>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        modules={[Autoplay, Pagination]}
      >
        {data?.map((partner, i) => (
          <SwiperSlide key={i}>
            <div className='mx-4 mt-4 mb-10 p-4 flex justify-center items-center border-[1px] border-main drop-shadow-2xl'>
              <img
                src={partner?.image}
                alt={partner?.name}
                className='h-10 w-10 mr-1'
              />
              <p className='text-sm lg:text-md my-4'>{partner?.name}</p>
            </div>{' '}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default PartnersCard;
