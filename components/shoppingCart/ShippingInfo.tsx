import React from 'react';
import ShoppingCartMenu from './ShoppingCartMenu';
import BorderButton from '../element/BorderButton';
import ShippingInfoTable from './elements/ShippingInfoTable';
import SubmitButton from '../element/SubmitButton';

const ShippingInfo = () => {
  return (
    <div className="mx-16 pt-4 pb-4">
      <ShoppingCartMenu title={'اطلاعات ارسال سفارش'} />
      <div className="bg-white flex flex-col pb-8 px-16">
        <div className="flex items-center justify-center my-8">
          <input type="text" className="w-120 h-8 border border-gray-200" />
        </div>
        <div className="flex flex-col pb-4">
          <span className="text-xs font-semibold">◀ آدرس مورد نظر خود را انتخاب نمایید.</span>
          <div className="w-[12%] py-4">
            <BorderButton title={'ایجاد آدرس جدید'} />
          </div>
        </div>
        <div className='mb-8'>
          <ShippingInfoTable />
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
};

export default ShippingInfo;
