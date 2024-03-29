'use client';

import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import SocialSignIn from './SocialSignIn';
import { toast } from 'react-toastify';
import { signIn } from 'next-auth/react';
import { parseCallbackUrl } from '@/utils/helpers';
import { useRouter, useSearchParams } from 'next/navigation';

function SignIn() {
  const router = useRouter();
  const params = useSearchParams();
  const callBackUrl = params.get('callbackUrl');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowConfirmPassword = () =>
    setShowConfirmPassword((show) => !show);

  const {
    register,
    formState: { errors, isSubmitSuccessful },
    reset,
    handleSubmit,
  } = useForm({
    // resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data) => {
    console.log(data);
    // setEmail(data?.email);
    // setPassword(data?.password);
    // setConfirmPassword(data?.confirmPassword);
    console.log({ email, password, confirmPassword });

    if (data?.password === data?.confirmPassword) {
      const signInData = await signIn('credentials', {
        email: data?.email,
        password: data?.password,
        callbackUrl: callBackUrl ? parseCallbackUrl(callBackUrl) : '/',
      });

      if (signInData?.error) {
        console.log(signInData?.error);
        toast.error(signInData?.error);
      }

      if (signInData?.ok) {
        toast.success('Thanks for signing in!!');
        router.push('/');
      }
    }
  };

  useEffect(() => {
    if (password === confirmPassword && isSubmitSuccessful) {
      reset();
    }
  }, [password, confirmPassword, isSubmitSuccessful, reset]);

  return (
    <div className='container mx-auto my-28 p-2 md:p-4 flex flex-col items-center'>
      <h2 className='text-3xl lg:text-5xl font-bold font-lobster text-main tracking-wider'>
        Welcome!!
      </h2>
      <h2 className='text-md md:text-lg lg:text-xl font-semibold font-oswald text-gray tracking-widest my-2'>
        Sign in here to continue
      </h2>
      <hr className='w-1/3 lg:w-1/4 mb-2 border-2 border-slate-300' />
      <form className='p-1 md:p-4 w-full' onSubmit={handleSubmit(onSubmit)}>
        {/* Email */}
        <input
          type='email'
          placeholder='Email'
          // value={email}
          defaultValue={email}
          // onChange={(e) => setEmail(e.target.value)}
          {...register('email', {
            onChange: (e) => setEmail(e.target.value),
            required: {
              value: true,
              message: 'Please fill up the Email field',
            },
            pattern: {
              value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
              message: 'Invalid Email',
            },
          })}
          className='input input-bordered border-main w-full my-2'
        />
        {/* Password */}
        <div className='relative'>
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder='Password'
            // value={password}
            defaultValue={password}
            // onChange={(e) => setPassword(e.target.value)}
            {...register('password', {
              onChange: (e) => setPassword(e.target.value),
              required: {
                value: true,
                message: 'Please fill up the Password field',
              },
              minLength: {
                value: 6,
                message: 'Password field must contain at least six characters',
              },
            })}
            className='input input-bordered border-main w-full my-2'
          />
          <span
            className='absolute inset-y-0 right-0 flex items-center px-4 text-gray-600 cursor-pointer'
            onClick={handleClickShowPassword}
          >
            {showPassword ? (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-5 h-5'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88'
                />
              </svg>
            ) : (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-5 h-5'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z'
                />
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
                />
              </svg>
            )}
          </span>
        </div>
        {/* Confirm Password */}
        <div className='relative'>
          <input
            type={showConfirmPassword ? 'text' : 'password'}
            placeholder='Confirm Password'
            // value={confirmPassword}
            defaultValue={confirmPassword}
            // onChange={(e) => setConfirmPassword(e.target.value)}
            {...register('confirmPassword', {
              onChange: (e) => setConfirmPassword(e.target.value),
              required: {
                value: true,
                message: 'Please fill up the Confirm Password field',
              },
              minLength: {
                value: 6,
                message:
                  'Confirm Password field must contain at least six characters',
              },
            })}
            className='input input-bordered border-main w-full my-2'
          />
          <span
            className='absolute inset-y-0 right-0 flex items-center px-4 text-gray-600 cursor-pointer'
            onClick={handleClickShowConfirmPassword}
          >
            {showConfirmPassword ? (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-5 h-5'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88'
                />
              </svg>
            ) : (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-5 h-5'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z'
                />
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
                />
              </svg>
            )}
          </span>
        </div>
        <p className='my-2 text-sm text-red-500 font-semibold'>
          {errors?.email?.type === 'required' && (
            <span>{errors?.email?.message}</span>
          )}
        </p>
        <p className='my-2 text-sm text-red-500 font-semibold'>
          {errors?.email?.type === 'pattern' && (
            <span>{errors?.email?.message}</span>
          )}
        </p>
        <p className='my-2 text-sm text-red-500 font-semibold'>
          {errors?.password?.type === 'required' && (
            <span>{errors?.password?.message}</span>
          )}
        </p>
        <p className='my-2 text-sm text-red-500 font-semibold'>
          {errors?.password?.type === 'minLength' && (
            <span>{errors?.password?.message}</span>
          )}
        </p>
        <p className='my-2 text-sm text-red-500 font-semibold'>
          {errors?.confirmPassword?.type === 'required' && (
            <span>{errors?.confirmPassword?.message}</span>
          )}
        </p>
        <p className='my-2 text-sm text-red-500 font-semibold'>
          {errors?.confirmPassword?.type === 'minLength' && (
            <span>{errors?.confirmPassword?.message}</span>
          )}
        </p>
        <p className='my-2 text-sm text-red-500 font-semibold'>
          {password?.length === confirmPassword?.length
            ? password !== confirmPassword && (
                <span>Ooops! Sorry password did not match</span>
              )
            : null}
        </p>
        <p
          className='text-gray text-sm text-center font-bold cursor-pointer'
          // onClick={handlePasswordReset}
        >
          Forget password?
        </p>
        <div className='form-control mt-6'>
          <input
            type='submit'
            className='btn bg-main text-white hover:bg-white hover:text-main hover:border-main uppercase'
            value='Sign In'
          />
        </div>
      </form>
      <SocialSignIn />
    </div>
  );
}

export default SignIn;
