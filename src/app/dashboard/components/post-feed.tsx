/*
 * Copyright (c) QieTv, Inc. 2018
 * @Author: idzeir
 * @Date: 2023-05-29 14:48:07
 * @Last Modified by: idzeir
 * @Last Modified time: 2023-06-20 18:17:28
 */

import Time from './time';
async function getData(): Promise<number> {
    return await new Promise(res => {
        setTimeout(() => {
            res(Date.now());
        }, 1000);
    });
}

export default async function PostFeed() {
    const time = await getData();
    return (
        <div>
            POST FEED: <Time time={time} />
        </div>
    );
}
