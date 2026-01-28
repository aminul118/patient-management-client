import TableFilters from '@/components/common/table/TableFilters';
import ClientTableWrapper from '@/components/common/wrapper/ClientTableWrapper';
import GdmTable from '@/components/modules/Admin/gdm/GdmTable';
import { Button } from '@/components/ui/button';
import cleanSearchParams from '@/lib/cleanSearchParams';
import { getGdmPatients } from '@/services/patient-management/gdm';
import { SearchParams } from '@/types';
import { Plus } from 'lucide-react';
import Link from 'next/link';

const GdmManagementPage = async ({ searchParams }: SearchParams) => {
  const params = await cleanSearchParams(searchParams);
  const { data, meta } = await getGdmPatients(params);
  return (
    <>
      <ClientTableWrapper
        tableTitle="GDM Patients"
        action={<Action />}
        meta={meta}
      >
        <TableFilters />
        <GdmTable patient={data} />
      </ClientTableWrapper>
    </>
  );
};

const Action = () => {
  return (
    <>
      <Button asChild>
        <Link href={'/admin/gdm/add-patient'}>
          <Plus /> Add Patient
        </Link>
      </Button>
    </>
  );
};

export default GdmManagementPage;
