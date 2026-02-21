import InfertilityPatientDetailsClient from '@/components/modules/Admin/infertility/InfertilityPatientDetailsClient';
import { getSingleInfertilityPatientInfo } from '@/services/patient-management/infertility';
import { Params } from '@/types';

const InfertilityPatientDetailsPage = async ({ params }: Params) => {
  const { slug } = await params;
  const { data: patient } = await getSingleInfertilityPatientInfo(slug);

  return <InfertilityPatientDetailsClient patient={patient} slug={slug} />;
};

export default InfertilityPatientDetailsPage;
