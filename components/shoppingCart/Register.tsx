'use client';

import React from 'react';
import Image from 'next/image';
import add from '../../public/images/products/add.png';
import { useState } from 'react';
import Link from 'next/link';



const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [acceptRules, setAcceptRules] = useState(false);
  const [acceptPrivacy, setAcceptPrivacy] = useState(false);

  return (
    <div className="grid grid-cols-2 bg-white mx-16 pt-2 pb-4">
      <div className="col-span-1 flex flex-col py-8 max-w-md mx-auto items-center justify-center">
        <div className="flex flex-col gap-2 mb-8">
          <Image src={add} alt="icon" className="place-self-center" />
          <span className="font-bold text-lg">عضو خانواده عروس استور شوید</span>
        </div>
        <div className="flex flex-col gap-2 mb-8">
          <input
            type="email"
            placeholder="آدرس ایمیل"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="w-64 h-9 flex border border-gray-300 rounded text-gray-500 bg-white focus:border-blue-500 ps-2 py-2 text-xs"
          />
          <input
            type="password"
            placeholder="رمز عبور"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="w-64 h-9 flex border border-gray-300 rounded text-gray-500 bg-white focus:border-blue-500 ps-2 py-2 text-xs"
          />
        </div>
        <div className="flex flex-col px-24 gap-2">
          {/* Checkbox 1 */}
          <label className="grid w-full grid-cols-[20px_1fr] items-stretch gap-1 text-xs ">
            <input
              type="checkbox"
              checked={acceptRules}
              onChange={e => setAcceptRules(e.target.checked)}
              className="mt-1 h-4 w-4 accent-green-500"
            />
            <span className='leading-6 text-xs text-justify'>
              <Link href="#" className="font-semibold text-blue-600">
                قوانین و مقررات
              </Link>{' '}
              استفاده از سرویس عروس استور را مطالعه نموده و با کلیه موارد آن موافق هستم.
            </span>
          </label>

          {/* Checkbox 2 */}
          <label className="flex items-stretch gap-2 text-xs ">
            <input
              type="checkbox"
              checked={acceptPrivacy}
              onChange={e => setAcceptPrivacy(e.target.checked)}
              className="h-4 w-4 self-start accent-green-500"
            />
            <span className='self-end'>عضویت در خبرنامه عروس استور</span>
          </label>
        </div>
        
      </div>
    </div>
  );
};

export default Register;
