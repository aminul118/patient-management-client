'use server';

import { revalidate } from '@/lib/revalidate';
import serverFetch from '@/lib/server-fetch';
import { ApiResponse } from '@/types';
import { IBanner } from '@/types/api.types';

const createBanner = async (formData: FormData) => {
  const body = new FormData();
  body.append('data', formData.get('data') as string);
  const file = formData.get('file') as File | null;
  if (file) {
    body.append('file', file);
  }

  const res = await serverFetch.post<ApiResponse<IBanner>>('/banner/create', {
    body,
  });

  revalidate('banner');
  return res;
};

const deleteSingleBanner = async (id: string) => {
  const res = await serverFetch.delete<ApiResponse<IBanner>>(`/banner/${id}`);
  revalidate('banner');
  return res;
};

const getBanners = async (query?: Record<string, string>) => {
  return await serverFetch.get<ApiResponse<IBanner[]>>('/banner', {
    query,
    cache: 'force-cache',
    next: {
      tags: ['banner'],
    },
  });
};

export { createBanner, deleteSingleBanner, getBanners };
