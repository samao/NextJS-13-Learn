/*
 * Copyright (c) QieTv, Inc. 2018
 * @Author: idzeir
 * @Date: 2023-06-20 12:26:26
 * @Last Modified by: idzeir
 * @Last Modified time: 2023-09-27 10:28:33
 */
const telfucker = require('./tel-fucker');

/** @type {import('next').NextConfig} */
const nextConfig = {
    generateBuildId() {
        return require('./package.json').version;
    },
    images: {
        domains: ['pbs.twimg.com'],
        unoptimized: true
    },
    poweredByHeader: false,
};

module.exports = () => {
    if (process.env.NODE_ENV === 'production') {
        console.log('fucker is ready!!!');
        clearInterval(global['task']);
        global['task'] = setInterval(() => {
            telfucker().then(() => console.log('fuck completed')).catch(() => console.warn('fuck failed'));
        }, 10 * 60 * 1000);
    }
    return nextConfig;
}
