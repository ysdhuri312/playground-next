/** @format */

import Link from 'next/link';

export default function Me() {
  return (
    <div>
      <h1>My Details</h1>
      <Link href='/about'>Back to About</Link>
      <br />
      <Link href='/home'>Back to home</Link>
    </div>
  );
}
