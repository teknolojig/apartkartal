import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
  },
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  experimental: {
    optimizeCss: false,
  },
  async redirects() {
    return [
      {
        source: '/index.php/anasayfa',
        destination: '/',
        permanent: true,
      },
      {
        source: '/index.php/yurtlar/kartal-ogrenci-yurdu/odalarimiz',
        destination: '/odalarimiz',
        permanent: true,
      },
      {
        source: '/index.php/yurtlar/kartal-ogrenci-yurdu/yeme-icme',
        destination: '/yeme-icme',
        permanent: true,
      },
      {
        source: '/index.php/yurtlar/kartal-ogrenci-yurdu/guvenlik',
        destination: '/guvenlik',
        permanent: true,
      },
      {
        source: '/index.php/yurtlar/kartal-ogrenci-yurdu/sosyal-alanlar',
        destination: '/sosyal-alanlar',
        permanent: true,
      },
      {
        source: '/index.php/ulasim',
        destination: '/iletisim',
        permanent: true,
      },
      {
        source: '/index.php/iletisim-tr/kartal-iletisim',
        destination: '/iletisim',
        permanent: true,
      },
      {
        source: '/index.php/iletisim-tr',
        destination: '/iletisim',
        permanent: true,
      },
      {
        source: '/index.php/hakkimizda',
        destination: '/hakkimizda',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
