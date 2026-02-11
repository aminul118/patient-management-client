import Stats from '@/components/modules/Admin/Stats/Stats';
import GradientTitle from '@/components/ui/gradientTitle';
import { getAdminStats } from '@/services/stats/stats';
import { getMe } from '@/services/user/users';

const AdminHomePage = async () => {
  const [{ data: stats }, { data: user }] = await Promise.all([
    getAdminStats(),
    getMe(),
  ]);

  return (
    <section className="mx-auto w-11/12 space-y-6">
      <GradientTitle title={`Welcome ${user?.fullName || 'Admin'}`} />
      <Stats stats={stats} />
    </section>
  );
};

export default AdminHomePage;
