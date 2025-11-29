import DataTable from "@/components/element/DataTable";
import React from "react";

export interface ReminderRow {
  id: number;
  description: string;
  provider: string;
  notifType: string | React.ReactNode;
  editBtn: React.ReactNode;
  deleteBtn: React.ReactNode;
}

const Notices = () => {
  const headers = [
    "ردیف",
    'شرح کالا / خدمات',
    'ارائه دهنده',
    "نوع اطلاع رسانی",
    "ویرایش",
    "حذف",
  ];

  const data: ReminderRow[] = [
    {
      id: 1,
      description: 'کرایه سفره عقد',
      provider: 'تالار محمودیه',
      notifType: 'قابل رزرو تا 30-03-1396',
      editBtn: (
        <button className="px-4 py-1 text-pink-600 border border-pink-500 bg-white rounded-full cursor-pointer">
          ویرایش
        </button>
      ),
      deleteBtn: (
        <button className="cursor-pointer text-gray-500">
          🗑
        </button>
      ),
    },
    {
      id: 2,
      description: 'خرید دستگاه فر مو',
      provider: 'سالن زیبایی شقایق',
      notifType: (<span>قیمت زیر<span> </span>
        <input
          type="text"
          defaultValue='50/000'
          className="border border-gray-200 text-gray-400 rounded bg-white p-1 text-center w-18 text-xs"
        /><span> </span>تومان
        </span>
      ),
      editBtn: (
        <button className="px-4 py-1 text-pink-600 border border-pink-500 bg-white rounded-full cursor-pointer">
          ویرایش
        </button>
      ),
      deleteBtn: <button className="cursor-pointer text-gray-500">🗑</button>,
    },
    
  ];

  return (
    <div className='w-full bg-white mb-8 px-8 py-12'>
      <DataTable<ReminderRow>
        headers={headers}
        data={data}
        renderRow={(row) => (
          <>
            <td className="px-8 py-6 text-start">{row.id}</td>
            <td className="px-8 py-6 text-start">{row.description}</td>
            <td className="px-8 py-6 text-start">{row.provider}</td>
            <td className="px-8 py-6 text-start">{row.notifType}</td>
            <td className="pe-8 ps-4 py-6 text-start">{row.editBtn}</td>
            <td className="px-8 py-6 text-start">{row.deleteBtn}</td>
          </>
        )}
      />
    </div>
  );
};

export default Notices;
