/** @type {import('next').NextConfig} */

const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
const apiKey = process.env.CLOUDINARY_API_KEY;
const apiSecret = process.env.CLOUDINARY_API_SECRET;

const nextConfig = {
  images: {
    domains: ["www.w3.org", `${cloudName}.cloudinary.com`]
  }
};

module.exports = nextConfig;
