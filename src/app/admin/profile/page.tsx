import ProfileClient from '@/components/modules/Admin/profile/ProfileClient';
import { getMe } from '@/services/user/users';

const ProfilePage = async () => {
  const { data: user } = await getMe();

  return <ProfileClient user={user} />;
};

export default ProfilePage;
