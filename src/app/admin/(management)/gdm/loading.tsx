import TableSkeleton from '@/components/common/loader/TableSkeleton';

const GdmPageLoading = () => {
  return (
    <>
      <TableSkeleton rows={10} hasFilter hasPagination />
    </>
  );
};

export default GdmPageLoading;
