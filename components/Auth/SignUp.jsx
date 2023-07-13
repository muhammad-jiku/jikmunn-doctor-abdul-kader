'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';

function SignUp({ setAuthProcess }) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowConfirmPassword = () =>
    setShowConfirmPassword((show) => !show);

  const handleMouseDownPassword = (e) => {
    e.preventDefault();
  };

  const {
    register,
    formState: { errors, isSubmitSuccessful },
    reset,
    handleSubmit,
  } = useForm({
    // resolver: zodResolver(loginSchema),
  });

  const onSubmitHandler = (values) => {
    const userInfo = {
      email: values.email,
      password: values.password,
    };
    console.log(userInfo);
  };

  return (
    <div
      //   sx={{
      //     display: 'flex',
      //     flexDirection: {
      //       xs: 'column',
      //       md: 'row-reverse',
      //     },
      //     justifyContent: 'center',
      //     alignItems: 'center',
      //   }}
      className='flex flex-col justify-center items-center'
    >
      <div
        // sx={{
        //   py: 2,
        //   mx: 2,
        //   mb: {
        //     xs: 0,
        //     md: 8,
        //   },
        //   boxSizing: 'border-box',
        //   display: 'flex',
        //   flexDirection: 'column',
        //   justifyContent: 'center',
        //   alignItems: 'flex-start',
        // }}
        className='flex flex-col justify-center items-start py-2 m-2'
      >
        <h3
          //   variant='span'
          //   color='primary.main'
          //           sx={{ fontSize: '32px', fontWeight: 900 }}
          className='text-xl text-main font-bolder'
        >
          Hello there!
        </h3>
        <h3
          //   variant='span'
          //   textAlign='justify'
          //   sx={{ fontSize: '18px', fontWeight: 700 }}
          className='text-lg font-bold'
        >
          Welcome to{' '}
          <span
            //   color='primary.main'
            className='text-main'
          >
            Dr. Abdul Kader
          </span>
          &apos;s personal website.Here you can have wonderful experience with
          the doctor for your problems!
        </h3>
      </div>
      <form
        // sx={{ py: 2 }}
        // component='form'
        // noValidate
        //       autoComplete='off'
        className='py-2'
        onSubmit={handleSubmit(onSubmitHandler)}
      >
        <input
          //   sx={{ mb: 2 }}
          className='mb-2 w-full'
          label='Email'
          //   fullWidth
          required
          type='email'
          error={!!errors['email']}
          helperText={errors['email'] ? errors['email'].message : ''}
          {...register('email')}
        />
        <input
          //   sx={{ mb: 2 }}
          className='mb-2 w-full'
          label='Password'
          //   fullWidth
          required
          type={showPassword ? 'text' : 'password'}
          //   InputProps={{
          //     endAdornment: (
          //       <InputAdornment position='end'>
          //         <IconButton
          //           aria-label='toggle password visibility'
          //           onClick={handleClickShowPassword}
          //           onMouseDown={handleMouseDownPassword}
          //           edge='end'
          //         >
          //           {showPassword ? <VisibilityOff /> : <Visibility />}
          //         </IconButton>
          //       </InputAdornment>
          //     ),
          //   }}
          placeholder='Password'
          error={!!errors['password']}
          helperText={errors['password'] ? errors['password'].message : ''}
          {...register('password')}
        />
        <input
          //   sx={{ mb: 2 }}
          className='mb-2 w-full'
          label='Confirm Password'
          //   fullWidth
          required
          type={showConfirmPassword ? 'text' : 'password'}
          //   InputProps={{
          //     endAdornment: (
          //       <InputAdornment position='end'>
          //         <IconButton
          //           aria-label='toggle password visibility'
          //           onClick={handleClickShowConfirmPassword}
          //           onMouseDown={handleMouseDownPassword}
          //           edge='end'
          //         >
          //           {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
          //         </IconButton>
          //       </InputAdornment>
          //     ),
          //   }}
          placeholder='Confirm Password'
          error={!!errors['passwordConfirm']}
          helperText={
            errors['passwordConfirm'] ? errors['passwordConfirm'].message : ''
          }
          {...register('passwordConfirm')}
        />
        <Link href={'/password/forgot'} style={{ textDecoration: 'none' }}>
          <span
            // sx={{
            //   display: 'flex',
            //   justifyContent: 'flex-end',
            // }}
            // variant='span'
            //           color='text.secondary'
            className='flex justify-end'
          >
            Forget Password?
          </span>
        </Link>
        <button
          //   variant='contained'
          //   fullWidth
          type='submit'
          //   sx={{
          //     py: '0.8rem',
          //     mt: '1rem',
          //           }}
          className='w-full py-2 mt-1'
        >
          Sign up
        </button>{' '}
        <h4
          //   sx={{
          //     mt: 1.5,
          //     fontSize: '14px',
          //     fontWeight: 700,
          //     display: 'flex',
          //     justifyContent: 'center',
          //   }}
          //   variant='span'
          //           color='text.secondary'
          className='mt-2 font-bold flex justify-center'
        >
          New to
          <span className='ml-2 text-main'>
            SportsMania?{' '}
            <span
              //   variant='span'
              //   color='primary'
              //               sx={{ cursor: 'pointer' }}
              className='cursor-pointer text-main'
              onClick={() => setAuthProcess('login')}
            >
              Click Here!
            </span>
          </span>
        </h4>
      </form>
    </div>
  );
}

export default SignUp;
