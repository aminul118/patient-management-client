import TableFilters from '@/components/common/table/TableFilters';
import ClientTableWrapper from '@/components/common/wrapper/ClientTableWrapper';
import PcosTable from '@/components/modules/Admin/pcos/PcosTable';
import { Button } from '@/components/ui/button';
import cleanSearchParams from '@/lib/cleanSearchParams';
import { getPcosPatients } from '@/services/patient-management/pcos';
import { SearchParams } from '@/types';
import { Plus } from 'lucide-react';
import Link from 'next/link';

const PcosManagementPage = async ({ searchParams }: SearchParams) => {
  const params = await cleanSearchParams(searchParams);
  const { data, meta } = await getPcosPatients(params);
  return (
    <>
      <ClientTableWrapper
        tableTitle="PCOS Patients"
        action={<Action />}
        meta={meta}
      >
        <TableFilters />
        <PcosTable patient={data} />
      </ClientTableWrapper>
    </>
  );
};

const Action = () => {
  return (
    <>
      <Button asChild>
        <Link href={'/admin/pcos/add-patient'}>
          <Plus /> Add Patient
        </Link>
      </Button>
    </>
  );
};

export default PcosManagementPage;
