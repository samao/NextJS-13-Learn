/*
 * Copyright (c) QieTv, Inc. 2018
 * @Author: idzeir
 * @Date: 2023-05-29 14:34:05
 * @Last Modified by: idzeir
 * @Last Modified time: 2023-05-29 14:44:10
 */

export default function Page({ params: { slug } }: { params: { slug: string[] } }) {
    return <div>My Post: {slug.join('__')}</div>;
}
