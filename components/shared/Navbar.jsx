'use client';

import React, { useState } from 'react';
import Hamburger from 'hamburger-react';
import logoImg from '../../assets/images/logo.png';
import Image from 'next/image';
// import { BiMobile } from 'react-icons/bi';
import { IoLocation, IoCall } from 'react-icons/io5';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = (
    <>
      <li>
        <a>Home</a>
      </li>
      <li>
        <a>About</a>
      </li>
      <li>
        <a>Services</a>
      </li>
      <li>
        <a>Prices</a>
      </li>
      <li>
        <a>Blogs</a>
      </li>
      <li>
        <a>Contacts</a>
      </li>
    </>
  );

  return (
    <div className='navbar bg-base-100'>
      <div className='navbar-start'>
        <Image src={logoImg.src} alt='logo' width={50} height={50} />
        <div className='ml-2 hidden md:flex md:flex-col'>
          <h1 className='text-xl font-lobster leading-none'>Dr. Abdul Kader</h1>
          <h1 className='text-sm font-oswald leading-none text-gray-400'>
            family doctor near you
          </h1>
        </div>
      </div>
      <div className='navbar-center hidden lg:flex'>
        {/* <div className='hidden lg:flex'> */}
        <ul className='menu menu-horizontal px-1'>
          <li>
            <a>
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

        <div className='avatar mx-2'>
          <div className='w-10 h-10 rounded-full ring ring-main ring-offset-base-100 ring-offset-2'>
            <img src={logoImg.src} alt='avatar' />
          </div>
        </div>
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
              className='menu menu-md dropdown-content mt-3 ml-4 p-3 box-border shadow bg-base-100 rounded-box w-screen h-screen'
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
