'use client';

import React from 'react';
import AppointmentsRow from './AppointmentsRow';

function AllAppointments() {
  const appointmentLists = [
    {
      id: '01',
      name: 'Diabetes Treatment',
      paymentStatus: 'Paid',
      date: '07/16/2023',
    },
    {
      id: '02',
      name: 'Diabetes Treatment',
      paymentStatus: 'Unpaid',
      date: '07/11/2023',
    },
  ];

  return (
    <div className='container mx-auto my-4 p-2 flex flex-col items-center'>
      <h2 className='text-3xl lg:text-5xl font-bold font-lobster text-main tracking-wider mt-2 mb-4'>
        All Prices
      </h2>
      <hr className='w-1/3 lg:w-1/4 mb-2 border-2 border-slate-300' />
      <div className='overflow-x-auto my-2 w-full'>
        <table className='table table-xs sm:table-sm md:table-md lg:table-lg p-1 md:p-2 w-full'>
          <thead>
            <tr>
              <th>No.</th>
              <th>Name</th>
              <th>Status</th>
              <th>Last Meet</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {appointmentLists?.map((a, idx) => (
              <AppointmentsRow key={idx} a={a} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AllAppointments;
