/*
 * Copyright (c) QieTv, Inc. 2018
 * @Author: idzeir
 * @Date: 2023-06-20 12:26:26
 * @Last Modified by: idzeir
 * @Last Modified time: 2023-06-20 14:30:19
 */
/** @type {import('next').NextConfig} */
const nextConfig = {
    generateBuildId() {
        return require('./package.json').version;
    },
    images: {
        domains: ['pbs.twimg.com'],
        unoptimized: true
    },
    poweredByHeader: false
};

module.exports = nextConfig;
