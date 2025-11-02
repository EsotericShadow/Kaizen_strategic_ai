import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || '';
  
  // Redirect evergreenwebsolutions.ca to kaizenstrategic.ai
  if (
    hostname.includes('evergreenwebsolutions.ca') ||
    hostname.includes('www.evergreenwebsolutions.ca')
  ) {
    // Redirect root and www to the redirect page with popup
    if (request.nextUrl.pathname === '/') {
      return NextResponse.redirect(new URL('/evergreen-redirect', request.url));
    }
    // For other paths, redirect to kaizenstrategic.ai
    const newUrl = new URL(request.nextUrl.pathname + request.nextUrl.search, 'https://kaizenstrategic.ai');
    return NextResponse.redirect(newUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};

