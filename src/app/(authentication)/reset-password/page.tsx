import ResetPassword from '@/components/modules/Authentication/ResetPassword';
import generateMetaTags from '@/seo/generateMetaTags';
import { SearchParams } from '@/types';
import { Metadata } from 'next';

const ResetPasswordPage = async ({ searchParams }: SearchParams) => {
  const resolvedSearchParams = await searchParams;
  return (
    <div className="center">
      <ResetPassword props={resolvedSearchParams} />
    </div>
  );
};

export default ResetPasswordPage;

// >> SEO Start
export const metadata: Metadata = generateMetaTags({
  title: 'Reset Password | Patient Management',
  description:
    'Reset your Patient Management account password securely to regain access to your personalized healthcare and research dashboard.',
  keywords:
    'reset password, password recovery, Patient Management, SHRL, account access, secure login, healthcare platform, medical research account',
  image: '/seo/shrl-hero-ss.png',
  websitePath: '/reset-password',
});
// >> SEO End
