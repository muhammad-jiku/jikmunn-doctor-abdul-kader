'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import SocialSignIn from './SocialSignIn';

function SignIn() {
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
  };

  let signInError;

  return (
    <div className='container mx-auto my-28 p-2 md:p-4 flex flex-col items-center w-full'>
      <h2 className='text-3xl lg:text-5xl font-bold font-lobster text-main tracking-wider'>
        Welcome!!
      </h2>
      <h2 className='text-lg lg:text-xl font-semibold font-oswald text-gray tracking-widest my-2'>
        Please sign in to continue
      </h2>
      <hr className='w-1/3 lg:w-1/4 mb-2 border-2 border-slate-300' />
      <form className='p-1 md:p-4' onSubmit={handleSubmit(onSubmit)}>
        {/* Email */}
        <input
          type='email'
          placeholder='Email'
          className='input input-bordered border-main w-full my-2'
          {...register('email', {
            required: {
              value: true,
              message: 'Email is required',
            },
            pattern: {
              value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
              message: 'Invalid Email',
            },
          })}
        />
        {/* Password */}
        <input
          type='password'
          placeholder='Password'
          className='input input-bordered border-main w-full my-2'
          {...register('password', {
            required: {
              value: true,
              message: 'Password is required',
            },
            minLength: {
              value: 6,
              message: 'Password must be at least six letters',
            },
          })}
        />
        <p className='text-red-500 font-semibold mt-2'>
          {errors.email?.type === 'required' && (
            <span>{errors?.email?.message}</span>
          )}
          {errors.email?.type === 'pattern' && (
            <span>{errors?.email?.message}</span>
          )}
          {errors.password?.type === 'required' && (
            <span>{errors?.password?.message}</span>
          )}
          {errors.password?.type === 'minLength' && (
            <span>{errors?.password?.message}</span>
          )}
          {signInError}
        </p>
        <p
          className='text-gray text-sm text-center cursor-pointer font-bold'
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
        <SocialSignIn />
      </form>
    </div>
  );
}

export default SignIn;
