/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "d3bcnu5rxir0tz.cloudfront.net",
        pathname: "/*",
      },
    ],
  },
};

export default nextConfig;
