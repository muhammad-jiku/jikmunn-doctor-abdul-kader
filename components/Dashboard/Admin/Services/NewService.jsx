'use client';

import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

function NewService() {
  const [id, setId] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

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

    const serviceData = {
      id,
      title,
      description,
    };

    console.log(serviceData);
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      toast.success('Service added successfully!!');
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <div className='container mx-auto my-4 p-2 flex flex-col items-center'>
      <h2 className='text-3xl lg:text-5xl font-bold font-lobster text-main tracking-wider mt-2 mb-4'>
        Add Service
      </h2>
      <hr className='w-1/3 lg:w-1/4 mb-2 border-2 border-slate-300' />
      <form className='p-1 md:p-4 w-full' onSubmit={handleSubmit(onSubmit)}>
        {/* ID */}
        <input
          type='text'
          placeholder='ID'
          // value={id}
          defaultValue={id}
          // onChange={(e) => setId(e.target.value)}
          {...register('id', {
            onChange: (e) => setId(e.target.value),
            required: {
              value: true,
              message: 'Please fill up the ID field',
            },
            minLength: {
              value: 2,
              message: 'ID number must be at least two characters',
            },
            maxLength: {
              value: 4,
              message: 'ID number must not exceed four characters',
            },
          })}
          className='input input-bordered border-main w-full my-2'
        />
        {/* Title */}
        <input
          type='text'
          placeholder='Title'
          // value={title}
          defaultValue={title}
          // onChange={(e) => setTitle(e.target.value)}
          {...register('title', {
            onChange: (e) => setTitle(e.target.value),
            required: {
              value: true,
              message: 'Please fill up the Title field',
            },
            minLength: {
              value: 3,
              message: 'Title must be at least three characters',
            },
          })}
          className='input input-bordered border-main w-full my-2'
        />
        {/* Description */}
        <input
          type='text'
          placeholder='Description'
          // value={description}
          defaultValue={description}
          // onChange={(e) => setDescription(e.target.value)}
          {...register('description', {
            onChange: (e) => setDescription(e.target.value),
            required: {
              value: true,
              message: 'Please fill up the Description field',
            },
            minLength: {
              value: 10,
              message: 'Description must be at least ten characters',
            },
          })}
          className='input input-bordered border-main w-full my-2'
        />
        {/* Image */}
        <div className='flex items-center justify-center w-full my-2'>
          <label
            htmlFor='dropzone-file'
            className='flex flex-col items-center justify-center w-full h-64 border-2 border-main border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600'
          >
            <div className='flex flex-col items-center justify-center pt-5 pb-6'>
              <svg
                className='w-8 h-8 mb-4 text-gray'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 20 16'
              >
                <path
                  stroke='currentColor'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2'
                />
              </svg>
              <p className='mb-2 text-xs sm:text-sm text-gray'>
                <span className='font-semibold'>Click to upload</span> or drag
                and drop
              </p>
              <p className='text-xs text-gray'>SVG, PNG, JPG or JPEG</p>
            </div>
            <input id='dropzone-file' type='file' className='hidden' />
          </label>
        </div>

        {/* Error messages */}
        <p className='my-2 text-sm text-red-500 font-semibold'>
          {errors?.id?.type === 'required' && (
            <span>{errors?.id?.message}</span>
          )}
        </p>
        <p className='my-2 text-sm text-red-500 font-semibold'>
          {errors?.id?.type === 'minLength' && (
            <span>{errors?.id?.message}</span>
          )}
        </p>
        <p className='my-2 text-sm text-red-500 font-semibold'>
          {errors?.id?.type === 'maxLength' && (
            <span>{errors?.id?.message}</span>
          )}
        </p>
        <p className='my-2 text-sm text-red-500 font-semibold'>
          {errors?.title?.type === 'required' && (
            <span>{errors?.title?.message}</span>
          )}
        </p>
        <p className='my-2 text-sm text-red-500 font-semibold'>
          {errors?.title?.type === 'minLength' && (
            <span>{errors?.title?.message}</span>
          )}
        </p>
        <p className='my-2 text-sm text-red-500 font-semibold'>
          {errors?.description?.type === 'required' && (
            <span>{errors?.description?.message}</span>
          )}
        </p>
        <p className='my-2 text-sm text-red-500 font-semibold'>
          {errors?.description?.type === 'minLength' && (
            <span>{errors?.description?.message}</span>
          )}
        </p>

        <div className='form-control mt-6'>
          <input
            type='submit'
            className='btn bg-main text-white hover:bg-white hover:text-main hover:border-main uppercase'
            value='add service'
          />
        </div>
      </form>
    </div>
  );
}

export default NewService;
