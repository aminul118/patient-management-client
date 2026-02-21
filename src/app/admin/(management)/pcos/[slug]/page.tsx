import PcosPatientDetailsClient from '@/components/modules/Admin/pcos/PcosPatientDetailsClient';
import { getSinglePcosPatientInfo } from '@/services/patient-management/pcos';
import { Params } from '@/types';

const PcosPatientDetailsPage = async ({ params }: Params) => {
  const { slug } = await params;
  const { data: patient } = await getSinglePcosPatientInfo(slug);

  return <PcosPatientDetailsClient patient={patient} slug={slug} />;
};

export default PcosPatientDetailsPage;
