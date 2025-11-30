import DataTable from "@/components/element/DataTable";
import React from "react";

export interface ReminderRow {
  id: number;
  title: string | React.ReactNode;
  eventDate: string | React.ReactNode;
  remainingDays: string | React.ReactNode;
  editBtn: React.ReactNode;
  deleteBtn: React.ReactNode;
}

const ReminderTable = () => {
  const headers = [
    "ردیف",
    "عنوان رویداد",
    "تاریخ رویداد",
    "روزهای باقی‌مانده",
    "ویرایش",
    "حذف",
  ];

  const data: ReminderRow[] = [
    {
      id: 1,
      title: "تولد نرگس",
      eventDate: "۱۴۰۱-۰۹-۲۹",
      remainingDays: <span>۶ ماه و ۱۴ روز</span>,
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
      title: "سالگرد ازدواج",
      eventDate: "۱۳۹۴-۱۰-۰۷",
      remainingDays: <span>۳۰ روز</span>,
      editBtn: (
        <button className="px-4 py-1 text-pink-600 border border-pink-500 bg-white rounded-full cursor-pointer">
          ویرایش
        </button>
      ),
      deleteBtn: <button className="cursor-pointer text-gray-500">🗑</button>,
    },
    {
      id: 3,
      title: (
        <input
          type="text"
          defaultValue="سالگرد عقد"
          className="border border-gray-200 text-gray-400 rounded bg-white p-1 text-center w-24 text-xs"
        />
      ),
      eventDate: (
        <input
          type="text"
          defaultValue="۱۳۹۴-۰۹-۲۴"
          className="border border-gray-200 text-gray-400  rounded bg-white p-1 text-center w-24 text-xs"
        />
      ),
      remainingDays: <span>۶ ماه و ۱۰ روز</span>,
      editBtn: (
        <button className="px-5 py-1 text-pink-600 border border-pink-500 bg-white rounded-full cursor-pointer">
          تغییر
        </button>
      ),
      deleteBtn: <button className="cursor-pointer text-gray-500">🗑</button>,
    },
    {
      id: 4,
      title: "تولد امیر",
      eventDate: "۱۳۹۵-۰۹-۲۴",
      remainingDays: (
        <span className="text-pink-600 font-semibold">۴ روز</span>
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
    <div>
      <DataTable<ReminderRow>
        headers={headers}
        data={data}
        renderRow={(row) => (
          <>
            <td className="px-8 py-6 text-start">{row.id}</td>
            <td className="px-8 py-6 text-start">{row.title}</td>
            <td className="px-8 py-6 text-start">{row.eventDate}</td>
            <td className="px-8 py-6 text-start">{row.remainingDays}</td>
            <td className="pe-8 ps-4 py-6 text-start">{row.editBtn}</td>
            <td className="px-8 py-6 text-start">{row.deleteBtn}</td>
          </>
        )}
      />
    </div>
  );
};

export default ReminderTable;
