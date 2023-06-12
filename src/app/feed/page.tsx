/*
 * Copyright (c) QieTv, Inc. 2018
 * @Author: idzeir
 * @Date: 2023-05-30 16:48:45
 * @Last Modified by: idzeir
 * @Last Modified time: 2023-06-09 16:48:07
 */
import Link from 'next/link';
import swagPhotos from '../photos';
import Image from 'next/image';
import VisibleConnect from './visible';
import css from './page.module.scss';

export default function FeedPage() {
    return (
        <VisibleConnect>
            <div className={css.imgs}>
                {swagPhotos.map(({ id, imageSrc }) => {
                    return (
                        <Link key={id} href={`/photo/${id}`}>
                            <Image alt='' src={imageSrc} width={200} height={200} blurDataURL='/api?img' priority={id === '9'} />
                        </Link>
                    );
                })}
            </div>
        </VisibleConnect>
    );
}
