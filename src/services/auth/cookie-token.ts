'use server';

import baseCookieOption from '@/config/cookie.config';
import envVars from '@/config/env.config';
import { cookies } from 'next/headers';

const setAccessToken = async (accessToken: string) => {
  const cookieStore = cookies();

  (await cookieStore).set('accessToken', accessToken, {
    ...baseCookieOption,
    maxAge: Number(envVars.jwt.accessTokenMaxAge) || 60 * 60,
    domain: baseCookieOption.domain,
  });
};

const setRefreshToken = async (refreshToken: string) => {
  const cookieStore = cookies();

  (await cookieStore).set('refreshToken', refreshToken, {
    ...baseCookieOption,
    maxAge: Number(envVars.jwt.refreshTokenMaxAge) || 60 * 60,
    domain: baseCookieOption.domain,
  });
};

const removeAccessToken = async () => {
  const cookieStore = cookies();

  (await cookieStore).delete({
    name: 'accessToken',
    path: baseCookieOption.path,
    domain: baseCookieOption.domain,
  });
};

const removeRefreshToken = async () => {
  const cookieStore = cookies();

  (await cookieStore).delete({
    name: 'refreshToken',
    path: baseCookieOption.path,
    domain: baseCookieOption.domain,
  });
};

export {
  removeAccessToken,
  removeRefreshToken,
  setAccessToken,
  setRefreshToken,
};
