/*
 * Copyright (c) QieTv, Inc. 2018
 * @Author: idzeir
 * @Date: 2023-05-30 16:26:26
 * @Last Modified by: idzeir
 * @Last Modified time: 2023-06-09 17:55:14
 */
import Image from 'next/image';
import css from './index.module.scss';
import { IPhoto } from '@/app/photos';

export default function Photo({ photo }: { photo: IPhoto }) {
    return (
        <div>
            <Image className={css.img} alt='' src={photo.imageSrc} width={500} height={500} />
            <div>
                <h3>{photo.name}</h3>
                <p>Take by {photo.username}</p>
            </div>
        </div>
    );
}
