import DataTable from '@/components/element/DataTable';
import React from 'react';

interface Message {
  id: number;
  title: string;
  text: string;
  date: string;
  isSeen: boolean;
}

const initialData: Message[] = [
  {
    id: 1,
    title: 'المیرا - تولدت مبارک',
    text: 'ضمن عرض تبریک به مناسبت تولد شما، هم اکنون می توانید از کد تخفیف 50 هزار تومانی بهره ...',
    date: '۱۴۰۲-۰۷-۱۲',
    isSeen: false,
  },
  {
    id: 2,
    title: 'هدیه سالن زیبایی صدف',
    text: 'اعتبار ویژه سالن زیبایی صدف به اعضای عروس استور ...',
    date: '۱۴۰۲-۰۷-۰۳',
    isSeen: true,
  },
  {
    id: 3,
    title: 'هدیه سالن زیبایی صدف',
    text: 'اعتبار ویژه سالن زیبایی صدف به اعضای عروس استور ...',
    date: '۱۴۰۲-۰۶-۰۹',
    isSeen: true,
  },
];

const Messages = () => {
  const headers = ['ردیف', 'عنوان', 'متن پیام', 'تاریخ', 'مشاهده'];

  return (
    <div className='w-full bg-white mb-8 px-8 py-12'>
      <DataTable<Message>
        headers={headers}
        data={initialData}
        renderRow={row => (
          <>
            <td className="px-8 py-8 text-start">{row.id}</td>
            <td className="px-8 py-8 text-start">{row.title}</td>
            <td className="px-8 py-8 text-start text-xs">{row.text}</td>
            <td className="px-8 py-8 text-start">{row.date}</td>
            <td className="px-8 py-8 text-start">
              <button
                className={`px-4 py-1 cursor-pointer rounded-full text-white text-sm ${row.isSeen 
                  ? 'bg-green-500' : 'bg-pink-500'}`}
              >
                مشاهده
              </button>
            </td>
          </>
        )}
      />
    </div>
  );
};

export default Messages;
