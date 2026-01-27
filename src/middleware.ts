import createMiddleware from 'next-intl/middleware';
import { routing } from '@/lib/i18n/routing';
import { NextRequest } from 'next/server';

const intlMiddleware = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  const res = intlMiddleware(request);
  // để verify middleware có chạy
  res.headers.set('x-mw', '1');
  return res;
}

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};