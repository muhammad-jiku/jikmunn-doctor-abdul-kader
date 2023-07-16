'use client';

import { parseCallbackUrl } from '@/utils/helpers';
import { signIn } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation';
import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { toast } from 'react-toastify';

function SocialSignIn() {
  const router = useRouter();
  const params = useSearchParams();
  const callBackUrl = params.get('callbackUrl');

  const handleGoogleLogin = async () => {
    console.log('google sign in');
    try {
      const data = await signIn('google', {
        callbackUrl: callBackUrl ? parseCallbackUrl(callBackUrl) : '/',
      });

      if (data?.error) {
        toast.error(data?.error);
      }
      if (data?.ok) {
        router.push('/');
      }
    } catch (err) {
      toast.error(err?.message);
      console.log('google error => ', err);
    }
  };

  return (
    <>
      <div className='divider mb-2'>OR</div>
      <button
        className='btn text-main bg-white border-main hover:text-white hover:bg-main hover:border-main uppercase w-full'
        onClick={handleGoogleLogin}
      >
        Continue with Google <FcGoogle />
      </button>
    </>
  );
}

export default SocialSignIn;
