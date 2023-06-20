/*
 * Copyright (c) QieTv, Inc. 2018
 * @Author: idzeir
 * @Date: 2023-06-20 15:48:49
 * @Last Modified by: idzeir
 * @Last Modified time: 2023-06-20 15:51:39
 */
import { createLogger } from 'redux-logger';
export const middleware = [
    createLogger({
        duration: true,
        timestamp: false,
        collapsed: true,
        colors: {
            title: () => '#139BFE',
            prevState: () => '#1C5FAF',
            action: () => '#149945',
            nextState: () => '#A47104',
            error: () => '#ff0005'
        },
        predicate: () => typeof window !== 'undefined'
    })
];
