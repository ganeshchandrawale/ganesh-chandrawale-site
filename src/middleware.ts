import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  // Let all requests pass through normally
  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - robots.txt (robots file)
     * - sitemap.xml (sitemap file)
     * - sitemap/ (nested sitemap files)
     * - site.webmanifest (web manifest file)
     */
    '/((?!_next/static|_next/image|favicon\\.ico|robots\\.txt|sitemap\\.xml|sitemap/.*|site\\.webmanifest).*)',
  ],
}