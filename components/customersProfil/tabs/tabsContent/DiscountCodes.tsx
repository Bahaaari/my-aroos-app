import React from 'react';
import SubmitButton from '@/components/element/SubmitButton';
import DiscountTable from './tables/DiscountTable';

const DiscountCodes = () => {
  return (
    <div className="w-full h-100 bg-white mb-8 p-12">
      <div className="w-full  grid grid-cols-2 h-20 mb-8">
        <div className="col-span-1 flex w-full text-xs gap-4 place-self-center justify-center">
          <input
            type="text"
            placeholder="کد تخفیف"
            id="discount"
            name="discount"
            className="border h-8 flex border-gray-300 text-gray-300 bg-white w-56 ps-2"
          />
          <div className="w-[12%] place-self-center">
            <SubmitButton title={'فعالسازی'} />
          </div>
        </div>
        <div className='col-span-1 flex w-full text-xs place-self-center justify-center'>
          <p className='bg-gray-100 p-4 space-x-4 h-12'>
            <span className='font-semibold'>کل اعتبار:</span>
            <span className='text-green-500'>50000 تومان</span>
          </p>
        </div>
      </div>
      <div className='w-full'>
        <DiscountTable />
      </div>
    </div>
  );
};

export default DiscountCodes;
