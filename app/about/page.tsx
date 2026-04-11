/** @format */

import Link from 'next/link';

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
