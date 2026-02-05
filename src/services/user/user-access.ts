export type UserRole = 'ADMIN' | 'USER' | 'SUPER_ADMIN';

export type RouteConfig = {
  exact: string[];
  patterns: RegExp[];
};

// 🔓 Public auth routes
const authRoutes = [
  '/login',
  '/register',
  '/forgot-password',
  '/reset-password',
];

// 🔐 Common protected routes (all logged-in users)
const commonProtectedRoutes: RouteConfig = {
  exact: ['/my-profile', '/settings'],
  patterns: [/^\/password(\/|$)/],
};

// 🛡 SUPER_ADMIN only
const superAdminProtectedRoutes: RouteConfig = {
  exact: [],
  patterns: [/^\/doctor(\/|$)/, /^\/assistants(\/|$)/, /^\/appointments(\/|$)/],
};

// 🛠 ADMIN only
const adminProtectedRoutes: RouteConfig = {
  exact: [],
  patterns: [/^\/admin(\/|$)/],
};

// 👤 USER only
const userProtectedRoutes: RouteConfig = {
  exact: [],
  patterns: [/^\/dashboard(\/|$)/],
};

// ---------- HELPERS ----------

const isAuthRoute = (pathname: string): boolean =>
  authRoutes.includes(pathname);

const isRouteMatches = (pathname: string, routes: RouteConfig): boolean => {
  if (routes.exact.includes(pathname)) return true;
  return routes.patterns.some((p) => p.test(pathname));
};

const getRouteOwner = (
  pathname: string,
): 'ADMIN' | 'SUPER_ADMIN' | 'COMMON' | 'USER' | null => {
  if (isRouteMatches(pathname, superAdminProtectedRoutes)) return 'SUPER_ADMIN';
  if (isRouteMatches(pathname, adminProtectedRoutes)) return 'ADMIN';
  if (isRouteMatches(pathname, userProtectedRoutes)) return 'USER';
  if (isRouteMatches(pathname, commonProtectedRoutes)) return 'COMMON';
  return null;
};

const getDefaultDashboardRoute = (role: UserRole): string => {
  switch (role) {
    case 'ADMIN':
    case 'SUPER_ADMIN':
      return '/admin';
    case 'USER':
      return '/dashboard';
    default:
      return '/';
  }
};

const isValidRedirectForRole = (path: string, role: UserRole): boolean => {
  const owner = getRouteOwner(path);
  if (owner === null || owner === 'COMMON') return true;
  return owner === role;
};

export {
  authRoutes,
  getDefaultDashboardRoute,
  getRouteOwner,
  isAuthRoute,
  isRouteMatches,
  isValidRedirectForRole,
};
