'use server';

import serverFetch from '@/lib/server-fetch';
import { ApiResponse } from '@/types';
import { type NextRequest } from 'next/server';

type RefreshResponse = {
  accessToken: string;
  refreshToken: string;
};

const tryRefreshToken = async (req: NextRequest) => {
  const refreshToken = req.cookies.get('refreshToken')?.value;

  try {
    const res = await serverFetch.post<ApiResponse<RefreshResponse>>(
      '/auth/refresh-token',
      {
        method: 'POST',
        headers: {
          Cookie: `refreshToken=${refreshToken}`,
          'Content-Type': 'application/json',
        },

        cache: 'no-store',
      },
    );

    if (!res.success || !res?.data?.accessToken) return null;

    return {
      accessToken: res.data.accessToken,
      refreshToken: res.data.refreshToken,
    };
  } catch {
    return null;
  }
};

export { tryRefreshToken };
