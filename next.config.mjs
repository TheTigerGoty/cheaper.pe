/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'ripleype.imgix.net',
                port: '',
            },
        ],
    },
};

export default nextConfig;
