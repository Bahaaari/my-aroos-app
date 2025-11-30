import DataTable from '@/components/element/DataTable';
import React from 'react';

interface Data {
  id: number;
  code: number;
  title: string;
  creditAmount: string;
  remainingCredit: string;
  expiryDate: string;
  situation: string;
}

const DiscountTable = () => {
  const headers = ['ردیف', 'کد', 'عنوان', 'میزان اعتبار', 'اعتبار مانده', 'تاریخ انقضا', 'وضعیت'];

  const data: Data[] = [
    {
      id: 1,
      code: 7926769,
      title: 'تخفیف به مناسبت تولدتان',
      creditAmount: '50000 تومان',
      remainingCredit: ' 50000 تومان',
      expiryDate: '1395-12-29',
      situation: 'قابل استفاده',
    },
    {
      id: 2,
      code: 7926769,
      title: 'تخفیف سالن زیبایی صدف',
      creditAmount: '40000 تومان',
      remainingCredit: ' 0 تومان',
      expiryDate: '1395-10-29',
      situation: 'تمام شده',
    },
  ];
  return <div>
    <DataTable<Data>
        headers={headers}
        data={data}
        renderRow={(row) => (
          <>
            <td className="px-8 py-8 text-center">{row.id}</td>
            <td className="px-8 py-8 text-center">{row.code}</td>
            <td className="px-8 py-8 text-center">{row.title}</td>
            <td className="px-8 py-8 text-center">{row.creditAmount}</td>
            <td className="px-8 py-8 text-center">{row.remainingCredit}</td>
            <td className="px-8 py-8 text-center">{row.expiryDate}</td>
            <td className="px-8 py-8 text-center">{row.situation}</td>
          </>
        )}
      />
  </div>;
};

export default DiscountTable;
