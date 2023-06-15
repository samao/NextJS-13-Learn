import './globals.scss';
import Header from './header';

export const metadata = {
    title: 'Next Learn Site',
    description: 'NEXT.js latest learning'
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
