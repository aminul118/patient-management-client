import { revalidate } from '@/lib/revalidate';
import serverFetch from '@/lib/server-fetch';
import { ApiResponse, IPcos } from '@/types';

const createPcosPatient = async (payload: Record<string, string>) => {
  const res = await serverFetch.post<ApiResponse<IPcos>>('/pcos/create', {
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });
  revalidate('pcos-patients');
  return res;
};

const updatePcosPatient = async (
  id: string,
  payload: Record<string, string>,
) => {
  const res = await serverFetch.put<ApiResponse<IPcos>>(`/pcos/${id}`, {
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  revalidate('pcos-patients');
  return res;
};

const deletePcosPatientInfo = async (id: string) => {
  const res = await serverFetch.delete<ApiResponse<null>>(`/pcos/${id}`);
  revalidate('pcos-patients');
  return res;
};

const getPcosPatients = async (query: Record<string, string>) => {
  return await serverFetch.get<ApiResponse<IPcos[]>>('/pcos/get-all', {
    query,
    cache: 'force-cache',
    next: {
      tags: ['pcos-patients'],
    },
  });
};

const getSinglePcosPatientInfo = async (slug: string) => {
  return await serverFetch.get<ApiResponse<IPcos>>(`/pcos/${slug}`);
};

export {
  createPcosPatient,
  deletePcosPatientInfo,
  getPcosPatients,
  getSinglePcosPatientInfo,
  updatePcosPatient,
};
