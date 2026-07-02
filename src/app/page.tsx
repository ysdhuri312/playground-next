/** @format */

import Login from '../modules/auth/components/Login';
import { RegisterForm } from '../modules/auth/components/Register';

export default function Home() {
  return (
    <div className='flex items-center gap-0.5'>
      <RegisterForm />
      <Login />
    </div>
  );
}
