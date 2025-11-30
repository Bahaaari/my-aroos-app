// components/FavoritesList.tsx
import React, { useMemo, useState } from 'react';
import DataTable from '@/components/element/DataTable';
import RatingStars from '@/components/element/ratings/RatingStars';
import Pagination from '@/components/element/Pagination';
import Image, { StaticImageData } from 'next/image';
import salon from '../../../../public/images/salon.jpg';

type FavoriteItem = {
  id: number;
  img: StaticImageData;
  title: string;
  description: string;
  rating: number; // 0..5 (can be fractional)
  reviewsCount: number;
};

const sampleData: FavoriteItem[] = [
  {
    id: 1,
    img: salon,
    title: 'سالن زیبایی پرنسس',
    description: 'خدمات آرایشی و ...',
    rating: 3.8,
    reviewsCount: 125,
  },
  {
    id: 2,
    img: salon,
    title: 'سالن زیبایی شیک',
    description: 'خدمات حرفه‌ای ...',
    rating: 4.6,
    reviewsCount: 98,
  },
  {
    id: 3,
    img: salon,
    title: 'میکاپ آروس زیبا',
    description: 'میکاپ تخصصی عروس ...',
    rating: 4.0,
    reviewsCount: 60,
  },
  {
    id: 4,
    img: salon,
    title: 'خانه مد Channel',
    description: 'استایل و زیبایی ...',
    rating: 2.7,
    reviewsCount: 210,
  },
  {
    id: 5,
    img: salon,
    title: 'آرایشگاه سنس',
    description: 'خدمات VIP ...',
    rating: 5,
    reviewsCount: 33,
  },
];

const headers = ['ردیف', 'شرح کالا / خدمات', ' '];

const FavoritesList: React.FC = () => {
  const [page, setPage] = useState<number>(1);
  const pageSize = 4;
  const total = sampleData.length;
  const totalPages = Math.max(1, Math.ceil(total / pageSize));

  const visibleData = useMemo(() => {
    const start = (page - 1) * pageSize;
    return sampleData.slice(start, start + pageSize);
  }, [page]);

  return (
    <div className="w-full bg-white mb-8 px-6 py-8 relative">
      {/* TOP LEFT pagination (overlay) */}
      <div className="absolute top-8 left-84 z-20">
        <Pagination page={page} setPage={setPage} totalPages={totalPages} />
      </div>

      <DataTable<FavoriteItem>
        headers={headers}
        data={visibleData}
        renderRow={row => (
          <>
            <td className="px-4 py-6 text-center text-xs text-gray-700 align-top">{row.id}</td>
            <td className="px-8 py-2">
              <div className=" inline-block  rounded-sm">
                <Image src={row.img} alt="salon" />
              </div>
            </td>
            <td className="px-4 py-4 text-xs align-top">
              <div className="flex items-start gap-4">
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-gray-800 text-xs">{row.title}</h3>
                    
                  </div>

                  <p className="mt-2 text-xs text-gray-600 leading-relaxed ">{row.description}</p>

                  <div className="mt-3 flex flex-row items-center justify-start gap-4">
                    <div className="flex flex-col items-center gap-2 ml-6">
                      <RatingStars /*rating={row.rating} size={16}*/ />
                      <span className="text-[10px] text-gray-500">{row.reviewsCount} نفر</span>
                    </div>
                    <div className='flex'>
                    <button className="cursor-pointer px-4 py-1 text-xs rounded-full border border-pink-500 text-pink-600 hover:bg-pink-50 transition">
                      بازدید
                    </button>

                    <button className="cursor-pointer px-4 py-1 text-xs rounded-full text-pink-600 border border-pink-600 hover:bg-pink-50 transition">
                      حذف از لیست
                    </button>
                    </div>
                  </div>
                </div>
              </div>
            </td>
          </>
        )}
      />

      {/* BOTTOM LEFT pagination */}
      <div className="absolute bottom-0 left-84 z-20">
        <Pagination page={page} setPage={setPage} totalPages={totalPages} />
      </div>
    </div>
  );
};

export default FavoritesList;
