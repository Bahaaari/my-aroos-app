import React from 'react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { Camera } from 'lucide-react';
import BorderButton from './BorderButton';

export interface ProfileData {
  firstName: string;
  lastName: string;
  email: string;
  landline: string;
  mobile: string;
  birthDate: string;
  gender: string;
  address: string;
  image: StaticImageData;
}

const CustomerProfile = ({ data }: { data: ProfileData }) => {
  const rightInfo = [
    { title: 'نام', value: data.firstName },
    { title: 'نام خانوادگی', value: data.lastName },
    { title: 'شماره تلفن ثابت', value: data.landline },
    { title: 'شماره تلفن همراه', value: data.mobile },
  ];

  const leftInfo = [
    { title: 'آدرس الکترونیک', value: data.email },
    { title: 'آدرس پستی', value: data.address },
    { title: 'تاریخ تولد', value: data.birthDate },
    { title: 'جنسیت', value: data.gender },
  ];

  return (
    <div className="shadow-sm mb-2 bg-white text-xs">
      <div className="bg-gray-200 w-full h-8 flex shadow-sm rounded-bl-sm items-center justify-start ps-4">
        <span>اطلاعات حساب کاربری</span>
      </div>
      <div className="w-full grid grid-rows-3 px-8">
        <div className="w-full flex row-span-2 items-center pt-12">
          <div className="w-full grid grid-cols-4">
            <div className="w-full relative col-span-1 place-items-center">
              <Image
                src={data.image}
                alt={data.lastName}
                width={180}
                height={180}
                className="rounded-full border-2 p-0.5 border-red-500 object-cover"
              />
              <Link
                href="#"
                className="absolute w-38 flex pt-2 pb-4.5 bottom-0 right-50% 
                    bg-white/80 text-center  items-center justify-center rounded-b-full"
              >
                <Camera className="w-4 h-4" /> <span className="text-[10px] px-2">تغییر عکس پروفایل</span>
              </Link>
            </div>
            <div className="flex flex-col justify-center col-span-1">
              <table className="w-50 max-w-xs">
                <tbody>
                  {rightInfo.map((item, i) => (
                    <tr key={i}>
                      <td className="font-semibold py-2">{item.title}:</td>
                      <td className='py-2'>{item.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="flex flex-col justify-center col-span-2 ps-4">
                <table className="w-full max-w-lg">
                  <tbody>
                    {leftInfo.map((item, i) => (
                      <tr key={i}>
                        <td className="font-semibold py-2">{item.title}:</td>
                        <td className='py-2'>{item.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              
            </div>
          </div>
        </div>
        <div className="flex row-span-1 gap-4 items-center justify-end px-12">
          <div className="w-[10%]">
            <BorderButton title={'ویرایش اطلاعات'} />
          </div>
          <div className="w-[10%]">
            <BorderButton title={'تغییر رمز عبور'} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerProfile;
