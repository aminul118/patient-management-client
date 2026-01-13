import TableSkeleton from '@/components/common/loader/TableSkeleton';

const HeroBannerLoading = () => {
  return (
    <>
      <TableSkeleton rows={10} hasFilter hasPagination />
    </>
  );
};

export default HeroBannerLoading;
