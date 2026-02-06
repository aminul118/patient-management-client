// middleware.ts
import { NextResponse, type NextRequest } from 'next/server';
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
  const user = await getVerifiedUser(req);
  const role = user?.role as UserRole | undefined;

  const isAuthPage = isAuthRoute(pathname);
  const routeOwner = getRouteOwner(pathname);

  // Prevent that user does not go to root route
  if (pathname === '/') {
    // Guest → login
    if (!user) {
      return NextResponse.redirect(new URL('/login', origin));
    }

    // Logged-in → dashboard
    return NextResponse.redirect(
      new URL(getDefaultDashboardRoute(role!), origin),
    );
  }

  //  allow public auth pages
  if (!user && isAuthPage) {
    return NextResponse.next();
  }

  //  logged-in users should not see auth pages
  if (user && isAuthPage) {
    return NextResponse.redirect(
      new URL(getDefaultDashboardRoute(role!), origin),
    );
  }

  //  protect routes
  if (!user && routeOwner !== null && pathname !== '/login') {
    return NextResponse.redirect(new URL('/login', origin));
  }

  //  role protection
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
