/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['flowbite.s3.amazonaws.com'],
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
