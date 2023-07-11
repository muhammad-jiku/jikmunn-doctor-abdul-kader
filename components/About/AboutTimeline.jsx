'use client';

import React from 'react';
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
import '../../styles/timeline.css';

function AboutTimeline() {
  return (
    <>
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
            Under the direct supervision of the professor in charge of the Dept.
            of Medicine, Surgery and Obstetrics, Gynecology.
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
          <h3 className='vertical-timeline-element-title'>Creative Director</h3>
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
          <h4 className='vertical-timeline-element-subtitle'>Certification</h4>
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
    </>
  );
}

export default AboutTimeline;
