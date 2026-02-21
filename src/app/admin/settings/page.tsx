import { redirect } from 'next/navigation';

const SettingsPage = () => {
  redirect('/admin/settings/profile');
};

export default SettingsPage;
