/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Nếu sử dụng `next/image`, bạn cần tắt tối ưu hóa ảnh.
  },
  assetPrefix: './',
  basePath: '/DevVStudy', // Đổi <repository-name> thành tên repository GitHub.
};

module.exports = nextConfig;
