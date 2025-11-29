import DataTable from '@/components/element/DataTable';
import React from 'react';

interface Message {
  id: number;
  description: string;
  num: number;
  provider: string;
  amountPaid: string;
  date: string;
  isSeen: boolean;
}

const initialData: Message[] = [
  {
    id: 1,
    description: 'کرایه سفره عقد',
    num :1,
    provider: 'تالار محمودیه',
    amountPaid: '3/500/000 تومان',
    date: '1395-09-8',
    isSeen: true,
  },
  {
    id: 2,
    description: 'خرید دستگاه فر مو',
    num: 1,
    provider: 'سالن زیبایی شقایق',
    amountPaid: '460/000 تومان',
    date: '1395-01-28',
    isSeen: true,
  },
];

const Orders = () => {
  const headers = ['ردیف', 'شرح کالا / خدمات', ' تعداد', 'ارائه دهنده', 'مبلغ پرداختی', 'تاریخ سفارش', 'وضعیت'];

  return (
    <div className='w-full bg-white mb-8 px-8 py-12'>
      <DataTable<Message>
        headers={headers}
        data={initialData}
        renderRow={row => (
          <>
            <td className="px-8 py-8 text-start text-[10px]">{row.id}</td>
            <td className="px-8 py-8 text-start text-[10px]">{row.description}</td>
            <td className="px-8 py-8 text-start text-blue-950 text-[10px]">{row.num}</td>
            <td className="px-8 py-8 text-start text-blue-950 text-[10px]">{row.provider}</td>
            <td className="px-8 py-8 text-start text-[10px]">{row.amountPaid}</td>
            <td className="px-8 py-8 text-start text-[10px]">{row.date}</td>
            <td className="px-8 py-8 text-start text-[10px]">
              <div
                className={`text-[10px] ${row.isSeen 
                  ? 'text-green-500' : 'text-pink-500'}`}
              >
                {row.isSeen ? "تکمیل شد" : "تکمیل نیست"}
              </div>
            </td>
          </>
        )}
      />
    </div>
  );
};

export default Orders;
