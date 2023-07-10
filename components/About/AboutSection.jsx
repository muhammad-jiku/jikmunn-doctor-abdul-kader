'use client';

import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import bgImg from '../../assets/images/bg1.jpeg';
import myImg from '../../assets/images/me.png';
import { CustomBanner } from '..';

function AboutSection() {
  const bannerData = {
    heading: 'About Me',
    subHeading1: 'About Me',
    subHeading2: '',
    image: `${bgImg?.src}`,
  };

  return (
    <>
      <CustomBanner data={bannerData} />
      <div className='mt-2 min-h-screen'>
        <div className='container mx-auto my-2 p-10 flex flex-col justify-center items-center'>
          <h2 className='text-3xl lg:text-5xl font-bold font-lobster text-main tracking-wider'>
            My Story
          </h2>
          <h2 className='text-lg lg:text-xl font-semibold font-oswald text-gray tracking-widest my-2'>
            explore my timeline
          </h2>
          <hr className='w-1/3 lg:w-1/4 mb-2 border-2 border-slate-300' />
          <div className='flex flex-col w-full lg:flex-row justify-center items-center container mx-auto my-10'>
            <div className='grid flex-grow card place-items-center w-full lg:w-1/2'>
              <img className='mask mask-circle h-56 w-48' src={myImg.src} />
            </div>
            <div className='divider lg:divider-horizontal'></div>
            <div className='grid flex-grow card place-items-start w-full lg:w-1/2 p-2 lg:p-10'>
              <p className='p-6 text-justify text-sm lg:text-lg'>
                Hello there, I am{' '}
                <span className='text-main'>
                  Dr. Muhammad Abdul Kader Pintu
                </span>
                . Welcome to my portfolio. I&apos;ve designed and developed web
                applications with HTML5, CSS3, JavaScript, Bootstrap, Tailwind
                CSS, ReactJS, NodeJS, ExpressJS, MongoDB for 3+ years. I am also
                accomplished in tools like Netlify, Heroku, Firebase, Git,
                Github, Figma, Canvas, and Chrome Dev Tools.
              </p>

              <p className='p-6 text-justify text-sm lg:text-lg'>
                I&apos;ve also built web applications with StripeJS, React
                Stripe, React-firebase-hooks, React-router, React-bootstrap, and
                DaisyUI. I love to work with MERN Stack. I like to call myself
                &ldquo;a passionate MERN Stack Web Developer&rdquo;. In my spare
                time, I watch Football, Movies.
              </p>

              <div className='p-6'>
                <a
                  href='https://www.facebook.com/ak.pin2'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <button className='btn btn-circle btn-sm md:btn-md mr-2 hover:bg-info hover:text-white'>
                    <FaFacebookF className='text-lg md:text-2xl' />
                  </button>
                </a>
                <a
                  href='https://www.instagram.com/abdulkaderpintu/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <button className='btn btn-circle btn-sm md:btn-md mr-2 hover:bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:text-white'>
                    <FaInstagram className='text-lg md:text-2xl' />
                  </button>
                </a>

                <a
                  href='https://www.linkedin.com/in/dr-abdul-kader-3297b3124/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <button className='btn btn-circle btn-sm md:btn-md mr-2 hover:bg-info hover:text-white'>
                    <FaLinkedinIn className='text-lg md:text-2xl' />
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutSection;
