'use client';

/*
 * Copyright (c) QieTv, Inc. 2018
 * @Author: idzeir
 * @Date: 2023-05-30 16:36:52
 * @Last Modified by: idzeir
 * @Last Modified time: 2023-06-09 17:47:33
 */

import { useRouter } from 'next/navigation';
import { useCallback, useEffect, useRef } from 'react';
import css from './layout.module.scss';

export default function Modal({ children }: { children: React.ReactNode }) {
    const overlay = useRef<HTMLDivElement>(null);
    const wrapper = useRef<HTMLDivElement>(null);
    const router = useRouter();

    const onDismiss = useCallback(() => {
        router.back();
    }, [router]);

    const onClick = useCallback(
        (e: React.MouseEvent) => {
            if (e.target === overlay.current || e.target === wrapper.current) {
                if (onDismiss) onDismiss();
            }
        },
        [onDismiss, overlay, wrapper]
    );

    const onKeyDown = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === 'Escaoe') {
                onDismiss();
            }
        },
        [onDismiss]
    );

    useEffect(() => {
        document.addEventListener('keydown', onKeyDown);

        return () => {
            document.removeEventListener('keydown', onKeyDown);
        };
    }, [onKeyDown]);

    return (
        <div className={css.overlay} ref={overlay} onClick={onDismiss}>
            <h3 className={css.close}>Close</h3>
            <div className={css.wrapper} ref={wrapper}>
                {children}
            </div>
        </div>
    );
}
