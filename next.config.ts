import type { NextConfig } from "next";

module.exports = {
  // その他の Next.js の設定があれば残しておく
  eslint: {
    // ESLint の警告・エラーを無視してビルドを続行する
    ignoreDuringBuilds: true,
  },
};

