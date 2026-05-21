/** @format */
'use client';

export default function Comments() {
  if (typeof window === 'undefined') {
    console.log('Component running on server');
  } else {
    console.log('Component running on client');
  }
  return <div>Comments client</div>;
}
