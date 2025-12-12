import React from 'react';
import Image, { StaticImageData } from 'next/image';
import product1 from '../../../public/images/products/product1.jpg';
import DataTable from '@/components/element/DataTable';

interface product {
  id: number;
  img: StaticImageData;
  description: string;
  num: number;
  price: string;
  totalPrice: string;
}

const ProductsTable = () => {
  const dataShopping: product[] = [
    {
      id: 1,
      img: product1,
      description: 'ست بهداشتی Dermatologic',
      num: 2,
      price: '160000 تومان',
      totalPrice: '320000 تومان',
    },
    {
      id: 2,
      img: product1,
      description: 'دستگاه فر مو Dermatologic',
      num: 1,
      price: '460000 تومان',
      totalPrice: '460000 تومان',
    },
  ];
  const headers = ['ردیف', 'شرح کالا / خدمات', ' ', 'تعداد', 'قیمت واحد', 'قیمت کل'];

  return (
    <div className='w-full'>
      <DataTable<product>
        headers={headers}
        data={dataShopping}
        renderRow={row => (
          <>
            <td className="px-8 py-2">{row.id}</td>
            <td className="px-8 py-2 w-20">
              <div className="w-20 inline-block border border-gray-300 rounded-sm py-1 px-3 bg-white">
                <Image src={row.img} alt="product" />
              </div>
            </td>
            <td className="pe-8 py-2">{row.description}</td>
            <td className="px-8 py-2">{row.num}</td>
            <td className="px-8 py-2">{row.price}</td>
            <td className="px-8 py-2">{row.totalPrice}</td>
          </>
        )}
      />
    </div>
  );
};

export default ProductsTable;
