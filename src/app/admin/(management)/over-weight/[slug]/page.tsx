import OverWeightPatientDetailsClient from '@/components/modules/Admin/over-weight/OverWeightPatientDetailsClient';
import { getSingleOverWeightPatientInfo } from '@/services/patient-management/over-weight';
import { Params } from '@/types';

const OverWeightPatientDetailsPage = async ({ params }: Params) => {
  const { slug } = await params;
  const { data: patient } = await getSingleOverWeightPatientInfo(slug);

  return <OverWeightPatientDetailsClient patient={patient} slug={slug} />;
};

export default OverWeightPatientDetailsPage;
