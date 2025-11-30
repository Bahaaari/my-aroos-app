'use client'

import React from 'react'
import Link from 'next/link'
import {
  Home,
  User,
  Camera,
  Music,
  Car,
  Cake,
  Gift,
  Scissors,
} from 'lucide-react'


const menuItems = [
  { icon: Home, label: 'تالار و باغ', href: '#' },
  { icon: User, label: 'لباس عروس و داماد', href: '#' },
  { icon: Camera, label: 'عکاسی و فیلمبرداری', href: '#' },
  { icon: Music, label: 'موسیقی و نورپردازی', href: '#' },
  { icon: Car, label: 'کرایه اتومبیل', href: '#' },
  { icon: Cake, label: 'تهیه کیک - کارت', href: '#' },
  { icon: Gift, label: 'زینت آلات عروسی', href: '#' },
  {
    icon: Scissors,
    label: 'آرایشگاه',
    href: '#',
    subItems: [
      { label: 'آرایشگاه زنانه', href: '#' },
      { label: 'آرایشگاه مردانه', href: '#' },
    ],
  },
  { icon: Gift, label: 'جهیزیه', href: '#' },
]

const SideBar = () => {
  return (
    <aside className='shadow-md w-full border border-gray-100 rounded-md bg-white text-xs'>
        <ul className='devide-y devide-gray-100'>
            {menuItems.map((item, idx) => (
                <li key={idx} className='relative'>
                    {item.subItems ? (
                        <div 
                           className="flex items-center gap-3 p-3 cursor-pointer group
                            text-pink-700 font-medium bg-pink-100 hover:bg-pink-50"
                        >
                            <item.icon className="w-8 h-8 text-pink-600 border-l border-gray-300 px-1" />
                             {item.label}
                        </div>
                    ) : (
                        <Link href={item.href}>
                         <div className="flex items-center gap-4 p-3 cursor-pointer hover:bg-pink-50">
                           <item.icon className="w-8 h-8 text-gray-600 border-l border-gray-200 px-1" />
                           {item.label}
                         </div>
                        </Link>
                   )}

                    {item.subItems && (
                     <ul className="absolute left-full top-0 ml-0 hidden group-hover:block bg-pink-100 text-pink-700 w-48 rounded-md shadow-md">
                      {item.subItems.map((subItem, subIdx) => (
                        <li key={subIdx} className="pl-4 py-2 hover:bg-pink-50">
                           <Link href={subItem.href}>{subItem.label}</Link>
                        </li>
                       ))}
                     </ul>
                    )}
                    
                </li>
            ))}
        </ul>
    </aside>
  )
}

export default SideBar