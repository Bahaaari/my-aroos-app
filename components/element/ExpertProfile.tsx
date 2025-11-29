import React from 'react'
import Image, { StaticImageData } from 'next/image';

type ImageSectionProps = {
  src: StaticImageData;
  alt: string;
  description: string[];
};

const Profile = ({ src, alt, description }: ImageSectionProps) => {
  const [firstLine, ...restLines] = description;
  return (
    <div className='shadow-sm pb-4 mb-2 bg-white'>
        <div className='bg-gray-200 w-full h-8 text-xs flex items-center justify-start ps-4'>
         <span >
            مشخصات
         </span>
        </div>
        <div className="flex flex-col items-center text-center px-4">
          <section className='flex flex-col items-center justify-center pt-8'>
            <Image
              src={src}
              alt={alt}
              width={300}
              height={300}
              className="rounded-full border-2 p-0.5 border-red-500 shadow-md mb-6 object-cover"
            />
          </section>
          <section className='min-h flex flex-col items-center justify-center'>
           <div className="space-y-2 max-w-md text-gray-700">
            <h1 className='text-2xl font-bold'>{firstLine}</h1>
            {restLines.map((line, i) => (
              <span key={i} className='block text-base'>
                {line}
              </span>
            ))}
           </div>
          </section>
        </div>
    </div>
  )
}

export default Profile