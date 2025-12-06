import DataTable from '@/components/element/DataTable';
import React from 'react';

interface ShippingInfo {
  id: number;
  name: string;
  city: string;
  address: string;
  postalCode: string;
  emergencyPhone: string;
  landlineNum: string;
  editBtn: React.ReactNode;
  deleteBtn: React.ReactNode;
}

const ShippingInfoTable = () => {
  const headers = [
    'انتخاب',
    'نام',
    'شهر',
    'آدرس پستی',
    'کد پستی',
    'شماره تلفن اضطراری',
    'شماره تلفن ثابت',
    'ویرایش',
    'حذف',
  ];

  const data: ShippingInfo[] = [
    {
      id: 1,
      name: 'المیراطاهریان',
      city: 'تهران',
      address: 'تهران- فرشته- خیابان بسنی- کوچه نمازی- ساختمان صراف- واحد65',
      postalCode: '1948879652',
      emergencyPhone: '09122765453',
      landlineNum: '22006080',
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
      <DataTable<ShippingInfo>
        headers={headers}
        data={data}
        renderRow={(row) => (
          <>
            <td className="px-8 py-6 text-start text-[10px]">{row.id}</td>
            <td className="px-8 py-6 text-start text-[10px]">{row.name}</td>
            <td className="px-8 py-6 text-start text-[10px]">{row.city}</td>
            <td className="px-8 py-6 text-start text-[10px]">{row.address}</td>
            <td className="px-8 py-6 text-start text-[10px]">{row.postalCode}</td>
            <td className="px-8 py-6 text-start text-[10px]">{row.emergencyPhone}</td>
            <td className="px-8 py-6 text-start text-[10px]">{row.landlineNum}</td>
            <td className="pe-8 ps-4 py-6 text-start text-[10px]">{row.editBtn}</td>
            <td className="px-8 py-6 text-start">{row.deleteBtn}</td>
          </>
        )}
      />
    </div>
  );
};

export default ShippingInfoTable;
