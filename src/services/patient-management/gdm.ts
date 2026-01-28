import { revalidate } from '@/lib/revalidate';
import serverFetch from '@/lib/server-fetch';
import { ApiResponse, IGdm } from '@/types';

const createGdmPatient = async (payload: Record<string, string>) => {
  const res = await serverFetch.post<ApiResponse<null>>('/gdm/create', {
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });
  revalidate('gdm-patients');
  return res;
};

const updateGdmPatient = async (
  payload: Record<string, string>,
  id: string,
) => {
  const res = await serverFetch.post<ApiResponse<null>>(`/gdm/${id}`, {
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });
  revalidate('gdm-patients');
  return res;
};

const deleteSinglePatientInfo = async (id: string) => {
  const res = await serverFetch.delete<ApiResponse<null>>(`/gdm/${id}`);
  revalidate('gdm-patients');
  return res;
};

const getGdmPatients = async (query: Record<string, string>) => {
  return await serverFetch.get<ApiResponse<IGdm[]>>('/gdm/get-all', {
    query,
    cache: 'force-cache',
    next: {
      tags: ['gdm-patients'],
    },
  });
};

const getSingleGdmPatient = async (slug: string) => {
  return await serverFetch.get<ApiResponse<null>>(`/gdm/${slug}`);
};

export {
  createGdmPatient,
  deleteSinglePatientInfo,
  getGdmPatients,
  getSingleGdmPatient,
  updateGdmPatient,
};
