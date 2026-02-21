import { revalidate } from '@/lib/revalidate';
import serverFetch from '@/lib/server-fetch';
import { ApiResponse, IInfertility } from '@/types';

const createInfertilityPatient = async (payload: Record<string, string>) => {
  const res = await serverFetch.post<ApiResponse<IInfertility>>(
    '/infertility/create',
    {
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    },
  );
  revalidate('infertility-patients');
  return res;
};

const updateInfertilityPatient = async (
  id: string,
  payload: Record<string, string>,
) => {
  const res = await serverFetch.put<ApiResponse<IInfertility>>(
    `/infertility/${id}`,
    {
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    },
  );

  revalidate('infertility-patients');
  return res;
};

const deleteInfertilityPatientInfo = async (id: string) => {
  const res = await serverFetch.delete<ApiResponse<null>>(`/infertility/${id}`);
  revalidate('infertility-patients');
  return res;
};

const getInfertilityPatients = async (query: Record<string, string>) => {
  return await serverFetch.get<ApiResponse<IInfertility[]>>(
    '/infertility/get-all',
    {
      query,
      cache: 'force-cache',
      next: {
        tags: ['infertility-patients'],
      },
    },
  );
};

const getSingleInfertilityPatientInfo = async (slug: string) => {
  return await serverFetch.get<ApiResponse<IInfertility>>(
    `/infertility/${slug}`,
  );
};

export {
  createInfertilityPatient,
  deleteInfertilityPatientInfo,
  getInfertilityPatients,
  getSingleInfertilityPatientInfo,
  updateInfertilityPatient,
};
