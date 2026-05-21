/** @format */

import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blogs',
};

export default function Blogs() {
  return (
    <div>
      <h1>Welcome to Our Blog</h1>
      <ol className='blog-links'>
        <li>
          <Link href='/blogs/1'>Blog 1</Link>
        </li>
        <li>
          <Link href='/blogs/2'>Blog 2</Link>
        </li>
        <li>
          <Link href='/blogs/3'>Blog 3</Link>
        </li>
      </ol>
    </div>
  );
}
