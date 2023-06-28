import { Metadata } from 'next';
import './globals.scss';
import Header from './header';
import { Providers } from '@/lib/providers';

export const metadata: Metadata = {
    title: 'Next Learn Site',
    description: 'NEXT.js latest learning',
    keywords: 'next.js',
    creator: 'idzeir',
    publisher: 'qiyanlong@wozine.com'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <Providers>
            <html lang='en'>
                <body>
                    <Header />
                    <main id='qie-app'>{children}</main>
                    <footer id='footer'>FOOTER.CO</footer>
                </body>
            </html>
        </Providers>
    );
}
