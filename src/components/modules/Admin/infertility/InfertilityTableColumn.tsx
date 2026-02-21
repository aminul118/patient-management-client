import DateFormat from '@/components/common/formater/date-format';
import { Column } from '@/components/common/table/TableManageMent';
import { IInfertility } from '@/types';
import InfertilityActions from './InfertilityActions';

const InfertilityTableColumn: Column<IInfertility>[] = [
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
    accessor: (p) => <InfertilityActions patient={p} />,
  },
];

export default InfertilityTableColumn;
