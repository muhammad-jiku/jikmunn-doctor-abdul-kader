'use client';

import React from 'react';
import { FcGoogle } from 'react-icons/fc';

function SocialSignIn() {
  return (
    <>
      <button
        className='btn text-main bg-white hover:text-white hover:bg-main hover:border-main uppercase w-full'
        label='Continue with Google'
        icon={FcGoogle}
      />
    </>
  );
}

export default SocialSignIn;
