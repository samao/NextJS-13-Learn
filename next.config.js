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
