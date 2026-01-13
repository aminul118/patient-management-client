'use server';

import serverFetch from '@/lib/server-fetch';
import { ApiResponse, IContact } from '@/types';

const contactAction = async (payload: Record<string, string>) => {
  const res = await serverFetch.post<ApiResponse<IContact>>('/contact', {
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  return res;
};

export { contactAction };
