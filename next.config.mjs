/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/:path*',
                has: [
                    {
                        type: 'header',
                        key: 'host',

                        value: 'www.sarkariresult.website', // Redirect from www
                    },
                ],
                destination: 'http://sarkariresult.website/:path*', // Redirect to non-www
                permanent: true,
            },
        ];
    },
};

export default nextConfig;
