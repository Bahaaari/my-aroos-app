import React from 'react';
import ShoppingCartMenu from './ShoppingCartMenu';
import ProductsTable from './elements/ProductsTable';
import BillSummary from './elements/BillSummary';
import BorderButton from '../element/BorderButton';
import SubmitButton from '../element/SubmitButton';

const FinalCheckout = () => {
  return (
    <div className="mx-16 pt-2 pb-4">
      <ShoppingCartMenu title={'بازبینی نهایی'} />
      <div className="bg-white flex flex-col py-8 px-16 shadow-sm w-full mx-auto">
        <div className="flex items-center justify-center my-16">
          <input type="text" className="w-120 h-8 border border-gray-200" />
        </div>
        <div className="flex mx-24">
          <span className="text-sm font-semibold">◀ محصولات</span>
        </div>
        <div className='mt-6 mb-16'>
            <ProductsTable />
        </div>
        <div className="flex mx-24">
          <span className="text-sm font-semibold">◀ صورت حساب</span>
        </div>
        <div className='mt-6 mb-16'>
            <BillSummary />
        </div>
        <div className="flex mx-24">
          <span className="text-sm font-semibold">◀ اطلاعات ارسال سفارش</span>
        </div>
        <div className='flex justify-center place-items-center'>
        <div className='w-186 mt-6 mb-16 bg-gray-100 border border-gray-200 p-4'>
            <span className='text-xs'>این سفارش به المیرا طاهریان، به آدرس تهران-فرشته- خیابان بسنی- کوچه نمازی- ساختمان صراف- واحد65- کدپستی 1936757755- و شماره تلفن 09122765453 تحویل می گردد.</span>
        </div>
        </div>
        <div className='flex justify-between mb-16 mx-16'>
          <div className='w-[18%]'>
            <BorderButton
              title={
                <div className="flex items-center gap-3 justify-center">
                  <span className="font-bold text-2xl">‹</span>
                  <span>بازگشت به سبد خرید</span>
                </div>
              }
            />
          </div>
          <div className='w-[18%]'>
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

export default FinalCheckout;
