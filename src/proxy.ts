import { NextResponse, type NextRequest } from 'next/server';
import { setAccessToken, setRefreshToken } from './services/auth/cookie-token';
import { tryRefreshToken } from './services/auth/refreshToken';
import {
  getDefaultDashboardRoute,
  getRouteOwner,
  isAuthRoute,
  isValidRedirectForRole,
  UserRole,
} from './services/user/user-access';
import getVerifiedUser from './services/user/verified-user';

export const proxy = async (req: NextRequest) => {
  const { pathname, origin } = req.nextUrl;

  const isAuthPage = isAuthRoute(pathname);
  const routeOwner = getRouteOwner(pathname);

  // 1) First try with current access token
  let user = await getVerifiedUser(req);

  // 2) If access is invalid but refresh exists -> refresh once (avoid doing this on auth pages)
  if (!user && !isAuthPage && routeOwner !== null) {
    const refreshed = await tryRefreshToken(req);

    if (refreshed?.accessToken && refreshed.refreshToken) {
      const { accessToken, refreshToken } = refreshed;
      const res = NextResponse.next();
      await setAccessToken(accessToken);
      await setRefreshToken(refreshToken);
      return res;
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
  if (!user && isAuthPage) return NextResponse.next();

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

  return NextResponse.next();
};

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|.well-known).*)',
  ],
};
