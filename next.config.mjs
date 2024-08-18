/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/jobs",
        permanent: true,
      },
    ];
  },
  images: {
    domains: ["encrypted-tbn0.gstatic.com"],
  },
};

export default nextConfig;
