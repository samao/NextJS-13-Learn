import Link from 'next/link';
import styles from './page.module.scss';

export default function Home() {
    return (
        <main className={styles.main}>
            <div className={styles.description}>
                <h1>Hello, Next.js!</h1>
                <Link href='/dashboard'>直播</Link>
            </div>
        </main>
    );
}
