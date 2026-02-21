import TableFilters from '@/components/common/table/TableFilters';
import ClientTableWrapper from '@/components/common/wrapper/ClientTableWrapper';
import InfertilityTable from '@/components/modules/Admin/infertility/InfertilityTable';
import { Button } from '@/components/ui/button';
import cleanSearchParams from '@/lib/cleanSearchParams';
import { getInfertilityPatients } from '@/services/patient-management/infertility';
import { SearchParams } from '@/types';
import { Plus } from 'lucide-react';
import Link from 'next/link';

const InfertilityManagementPage = async ({ searchParams }: SearchParams) => {
  const params = await cleanSearchParams(searchParams);
  const { data, meta } = await getInfertilityPatients(params);
  return (
    <>
      <ClientTableWrapper
        tableTitle="Infertility Patients"
        action={<Action />}
        meta={meta}
      >
        <TableFilters />
        <InfertilityTable patient={data} />
      </ClientTableWrapper>
    </>
  );
};

const Action = () => {
  return (
    <>
      <Button asChild>
        <Link href={'/admin/infertility/add-patient'}>
          <Plus /> Add Patient
        </Link>
      </Button>
    </>
  );
};

export default InfertilityManagementPage;
