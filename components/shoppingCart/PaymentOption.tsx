


import React from 'react'
import ShoppingCartMenu from './ShoppingCartMenu';
import BorderButton from '../element/BorderButton';
import SubmitButton from '../element/SubmitButton';
import PaymentMethodSelector from './elements/PaymentMethodSelector';

const PaymentOption = () => {
  return (
    <div className="mx-16 pt-2 pb-4">
      <ShoppingCartMenu title={'شیوه پرداخت'} />
      <div className="bg-white flex flex-col pb-8 px-16 shadow-sm w-full mx-auto">
        <div className="flex items-center justify-center my-8">
          <input type="text" className="w-120 h-8 border border-gray-200" />
        </div>
        <div className="flex pb-4 mx-4">
          <span className="text-sm font-semibold">◀ روش پرداخت</span>
        </div>
        <div className='mb-8'>
          <PaymentMethodSelector />
        </div>
        <div className='flex justify-between'>
          <div className='w-[16%]'>
            <BorderButton
              title={
                <div className="flex items-center gap-3 justify-center">
                  <span className="font-bold text-2xl">‹</span>
                  <span>بازگشت به سبد خرید</span>
                </div>
              }
            />
          </div>
          <div className='w-[16%]'>
            <SubmitButton
              title={
                <div className="flex items-center gap-3 justify-center">
                  <span>ثبت اطلاعات و ادامه خرید</span>
                  <span className="font-bold text-2xl">›</span>
                </div>
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentOption