import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",  // 关键：生成纯静态 HTML
  trailingSlash: true,
  images: {
    unoptimized: true, // GitHub Pages 不支持 Next.js 的动态图片优化
  },
};

export default nextConfig;
