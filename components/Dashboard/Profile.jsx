'use client';

import React, { useState, useEffect, useContext } from 'react';
import AuthContext from '@/context/AuthContext';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { Country, State } from 'country-state-city';
import profileImg from '../../assets/images/default_profile_avatar.png';
import { FaUser } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { BsCalendar2Date } from 'react-icons/bs';

function Profile() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [address, setAddress] = useState('');

  const { user, error, clearErrors } = useContext(AuthContext);

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

    const updatedData = {
      username,
      email,
      phone,
      country,
      state,
      city,
      address,
    };

    console.log(updatedData);
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      toast.success('Your profile has been updated!!');
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
    // <div className='container mx-auto my-4 p-4'>
    //   <figure className='flex items-start sm:items-center'>
    //     <div className='relative'>
    //       <img
    //         loading='lazy'
    //         className='w-16 h-16 rounded-full mr-4'
    //         src={user?.avatar ? user?.avatar?.url : profileImg.src}
    //         alt={user?.name}
    //       />
    //     </div>
    //     <figcaption>
    //       <h5 className='font-semibold text-lg'>{user?.name}</h5>
    //       <p>
    //         <b>Email:</b> {user?.email} | <b>Joined On:</b>
    //         {String(user?.createdAt).substr(0, 10)}
    //       </p>
    //     </figcaption>
    //   </figure>
    // </div>
    <div className='container mx-auto my-4 p-2 flex flex-col items-center'>
      {/* <h2 className='text-3xl lg:text-5xl font-bold font-lobster text-main tracking-wider'>
        Welcome!!
      </h2> */}
      <h2 className='text-md md:text-lg lg:text-xl font-semibold font-oswald text-gray tracking-widest my-2'>
        My Profile
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
        {/* Phone */}
        <input
          type='tel'
          placeholder='Phone'
          // value={user?.phone}
          defaultValue={user?.phone}
          // onChange={(e) => setUsername(e.target.value)}
          {...register('phone', {
            onChange: (e) => setPhone(e.target.value),
            required: {
              value: true,
              message: 'Please fill up the Phone field',
            },
            minLength: {
              value: 11,
              message: 'Invalid Phone number length',
            },
            maxLength: {
              value: 14,
              message: 'Invalid Phone number length',
            },
          })}
          className='input input-bordered border-main w-full my-2'
        />
        {/* Country */}
        <select
          // label={'Country'}
          // value={user?.country}
          defaultValue={user?.country}
          // onChange={(e) => setCountry(e.target.value)}
          className='select border-main w-full my-2'
          {...register('country', {
            onChange: (e) => setCountry(e.target.value),
            required: {
              value: true,
              message: 'Please Select your country',
            },
            minLength: {
              value: 2,
              message: 'Invalid Country Selection',
            },
            maxLength: {
              value: 100,
              message: 'Invalid Country Selection',
            },
          })}
        >
          {Country &&
            Country.getAllCountries().map((item) => (
              <option
                key={item?.isoCode}
                value={item?.isoCode}
                // label={'Country'}
                placeholder={'Country'}
              >
                {item?.name}
              </option>
            ))}
        </select>
        {/* State */}
        {country && (
          <select
            // label={'State'}
            placeholder={'State'}
            // value={user?.state}
            defaultValue={user?.state}
            // onChange={(e) => setState(e.target.value)}
            className='select border-main w-full my-2'
            {...register('state', {
              onChange: (e) => setState(e.target.value),
              required: {
                value: true,
                message: 'Please Select the state of your country',
              },
              minLength: {
                value: 1,
                message: 'Invalid State Selection',
              },
              maxLength: {
                value: 100,
                message: 'Invalid State Selection',
              },
            })}
          >
            {console.log(country)}
            {State?.getStatesOfCountry(country).map((item) => (
              <option
                key={item?.isoCode}
                value={item?.isoCode}
                // label={'State'}
                placeholder={'State'}
              >
                {console.log(item?.name)}
                {console.log(item?.isoCode)}
                {item?.name}
              </option>
            ))}
          </select>
        )}

        {/* City */}
        <input
          type='text'
          placeholder='City'
          // value={user?.city}
          defaultValue={user?.city}
          // onChange={(e) => setUsername(e.target.value)}
          {...register('city', {
            onChange: (e) => setCity(e.target.value),
            required: {
              value: true,
              message: 'Please fill up the City field',
            },
            minLength: {
              value: 2,
              message: 'City must be at least two characters',
            },
            maxLength: {
              value: 100,
              message: 'City must be not exceed hundred characters',
            },
          })}
          className='input input-bordered border-main w-full my-2'
        />
        {/* Address */}
        <input
          type='text'
          placeholder='Address'
          // value={user?.address}
          defaultValue={user?.address}
          // onChange={(e) => setUsername(e.target.value)}
          {...register('address', {
            onChange: (e) => setAddress(e.target.value),
            required: {
              value: true,
              message: 'Please fill up the Address field',
            },
            minLength: {
              value: 10,
              message: 'Address must be at least ten characters',
            },
            maxLength: {
              value: 100,
              message: 'Address must be not exceed hundred characters',
            },
          })}
          className='input input-bordered border-main w-full my-2'
        />
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
          {errors?.phone?.type === 'required' && (
            <span>{errors?.phone?.message}</span>
          )}
        </p>
        <p className='my-2 text-sm text-red-500 font-semibold'>
          {errors?.phone?.type === 'minLength' && (
            <span>{errors?.phone?.message}</span>
          )}
        </p>
        <p className='my-2 text-sm text-red-500 font-semibold'>
          {errors?.phone?.type === 'maxLength' && (
            <span>{errors?.phone?.message}</span>
          )}
        </p>
        <p className='my-2 text-sm text-red-500 font-semibold'>
          {errors?.country?.type === 'required' && (
            <span>{errors?.country?.message}</span>
          )}
        </p>
        <p className='my-2 text-sm text-red-500 font-semibold'>
          {errors?.country?.type === 'minLength' && (
            <span>{errors?.country?.message}</span>
          )}
        </p>
        <p className='my-2 text-sm text-red-500 font-semibold'>
          {errors?.country?.type === 'maxLength' && (
            <span>{errors?.country?.message}</span>
          )}
        </p>
        <p className='my-2 text-sm text-red-500 font-semibold'>
          {errors?.state?.type === 'required' && (
            <span>{errors?.state?.message}</span>
          )}
        </p>
        <p className='my-2 text-sm text-red-500 font-semibold'>
          {errors?.state?.type === 'minLength' && (
            <span>{errors?.state?.message}</span>
          )}
        </p>
        <p className='my-2 text-sm text-red-500 font-semibold'>
          {errors?.state?.type === 'maxLength' && (
            <span>{errors?.state?.message}</span>
          )}
        </p>
        <p className='my-2 text-sm text-red-500 font-semibold'>
          {errors?.city?.type === 'required' && (
            <span>{errors?.city?.message}</span>
          )}
        </p>
        <p className='my-2 text-sm text-red-500 font-semibold'>
          {errors?.city?.type === 'minLength' && (
            <span>{errors?.city?.message}</span>
          )}
        </p>
        <p className='my-2 text-sm text-red-500 font-semibold'>
          {errors?.city?.type === 'maxLength' && (
            <span>{errors?.city?.message}</span>
          )}
        </p>
        <p className='my-2 text-sm text-red-500 font-semibold'>
          {errors?.address?.type === 'required' && (
            <span>{errors?.address?.message}</span>
          )}
        </p>
        <p className='my-2 text-sm text-red-500 font-semibold'>
          {errors?.address?.type === 'minLength' && (
            <span>{errors?.address?.message}</span>
          )}
        </p>
        <p className='my-2 text-sm text-red-500 font-semibold'>
          {errors?.address?.type === 'maxLength' && (
            <span>{errors?.address?.message}</span>
          )}
        </p>

        <div className='form-control mt-6'>
          <input
            type='submit'
            className='btn bg-main text-white hover:bg-white hover:text-main hover:border-main uppercase'
            value='update profile'
          />
        </div>
      </form>
    </div>
  );
}

export default Profile;
