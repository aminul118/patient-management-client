import ProfileClient from '@/components/modules/Admin/settings/ProfileClient';
import { getMe } from '@/services/user/users';
import { Metadata } from 'next';

const ProfileSettingsPage = async () => {
  const { data: user } = await getMe();

  return <ProfileClient user={user} />;
};

export default ProfileSettingsPage;

// SEO Metadata
export const metadata: Metadata = {
  title: 'Profile Settings | Patient Management',
};
