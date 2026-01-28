'use client';

import TableManageMent from '@/components/common/table/TableManageMent';
import { IGdm } from '@/types';
import GdmTableColumn from './GdmTableColumn';

interface Props {
  patient: IGdm[];
}

const GdmTable = ({ patient }: Props) => {
  return (
    <div>
      <TableManageMent
        columns={GdmTableColumn}
        data={patient}
        getRowKey={(u) => u._id}
      />
    </div>
  );
};

export default GdmTable;
