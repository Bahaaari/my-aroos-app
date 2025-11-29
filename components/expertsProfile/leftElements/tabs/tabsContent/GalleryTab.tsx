'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const GalleryTab: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'photo' | 'video'>('photo');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const photos = [
    '/images/expertProfile/gallery1/bridal1.jpg',
    '/images/expertProfile/gallery1/model1.jpg',
    '/images/expertProfile/gallery1/bridal2.jpg',
    '/images/expertProfile/gallery1/model2.jpg',
    '/images/expertProfile/gallery1/bridal3.jpg',
    '/images/expertProfile/gallery1/model3.jpg',
    '/images/expertProfile/gallery1/bridal4.jpg',
    '/images/expertProfile/gallery1/model4.jpg',
    '/images/expertProfile/gallery1/bridesMakeup.jpg',
  ];

  return (
    <div className="bg-white p-6">
      {/* تب عکس / ویدیو */}
      <div className="flex justify-center mb-6  ">
        <button
          onClick={() => setActiveTab('photo')}
          className={`p-1 w-40 text-xs text-center border rounded-s-full  transition ${
            activeTab === 'photo' 
            ? 'border-[#ee4466] text-[#ee4466]' 
            : 'border-gray-400 text-gray-400'
          }`}
        >
          عکس
        </button>
        <button
          onClick={() => setActiveTab('video')}
          className={`p-1 w-40 text-center text-xs border rounded-e-full transition ${
            activeTab === 'video' 
            ? 'border-[#ee4466] text-[#ee4466]' 
            : 'border-gray-400 text-gray-400'
          }`}
        >
          ویدیو
        </button>
      </div>

      {/* گالری عکس‌ها */}
      {activeTab === 'photo' ? (
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {photos.map((src, index) => (
            <div
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-sm hover:shadow-lg transition"
              onClick={() => setSelectedImage(src)}
            >
              <Image
                src={src}
                alt={`Gallery photo ${index + 1}`}
                width={200}
                height={150}
                className="object-cover w-full h-60 transition-transform duration-300 group-hover:scale-110"
              />
              {/* لایه خاکستری */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white text-lg font-semibold bg-pink-600 px-4 py-2 rounded-full shadow">
                  بزرگنمایی
                </span>
              </div>
              <p className="text-center text-gray-600 text-sm py-2">آرایش مدل • امیر علی آشتیانی</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-500 mt-10">🎥 ویدیوها به زودی اضافه می‌شن...</div>
      )}

      {/* پاپ‌آپ نمایش تصویر */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="relative max-w-2xl w-[80%]"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ type: 'spring', stiffness: 200, damping: 20 }}
              onClick={e => e.stopPropagation()}
            >
              <Image
                src={selectedImage}
                alt="Full view"
                width={800}
                height={600}
                className="rounded-lg object-contain w-full h-160"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-1 right-8 bg-white/90 text-gray-700 rounded-full px-3 py-1 shadow hover:bg-white transition"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GalleryTab;
