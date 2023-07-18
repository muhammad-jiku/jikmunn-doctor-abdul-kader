'use client';

import React, { useContext } from 'react';
import AuthContext from '@/context/AuthContext';
import Link from 'next/link';

function Sidebar() {
  const { user } = useContext(AuthContext);

  return (
    <aside className='md:w-1/3 lg:w-1/4 px-4'>
      <ul>
        <li>
          <Link
            href='/me'
            className='block px-3 py-2 text-gray-800 hover:bg-blue-100 hover:text-blue-500 rounded-md'
          >
            My Profile
          </Link>
        </li>
        <li>
          <Link
            href='/me/orders'
            className='block px-3 py-2 text-gray-800 hover:bg-blue-100 hover:text-blue-500 rounded-md'
          >
            My Appointments
          </Link>
        </li>
        <li>
          <Link
            href='/dashboard/update/profile'
            className='block px-3 py-2 text-gray-800 hover:bg-blue-100 hover:text-blue-500 rounded-md'
          >
            Update Profile
          </Link>
        </li>
        <li>
          <Link
            href='/dashboard/update/password'
            className='block px-3 py-2 text-gray-800 hover:bg-blue-100 hover:text-blue-500 rounded-md'
          >
            Update Password
          </Link>
        </li>
        <hr className='my-2 border-2 border-slate-300' />
        {user?.role === 'admin' && (
          <>
            <li>
              <Link
                href='/admin/products/new'
                className='block px-3 py-2 text-gray-800 hover:bg-blue-100 hover:text-blue-500 rounded-md'
              >
                New Service
              </Link>
            </li>

            <li>
              <Link
                href='/admin/products'
                className='block px-3 py-2 text-gray-800 hover:bg-blue-100 hover:text-blue-500 rounded-md'
              >
                All Services
              </Link>
            </li>

            <li>
              <Link
                href='/admin/users'
                className='block px-3 py-2 text-gray-800 hover:bg-blue-100 hover:text-blue-500 rounded-md'
              >
                All Users
              </Link>
            </li>

            <li>
              <Link
                href='/admin/orders'
                className='block px-3 py-2 text-gray-800 hover:bg-blue-100 hover:text-blue-500 rounded-md'
              >
                All Appointments
              </Link>
            </li>

            <li>
              <Link
                href='/admin/orders'
                className='block px-3 py-2 text-gray-800 hover:bg-blue-100 hover:text-blue-500 rounded-md'
              >
                All Reviews
              </Link>
            </li>
          </>
        )}
      </ul>
    </aside>
  );
}

export default Sidebar;