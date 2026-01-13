import TableFilters from '@/components/common/table/TableFilters';
import ClientTableWrapper from '@/components/common/wrapper/ClientTableWrapper';
import { AddBannerDialog } from '@/components/modules/Admin/Banner/AddBannerDialog';
import BannerTable from '@/components/modules/Admin/Banner/BannerTable';
import cleanSearchParams from '@/lib/cleanSearchParams';
import { getBanners } from '@/services/hero-banner/hero-banner';
import { SearchParams } from '@/types';

const HeroBannerPage = async ({ searchParams }: SearchParams) => {
  const params = await cleanSearchParams(searchParams);
  const { data, meta } = await getBanners(params);
  return (
    <>
      <ClientTableWrapper
        tableTitle="Hero Banners"
        meta={meta}
        action={<AddBannerDialog />}
      >
        <TableFilters />
        <BannerTable banners={data} />
      </ClientTableWrapper>
    </>
  );
};

export default HeroBannerPage;
