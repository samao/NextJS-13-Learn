/*
 * Copyright (c) QieTv, Inc. 2018
 * @Author: idzeir
 * @Date: 2023-05-31 14:33:14
 * @Last Modified by: idzeir
 * @Last Modified time: 2023-05-31 15:06:32
 */
import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
    console.log('NEXT_URL:', request.url);
    return NextResponse.next({
        headers: { Server: 'qie-fe-group', 'client-ip': request.ip ?? '-' }
    });
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
        '/((?!api|_next/static|_next/image|favicon.ico).*)'
    ]
};
