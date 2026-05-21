/** @format */
'use client';

import ServiceList from '@/app/_components/ServiceList';

export default function Services() {
  return (
    <div>
      <h1>Our Services</h1>
      <ul className='services-list'>
        <ServiceList />
      </ul>
    </div>
  );
}
