/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['api.microlink.io'],
        remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        pathname: '/**',
      },
    ],
    },
};

export default nextConfig;
