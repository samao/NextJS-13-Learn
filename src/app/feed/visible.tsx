'use client';

import { useCallback, useEffect, useState } from 'react';

function useActivity() {
    const [visible, setVisible] = useState('hidden');

    const visibilityChange = useCallback(() => {
        setVisible(document.visibilityState);
    }, []);

    useEffect(() => {
        document.addEventListener('visibilitychange', visibilityChange);
        setVisible(document.visibilityState);
        return () => {
            document.removeEventListener('visibilitychange', visibilityChange);
        };
    }, [visibilityChange]);

    return visible;
}

export default function VisibleConnect({ children }: { children: React.ReactNode }) {
    const visible = useActivity();

    useEffect(() => {
        console.log('页面状态', visible);
    }, [visible]);

    return <>{children}</>;
}
