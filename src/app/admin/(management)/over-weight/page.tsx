import TableFilters from '@/components/common/table/TableFilters';
import ClientTableWrapper from '@/components/common/wrapper/ClientTableWrapper';
import OverWeightTable from '@/components/modules/Admin/over-weight/OverWeightTable';
import { Button } from '@/components/ui/button';
import cleanSearchParams from '@/lib/cleanSearchParams';
import { getOverWeightPatients } from '@/services/patient-management/over-weight';
import { SearchParams } from '@/types';
import { Plus } from 'lucide-react';
import Link from 'next/link';

const OverWeightManagementPage = async ({ searchParams }: SearchParams) => {
  const params = await cleanSearchParams(searchParams);
  const { data, meta } = await getOverWeightPatients(params);
  return (
    <>
      <ClientTableWrapper
        tableTitle="Overweight Patients"
        action={<Action />}
        meta={meta}
      >
        <TableFilters />
        <OverWeightTable patient={data} />
      </ClientTableWrapper>
    </>
  );
};

const Action = () => {
  return (
    <>
      <Button asChild>
        <Link href={'/admin/over-weight/add-patient'}>
          <Plus /> Add Patient
        </Link>
      </Button>
    </>
  );
};

export default OverWeightManagementPage;
