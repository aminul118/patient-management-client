import VerifyOTPForm from '@/components/modules/Authentication/VerifyOTPForm';
import generateMetaTags from '@/seo/generateMetaTags';
import { Metadata } from 'next';

const VerifyOTPPage = () => {
  return (
    <section className="center">
      <VerifyOTPForm />
    </section>
  );
};

export default VerifyOTPPage;

// >> SEO Start
export const metadata: Metadata = generateMetaTags({
  title: 'Verify OTP | Patient Management',
  description:
    'Verify your one-time password (OTP) to complete your Patient Management account authentication securely.',
  keywords:
    'verify otp, one time password, Patient Management, SHRL, account verification, secure login, authentication, healthcare platform',
  image: '/seo/shrl-hero-ss.png',
  websitePath: '/verify-otp',
});
// >> SEO End
