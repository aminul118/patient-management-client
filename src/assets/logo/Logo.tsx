import { DivProps } from '@/types';
import Image from 'next/image';

interface Props extends DivProps {
  LogoWidth?: number;
  LogoHeight?: number;
}

const Logo = ({ LogoWidth = 200, LogoHeight = 80, ...props }: Props) => {
  return (
    <div {...props} className="flex flex-col items-center justify-center">
      <Image
        src="/logo.png"
        alt="Smart Healthcare and Research Limited logo"
        width={LogoWidth}
        height={LogoHeight}
        className="object-contain"
      />
    </div>
  );
};

export default Logo;
