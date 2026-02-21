import DateFormat from '@/components/common/formater/date-format';
import { Column } from '@/components/common/table/TableManageMent';
import { IPcos } from '@/types';
import PcosActions from './PcosActions';

const PcosTableColumn: Column<IPcos>[] = [
  {
    header: 'SI',
    accessor: (_, i) => i + 1,
  },
  {
    header: 'Patient ID',
    accessor: (p) => p.patientId,
  },
  {
    header: 'Name',
    accessor: (p) => p.name,
  },
  {
    header: 'Phone',
    accessor: (p) => p.phone,
  },
  {
    header: 'Emergency Contact',
    accessor: (p) => p.emergencyContact,
  },

  {
    header: 'User Join Date & Time',
    accessor: (p) => <DateFormat date={p.createdAt} />,
  },
  {
    header: 'Actions',
    accessor: (p) => <PcosActions patient={p} />,
  },
];

export default PcosTableColumn;
