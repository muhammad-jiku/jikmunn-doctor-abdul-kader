'use client';

import React, { useContext, useEffect, useState } from 'react';
import Hamburger from 'hamburger-react';
import logoImg from '../../assets/images/logo.png';
import Image from 'next/image';
import { IoLocation, IoCall } from 'react-icons/io5';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { signOut, useSession } from 'next-auth/react';
import AuthContext from '@/context/AuthContext';

function Navbar() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const { data: session } = useSession();
  const { user, setUser } = useContext(AuthContext);

  console.log('data session', session);
  console.log('data user', user);

  useEffect(() => {
    if (session) {
      setUser(session?.user);
    }
  }, [session, setUser]);

  const signOutHandler = async () => {
    router.push('/');
    await signOut();
  };

  const menuItems = (
    <>
      <li>
        <Link href={'/about'} className='hover:bg-white hover:text-main'>
          About
        </Link>
      </li>
      <li>
        <Link href={'/services'} className='hover:bg-white hover:text-main'>
          Services
        </Link>
      </li>
      <li>
        <Link href={'/prices'} className='hover:bg-white hover:text-main'>
          Prices
        </Link>
      </li>
      {/* <li>
        <Link href={'/blogs'} className='hover:bg-white hover:text-main'>
          Blogs
        </Link>
      </li> */}
      <li>
        <Link href={'/contacts'} className='hover:bg-white hover:text-main'>
          Contacts
        </Link>
      </li>
      {!user ? (
        <li>
          <Link href={'/signin'} className='hover:bg-white hover:text-main'>
            Sign in
          </Link>
        </li>
      ) : (
        <button
          className='btn bg-main text-white hover:bg-white hover:text-black hover:border-main mr-2 flex uppercase'
          onClick={signOutHandler}
        >
          <span>sign out</span>
        </button>
      )}
    </>
  );

  return (
    <div className='navbar bg-base-100'>
      <div className='navbar-start'>
        <Link href={'/'}>
          <Image src={logoImg.src} alt='logo' width={50} height={50} />
        </Link>
        <div
          className='ml-2 hidden md:flex md:flex-col cursor-pointer'
          onClick={() => router.push('/')}
        >
          <h1 className='text-xl font-lobster leading-none'>Dr. Abdul Kader</h1>
          <h1 className='text-sm font-oswald leading-none text-gray'>
            family doctor near you
          </h1>
        </div>
      </div>
      <div className='navbar-center hidden lg:flex'>
        {/* <div className='hidden lg:flex'> */}
        <ul className='menu menu-horizontal px-1'>
          <li>
            <a className='hover:bg-white hover:text-main'>
              <IoLocation className='mr-1' />
              <span className='text-sm'>
                310 Razzak Complex, SSK Road, Feni
              </span>
            </a>
          </li>
          {menuItems}
        </ul>
        {/* </div> */}
      </div>
      <div className='navbar-end'>
        <button className='btn bg-main text-white hover:bg-white hover:text-black hover:border-main mr-2 hidden lg:flex'>
          <IoCall /> <span>+880 183 227 8260</span>
        </button>

        {user && (
          <div className='avatar mx-2'>
            <div className='w-10 h-10 rounded-full ring ring-main ring-offset-base-100 ring-offset-2'>
              <img src={logoImg.src} alt='avatar' />
            </div>
          </div>
        )}
        <div className='dropdown dropdown-bottom dropdown-end lg:hidden'>
          <label tabIndex={-1}>
            <Hamburger
              hideOutline={false}
              size={20}
              distance='sm'
              // color='#4FD1C5'
              onToggle={(toggled) => {
                if (toggled) {
                  setIsOpen(true);
                } else {
                  setIsOpen(false);
                }
              }}
              tabIndex={-1}
            />
          </label>

          {isOpen && (
            <ul
              tabIndex={-1}
              className='menu menu-md dropdown-content mt-3 ml-4 p-3 box-border shadow bg-main rounded-box w-screen h-screen z-50'
            >
              {menuItems}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
