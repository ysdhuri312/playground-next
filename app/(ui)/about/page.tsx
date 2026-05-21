/** @format */

import Comments from '@/app/_components/Comments';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About',
};

export default async function About() {
  return (
    <>
      <div>
        <h1>About Us</h1>
        <p>We are a company dedicated to providing quality services.</p>
      </div>
      <Link href='about/me' className=''>
        My Info
      </Link>
      <br />
      <Comments />
    </>
  );
}
