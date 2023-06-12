'use client';

import { useEffect } from 'react';

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
    useEffect(() => {
        console.log('QIEERROR:', error);
    }, [error]);

    return (
        <div>
            <h2>something went wrong!</h2>
            <button
                onClick={() => {
                    reset();
                }}
            >
                Try again
            </button>
        </div>
    );
}
