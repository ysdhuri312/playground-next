/** @format */

import Login from '../modules/auth/components/Login';
import { RegisterForm } from '../modules/auth/components/Register';

export default function Home() {
  console.info('Hello world');
  return (
    <div className='flex gap-0.5'>
      <RegisterForm />
      <Login />
    </div>
  );
}
