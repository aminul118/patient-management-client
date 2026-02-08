import GdmPatientDetailsClient from '@/components/modules/Admin/gdm/GdmPatientDetailsClient';
import { getSingleGdmPatientInfo } from '@/services/patient-management/gdm';
import { Params } from '@/types';

const GdmPatientDetailsPage = async ({ params }: Params) => {
  const { slug } = await params;
  const { data: patient } = await getSingleGdmPatientInfo(slug);

  return <GdmPatientDetailsClient patient={patient} slug={slug} />;
};

export default GdmPatientDetailsPage;
