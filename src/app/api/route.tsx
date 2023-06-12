/*
 * Copyright (c) QieTv, Inc. 2018
 * @Author: idzeir
 * @Date: 2023-05-30 14:23:31
 * @Last Modified by: idzeir
 * @Last Modified time: 2023-05-31 15:21:09
 */
import { NextResponse, ImageResponse } from 'next/server';
import { cookies, headers } from 'next/headers';
import { notFound } from 'next/navigation';

// export const runtime = "edge";

export async function GET(request: Request) {
    const header = headers();
    const cookie = cookies();
    const { searchParams } = new URL(request.url);

    if (searchParams.has('img')) {
        return new ImageResponse(
            (
                <div
                    style={{
                        background: 'red',
                        borderRadius: '50%',
                        width: 100,
                        height: '100px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 'bold'
                    }}
                >
                    {process.env.NEXT_PUBLIC_HOME}:{decodeURIComponent(searchParams.get('img') ?? '')}
                </div>
            ),
            { width: 100, height: 100 }
        );
    }

    // await new Promise(res => {
    //     setTimeout(res, 1000);
    // });

    if (searchParams.has('json')) {
        const data = await fetch(process.env.NEXT_PUBLIC_STATIC_JSON!, {
            next: { revalidate: 160 }
        });

        if (data.ok) {
            return NextResponse.json(await data.json());
        }
    }

    return NextResponse.json(
        {
            code: 0,
            jssdk: cookie.get('qiejssdk'),
            data: searchParams.get('room'),
            headers: header.get('cache-control')
        },
        { status: 200 }
    );
}
