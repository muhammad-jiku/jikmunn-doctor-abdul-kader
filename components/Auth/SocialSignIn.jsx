'use client';

import React from 'react';
import { FcGoogle } from 'react-icons/fc';

function SocialSignIn() {
  return (
    <>
      <div className='divider mb-2'>OR</div>
      <button className='btn text-main bg-white border-main hover:text-white hover:bg-main hover:border-main uppercase w-full'>
        Continue with Google <FcGoogle />
      </button>
    </>
  );
}

export default SocialSignIn;
