'use client';

import React, { useContext } from 'react';
import AuthContext from '@/context/AuthContext';
import profileImg from '../../assets/images/default_profile_avatar.png';
import { FaUser } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { BsCalendar2Date } from 'react-icons/bs';

function Profile() {
  const { user } = useContext(AuthContext);

  return (
    <div className='container mx-auto my-4 p-4'>
      <figure className='flex items-start sm:items-center'>
        <div className='relative'>
          <img
            loading='lazy'
            className='w-16 h-16 rounded-full mr-4'
            src={user?.avatar ? user?.avatar?.url : profileImg.src}
            alt={user?.name}
          />
        </div>
        <figcaption>
          <h5 className='font-semibold text-lg'>{user?.name}</h5>
          <p>
            <b>Email:</b> {user?.email} | <b>Joined On:</b>
            {String(user?.createdAt).substr(0, 10)}
          </p>
        </figcaption>
      </figure>
    </div>
  );
}

export default Profile;
