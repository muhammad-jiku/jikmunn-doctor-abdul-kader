'use client';

import React, { useState } from 'react';
import Hamburger from 'hamburger-react';
import logoImg from '../../assets/images/logo.png';
import Image from 'next/image';
import { IoLocation } from 'react-icons/io5';

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
        <a>Contact</a>
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
      <div className='navbar-center'>
        <div className='hidden lg:flex'>
          <ul className='menu menu-horizontal px-1'>
            <li>
              <a>
                <IoLocation className='mr-1' />{' '}
                <span className='text-sm'>
                  310 Razzak Complex, SSK Road, Feni
                </span>
              </a>
            </li>
            {menuItems}
          </ul>
        </div>
      </div>
      <div className='navbar-end'>
        <a className='btn mr-2'>Button</a>
        <div className='dropdown dropdown-bottom dropdown-end lg:hidden'>
          <Hamburger
            hideOutline={false}
            distance='sm'
            // color='#4FD1C5'
            onToggle={(toggled) => {
              if (toggled) {
                setIsOpen(true);
              } else {
                setIsOpen(false);
              }
            }}
            // className='lg:hidden'
          />
          {isOpen && (
            <ul className='menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'>
              {menuItems}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
