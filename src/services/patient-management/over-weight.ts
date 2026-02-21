import { revalidate } from '@/lib/revalidate';
import serverFetch from '@/lib/server-fetch';
import { ApiResponse, IOverWeight } from '@/types';

const createOverWeightPatient = async (payload: Record<string, string>) => {
  const res = await serverFetch.post<ApiResponse<IOverWeight>>(
    '/over-weight/create',
    {
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    },
  );
  revalidate('over-weight-patients');
  return res;
};

const updateOverWeightPatient = async (
  id: string,
  payload: Record<string, string>,
) => {
  const res = await serverFetch.put<ApiResponse<IOverWeight>>(
    `/over-weight/${id}`,
    {
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    },
  );

  revalidate('over-weight-patients');
  return res;
};

const deleteOverWeightPatientInfo = async (id: string) => {
  const res = await serverFetch.delete<ApiResponse<null>>(`/over-weight/${id}`);
  revalidate('over-weight-patients');
  return res;
};

const getOverWeightPatients = async (query: Record<string, string>) => {
  return await serverFetch.get<ApiResponse<IOverWeight[]>>(
    '/over-weight/get-all',
    {
      query,
      cache: 'force-cache',
      next: {
        tags: ['over-weight-patients'],
      },
    },
  );
};

const getSingleOverWeightPatientInfo = async (slug: string) => {
  return await serverFetch.get<ApiResponse<IOverWeight>>(
    `/over-weight/${slug}`,
  );
};

export {
  createOverWeightPatient,
  deleteOverWeightPatientInfo,
  getOverWeightPatients,
  getSingleOverWeightPatientInfo,
  updateOverWeightPatient,
};
