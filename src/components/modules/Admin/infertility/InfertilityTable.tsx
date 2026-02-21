'use client';

import TableManageMent from '@/components/common/table/TableManageMent';
import { IInfertility } from '@/types';
import InfertilityTableColumn from './InfertilityTableColumn';

interface Props {
  patient: IInfertility[];
}

const InfertilityTable = ({ patient }: Props) => {
  return (
    <div>
      <TableManageMent
        columns={InfertilityTableColumn}
        data={patient}
        getRowKey={(u) => u._id}
      />
    </div>
  );
};

export default InfertilityTable;
