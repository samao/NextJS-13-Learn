'use client';

import { useRouter } from 'next/navigation';

/*
 * Copyright (c) QieTv, Inc. 2018
 * @Author: idzeir
 * @Date: 2023-05-30 12:22:02
 * @Last Modified by: idzeir
 * @Last Modified time: 2023-05-30 12:27:07
 */
export default function Login() {
    const router = useRouter();
    return (
        <>
            <h1>Login</h1>
            <span onClick={() => router.back()}>close Module</span>
        </>
    );
}
