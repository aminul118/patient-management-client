import { MenuGroup } from '@/types';
import { BookImage, Gauge, Users } from 'lucide-react';

export const adminSidebarmenu: MenuGroup[] = [
  {
    title: 'Menu',
    menu: [
      {
        name: 'Dashboard',
        url: '/admin',
        icon: Gauge,
      },
      {
        name: 'GDM Management',
        url: '/admin/gdm-management',
        icon: BookImage,
      },
      {
        name: 'PCOS Management',
        url: '/admin/pcos-management',
        icon: BookImage,
      },
      {
        name: 'Infertility Management',
        url: '/admin/infertility-management',
        icon: BookImage,
      },
      {
        name: 'Overweight Management',
        url: '/admin/overweight-management',
        icon: BookImage,
      },
      {
        name: 'Registered Users',
        url: '/admin/users',
        icon: Users,
      },
    ],
  },
];
