/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  async redirects() {
    return [
      {
        source: "/blog/page/1/",
        destination: "/blog/",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
