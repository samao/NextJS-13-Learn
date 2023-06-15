import { Metadata } from 'next';
import './globals.scss';
import Header from './header';

export const metadata: Metadata = {
    title: 'Next Learn Site',
    description: 'NEXT.js latest learning',
    keywords: 'next.js',
    creator: 'idzeir',
    publisher: 'qiyanlong@wozine.com'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='en'>
            <body>
                <Header />
                <main id='qie-app'>{children}</main>
            </body>
        </html>
    );
}
