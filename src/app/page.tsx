'use client';

import Link from 'next/link';
import styles from './page.module.scss';
import { useDispatch, useSelector } from '@/lib/store';
import { selectCount } from '@/lib/selectors';
import { useState } from 'react';
import { counterSlice } from '@/lib/counter-slice';
import { incrementAsync, incrementIfOddAsync } from '@/lib/thunks';

export default function Home() {
    const dispatch = useDispatch();
    const count = useSelector(selectCount);
    const [incrementAmount, setAmount] = useState(2);

    return (
        <main className={styles.main}>
            <div className={styles.description}>
                <h1>Hello, Next.js!</h1>
                <Link href='/dashboard'>直播</Link>

                <div>
                    <button
                        onClick={() => {
                            dispatch(counterSlice.actions.decrement());
                        }}
                    >
                        -
                    </button>
                    <span>{count}</span>
                    <button
                        onClick={() => {
                            dispatch(counterSlice.actions.increment());
                        }}
                    >
                        +
                    </button>
                </div>
                <div>
                    <input
                        type='number'
                        value={incrementAmount}
                        onChange={e => {
                            setAmount(e.target.valueAsNumber ?? 0);
                        }}
                    />
                    <button
                        onClick={() => {
                            dispatch(counterSlice.actions.incrementByAmount(incrementAmount));
                        }}
                    >
                        add amount
                    </button>
                    <button
                        onClick={() => {
                            dispatch(incrementAsync(incrementAmount));
                        }}
                    >
                        add async 100
                    </button>
                    <button
                        onClick={() => {
                            dispatch(incrementIfOddAsync(incrementAmount));
                        }}
                    >
                        add if Odd
                    </button>
                </div>
            </div>
        </main>
    );
}
