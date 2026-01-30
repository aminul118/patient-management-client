import { Separator } from '@/components/ui/separator';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from '@/components/ui/sidebar';
import { getMe } from '@/services/user/users';
import Link from 'next/link';
import Logo from '../../../assets/Logo';
import Menu from './Menu';
import { adminSidebarmenu } from './admin-menu';
import FooterUser from './footer-user';

const AdminSidebar = async () => {
  const { data } = await getMe();
  console.log(data);
  return (
    <Sidebar collapsible="icon">
      {/* Header */}
      <SidebarHeader>
        <Link href="/admin" className="py-4">
          <Logo />
        </Link>
      </SidebarHeader>
      <Separator />
      <SidebarContent>
        {/* Sidebar Menu */}
        <Menu menuData={adminSidebarmenu} />
      </SidebarContent>
      {/* Footer */}
      <SidebarFooter className="py-6">
        <Separator className="mb-2" />
        <FooterUser user={data} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
};

export default AdminSidebar;
