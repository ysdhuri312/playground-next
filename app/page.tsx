/** @format */

import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Link href='/about' className=''>
        Go to About
      </Link>
      <br />
      <Link href='/blogs' className=''>
        Go to Blogs
      </Link>
    </div>
  );
}
