import Breadcrumb from '@/components/element/MenuComponent';
import React from 'react';
import GardenRight from './rightElements/GardenRight';
import GardenLeft from './leftElements/GardenLeft';

function ServiceGardenHall() {
  return (
    <div className=" bg-gray-100 pt-2 pb-4  mb-2">
      <div className='mx-16'>
        <Breadcrumb
          items={[
            { title: 'صفحه اصلی', href: '/' },
            { title: 'خدمات مجالس', href: '#' },
            { title: 'تالار باغ', href: '#' },
            { title: 'تالار مظفریان', href: '#' },
            { title: 'گالری' },
          ]}
        />
        <div className="grid grid-cols-12">
          <GardenRight />
          <GardenLeft />
        </div>
      </div>
    </div>
  );
}

export default ServiceGardenHall;
