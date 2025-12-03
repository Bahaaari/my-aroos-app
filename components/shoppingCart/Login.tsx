import React from 'react';
import ShoppingCartMenu from './ShoppingCartMenu';
import Image from 'next/image';
import lock from '../../public/images/products/lock.png';
import add from '../../public/images/products/add.png';
import BorderButton from '../element/BorderButton';
import SubmitButton from '../element/SubmitButton';

const Login = () => {
  return (
    
      <div className="mx-16 pt-2 pb-4">
        <ShoppingCartMenu title={'ورود'} />
        <div className="bg-white flex flex-col pb-8">
          <div className="flex items-center justify-center my-8">
            <input type="text" className="w-120 h-8 border border-gray-200" />
          </div>
          <div className="grid grid-cols-5 p-4 mx-24">
            <div className="col-span-2 flex flex-col items-center justify-around">
              <Image src={lock} alt="icon" className='mb-4' />
              <span className="font-semibold text-sm mb-2">عضو عروس استور هستید؟</span>
              <span className='text-xs mb-4'>برای ادامه فرآیند خرید وارد اکانت خود شوید.</span>
              <div className="w-[22%] py-4">
                <BorderButton title={'ورود'} />
              </div>
            </div>
            <div className="col-span-1 place-items-center">
              <div className="h-44 w-px bg-gray-200" aria-hidden="true" />
            </div>
            <div className="col-span-2 flex flex-col items-center justify-around">
              <Image src={add} alt="icon" className='mb-4' />
              <span className="font-semibold text-sm mb-2">عضو عروس استور نستید؟</span>
              <span className='text-xs mb-4'>برای ادامه فرآیند خرید ثبت نام کنید.</span>
              <div className="w-[22%] py-4">
                <SubmitButton title={'ثبت نام'} />
              </div>
            </div>
          </div>
        </div>
      </div>
    
  );
};

export default Login;
