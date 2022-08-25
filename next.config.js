/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;

module.exports = {
  images: {
    domains: [
      "res.cloudinary.com",
      "s.gravatar.com",
      "lh3.googleusercontent.com",
    ],
  },
  compiler: {
    styledComponents: true,
  },
};
