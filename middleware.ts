import { NextRequest, NextResponse } from 'next/server'

export async function middleware(request: NextRequest) {
  // Allow public pages and API routes
  if (request.nextUrl.pathname === '/' || request.nextUrl.pathname.startsWith('/api')) {
    return NextResponse.next()
  }

  // For now, allow all pages (Mission Control is accessed directly)
  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}
