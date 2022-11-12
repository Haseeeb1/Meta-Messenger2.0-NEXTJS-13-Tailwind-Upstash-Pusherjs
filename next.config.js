/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: [
      "scontent.fisb5-2.fna.fbcdn.net",
      "download.logo.wine",
      "1000logos.net",
      "upload.wikimedia.org",
    ],
  },
  experimental: {
    appDir: true,
  },
};
