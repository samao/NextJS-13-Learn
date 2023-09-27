/*
 * Copyright (c) QieTv, Inc. 2018
 * @Author: idzeir
 * @Date: 2023-06-20 12:26:26
 * @Last Modified by: idzeir
 * @Last Modified time: 2023-09-27 09:27:24
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
    poweredByHeader: false,
    experimental:{
        instrumentationHook: true
    }
};

module.exports = nextConfig;
