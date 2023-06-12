'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import css from './layout.module.scss';

export default function Header() {
    const pathname = usePathname();
    return (
        <header>
            <script
                id='ENV'
                dangerouslySetInnerHTML={{
                    __html: `
                 var env = '${process.env.NEXT_PUBLIC_HOME}';
            `
                }}
            />
            <nav className={css.nav}>
                {[
                    { to: '/', label: 'Home' },
                    { to: '/dashboard', label: 'Dashboard' },
                    { to: '/dashboard/settings', label: 'Settings' },
                    { to: '/blog', label: 'Blog' },
                    { to: '/about', label: 'About' },
                    { to: '/account', label: 'Account' },
                    { to: '/parallel', label: 'Parallel' },
                    { to: '/feed', label: 'Feed' },
                    { to: '/slot', label: 'Slot' }
                ].map(info => {
                    const isActive = pathname === info.to;

                    return (
                        <Link className={isActive ? css.red : css.black} key={info.label} href={info.to}>
                            {info.label}
                        </Link>
                    );
                })}
            </nav>
        </header>
    );
}
