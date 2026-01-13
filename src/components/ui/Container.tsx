import { Children } from '@/types';

type classNameProps = Children & {
  className?: string;
  backgroundColor?: string;
};

const Container = ({
  children,
  className,
  backgroundColor,
}: classNameProps) => {
  return (
    <section
      className={`${backgroundColor} flex flex-col justify-center bg-cover bg-center`}
    >
      <div
        className={`container mx-auto px-2 py-8 lg:py-14 xl:py-16 2xl:py-24 ${className}`}
      >
        {children}
      </div>
    </section>
  );
};

export default Container;
