'use client';

import React from 'react';
import bgImg from '../../assets/images/bg1.jpeg';
import myImg from '../../assets/images/me.png';
import '../../styles/timeline.css';
import { CustomBanner, SocialIcons } from '..';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {
  MdWorkOutline,
  MdOutlineSchool,
  MdOutlineStarBorderPurple500,
} from 'react-icons/md';

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
          <div className='flex flex-col w-full items-center container mx-auto my-10'>
            <div className='grid flex-grow card place-items-center'>
              <div className='avatar mx-2'>
                <div className='w-52 rounded-full ring ring-main ring-offset-base-100 ring-offset-2'>
                  <img src={myImg.src} alt='avatar' />
                </div>
              </div>{' '}
              <div className='p-6'>
                <SocialIcons />
              </div>
            </div>
            <div className='divider'></div>
            <div className='grid flex-grow card place-items-start p-0 md:p-2'>
              <p className='p-6 text-justify text-sm lg:text-lg'>
                Hello there, I am{' '}
                <span className='text-main'>Dr. Abdul Kader</span>. Welcome
                here. I completed my M.B.B.S from Cumilla Medical College and
                obtain the degree of Bachelor of Medicine and Bachelor of
                Surgery from the University of Chattogram. After that, I
                completed my scheduled one-year internship training direct
                supervision of the professor in charge of the Dept. of Medicine,
                Surgery and Obstetrics, Gynecology.
              </p>

              <p className='p-6 text-justify text-sm lg:text-lg'>
                I received the certificate of full registration as a medical
                practitioner. And I have then, completed a three-month course of
                Certificate in Medical Ultrasound (C.M.U). I have completed the
                six-month certificate course on the Diabetology under Distine
                Learning Programme (DLP). I Passed the 39th BCS (Health) &
                attended Orientation training developed by DGHS and joined as an
                Assitant Surgeon. In my spare time, I watch Football matches,
                and Movies.
              </p>

              {/* <div className='p-6'>
                <SocialIcons />
              </div> */}
            </div>
          </div>

          <VerticalTimeline lineColor='#000'>
            {/* 1st */}
            <VerticalTimelineElement
              className='vertical-timeline-element--education'
              date='2016'
              iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
              icon={<MdOutlineSchool />}
            >
              <h3 className='vertical-timeline-element-title'>M.B.B.S</h3>
              <h4 className='vertical-timeline-element-subtitle'>
                Cumilla Medical College, Cumilla, Bangladesh
              </h4>
              {/* <p>Strategy, Social Media</p> */}
            </VerticalTimelineElement>
            {/* 2nd */}
            <VerticalTimelineElement
              className='vertical-timeline-element--work'
              date='2016-2017'
              // iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              // icon={<MdWorkOutline />}
              iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
              icon={<MdOutlineSchool />}
            >
              <h3 className='vertical-timeline-element-title'>
                Internship Training Programme
              </h3>
              <h4 className='vertical-timeline-element-subtitle'>
                Cumilla Medical College, Cumilla, Bangladesh
              </h4>
              <p>
                Under the direct supervision of the professor in charge of the
                Dept. of Medicine, Surgery and Obstetrics, Gynecology.
              </p>
            </VerticalTimelineElement>
            {/* 3rd */}
            <VerticalTimelineElement
              className='vertical-timeline-element--work'
              date='2017'
              iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
              icon={<MdOutlineSchool />}
            >
              <h3 className='vertical-timeline-element-title'>B.M.D.C </h3>
              <h4 className='vertical-timeline-element-subtitle'>
                Los Angeles, CA
              </h4>
              <p>User Experience, Visual Design</p>
            </VerticalTimelineElement>
            {/* 4th */}
            <VerticalTimelineElement
              className='vertical-timeline-element--work'
              date='2006 - 2008'
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              icon={<MdWorkOutline />}
            >
              <h3 className='vertical-timeline-element-title'>Web Designer</h3>
              <h4 className='vertical-timeline-element-subtitle'>
                San Francisco, CA
              </h4>
              <p>User Experience, Visual Design</p>
            </VerticalTimelineElement>
            {/* 5th */}
            <VerticalTimelineElement
              className='vertical-timeline-element--work'
              contentStyle={{
                background: 'rgb(33, 150, 243)',
                color: '#fff',
              }}
              contentArrowStyle={{
                borderRight: '7px solid  rgb(33, 150, 243)',
              }}
              date='2011 - present'
              dateClassName='dateInfo'
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              icon={<MdWorkOutline />}
            >
              <h3 className='vertical-timeline-element-title'>
                Creative Director
              </h3>
              <h4 className='vertical-timeline-element-subtitle'>Miami, FL</h4>
              <p>
                Creative Direction, User Experience, Visual Design, Project
                Management, Team Leading
              </p>
            </VerticalTimelineElement>

            {/* 6th */}
            <VerticalTimelineElement
              className='vertical-timeline-element--education'
              date='November 2012'
              iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
              icon={<MdOutlineSchool />}
            >
              <h3 className='vertical-timeline-element-title'>
                Agile Development Scrum Master
              </h3>
              <h4 className='vertical-timeline-element-subtitle'>
                Certification
              </h4>
              <p>Creative Direction, User Experience, Visual Design</p>
            </VerticalTimelineElement>
            {/* 7th */}
            <VerticalTimelineElement
              className='vertical-timeline-element--education'
              date='2002 - 2006'
              iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
              icon={<MdOutlineSchool />}
            >
              <h3 className='vertical-timeline-element-title'>
                Bachelor of Science in Interactive Digital Media Visual Imaging
              </h3>
              <h4 className='vertical-timeline-element-subtitle'>
                Bachelor Degree
              </h4>
              <p>Creative Direction, Visual Design</p>
            </VerticalTimelineElement>
            {/* final */}
            <VerticalTimelineElement
              iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
              icon={<MdOutlineStarBorderPurple500 />}
            />
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
}

export default AboutSection;
