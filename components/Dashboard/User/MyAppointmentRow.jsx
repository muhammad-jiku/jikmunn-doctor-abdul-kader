'use client';

import React from 'react';
import { AiOutlineEdit, AiFillDelete } from 'react-icons/ai';

function MyAppointmentRow({ a }) {
  return (
    <tr>
      <th>{a?.id}</th>
      <th>{a?.name}</th>
      <th>{a?.paymentStatus}</th>
      <th>{a?.date}</th>
      <th className='flex'>
        <label
          htmlFor='delete-modal'
          className='btn btn-error bg-green-600 text-white font-bold mr-2'
        >
          <AiOutlineEdit className='text-lg' />
        </label>
        <label
          htmlFor='delete-modal'
          className='btn btn-error bg-red-600 text-white font-bold'
        >
          <AiFillDelete className='text-lg' />
        </label>
      </th>
    </tr>
  );
}

export default MyAppointmentRow;
