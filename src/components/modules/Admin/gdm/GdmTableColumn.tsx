import DateFormat from '@/components/common/date-format';
import { Column } from '@/components/common/table/TableManageMent';
import { IGdm } from '@/types';
import GdmActions from './GdmActions';

const GdmTableColumn: Column<IGdm>[] = [
  {
    header: 'SI',
    accessor: (_, i) => i + 1,
  },
  {
    header: 'Patient ID',
    accessor: (g) => g.patientId,
  },
  {
    header: 'Name',
    accessor: (g) => g.name,
  },
  {
    header: 'Phone',
    accessor: (g) => g.phone,
  },
  {
    header: 'Emergency Contact',
    accessor: (g) => g.emergencyContact,
  },

  {
    header: 'User Join Date & Time',
    accessor: (g) => <DateFormat date={g.createdAt} />,
  },
  {
    header: 'Actions',
    accessor: (g) => <GdmActions patient={g} />,
  },
];

export default GdmTableColumn;
