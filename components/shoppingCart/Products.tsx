import React from 'react'
import Image, { StaticImageData } from 'next/image'
import product1 from '../../public/images/products/product1.jpg'
import circle from '../../public/images/products/circle.png'

interface product {
    id: number;
    img: StaticImageData;
    description: string;
    num: number;
    price: string;
    totalPrice: string;
}
const Products = () => {
    const dataShopping : product[] = [
        {
            id: 1,
            img: product1,
            description: "ست بهداشتی Dermatologic",
            num: 2,
            price: "160000 تومان",
            totalPrice: "320000 تومان",
        },
        {
            id: 2,
            img: product1,
            description: "دستگاه فر مو Dermatologic",
            num: 1,
            price: "460000 تومان",
            totalPrice: "460000 تومان",
        }
    ]
  return (
    <div>
        <div className='mx-44 my-12'>
            <Image src={circle} alt='inter' />
        </div>
        <div className='mx-32 flex'>
            <span className='text-xl font-semibold'>◀ محصولات</span>
        </div>
        <div className='flex items-center justify-center mb-12'>
            <table className='w-200'>
                <thead className='mb-1'>
                    <tr className='border-b border-gray-200'>
                        <th className='px-4 py-2 font-medium text-sm'>ردیف</th>
                        <th className='ps-8 py-2 w-32'>شرح کالا / خدمات</th>
                        <th className=''></th>
                        <th className='px-8 py-2'>تعداد</th>
                        <th className='px-8 py-2'>قیمت واحد</th>
                        <th className='px-8 py-2'>قیمت کل</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        dataShopping.map((row, index) =>(
                            <tr
                               key={row.id}
                               className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}
                            >
                                <td className='px-8 py-2'>{row.id}</td>
                                <td className='ps-8 py-2 w-20'>
                                    <div className='w-20 inline-block border-1 border-gray-300 rounded-sm py-1 px-3 bg-white'>
                                        <Image src={row.img} alt='product' />
                                    </div>
                                </td>
                                <td className='pe-8 py-2'>{row.description}</td>
                                <td className='px-8 py-2'>{row.num}</td>
                                <td className='px-8 py-2'>{row.price}</td>
                                <td className='px-8 py-2'>{row.totalPrice}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Products