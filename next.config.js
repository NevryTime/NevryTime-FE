/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination:
          'https://port-0-nevrytime-be-1maxx2algrqkxj3.sel3.cloudtype.app/:path*',
      },
    ];
  },
};

module.exports = nextConfig;
