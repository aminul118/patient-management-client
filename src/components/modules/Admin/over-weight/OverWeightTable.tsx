'use client';

import TableManageMent from '@/components/common/table/TableManageMent';
import { IOverWeight } from '@/types';
import OverWeightTableColumn from './OverWeightTableColumn';

interface Props {
  patient: IOverWeight[];
}

const OverWeightTable = ({ patient }: Props) => {
  return (
    <div>
      <TableManageMent
        columns={OverWeightTableColumn}
        data={patient}
        getRowKey={(u) => u._id}
      />
    </div>
  );
};

export default OverWeightTable;
