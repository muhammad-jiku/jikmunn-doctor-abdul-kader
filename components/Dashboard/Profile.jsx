'use client';

import React, { useContext } from 'react';
import AuthContext from '@/context/AuthContext';
import profileImg from '../../assets/images/default_profile_avatar.png';

function Profile() {
  const { user } = useContext(AuthContext);

  return (
    <>
      <figure className='flex items-start sm:items-center'>
        <div className='relative'>
          <img
            className='w-16 h-16 rounded-full mr-4'
            src={user?.avatar ? user?.avatar?.url : profileImg?.src}
            alt={user?.name}
          />
        </div>
        <figcaption>
          <h5 className='font-semibold text-lg'>{user?.username}</h5>
          <p>
            <b>Email:</b> {user?.email} | <b>Joined On:</b>
            {String(user?.createdAt).substr(0, 10)}
          </p>
        </figcaption>
      </figure>
    </>
  );
}

export default Profile;
