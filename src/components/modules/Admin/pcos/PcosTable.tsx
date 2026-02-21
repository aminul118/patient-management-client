'use client';

import TableManageMent from '@/components/common/table/TableManageMent';
import { IPcos } from '@/types';
import PcosTableColumn from './PcosTableColumn';

interface Props {
  patient: IPcos[];
}

const PcosTable = ({ patient }: Props) => {
  return (
    <div>
      <TableManageMent
        columns={PcosTableColumn}
        data={patient}
        getRowKey={(u) => u._id}
      />
    </div>
  );
};

export default PcosTable;
