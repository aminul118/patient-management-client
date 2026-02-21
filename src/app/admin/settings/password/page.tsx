import ChangePasswordClient from '@/components/modules/Admin/settings/ChangePasswordClient';
import { Metadata } from 'next';

const PasswordSettingsPage = () => {
  return <ChangePasswordClient />;
};

export default PasswordSettingsPage;

// SEO Metadata
export const metadata: Metadata = {
  title: 'Password Settings | Patient Management',
};
