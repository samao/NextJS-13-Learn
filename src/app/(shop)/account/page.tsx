/*
 * Copyright (c) QieTv, Inc. 2018
 * @Author: idzeir
 * @Date: 2023-05-31 11:00:18
 * @Last Modified by: idzeir
 * @Last Modified time: 2023-05-31 15:14:28
 */
import { headers } from 'next/headers';

async function getData(): Promise<{ code: number; jssdk: { value: string } }> {
    const header = headers();
    // console.log('===>', header.get('referer'))
    // const url = new URL(header.get('Referer')!);
    const res = await fetch(process.env.NEXT_PUBLIC_HOME!, {
        cache: 'no-store',
        headers: header
    });
    return await res.json();
}
export default async function Account() {
    const data = await getData();
    // console.log(data);
    return <h1>Account: {data.jssdk?.value}</h1>;
}
