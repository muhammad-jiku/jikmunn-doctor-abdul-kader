'use client';

import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '@/context/AuthContext';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

function UpdateUser() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');

  const { user, error, clearErrors } = useContext(AuthContext);

  const roles = ['admin', 'user'];

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
    // setUsername(data?.username);
    // setEmail(data?.email);
    // setPhone(data?.phone);
    // setCountry(data?.country);
    // setState(data?.state);
    // setCity(data?.city);
    // setAddress(data?.address);

    const updatedUserRole = {
      username,
      email,
      role,
    };

    console.log(updatedUserRole);
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      toast.success('User role has been updated!!');
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  useEffect(() => {
    if (error) {
      toast.error(error);
      clearErrors();
    }
  }, [error, clearErrors]);

  return (
    <div className='container mx-auto my-4 p-2 flex flex-col items-center'>
      <h2 className='text-3xl lg:text-5xl font-bold font-lobster text-main tracking-wider mt-2 mb-4'>
        Update User Role
      </h2>
      <hr className='w-1/3 lg:w-1/4 mb-2 border-2 border-slate-300' />
      <form className='p-1 md:p-4 w-full' onSubmit={handleSubmit(onSubmit)}>
        {/* Username */}
        <input
          type='text'
          placeholder='Username'
          // value={username}
          defaultValue={user?.username}
          // onChange={(e) => setUsername(e.target.value)}
          {...register('username', {
            onChange: (e) => setUsername(e.target.value),
            required: {
              value: true,
              message: 'Please fill up the Username field',
            },
            minLength: {
              value: 3,
              message: 'Username must be at least three characters',
            },
          })}
          className='input input-bordered border-main w-full my-2'
        />
        {/* Email */}
        <input
          type='email'
          placeholder='Email'
          // value={email}
          defaultValue={user?.email}
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

        {/* Role */}
        <select
          // label={'Role'}
          // value={user?.role}
          defaultValue={user?.role}
          // onChange={(e) => setRole(e.target.value)}
          className='select border-main w-full my-2'
          {...register('role', {
            onChange: (e) => setRole(e.target.value),
            required: {
              value: true,
              message: 'Please select user role',
            },
          })}
        >
          {roles.map((role, idx) => (
            <option
              key={idx}
              value={role}
              // label={'Country'}
              placeholder={'User Role'}
            >
              {role}
            </option>
          ))}
        </select>

        {/* Error messages */}
        <p className='my-2 text-sm text-red-500 font-semibold'>
          {errors?.username?.type === 'required' && (
            <span>{errors?.username?.message}</span>
          )}
        </p>
        <p className='my-2 text-sm text-red-500 font-semibold'>
          {errors?.username?.type === 'minLength' && (
            <span>{errors?.username?.message}</span>
          )}
        </p>
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
          {errors?.role?.type === 'required' && (
            <span>{errors?.role?.message}</span>
          )}
        </p>

        <div className='form-control mt-6'>
          <input
            type='submit'
            className='btn bg-main text-white hover:bg-white hover:text-main hover:border-main uppercase'
            value='update user role'
          />
        </div>
      </form>
    </div>
  );
}

export default UpdateUser;
