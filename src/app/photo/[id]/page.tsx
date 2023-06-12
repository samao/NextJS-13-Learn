/*
 * Copyright (c) QieTv, Inc. 2018
 * @Author: idzeir
 * @Date: 2023-05-30 16:19:44
 * @Last Modified by: idzeir
 * @Last Modified time: 2023-05-30 16:35:35
 */
import swagPhtots from '../../photos';
import Photo from '@/components/frame';

export default function PhotoPage({ params: { id } }: { params: { id: string } }) {
    const photo = swagPhtots.find(p => p.id === id);
    return <div>{photo ? <Photo photo={photo} /> : 404}</div>;
}
