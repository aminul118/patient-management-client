import TableFilters from '@/components/common/table/TableFilters';
import ClientTableWrapper from '@/components/common/wrapper/ClientTableWrapper';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import Link from 'next/link';

const GdmManagementPage = () => {
  return (
    <>
      <ClientTableWrapper tableTitle="GDM Patients" action={<Action />}>
        <TableFilters />
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
