import { NextResponse, type NextRequest } from 'next/server';
import baseCookieOption from './config/cookie.config';
import envVars from './config/env.config';
import { tryRefreshToken } from './services/auth/refreshToken';
import {
  getDefaultDashboardRoute,
  getRouteOwner,
  isAuthRoute,
  isValidRedirectForRole,
  UserRole,
} from './services/user/user-access';
import getVerifiedUser from './services/user/verified-user';

export async function proxy(req: NextRequest) {
  const { pathname, origin } = req.nextUrl;

  const isAuthPage = isAuthRoute(pathname);
  const routeOwner = getRouteOwner(pathname);

  // 1) First try with current access token
  let user = await getVerifiedUser(req);
  let response = NextResponse.next();

  // 2) If access is invalid but refresh exists -> refresh once (avoid doing this on auth pages)
  if (!user && !isAuthPage && routeOwner !== null) {
    const refreshed = await tryRefreshToken(req);

    if (refreshed?.accessToken) {
      const { accessToken, refreshToken } = refreshed;

      // Set the new tokens in the response cookies
      response.cookies.set('accessToken', accessToken, {
        ...baseCookieOption,
        maxAge: Number(envVars.jwt.accessTokenMaxAge) || 60 * 60,
      });

      if (refreshToken) {
        response.cookies.set('refreshToken', refreshToken, {
          ...baseCookieOption,
          maxAge: Number(envVars.jwt.refreshTokenMaxAge) || 60 * 60 * 24 * 7,
        });
      }

      // Re-check user with the new token to allow the request to proceed if valid
      // Since we just got this token from the backend, we can optionally decode it
      // or just call getVerifiedUser if it can handle the new token.
      // getVerifiedUser(req) uses req.cookies, so we need to mock or manually check.
      // For now, let's try to re-verify by passing the new token if we had a helper,
      // but getVerifiedUser is tied to NextRequest.

      // Simple decode for role-based logic in middleware
      try {
        const base64Url = accessToken.split('.')[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        const payload = JSON.parse(atob(base64));
        user = payload;
      } catch (e) {
        console.error('Failed to decode new token:', e);
      }
    }
  }

  const role = user?.role as UserRole | undefined;

  // Prevent that user does not go to root route
  if (pathname === '/') {
    if (!user) return NextResponse.redirect(new URL('/login', origin));
    return NextResponse.redirect(
      new URL(getDefaultDashboardRoute(role!), origin),
    );
  }

  // allow public auth pages
  if (!user && isAuthPage) return response;

  // logged-in users should not see auth pages
  if (user && isAuthPage) {
    return NextResponse.redirect(
      new URL(getDefaultDashboardRoute(role!), origin),
    );
  }

  // protect routes
  if (!user && routeOwner !== null && pathname !== '/login') {
    return NextResponse.redirect(new URL('/login', origin));
  }

  // role protection
  if (user && !isValidRedirectForRole(pathname, role!)) {
    return NextResponse.redirect(
      new URL(getDefaultDashboardRoute(role!), origin),
    );
  }

  return response;
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|.well-known).*)',
  ],
};
