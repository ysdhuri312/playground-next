/** @format */

import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blogs',
};

export default function Blogs() {
  return (
    <div>
      Blogs <br />
      <Link href='/'>Back to home</Link>
    </div>
  );
}
