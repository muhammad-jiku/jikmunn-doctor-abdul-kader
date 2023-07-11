'use client';

import React from 'react';
import mbbsImg from '../../assets/images/certificate_of_MBBS.jpg';
import internImg from '../../assets/images/certificate_of_internship.jpg';
import bmdcImg from '../../assets/images/certificate_of_BMDC.jpg';
import ultraImg from '../../assets/images/certificate_of_ultrasonography.jpg';
import diabetologyImg from '../../assets/images/certificate_of_diabetology.jpg';
import bcsImg from '../../assets/images/certificate_of_BCS.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import '../../styles/globals.css';

function CertificateCard() {
  const data = [
    {
      name: 'MBBS Certificate',
      image: `${mbbsImg?.src}`,
    },
    {
      name: 'Internship Certificate',
      image: `${internImg?.src}`,
    },
    {
      name: 'BMDC Certificate',
      image: `${bmdcImg?.src}`,
    },
    {
      name: 'Certificate in Medical Ultrasound',
      image: `${ultraImg?.src}`,
    },
    {
      name: 'Diabetology Certificate',
      image: `${diabetologyImg?.src}`,
    },
    {
      name: 'BCS Certificate',
      image: `${bcsImg?.src}`,
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
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        modules={[Autoplay, Pagination]}
      >
        {data?.map((certificate, i) => (
          <SwiperSlide key={i}>
            <div className='mx-1 mt-4 mb-24 p-10 drop-shadow-2xl'>
              <img
                src={certificate?.image}
                alt={certificate?.name}
                className='h-28 sm:h-32 md:h-48 w-auto'
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default CertificateCard;
