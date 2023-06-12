'use client';

import { useSearchParams } from 'next/navigation';

export default function Auth({ team, analytics }: Record<'team' | 'analytics', React.ReactNode>) {
    return (
        <>
            {team}
            {analytics}
        </>
    );
    // const searchParams = useSearchParams();
    // return <>{searchParams.get('login') === '1' ? analytics : team}</>
}
