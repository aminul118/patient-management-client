'use client';

import TableManageMent from '@/components/common/table/TableManageMent';
import { IBanner } from '@/types';
import BannerColumn from './BannerColumn';
interface Props {
  banners: IBanner[];
}

const BannerTable = ({ banners }: Props) => {
  return (
    <>
      <TableManageMent
        columns={BannerColumn}
        data={banners}
        getRowKey={(b) => b._id}
      />
    </>
  );
};

export default BannerTable;
