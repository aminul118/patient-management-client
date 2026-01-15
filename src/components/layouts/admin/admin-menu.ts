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
        url: '/admin/gdm',
        icon: BookImage,
      },
      {
        name: 'PCOS Management',
        url: '/admin/pcos',
        icon: BookImage,
      },
      {
        name: 'Infertility Management',
        url: '/admin/infertility',
        icon: BookImage,
      },
      {
        name: 'Overweight Management',
        url: '/admin/over-weight',
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
