'use client';

import React, { useState } from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';

function Auth() {
  const [authProcess, setAuthProcess] = useState('login');

  const handleChange = (e, newAuthProcess) => {
    setAuthProcess(newAuthProcess);
  };

  return (
    <div
      // sx={{
      //   display: 'flex',
      //   justifyContent: 'center',
      //   alignItems: 'center',
      //   minHeight: '100vh',
      // }}
      className='min-h-screen flex justify-center items-center'
    >
      <div
        // sx={{
        //   p: 2,
        //   width: '100%',
        //   typography: 'body1',
        // }}
        className='w-full p-2'
      >
        <div className='tabs tabs-boxed' value={authProcess}>
          <div sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <div onChange={handleChange} aria-label='lab API tabs example'>
              <a className='tab' label='Signin' value='login' />
              <a className='tab' label='Signup' value='registration' />
            </div>
          </div>
          <div className='tabs tabs-boxed' value={authProcess}>
            {authProcess === 'login' ? (
              <SignIn setAuthProcess={setAuthProcess} />
            ) : (
              <SignUp setAuthProcess={setAuthProcess} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;
