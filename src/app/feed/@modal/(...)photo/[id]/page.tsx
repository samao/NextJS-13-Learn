/*
 * Copyright (c) QieTv, Inc. 2018
 * @Author: idzeir
 * @Date: 2023-05-30 16:23:56
 * @Last Modified by: idzeir
 * @Last Modified time: 2023-05-30 16:52:01
 */
import Photo from '@/components/frame';
import Modal from '@/components/modal';
import swagPhotos from '../../../../photos';

export default function PhotoModal({ params: { id } }: { params: { id: string } }) {
    const photo = swagPhotos.find(p => p.id === id);
    return <Modal>{photo ? <Photo photo={photo} /> : 404}</Modal>;
}
