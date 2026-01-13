import PlaceHolderImage from '@/components/common/PlaceHolderImage';
import { Column } from '@/components/common/table/TableManageMent';
import { IBanner } from '@/types';
import Image from 'next/image';
import BannerActions from './BannerAction';

const BannerColumn: Column<IBanner>[] = [
  {
    header: 'SI',
    accessor: (_, i) => i + 1,
  },
  {
    header: 'Photo',
    accessor: (b) =>
      b.photo ? (
        <>
          <Image src={b.photo} alt={b.title} width={100} height={50} />
        </>
      ) : (
        <PlaceHolderImage />
      ),
  },
  {
    header: 'Title',
    accessor: (b) => b.title,
  },
  {
    header: 'Redirect URL',
    accessor: (b) => b.url,
  },
  {
    header: 'Actions',
    accessor: (b) => <BannerActions banner={b} />,
  },
];

export default BannerColumn;
