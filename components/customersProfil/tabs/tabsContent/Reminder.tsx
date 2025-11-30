import React from 'react';
import Image from 'next/image';
import googlePlay from '../../../../public/images/googlePlay.png';
import appStore from '../../../../public/images/appStore.png';
import AddInfo from './reminder/AddInfo';
import ReminderTable from './reminder/ReminderTable';

const Reminder = () => {
  return (
    <div className='w-full grid grid-row-3 bg-white mb-8 px-8 py-12'>
      <div className="w-full row-span-1 flex flex-col justify-start">
        <div className="flex flex-row items-center place-content-around gap-x-8">
          <span className="text-xs">
            روزها و رویدادهای مهم زندگی خود یا عزیزانتان را وارد نمایید. ما همان روز یا سه روز قبل، آن را از طریق سایت
            یا اپلیکیشن به شما یادآوری میکنیم.
          </span>
          <div className="flex gap-x-4">
            <Image src={googlePlay} alt="icon" />
            <Image src={appStore} alt="icon" />
          </div>
        </div>
        <div className="">
          <AddInfo />
        </div>
      </div>
      <div className='mt-4'>
        <ReminderTable />
      </div>
    </div>
  );
};

export default Reminder;
