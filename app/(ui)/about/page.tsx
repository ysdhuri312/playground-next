/** @format */

import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About',
};

export default async function About() {
  return (
    <div>
      <h1>About</h1>
      <Link href='/' className=''>
        Back to Home
      </Link>
      <br />
      <Link href='about/me' className=''>
        Me
      </Link>
    </div>
  );
}
