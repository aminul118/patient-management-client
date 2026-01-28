import fonts from '@/config/fonts.config';
import ThemeProvider from '@/providers/ThemeProvider';
import generateMetaTags from '@/seo/generateMetaTags';
import '@/styles/custom.css';
import '@/styles/globals.css';
import { Children } from '@/types';
import { Metadata } from 'next';
import { Toaster } from 'sonner';

const PublicLayout = ({ children }: Children) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={fonts.spaceGrotesk.className} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster position="top-right" richColors theme="system" />
        </ThemeProvider>
      </body>
    </html>
  );
};

export default PublicLayout;

//>> SEO Start
export const metadata: Metadata = generateMetaTags({
  title: 'Patient Management',
  description:
    'A1 Lifts and Enginnering is the best lift & Escalator company in Bangladesh that provides passenger lifts, hospital lifts, and capsule lifts, with technical services,. Lift maintains',
  keywords:
    'a1-lifts, lifts, bd lifts, cheappest lifts price, lift company in Bangladesh, best lift company in bangladesh, Lift company in Dhaka, lift price in Bangladesh, elevator in bd, Hospital Lift Bangladesh, Property Lifts, Lift for house, A1 lifts, A one lifts, A one lifts and enginnering, Lift maintains, Lifts parts, lift servicing company in bangladesh, small lift for a house, A1 lifts bd',
  image: '/assets/screenshots/hero.png',
});
//>> SEO End
