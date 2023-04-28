import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(req: NextRequest) {
  const session = await getToken({ req, raw: true });
  const { pathname } = req.nextUrl;

  if (pathname.startsWith('/login') || pathname.startsWith('/register')) {
    if (session) {
      return NextResponse.redirect(new URL('/', req.url));
    }
  } else if (
    pathname.startsWith('/board') ||
    pathname.startsWith('/my-page') ||
    pathname.startsWith('/my-article') ||
    pathname.startsWith('/my-comment-article') ||
    pathname.startsWith('/my-scrap') ||
    pathname.startsWith('/message') ||
    pathname.startsWith('/find-account')
  ) {
    if (!session) {
      return NextResponse.redirect(new URL('/login', req.url));
    }
  }
}
export const config = {
  matcher: [
    '/login',
    '/register',
    '/board/:path*',
    '/my-page/:path*',
    '/my-article',
    '/my-comment-article',
    '/my-scrap',
    '/message',
    '/find-account',
  ],
};
