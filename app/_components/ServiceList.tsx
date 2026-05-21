/** @format */

export default function ServiceList() {
  if (typeof window === 'undefined') {
    console.log('Component running on server');
  } else {
    console.log('Component running on client');
  }
  return (
    <div>
      <li>Web Development</li>
      <li>Mobile App Development</li>
      <li>Consulting Services</li>
      <li>Digital Marketing</li>
    </div>
  );
}
