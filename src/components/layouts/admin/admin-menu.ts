import { MenuGroup } from '@/types';
import {
  Activity,
  Baby,
  Gauge,
  Stethoscope,
  Users,
  Weight,
} from 'lucide-react';

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
        icon: Activity,
      },
      {
        name: 'PCOS Management',
        url: '/admin/pcos',
        icon: Stethoscope,
      },
      {
        name: 'Infertility Management',
        url: '/admin/infertility',
        icon: Baby,
      },
      {
        name: 'Overweight Management',
        url: '/admin/over-weight',
        icon: Weight,
      },
      {
        name: 'Users',
        url: '/admin/users',
        icon: Users,
      },
    ],
  },
];
