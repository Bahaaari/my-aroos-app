// data/sidebarMenu.ts
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
import { MenuItem } from '../types/sidebar'

export const menuItems: MenuItem[] = [
  { key: 'hall', icon: Home, label: 'تالار و باغ', href: '/hall' },
  { key: 'dress', icon: User, label: 'لباس عروس و داماد', href: '/dress' },
  { key: 'photo', icon: Camera, label: 'عکاسی و فیلمبرداری', href: '/photo' },
  { key: 'music', icon: Music, label: 'موسیقی و نورپردازی', href: '/music' },
  { key: 'car', icon: Car, label: 'کرایه اتومبیل', href: '/car' },
  { key: 'cake', icon: Cake, label: 'تهیه کیک - کارت', href: '/cake' },
  { key: 'jewelry', icon: Gift, label: 'زینت آلات عروسی', href: '/jewelry' },
  {
    key: 'salon',
    icon: Scissors,
    label: 'آرایشگاه',
    subItems: [
      { key: 'women-salon', label: 'آرایشگاه زنانه', href: '/salon/women' },
      { key: 'men-salon', label: 'آرایشگاه مردانه', href: '/salon/men' },
    ],
  },
  { key: 'dowry', icon: Gift, label: 'جهیزیه', href: '/dowry' },
]
