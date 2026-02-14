import { redirect } from 'next/navigation';

const ProfilePage = async () => {
  redirect('/admin/settings?tab=profile');
};

export default ProfilePage;
