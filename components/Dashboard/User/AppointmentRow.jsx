'use client';

import React from 'react';
import { AiFillDelete } from 'react-icons/ai';

function AppointmentRow({ a }) {
  return (
    // <tr>
    //   <th>{idx + 1}</th>
    //   <th></th>
    //   <th>
    //     {name}
    //     <br />
    //   </th>
    //   <th>{email}</th>
    //   <th>{speciality}</th>
    //   <th>
    //     <label
    //       htmlFor='delete-modal'
    //       className='btn btn-error text-white font-bold'
    //     >
    //       Delete
    //     </label>
    //   </th>
    // </tr>
    <tr>
      <th>{a?.id}</th>
      <th>{a?.name}</th>
      <th>{a?.paymentStatus}</th>
      <th>{a?.date}</th>
      <th>
        <label
          htmlFor='delete-modal'
          className='btn btn-error bg-red-600 text-white font-bold'
        >
          <AiFillDelete />
        </label>
      </th>
    </tr>
  );
}

export default AppointmentRow;
