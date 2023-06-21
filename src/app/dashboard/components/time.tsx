'use client';

import { useEffect, useState } from 'react';

export default function Time({ time }: { time: number }) {
    const [now, setTime] = useState(time);

    useEffect(() => {
        const task = setTimeout(() => {
            setTime(now + 1000);
        }, 1000);

        return () => {
            clearTimeout(task);
        };
    }, [now]);

    return <span>{new Date(now).toLocaleString('zh-Hans-CN', { timeZone: 'Asia/Shanghai'})}</span>;
}
